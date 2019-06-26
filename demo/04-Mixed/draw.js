var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            type: 'line',
            label: 'Line Dataset',
            borderColor: 'rgb(160, 160, 160)',
            data: [34, 33, 23, 17, 37, 45],
            fill: false
        }, {
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
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 50
                }
            }]
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
