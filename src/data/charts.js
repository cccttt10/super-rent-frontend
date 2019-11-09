const customersChart = {
    data: canvas => {
        let ctx = canvas.getContext('2d');
        const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(11, 185, 126, 0.3)');
        gradientStroke.addColorStop(0.8, 'rgba(11, 185, 126, 0.2)');
        gradientStroke.addColorStop(0, 'rgba(11, 185, 126, 0.05)'); //purple colors
        return {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'New Customers',
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#0BB97E',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#0BB97E',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#0BB97E',
                    //pointHoverBorderColor:'rgba(35,46,55,1)',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80]
                }
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(11, 185, 126, 0.1)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }
            ],
            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(11, 185, 126, 0.1)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }
            ]
        }
    }
};

const vehiclesChart = {
    data: canvas => {
        let ctx = canvas.getContext('2d');
        const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(0,135,191,0.2)');
        gradientStroke.addColorStop(0.8, 'rgba(0,135,191,0.1)');
        gradientStroke.addColorStop(0, 'rgba(0,84,119,0)'); //blue colors
        return {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'New Vehicles',
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#2380f7',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#2380f7',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#2380f7',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [10, 30, 70, 80, 120, 130]
                }
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }
            ],
            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }
            ]
        }
    }
};
export { customersChart, vehiclesChart };
