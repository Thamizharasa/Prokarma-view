import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 350,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Temperature Monitoring ",
      "subCaption": "Floor Wise",
      "xAxisName": "Floor",
      "yAxisName": "Temperature",
      "numberSuffix": "	°C",
      "theme": "fusion"
    },
    "data": [
      {
        "label": "Floor 1",
        "value": "35"
      },
      {
        "label": "Floor 2",
        "value": "32"
      },
      {
        "label": "Floor 3",
        "value": "40"
      },
      {
        "label": "Floor 4",
        "value": "25"
      },
      {
        "label": "Floor 5",
        "value": "41"
      },
      {
        "label": "Floor 6",
        "value": "100"
      }
    ]
  },
};

class BarChart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

export default BarChart;