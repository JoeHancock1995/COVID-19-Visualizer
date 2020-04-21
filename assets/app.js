const summary_url = 'https://api.covid19api.com/summary';
async function getSummary() {
    const response = await fetch(summary_url);
    const data = await response.json();
    const { Global } = data;
    const { TotalConfirmed } = Global;
    const { TotalDeaths } = Global;

    document.getElementById('global-confirmed').textContent = TotalConfirmed;
    document.getElementById('global-deaths').textContent = TotalDeaths;
    console.log(Global);
    console.log(TotalConfirmed);
    console.log(TotalDeaths);
}
getSummary();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['3/16/2020', '3/23/2020', '3/30/2020', '4/6/2020', '4/13/2020', '4/20/2020'],
        datasets: [
            {
                label: 'COVID-19 confirmed cases in Combined El Paso(TX) and Las Cruces(NM) Statistical Area',
                tension: '.5',
                // backgroundColor: 'rgb(85,0,0)',
                borderColor: 'rgb(255, 128, 0)',
                data: [2, 16, 65, 155, 350, 600]
            },
            {
                label: 'COVID-19 confirmed cases in the Greater Austin Area',
                tension: '.5',
                // backgroundColor: 'rgb(254,228,110)',
                borderColor: 'rgb(254,228,110)',
                // pointRadius: '.75',
                data: [7, 7, 265, 653, 1095, 1434]
            },
            {
                label: 'COVID-19 confirmed in the Greater Houston Area',
                tension: '.5',
                // backgroundColor: 'rgb(46,76,157)',
                borderColor: 'rgb(46,76,157)',
                // pointRadius: '.75',
                data: [26, 164, 894, 2675, 5147, 6679]
            },
            {
                label: 'COVID-19 confirmed cases in the Dallas Fort Worth Metroplex',
                tension: '.5',
                // backgroundColor: 'rgb(3,133,62)',
                borderColor: 'rgb(3,133,62)',
                // pointRadius: '.75',
                data: [28, 304, 1055, 2370, 3856, 5084]
            },
            {
                label: 'COVID-19 confirmed cases in the Greater San Antonio Area',
                tension: '.5',
                // backgroundColor: 'rgb(3,133,62)',
                borderColor: 'rgb(200,0,62)',
                // pointRadius: '.75',
                data: [13, 51, 191, 543, 916, 1179]
            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    data: {
        labels: [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
            'DC'],
        datasets: [{
            backgroundColor: 'rgb(255, 255, 255)',
            tension: '.01',
            borderColor: 'rgb(255, 255, 255)',
            pointRadius: '4',
            data: [
                4723, 312, 4719, 1777, 30829, 9433, 17550, 2538, 25484, 17014,
                568, 1577, 29160, 10641, 2513, 1820, 2707, 23580, 847, 12308,
                36372, 30717, 2213, 3974, 5517, 426, 1348, 3626, 1342, 81420,
                1798, 236763, 6140, 528, 10222, 2570, 1844, 31742, 4491, 4246,
                1542, 6637, 18927, 2942, 803, 8053, 11802, 825, 4199, 309,
                2666]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    data: {
        labels: ['3/20/2020', '3/21/2020', '3/22/2020', '3/23/2020', '3/24/2020', '3/25/2020', '3/26/2020',
            '3/27/2020', '3/28/2020', '3/29/2020', '3/30/2020', '3/31/2020', '4/1/2020', '4/2/2020', '4/3/2020',
            '4/4/2020', '4/5/2020', '4/6/2020', '4/7/2020', '4/8/2020', '4/9/2020', '4/10/2020', '4/11/2020', '4/12/2020',
            '4/13/2020', '4/14/2020', '4/15/2020', '4/16/2020', '4/17/2020', '4/18/2020', '4/19/2020'],
        datasets: [
            {
                label: 'Total deaths from Covid-19 in the United States',
                tension: '.5',
                pointRadius: '0',
                backgroundColor: 'rgb(255,0,0)',
                // borderColor: 'rgb(255, 0, 0)',
                data: [244, 307, 417, 557, 706, 942, 1209, 1581, 2026, 2467, 2978, 3873, 4757, 5926, 7087, 8407, 9619, 10783, 12722, 14695, 16478, 18586, 20463, 22020, 23529, 25831, 28325, 32916, 36773, 38664, 40661]
            },
            {
                label: 'Total confirmed cases in the United States',
                tension: '.5',
                pointRadius: '0',
                backgroundColor: 'rgb(40,40,40)',
                // borderColor: 'rgb(255, 255, 255)',
                data: [19273, 25600, 33276, 43847, 53740, 65778, 83836, 101657, 121478, 140909, 161837, 188172, 213372, 243616, 275586, 308850, 337072, 366667, 392663, 429052, 461437, 496535, 526396, 555313, 580619, 607670, 636350, 667592, 699706, 732197, 759086]
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        }
    }
});