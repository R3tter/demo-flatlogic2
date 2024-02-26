import { colors } from 'constants/styles';
import { supportStatuses } from 'constants/index';

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
  },
  statistics: [
    {
      title: 'Statistic Light Blue',
      color: colors.blue.dark,
      data: {
        total: '4,232',
        registration: {
          value: '+830',
          positive: true
        },
        bounce: {
          value: '4.5%',
          positive: false
        }
      }
    },
    {
      title: 'Statistic Sing App',
      color: colors.orange,
      data: {
        total: '754',
        registration: {
          value: '+30',
          positive: true
        },
        bounce: {
          value: '2.5%',
          positive: true
        }
      }
    },
    {
      title: 'Statistic RNS',
      color: colors.blue.light,
      data: {
        total: '1,025',
        registration: {
          value: '+230',
          positive: true
        },
        bounce: {
          value: '21%',
          positive: false
        }
      }
    }
  ],
  requests: [
    {
      name: 'Mark Otto',
      email: 'ottoto@wxample.com',
      product: 'ON the Road',
      price: '$25 224.2',
      date: '11 May 2017',
      city: 'Otsego',
      status: { status: supportStatuses.sent, label: 'Sent' }
    },
    {
      name: 'Jacob Thornton',
      email: 'thornton@wxample.com',
      product: 'HP Core i7',
      price: '$1 254.2',
      date: '4 Jun 2017',
      city: 'Fivepointville',
      status: { status: supportStatuses.sent, label: 'Sent' }
    },
    {
      name: 'Larry the Bird',
      email: 'bird@wxample.com',
      product: 'Air Pro',
      price: '$1 570.0',
      date: '27 Aug 2017',
      city: 'Leadville North',
      status: { status: supportStatuses.pending, label: 'Pending' }
    },
    {
      name: 'Joseph May',
      email: 'josephmay@wxample.com',
      product: 'Version Control',
      price: '$5 224.5',
      date: '19 Feb 2018',
      city: 'Seaforth',
      status: { status: supportStatuses.declined, label: 'Declined' }
    },
    {
      name: 'Peter Horadnia',
      email: 'horadnia@wxample.com',
      product: 'Lets Dance',
      price: '$43 594.7',
      date: '1 Mar 2018',
      city: 'Hanoverton',
      status: { status: supportStatuses.sent, label: 'Sent' }
    }
  ]
};

export const tableColumns = [
  {
    id: 'name',
    label: 'NAME',
    style: { grid: '1fr' }
  },
  {
    id: 'email',
    label: 'EMAIL',
    style: { grid: '1fr' }
  },
  {
    id: 'product',
    label: 'PRODUCT',
    style: { grid: '1fr' }
  },
  {
    id: 'price',
    label: 'PRICE',
    style: { grid: 'minmax(200px, 1fr)' }
  },
  {
    id: 'date',
    label: 'DATE',
    style: { grid: '1fr' }
  },
  {
    id: 'city',
    label: 'CITY',
    style: { grid: '1fr' }
  },
  {
    id: 'status',
    label: 'STATUS',
    style: { grid: '1fr' }
  }
];
