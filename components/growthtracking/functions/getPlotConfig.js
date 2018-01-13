import { getCentile, getDeviations, getSeries } from '../functions';

const getDataSeries = (
  displayType,
  deviations,
  colors,
  patientLine,
  predictedLine
) => {
  if (displayType === 'zscore') {
    return [
      getSeries('arearange', 'SD 3-4', deviations.SD4_SD3, colors.SD3_4, true),
      getSeries('arearange', 'SD 2-3', deviations.SD3_SD2, colors.SD2_3, true),
      getSeries('arearange', 'SD 1-2', deviations.SD2_SD1, colors.SD1_2, true),
      getSeries('arearange', 'SD 0-1', deviations.SD1_nSD1, colors.SD0_1),
      getSeries('arearange', 'SD 1-2', deviations.nSD1_nSD2, colors.SD1_2),
      getSeries('arearange', 'SD 2-3', deviations.nSD2_nSD3, colors.SD2_3),
      getSeries('arearange', 'SD 3-4', deviations.nSD3_nSD4, colors.SD3_4),
      getSeries('line', 'Median', deviations.SD0, colors.SD3_4, true),

      {
        data: predictedLine,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 3,
        name: 'Predicted',
        dashStyle: 'shortdot'
      },

      {
        data: patientLine,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 3,
        name: 'Patient'
      }
    ];
  }
  return [
    getSeries('line', '3rd', deviations.P3, colors.SD2_3, true),
    getSeries('line', '15th', deviations.P15, colors.SD1_2, true),
    getSeries('line', '50th', deviations.P50, colors.SD0_1, true),
    getSeries('line', '85th', deviations.P85, colors.SD1_2, true),
    getSeries('line', '97th', deviations.P97, colors.SD2_3, true),

    {
      data: predictedLine,
      marker: {
        symbol: 'circle'
      },
      color: '#428bca',
      lineWidth: 3,
      name: 'Predicted',
      dashStyle: 'shortdot'
    },

    {
      data: patientLine,
      marker: {
        symbol: 'circle'
      },
      color: '#428bca',
      lineWidth: 3,
      name: 'Patient'
    }
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

  const predictedLine = [
    [
      visits[visits.length - 1][measurement1],
      visits[visits.length - 1][measurement2]
    ],
    [predictedVisit[measurement1], predictedVisit[measurement2]]
  ];

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
      backgroundColor: 'transparent',
      /*
      events: {
        load() {
          this.xAxis[0].setExtremes(
            patientLine[0][0] - 5 > 0 ? patientLine[0][0] - 5 : 0,
            patientLine[patientLine.length - 1][0] - 5 > 0
              ? patientLine[patientLine.length - 1][0] + 5
              : 0,
            // predictedLine[predictedLine.length - 1][0] + 5, // TODO: modify to handle case where predicted line doesnt exist
            false,
          );
          this.yAxis[0].setExtremes(
            patientLine[0][1] - 5 > 0 ? patientLine[0][1] - 5 : 0,
            patientLine[patientLine.length - 1][1] - 5 > 0
              ? patientLine[patientLine.length - 1][0] + 5
              : 0,
            // predictedLine[predictedLine.length - 1][1] + 5, // TODO: modify to handle case where predicted line doesnt exist
            false,
          );
          this.showResetZoom();
          this.redraw();
        },
      },
      */

      exporting: {
        fallbackToExportServer: false
      }
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
      }
    },
    yAxis: {
      gridLineWidth: 0,
      maxPadding: 0,
      tickInterval: 1,
      title: {
        text: ytitle
      }
    },
    tooltip: {
      formatter() {
        const x = ageBased
          ? Math.round(this.x / formatDivisor)
          : Math.round(this.x * 100) / 100;
        const y = Math.round(this.y * 100) / 100;

        /*
        if (this.series.name === 'Predicted') {
          if (this.point.index === 0) return false;

          const visit = predicted[1];
          const zscore = visit[plotType];
          return `
          <b>Predicted visit</b> <br />
          ${config.xtitle}: ${x} <br />
          ${config.ytitle}: ${y} <br />
          Z-score: ${zscore} <br />
          Percentile: ${getCentile(zscore)}%`;
        }
        */

        const visit = visits[this.point.index];
        const zscore = visit[plotType];

        return `
          <b>${this.point.index + 1}: ${visit.date
          .toISOString()
          .slice(0, 10)}</b> <br />
          ${xtitle}: ${x} <br />
          ${ytitle}: ${y} <br />
          Z-score: ${zscore} <br />
          Percentile: ${getCentile(zscore)}%`;
      }
    },
    series: getDataSeries(
      displayType,
      deviations,
      colors,
      patientLine,
      predictedLine
    ),
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
