//Global cases API =======================================================================
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

//USA cases API=======================================================================
const us_url = 'https://corona.lmao.ninja/v2/countries/us?yesterday=false';

async function getUsSummary() {
    const response = await fetch (us_url);
    const data = await response.json();
    const { cases, deaths } = data;

    document.getElementById('us-confirmed').textContent = cases;
    document.getElementById('us-deaths').textContent = deaths;

    console.log(data);
}
getUsSummary();


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['3/16/2020', '3/23/2020', '3/30/2020', '4/6/2020', '4/13/2020', '4/20/2020', '4/27/2020', '5/4/2020'],
        datasets: [
            {
            //El paso area and Las Cruces, NM(doesn't include Ciudad de Juarez)
                label: 'Confirmed cases in Combined El Paso(TX) and Las Cruces(NM) Statistical Area',
                tension: '.5',
                borderColor: 'rgb(255, 128, 0)',
                data: [2, 16, 65, 155, 350, 600, 928, 1199]
            },
            
            {
            //Greater Austin area made up of Travis, Williamson, Hays, & Bastrop counties
                label: 'Confirmed cases in the Greater Austin Area',
                tension: '.5',
                borderColor: 'rgb(254,228,110)',
                data: [7, 7, 265, 653, 1095, 1434, 1965, 2409]
            },
            {
            //Greater Houston area made up of Austin, Brazos, Chambers, Fort Bend, Galveston, Harris, Montgomery, & Waller counties
                label: 'Confirmed in the Greater Houston Area',
                tension: '.5',
                borderColor: 'rgb(46,76,157)',
                data: [26, 164, 894, 2675, 5147, 6679, 8126, 9742]
            },
            {
            //DFW metroplex is Dallas, Denton, Tarrant, Collin, Ellis, Hood, Hunt, Johnson, Kaufman, Parker, Rockwall, & Wilson counties 
                label: 'Confirmed cases in the Dallas Fort Worth Metroplex',
                tension: '.5',
                borderColor: 'rgb(3,133,62)',
                data: [28, 304, 1055, 2370, 3856, 5084, 6949, 9184]
            },
            {
            // Greater San Antonio Area is Atacosta, Bexar, Bandera, Comal, Guadulupe, Kendall, Medina, & Wilson counties
                label: 'Confirmed cases in the Greater San Antonio Area',
                tension: '.5',
                borderColor: 'rgb(200,0,62)',
                data: [13, 51, 191, 543, 916, 1179, 1489, 1902]
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


// var ctx = document.getElementById('myChart2').getContext('2d');
// var chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [
//             'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
//             'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
//             'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
//             'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
//             'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
//             'DC'],
//         datasets: [{
//             backgroundColor: 'rgb(255, 255, 255)',
//             tension: '.01',
//             borderColor: 'rgb(255, 255, 255)',
//             pointRadius: '4',
//             data: [
//                 6539, 343, 6716, 3069, 45208, 13804, 25997, 4162, 32130, 23229,
//                 600, 1785, 45883, 15961, 5668, 3393, 4146, 27068, 1023, 19487,
//                 56462, 38190, 3816, 6094, 7171, 449, 3487, 4708, 1938, 111188,
//                 2825, 292027, 9142, 942, 16325, 3280, 2354, 43728, 7708, 5613,
//                 2246, 9796, 25960, 4236, 855, 13535, 13864, 1077, 6089, 389,
//                 3892]
//         }]
//     },
//     options: {
//         legend: {
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     suggestedMin: 50,
//                     suggestedMax: 100
//                 }
//             }],
//             xAxes: [{
//                 ticks: {
//                     fontSize: 8
//                 }
//             }],
//         }
//     }
// });

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['3/20/2020', '3/21/2020', '3/22/2020', '3/23/2020', '3/24/2020', '3/25/2020', '3/26/2020','3/27/2020',
         '3/28/2020', '3/29/2020', '3/30/2020', '3/31/2020', '4/1/2020', '4/2/2020', '4/3/2020','4/4/2020',
          '4/5/2020', '4/6/2020', '4/7/2020', '4/8/2020', '4/9/2020', '4/10/2020', '4/11/2020', '4/12/2020',
            '4/13/2020', '4/14/2020', '4/15/2020', '4/16/2020', '4/17/2020', '4/18/2020', '4/19/2020','4/20/2020',
             '4/21/2020', '4/22/2020', '4/23/2020', '4/24/2020', '4/25/2020', '4/26/2020', '4/27/2020', '4/28/2020'],
        datasets: [
            {
                label: 'Total deaths from Covid-19 in the United States',
                tension: '.5',
                pointRadius: '0',
                backgroundColor: 'rgb(255,0,0)',
                data: [244, 307, 417, 557, 706, 942, 1209, 1581,
                    2026, 2467, 2978, 3873, 4757, 5926, 7087, 8407,
                    9619, 10783, 12722, 14695, 16478, 18586, 20463, 22020,
                    23529, 25831, 28325, 32916, 36773, 38664, 40661, 42094,
                    44444, 46622, 49724, 51493, 53755, 54881, 56259, 58355]
            },
            {
                label: 'Total confirmed cases in the United States',
                tension: '.5',
                pointRadius: '0',
                backgroundColor: 'rgb(40,40,40)',
                data: [19273, 25600, 33276, 43847, 53740, 65778, 83836, 101657,
                    121478, 140909, 161837, 188172, 213372, 243616, 275586, 308850,
                    337072, 366667, 392663, 429052, 461437, 496535, 526396, 555313,
                    580619, 607670, 636350, 667592, 699706, 732197, 759086, 784326,
                    811865, 840351, 869170, 905358, 938154, 965785, 988197,1012582]
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
            }],
            xAxes: [{
                ticks: {
                    fontSize: 8
                }
            }]
        }
    }
});