var ctx = document.getElementById('myChart').getContext('2d')
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'radar',

  // The data for our dataset
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SCSS', 'RWD', 'Node.js', 'Express', 'Vue.js', 'Vue Cli', 'Vuex', 'Vue Router', 'Nuxt.js'],
    datasets: [
      {
        label: 'My Skill Score',
        fill: true,
        backgroundColor: 'rgb(255, 99, 132,0.3)',
        borderColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointRadius: 5,
        data: [75, 70, 80, 75, 70, 70, 70, 65, 85, 80, 80, 75, 75]
      }
    ]
  },

  // Configuration options go here
  options: {
    scale: {
      ticks: {
        min: 0,
        max: 100,
        showLabelBackdrop: false
      },
      pointLabels: {
        fontSize: 20
      }
    }
  }
})

// myChart2

var ctx = document.getElementById('myChart2').getContext('2d')
var chart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['web crawler', 'Firebase', 'Heroku', 'Git'],
    datasets: [
      {
        label: 'My Skill Score',
        borderWidth: 2,
        borderColor: ['rgba(25, 214, 44, 1)', 'rgba(255, 215, 84, 1)', 'rgba(205, 119, 239, 1)', 'rgba(69, 117, 239, 1)'],
        backgroundColor: ['rgba(25, 214, 44, 0.6)', 'rgba(255, 215, 84, 0.6)', 'rgba(205, 119, 239, 0.6)', 'rgba(69, 117, 239, 0.6)'],
        data: [80, 70, 60, 70]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 100
            // fontSize: 30
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 20
          }
        }
      ]
    }
  }
})
