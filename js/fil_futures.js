var filChart = echarts.init(document.getElementById('fil_future'));
var dataAxis = ['8:56', '8:57', '8:58', '8:59', '9:00'];
var data = [2.87, 5.98, 5.02, 4.34, 2.7];
var yMax = 6;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
dataShadow.push(yMax);
}

var option = {
xAxis: {
name:'(时间)',
  data: dataAxis,
  axisLabel: {
      textStyle: {
          color: '#fff'
      }
  },
  axisTick: {
      show: false
  },
  axisLine: {
      show: true,
      lineStyle:{color:'#ccc'}

  },
  z: 10
},
yAxis: {
splitLine:{
  show:false
},
name:'(美元)',
  axisLine: {
      show: true,
      lineStyle:{color:'#ccc'}
  },
  axisTick: {
      show: false
  },
  axisLabel: {
      textStyle: {
          color: '#fff'
      }
  }
},
dataZoom: [
  {
      type: 'inside'
  }
],
series: [
  { // For shadow
      type: 'bar',
      itemStyle: {
          normal: {color: 'rgba(0,0,0,0.05)'}
      },
      barGap:'-100%',
      barCategoryGap:'40%',
      data: dataShadow,
      animation: false
  },
  {
      type: 'bar',
      itemStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                      {offset: 0, color: '#33E4D1'},
                      {offset: 1, color: '#895DB3'}
                  ]
              )
          },
          emphasis: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                      {offset: 0, color: '#2378f7'},
                      {offset: 0.7, color: '#2378f7'},
                      {offset: 1, color: '#83bff6'}
                  ]
              )
          }
      },
      data: data
  }
]
};

 filChart.setOption(option);
