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
              size: 0 // This can remove the halo effect on hover if desired
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
  }
};
