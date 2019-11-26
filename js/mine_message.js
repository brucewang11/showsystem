      var mineChart = echarts.init(document.getElementById('mine_address'));
var dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var data = [220, 182, 191, 234, 290, 130, 110, 123, 142, 121, 90, 149];
var yMax = 300;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    xAxis: {
      name:'(月份)',
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
      name:'(数量)',
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
                            {offset: 0, color: '#895DB3'},
                            {offset: 1, color: '#33E4D1'}
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

       mineChart.setOption(option);
