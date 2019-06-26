var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset #1',
            backgroundColor: 'rgba(100, 180, 212, 0.75)',
            borderColor: 'rgb(2, 99, 132)',
            borderWidth: 1,
            data: [23, 34, 16, 18, 29, 47]
        }, {
            label: 'Dataset #2',
            backgroundColor: 'rgba(100, 180, 112, 0.75)',
            borderColor: 'rgb(2, 99, 52)',
            borderWidth: 1,
            data: [19, 49, 33, 9, 41, 32]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Chart Title',
            position: 'left'
        },
        legend: {
            display: true,
            position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 50
                }
            }]
        },
        tooltips: {
            callbacks: {
                afterFooter: function(tooltipItem, data) {
                    // Handle tooltipItem
                    info = document.getElementById('info');
                    info.innerText = String(tooltipItem[0].value);
                }
            }
        }
    }
});

document.getElementById('btn-randomize').addEventListener('click', function() {
    chart.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function(data) {
            return Math.ceil(Math.random() * 50);
        });
    });
    chart.update();
});
