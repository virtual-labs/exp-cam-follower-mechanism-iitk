var trace1 = {
  x: [0.21],
  y: [-0.06],
  z: [1.52],
  mode: 'markers',
  marker: {
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.24)',
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};
var trace2 = {
  x: [1.8353330132],
  y: [ 0.185708369263],
  z: [ 1.50485074307],
  mode: 'markers',
  marker: {
    color: 'rgb(127, 127, 127)',
    size: 12,
    symbol: 'circle',
    line: {
      color: 'rgb(204, 204, 204)',
      width: 1
    },
    opacity: 0.9
  },
  type: 'scatter3d'
};
var data = [trace1, trace2];
var layout = {margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
  }};
Plotly.newPlot('myDiv', data, layout);