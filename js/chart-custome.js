// /* ----- Employee Dashboard Chart Js For Applications Statistics ----- */
// Circle Doughnut Chart
var ctx = document.getElementById('myChart').getContext('2d');
//var chart = new Chart(ctx, {
//    // The type of chart we want to create
//    type: 'doughnut',

//    // The data for our dataset
//    data: {
//        labels: [' Direct 32%', 'Referal 28%', 'Oragnic 40%'],
//        datasets: [{
//            label: 'My First dataset',
//            segmentShowStroke: true,
//            segmentStrokeColor: "E8EAED",
//            datasetStrokeWidth: 24,
//            backgroundColor: ["#5BBB7B", "#FFEDE8", "#FBF7ED"],
//            data: [50, 25, 25],
//            responsive: true,
//            borderWidth: 4,
//            showScale: true
//        }]
//    },

//    // Configuration options go here
//    options: {
//        aspectRatio: 0,
//        cutoutPercentage: 60,
//        responsive: true,
//        legend: {
//            position: 'left'
//        }
//    }
//});


var counters = document.getElementById('data').innerText.split(",");
var countersOnline = document.getElementById('dataOnline').innerText.split(",");
var countersOnlineNotAuth = document.getElementById('dataOnlinedNotAuth').innerText.split(",");
var counterProposal = document.getElementById('dataProposal').innerText.split(",");
var counterProjects = document.getElementById('dataProjects').innerText.split(",");
var counterServices = document.getElementById('dataServices').innerText.split(",");
var counterContacts = document.getElementById('dataContacts').innerText.split(",");

var labelers = document.getElementById('labels').innerText.split(",");

const numbers = counters.concat(countersOnline, counterProposal, counterProjects, counterServices, counterContacts, countersOnlineNotAuth);
const finalNums = [0];
for (var i = 0; i < numbers.length; i++) {
    finalNums.push(parseInt(numbers[i]))
}


var height = getMaxOfArray(finalNums);

// LineChart Style 2
var ctx = document.getElementById('myChartweave').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line', // also try bar or other graph types

    // The data for our dataset
    data: {
        labels: labelers,
        // Information about the dataset
        //datasets: [{
        //    label: "Dataset",
        //    backgroundColor: 'rgba(251, 247, 237, 0.9)',
        //    borderColor: '#5BBB7B',
        //    data: [148, 140, 210, 120, 160, 140, 190, 170, 135, 210, 180, 249],
        //}]
        datasets: [{
            label: "شروع پروژه/سرویس",
            backgroundColor: 'rgba(214, 214, 36, 0.9)',
            borderColor: '#d6d624',
            data: counterContacts,
        }, {
            label: "ثبت سرویس",
            backgroundColor: 'rgba(51, 255, 0, 0.9)',
            borderColor: '#33ff00',
            data: counterServices,
        }, {
            label: "ثبت پروژه",
            backgroundColor: 'rgba(0, 42, 255, 0.9)',
            borderColor: '#002aff',
            data: counterProjects,
        }, {
            label: "پیشنهادها",
            backgroundColor: 'rgba(212, 57, 57, 0.9)',
            borderColor: '#d43939',
            data: counterProposal,
        }, {
            label: "ثبت نام",
            backgroundColor: 'rgba(251, 247, 237, 0.9)',
            borderColor: '#5BBB7B',
            data: counters,
        },
        {
            label: "آنلاین",
            backgroundColor: 'rgba(50, 80, 160, 0.6)',
            borderColor: '#5dd439',
            data: countersOnline,
        }, {
            label: "کل آنلاین ها",
            backgroundColor: 'rgba(187, 145, 91, 0.8)',
            borderColor: '#5dd445',
            data: countersOnlineNotAuth,
        }]
    },

    // Configuration options
    options: {
        layout: {
            padding: 10,
        },
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Precipitation in Toronto'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    // labelString: 'Precipitation in mm'
                },
                ticks: {
                    min: 0,
                    max: height,
                    // forces step size to be 5 units
                    stepSize: 20
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    // labelString: 'Month of the Year'
                }
            }]
        }
    }
});

function getMaxOfArray(numArray) {
    var largest = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > largest) {
            largest = numArray[i];
        }
    }
    return largest;
}