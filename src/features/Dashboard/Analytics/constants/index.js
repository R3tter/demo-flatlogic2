import { colors } from 'constants/styles';

export const data = {
  visits: {
    total: '4.332',
    items: [
      {
        value: '+830',
        label: 'Logins'
      },
      {
        value: '0.5%',
        label: 'Sign Out'
      },
      {
        value: '4.5%',
        label: 'Rate'
      }
    ]
  },
  revenue: {
    chart: {
      type: 'pie',
      height: '120px',
      margin: [0, 60, 0, 0]
    },
    title: false,
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        slicedOffset: 0,
        showInLegend: true,
        states: {
          hover: {
            halo: {
              size: 0
            }
          }
        }
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      symbolRadius: 0
    },
    series: [
      {
        name: 'Revenue',
        colorByPoint: true,
        data: [
          {
            name: 'SMX',
            y: 16,
            color: colors.orange
          },
          {
            name: 'Direct',
            y: 6,
            color: colors.blue.dark
          },
          {
            name: 'Networks',
            y: 46,
            color: colors.blue.light
          }
        ]
      }
    ]
  },
  performance: [
    {
      label: 'SDK',
      current: '30',
      last: '60'
    },
    {
      label: 'Integration',
      current: '60',
      last: '20'
    }
  ],
  server: [
    {
      data: { percentage: '60%', temp: '37°С', gh: '3.3 Ghz' },
      options: {
        chart: {
          type: 'line',
          height: '40px'
        },
        title: false,
        xAxis: {
          visible: false
        },
        yAxis: {
          visible: false
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          series: {
            enableMouseTracking: false,
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            data: [1.2, 1.4, 5.1, 2.3, 6.1, 2.5],
            color: colors.orange
          }
        ]
      }
    },
    {
      data: { percentage: '54%', temp: '31°С', gh: '3.3 Ghz' },
      options: {
        chart: {
          type: 'line',
          height: '40px'
        },
        title: false,
        xAxis: {
          visible: false
        },
        yAxis: {
          visible: false
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          series: {
            enableMouseTracking: false,
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            data: [5.2, 2.4, 3.1, 1.3, 2.1, 3.5],
            color: colors.blue.dark
          }
        ]
      }
    },
    {
      data: { percentage: '54%', temp: '31°С', gh: '3.3 Ghz' },
      options: {
        chart: {
          type: 'line',
          height: '40px'
        },
        title: false,
        xAxis: {
          visible: false
        },
        yAxis: {
          visible: false
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          series: {
            enableMouseTracking: false,
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            data: [1.2, 1.4, 5.1, 1.2, 0.3, 2.1, 2.5],
            color: colors.blue.light
          }
        ]
      }
    }
  ],
  dailyData: {
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    legend: {
      align: 'center',
      verticalAlign: 'top',
      layout: 'horizontal'
    },
    title: false,
    xAxis: {
      categories: [
        '20.Jan',
        '22.Jan',
        '24.Jan',
        '26.Jan',
        '28.Jan',
        '30.Jan',
        '1.Feb',
        '3.Feb',
        '5.Feb',
        '7.Feb',
        '9.Feb',
        '11.Feb',
        '13.Feb',
        '15.Feb',
        '17.Feb',
        '19.Feb'
      ]
    },
    yAxis: {
      title: {
        text: false
      },
      formatter: value => {
        return `${value / 1000}k`;
      }
    },
    series: [
      {
        type: 'areaspline',
        name: 'Light blue',
        data: [1000, 2100, 2504, 3043, 2012, 3021, 4063, 5123, 6011, 4111, 5421, 7213, 6222, 5231, 4899, 5999],
        fillColor: 'rgba(124, 181, 236, 0.3)'
      },
      {
        type: 'spline',
        name: 'RNS App',
        data: [2100, 1000, 5504, 3043, 7012, 6021, 5063, 4123, 5011, 3111, 5421, 3213, 1222, 4231, 7899, 4999],
        color: colors.orange
      },
      {
        type: 'spline',
        name: 'Sign App',
        data: [3100, 2000, 4504, 2043, 5012, 6021, 7063, 5123, 3011, 4111, 3421, 2213, 4222, 5231, 6899, 4999],
        color: colors.blue.dark
      }
    ]
  }
};
