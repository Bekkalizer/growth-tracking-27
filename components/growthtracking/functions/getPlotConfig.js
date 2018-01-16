import { getCentile, getDeviations, getSeries } from '../functions';

const getDataSeries = (displayType, deviations, colors) => {
  if (displayType === 'zscore') {
    return [
      getSeries('line', deviations.SD3, colors.SD3_4),
      getSeries('line', deviations.SD2, colors.SD2_3),
      getSeries('line', deviations.SD1, colors.SD1_2),
      getSeries('line', deviations.SD0, colors.SD0_1),
      getSeries('line', deviations.SD1neg, colors.SD1_2),
      getSeries('line', deviations.SD2neg, colors.SD2_3),
      getSeries('line', deviations.SD3neg, colors.SD3_4)
    ];
  }
  return [
    getSeries('line', deviations.P3, colors.SD2_3),
    getSeries('line', deviations.P15, colors.SD1_2),
    getSeries('line', deviations.P50, colors.SD0_1),
    getSeries('line', deviations.P85, colors.SD1_2),
    getSeries('line', deviations.P97, colors.SD2_3)
  ];
};

const getPlotLabel = (label, deviation, color) => ({
  color: 'white',
  width: 0,
  label: {
    text: label,
    align: 'right',
    style: {
      color,
      fontWeight: 'bold'
    }
  },
  value: deviation[deviation.length - 1][1],
  zIndex: 5
});

const getPlotLabels = (displayType, deviations, colors) => {
  if (displayType === 'zscore') {
    return [
      getPlotLabel('+3 SD', deviations.SD3, colors.SD3_4),
      getPlotLabel('+2 SD', deviations.SD2, colors.SD2_3),
      getPlotLabel('+1 SD', deviations.SD1, colors.SD1_2),
      getPlotLabel('Median', deviations.SD0, colors.SD0_1),
      getPlotLabel('-1 SD', deviations.SD1neg, colors.SD1_2),
      getPlotLabel('-2 SD', deviations.SD2neg, colors.SD2_3),
      getPlotLabel('-3 SD', deviations.SD3neg, colors.SD3_4)
    ];
  }
  return [
    getPlotLabel('3rd', deviations.P3, colors.SD2_3),
    getPlotLabel('15th', deviations.P15, colors.SD1_2),
    getPlotLabel('50th', deviations.P50, colors.SD0_1),
    getPlotLabel('85th', deviations.P85, colors.SD1_2),
    getPlotLabel('97th', deviations.P97, colors.SD2_3)
  ];
};

const getPlotConfig = (
  indicatorConfig,
  appConfig,
  visits,
  predictedVisit,
  selectedVisit,
  plotType,
  displayType,
  showMultiple
) => {
  if (!indicatorConfig) return null;

  const { colors } = appConfig;
  const {
    ageBased,
    dataSet,
    xtitle,
    ytitle,
    measurement1,
    measurement2
  } = indicatorConfig;

  const deviations = getDeviations(dataSet, displayType);

  const patientLine =
    showMultiple === 'multiple'
      ? visits.map(visit => [visit[measurement1], visit[measurement2]])
      : [[selectedVisit[measurement1], selectedVisit[measurement2]]];

  const predictedLine =
    showMultiple === 'multiple' && predictedVisit !== null
      ? [
          [
            visits[visits.length - 1][measurement1],
            visits[visits.length - 1][measurement2]
          ],
          [predictedVisit[measurement1], predictedVisit[measurement2]]
        ]
      : null;

  const formatDivisor = ageBased ? 30.25 : 1;

  return {
    title: {
      text: indicatorConfig.title,
      x: -140
    },
    chart: {
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          x: -40,
          y: 10
        }
      },
      backgroundColor: 'white'
    },
    credits: false,
    plotOptions: {
      scatter: {
        lineWidth: 2
      },
      marker: {
        enabled: false
      },
      series: {
        animation: false,
        // Prevent user from disabling series through clicking the legend
        events: {
          legendItemClick(e) {
            e.preventDefault();
          }
        }
      }
    },
    xAxis: {
      maxPadding: 0.04,
      gridLineWidth: 0,
      tickInterval: formatDivisor,
      labels: {
        formatter() {
          // if chart is based on age, divide days by 30.25 to get months
          return Math.round(this.value / formatDivisor);
        }
      },
      title: {
        text: xtitle
      },
      plotLines: [
        ...patientLine.map(visit => ({
          color: '#e3e3e3',
          width: 1,
          value: visit[0],
          dashStyle: 'shortdash',
          zIndex: 4
        })),
        predictedVisit && showMultiple === 'multiple'
          ? {
              color: '#e3e3e3',
              width: 1,
              value: predictedVisit[measurement1],
              dashStyle: 'shortdash',
              zIndex: 4
            }
          : [],
        {
          color: 'red',
          width: 1,
          value: selectedVisit[measurement1],
          dashStyle: 'shortdash',
          zIndex: 4
        }
      ]
    },
    yAxis: {
      gridLineWidth: 0,
      maxPadding: 0.08,
      tickInterval: 1,
      tickWidth: 1,
      title: {
        text: ytitle
      },
      plotLines: [
        ...patientLine.map(visit => ({
          color: '#e3e3e3',
          width: 1,
          value: visit[1],
          dashStyle: 'shortdash',
          zIndex: 4
        })),
        predictedVisit && showMultiple === 'multiple'
          ? {
              color: '#e3e3e3',
              width: 1,
              value: predictedVisit[measurement2],
              dashStyle: 'shortdash',
              zIndex: 4
            }
          : [],
        {
          color: 'red',
          width: 1,
          value: selectedVisit[measurement2],
          dashStyle: 'shortdash',
          zIndex: 4
        },
        ...getPlotLabels(displayType, deviations, colors)
      ]
    },
    tooltip: {
      formatter() {
        const x = ageBased
          ? Math.round(this.x / formatDivisor)
          : Math.round(this.x * 100) / 100;
        const y = Math.round(this.y * 100) / 100;

        if (this.series.name === 'Predicted') {
          if (this.point.index === 0) return false;

          const zscore = predictedVisit[plotType];
          return `
          <b>Predicted visit</b> <br />
          ${xtitle}: ${ageBased ? predictedVisit.ageInMonths : x} <br />
          ${ytitle}: ${y} <br />
          Z-score: ${zscore} <br />
          Percentile: ${getCentile(zscore)}%`;
        }

        if (showMultiple === 'multiple') {
          const visit = visits[this.point.index];
          const zscore = visit[plotType];

          return `
                    <b>${visit.index +
                      1}: ${visit.eventDate
            .toISOString()
            .slice(0, 10)}</b> <br />
                    ${xtitle}: ${ageBased ? visit.ageInMonths : x} <br />
                    ${ytitle}: ${y} <br />
                    Z-score: ${zscore} <br />
                    Percentile: ${getCentile(zscore)}%`;
        }

        const zscore = selectedVisit[plotType];

        return `
          <b>${selectedVisit.index +
            1}: ${selectedVisit.eventDate.toISOString().slice(0, 10)}</b> <br />
          ${xtitle}: ${ageBased ? selectedVisit.ageInMonths : x} <br />
          ${ytitle}: ${y} <br />
          Z-score: ${zscore} <br />
          Percentile: ${getCentile(zscore)}%`;
      }
    },
    series: [
      ...getDataSeries(displayType, deviations, colors),
      {
        data: predictedLine,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 2,
        name: 'Predicted',
        dashStyle: 'shortdot',
        zIndex: 5,
        showInLegend: false
      },
      {
        data: patientLine,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 2,
        name: 'Patient',
        zIndex: 5,
        showInLegend: false
      },
      // This is an empty series that adds the plotline to the legend.
      {
        color: '#FF0000',
        name: `Age: ${selectedVisit.ageInMonths} months, ${
          displayType === 'zscore'
            ? `Z-score: ${selectedVisit[plotType]}`
            : `Percentile: ${getCentile(selectedVisit[plotType])}%`
        }`,
        dashStyle: 'shortdash',
        marker: {
          enabled: false
        }
      }
    ],
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: 70,
      y: 30,
      floating: true,
      layout: 'vertical',
      borderColor: '#c3c3c3',
      borderWidth: 1
    }
  };
};

export default getPlotConfig;
