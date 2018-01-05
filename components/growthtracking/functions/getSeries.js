const getSeries = (
  type,
  label,
  data,
  color,
  showInLegend = false,
  visible = true,
) => ({
  type,
  name: label,
  data,
  lineWidth: 1,
  color,
  animation: false,
  fillOpacity: 1,
  enableMouseTracking: false,
  marker: {
    radius: 0,
  },
  showInLegend,
  visible,
});

export default getSeries;
