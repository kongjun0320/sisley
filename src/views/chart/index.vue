<template>
  <div class="chart-wrapper">
    <section class="logo">
      <img
        class="img"
        @click="$router.go(-1)"
        src="../../assets/images/logo.svg"
        alt=""
      />
    </section>
    <section class="title">
      数据统计图
    </section>
    <section class="bar" id="bar"></section>
    <section class="line" id="line"></section>
    <section class="pie" id="pie"></section>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      bar: null,
      line: null,
      pie: null
    }
  },
  mounted() {
    this.initBarChart()
    this.initLineChart()
    this.initPieChart()
  },
  methods: {
    initBarChart() {
      this.bar = this.$echarts.init(document.getElementById('bar'))
      this.bar.setOption({
        title: {
          text: '喜爱度'
        },
        xAxis: {
          data: ['面霜', '乳液', '浮水', '精华', '润肤水', '洗面奶']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110]
          }
        ]
      })
    },
    initLineChart() {
      this.line = this.$echarts.init(document.getElementById('line'))
      this.line.setOption({
        title: {
          text: '销售趋势图'
        },
        tooltip: {
          trigger: 'axis'
        },

        grid: {
          left: '3%',
          righ: '4%',
          bottom: '3%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '粉底液',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 90, 230, 210, 90, 230]
          },
          {
            name: '眼部精华露',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
          },
          {
            name: '唇霜',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410]
          },
          {
            name: '口红',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320, 301, 334, 390, 330, 320]
          },
          {
            name: '精华油',
            type: 'line',
            stack: '总量',
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              901,
              934,
              1290,
              1330,
              1320
            ]
          }
        ]
      })
    },
    initPieChart() {
      this.pie = this.$echarts.init(document.getElementById('pie'))
      this.pie.setOption({
        title: {
          text: '销售占比'
        },
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '护肤' },
              { value: 735, name: '彩妆' },
              { value: 580, name: '香氛' },
              { value: 484, name: '护发' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  padding: 0.2rem 0.1rem 0;
  .logo {
    width: 100%;
    text-align: center;
    .img {
      width: 60%;
    }
  }
  .title {
    font-size: 0.2rem;
    color: #333;
    font-weight: 700;
    padding: 0.1rem 0 0.2rem 0.04rem;
  }
  .bar {
    height: 3rem;
  }
  .line {
    height: 3.5rem;
  }
  .pie {
    margin-top: 0.2rem;
    height: 2.7rem;
  }
}
</style>
