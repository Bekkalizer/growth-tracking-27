import React from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import HighchartsExporting from 'highcharts-exporting';

import { getIndicatorConfig, getPlotConfig } from '../../functions';

HighchartsMore(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts);

const PlotPage = ({
  config,
  visits,
  plotType,
  displayType,
  togglePlot,
  setDisplayType,
  setShowMultiple,
  selectedVisit,
  patientInfo,
  showMultiple,
}) => {
  const indicatorConfig = getIndicatorConfig(
    patientInfo.gender === 'Female',
    plotType,
  );

  const plotConfig = getPlotConfig(
    indicatorConfig,
    config,
    visits,
    visits[selectedVisit],
    plotType,
    displayType,
    showMultiple,
  );

  return (
    <div>
      <button
        onClick={() => togglePlot(null)}
        className="btn btn-primary small-horizontal-spacing"
        style={{ float: 'right' }}
      >
        Return
      </button>

      <button
        onClick={setShowMultiple}
        className="btn btn-primary small-horizontal-spacing"
        style={{ float: 'right' }}
      >
        Dropdown (set display)
      </button>

      <button
        onClick={setShowMultiple}
        className="btn btn-primary small-horizontal-spacing"
        style={{ float: 'right' }}
      >
        Dropdown (multiple)
      </button>

      <div className="title small-vertical-spacing">
        Dropdown {indicatorConfig.title}
      </div>

      <ReactHighcharts config={plotConfig} />
    </div>
  );
};

PlotPage.propTypes = {
  config: PropTypes.object.isRequired,
  visits: PropTypes.array.isRequired,
  togglePlot: PropTypes.func.isRequired,
  setShowMultiple: PropTypes.func.isRequired,
  setDisplayType: PropTypes.func.isRequired,
  displayType: PropTypes.string.isRequired,
  plotType: PropTypes.string.isRequired,
  selectedVisit: PropTypes.number.isRequired,
  patientInfo: PropTypes.object.isRequired,
  showMultiple: PropTypes.bool.isRequired,
};

export default PlotPage;