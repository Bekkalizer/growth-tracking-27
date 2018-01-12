import React from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import HighchartsExporting from 'highcharts-exporting';
import Select from 'react-select';
import HighchartsOfflineExporting from 'highcharts-offline-exporting';

import { getIndicatorConfig, getPlotConfig } from '../../functions';

HighchartsMore(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts);
HighchartsOfflineExporting(ReactHighcharts.Highcharts);

const PlotPage = ({
  config,
  visits,
  plotType,
  displayType,
  togglePlot,
  setDisplayType,
  setShowMultiple,
  selectedVisit,
  patient,
  showMultiple,
}) => {
  const indicatorConfig = getIndicatorConfig(
    patient.gender,
    plotType,
    displayType,
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
      >
        Return
      </button>

      <Select
        name="display-select"
        value={displayType}
        onChange={setDisplayType}
        simpleValue
        options={[
          { value: 'zscore', label: 'Z-score' },
          { value: 'percentile', label: 'Percentile' },
        ]}
      />

      <button
        onClick={setShowMultiple}
        className="btn btn-primary small-horizontal-spacing"
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
  patient: PropTypes.object.isRequired,
  showMultiple: PropTypes.bool.isRequired,
};

export default PlotPage;
