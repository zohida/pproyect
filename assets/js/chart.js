var chart1 = document.getElementById('chart1').getContext('2d');
var myChart1 = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [50000, 70000,100000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

var chart2 = document.getElementById('chart2').getContext('2d');
var myChart2 = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [120000,0, 130000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

var chart3 = document.getElementById('chart3').getContext('2d');
var myChart3 = new Chart(chart3, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [0, 100205,110000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

var chart4 = document.getElementById('chart4').getContext('2d');
var myChart4 = new Chart(chart4, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [10684.6, 11102.6, 13000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

var chart5 = document.getElementById('chart5').getContext('2d');
var myChart5 = new Chart(chart5, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [5165, 5600,6000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

var chart6 = document.getElementById('chart6').getContext('2d');
var myChart6 = new Chart(chart6, {
    type: 'bar',
    data: {
        labels: ["Aprel 2023", "Aprel 2024"],
        datasets: [{
            label: "QQS to'lovchilar soni",
            data: [8162, 8600,9000], 
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 165, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});


var chart7 = document.getElementById('chart7').getContext('2d');
var myChart7 = new Chart(chart7, {
    type: 'bar',
    data: {
        labels: ["Faol", "Vaqtincha to'xtatilgan", "Tugatilgan", "Bekor qilingan"],
        datasets: [{
            label: "QQS sertifikatlar soni",
            data: [180000, 5000,20000, 10000, 200000], 
            backgroundColor: [
                'rgb(173, 255, 47)',
                'rgb(255, 165, 0)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 0)'
            ],
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { 
            legend: {
                display: false 
            }
        }
    }
});

