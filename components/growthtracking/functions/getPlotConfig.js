import { getCentile, getDeviations, getSeries } from '../functions';

const getDataSeries = (displayType, deviations, colors) => {
  if (displayType === 'zscore') {
    return [
      getSeries('line', '+3 SD', deviations.SD3, colors.SD3_4, true),
      getSeries('line', '+2 SD', deviations.SD2, colors.SD2_3, true),
      getSeries('line', '+1 SD', deviations.SD1, colors.SD1_2, true),
      getSeries('line', 'Median', deviations.SD0, colors.SD0_1, true),
      getSeries('line', '-1 SD', deviations.SD1neg, colors.SD1_2, true),
      getSeries('line', '-2 SD', deviations.SD2neg, colors.SD2_3, true),
      getSeries('line', '-3 SD', deviations.SD3neg, colors.SD3_4, true)
    ];
  }
  return [
    getSeries('line', '3rd', deviations.P3, colors.SD2_3, true),
    getSeries('line', '15th', deviations.P15, colors.SD1_2, true),
    getSeries('line', '50th', deviations.P50, colors.SD0_1, true),
    getSeries('line', '85th', deviations.P85, colors.SD1_2, true),
    getSeries('line', '97th', deviations.P97, colors.SD2_3, true)
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
      text: ''
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
        animation: false
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
        {
          color: 'red',
          width: 1,
          value: selectedVisit[measurement2],
          dashStyle: 'shortdash',
          zIndex: 4
        }
        /* TODO: Add labels to the end of each 
        {
          color: 'white',
          width: 0,
          label: {
            text: 'SD 3+',
            align: 'right',
            style: {
              color: colors.SD3_4,
              fontWeight: 'bold'
            }
          },
          value:
            (deviations.SD4_SD3[deviations.SD4_SD3.length - 1][1] +
              deviations.SD4_SD3[deviations.SD4_SD3.length - 1][2] * 2) /
            3,
          zIndex: 5
        }
        */
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
          ${xtitle}: ${x} <br />
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
                    ${xtitle}: ${x} <br />
                    ${ytitle}: ${y} <br />
                    Z-score: ${zscore} <br />
                    Percentile: ${getCentile(zscore)}%`;
        }

        const zscore = selectedVisit[plotType];

        return `
          <b>${selectedVisit.index +
            1}: ${selectedVisit.eventDate.toISOString().slice(0, 10)}</b> <br />
          ${xtitle}: ${x} <br />
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
        zIndex: 5
      },
      {
        data: patientLine,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 2,
        name: 'Patient',
        zIndex: 5
      }
    ],
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: 50,
      floating: true,
      layout: 'vertical'
    }
  };
};

export default getPlotConfig;
