// 基于准备好的dom，初始化echarts实例
      var myChart1 = echarts.init(document.getElementById('machine_use_rate'));
        var myChart2 = echarts.init(document.getElementById('store_use_rate'));
          var myChart3 = echarts.init(document.getElementById('power_use_rate'));

       // 指定图表的配置项和数据
       var option1 = {
         title : {
           text: '机器使用率',
            y:'bottom',
            x:'center',
            textStyle:{
              color:'#EEE',
              fontSize:'15'
            }
         },
           series: [
               {
                   name:'机器使用率',
                   type:'pie',
                   radius: ['60%', '70%'],
                   avoidLabelOverlap: false,
                   label: {
                       normal: {
                           show: true,
                           position: 'center',
                           textStyle:{
                                  fontSize:'15',
                                  fontWeight:'bold',
                                 color:'#EEE'
                           }
                       },
                       emphasis: {
                           show: false,
                           textStyle: {
                               fontSize: '30',
                               fontWeight: 'bold'
                           }
                       }
                   },
                   labelLine: {
                       normal: {
                           show: false
                       }
                   },
                   data:[
                       {value:16,name:"16%",    itemStyle: {
                    normal: {//颜色渐变
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFBF56'},
                                {offset: 1, color: '#FC693C'}
                            ]
                        )
                    }
                }},
                       {
                         value:84,
                         itemStyle:{
                           normal:{
                             color:'#2f2750'
                           }
                         }
                       }
                   ]
               }
           ]
       };

       var option2 = {
         title : {
           text: '存储使用率',
            y:'bottom',
            x:'center',
            textStyle:{
              color:'#EEE',
              fontSize:'15'
            }
         },
           series: [
               {
                   name:'存储使用率',
                   type:'pie',
                   radius: ['60%', '70%'],
                   avoidLabelOverlap: false,
                   label: {
                       normal: {
                           show: true,
                           position: 'center',
                           textStyle:{
                                  fontSize:'15',
                                  fontWeight:'bold',
                                 color:'#EEE'
                           }
                       },
                       emphasis: {
                           show: false,
                           textStyle: {
                               fontSize: '30',
                               fontWeight: 'bold'
                           }
                       }
                   },
                   labelLine: {
                       normal: {
                           show: false
                       }
                   },
                   data:[
                       {value:17.778,name:"17.778%",    itemStyle: {
                    normal: {//颜色渐变
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#47C3FF'},
                                {offset: 1, color: '#8646EA'}
                            ]
                        )
                    }
                }},
                       {
                         value:100-17.778,
                         itemStyle:{
                           normal:{
                             color:'#2f2750'
                           }
                         }
                       }
                   ]
               }
           ]
       };

       var option3 = {
         title : {
           text: '算力使用率',
            y:'bottom',
            x:'center',
            textStyle:{
              color:'#EEE',
              fontSize:'15'
            }
         },
           series: [
               {
                   name:'算力使用率',
                   type:'pie',
                   radius: ['60%', '70%'],
                   avoidLabelOverlap: false,
                   label: {
                       normal: {
                           show: true,
                           position: 'center',
                           textStyle:{
                                  fontSize:'15',
                                  fontWeight:'bold',
                                 color:'#EEE'
                           }
                       },
                       emphasis: {
                           show: false,
                           textStyle: {
                               fontSize: '30',
                               fontWeight: 'bold'
                           }
                       }
                   },
                   labelLine: {
                       normal: {
                           show: false
                       }
                   },
                   data:[
                       {value:20,name:"20%",    itemStyle: {
                    normal: {//颜色渐变
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FBB645'},
                                {offset: 1, color: '#FDFB61'}
                            ]
                        )
                    }
                }},
                       {
                         value:100-20,
                         itemStyle:{
                           normal:{
                             color:'#2f2750'
                           }
                         }
                       }
                   ]
               }
           ]
       };


       // 使用刚指定的配置项和数据显示图表。
       myChart1.setOption(option1);
              myChart2.setOption(option2);
                     myChart3.setOption(option3);


function aa (){


  var data = [
      {value:50,name:"50%",    itemStyle: {
   normal: {//颜色渐变
       color: new echarts.graphic.LinearGradient(
           0, 0, 0, 1,
           [
               {offset: 0, color: '#FBB645'},
               {offset: 1, color: '#FDFB61'}
           ]
       )
   }
}},
      {
        value:50,
        itemStyle:{
          normal:{
            color:'#2f2750'
          }
        }
      }
  ]
    option3.series[0].data = data;

     myChart3.setOption(option3);
}

setTimeout(aa,3000);
