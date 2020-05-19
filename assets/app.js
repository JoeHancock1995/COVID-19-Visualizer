// API page link references
// 1. https://www.programmableweb.com/news/apis-to-track-coronavirus-covid-19/review/2020/05/01 
// 2. https://corona.lmao.ninja/docs/#/Default/get_v2_states__states_

//Global cases API =======================================================================
const summary_url = 'https://api.covid19api.com/summary';

async function getSummary() {
    const response = await fetch(summary_url);
    const data = await response.json();
    const { Global } = data;
    const { TotalConfirmed, TotalDeaths } = Global;

    document.getElementById('global-confirmed').textContent = TotalConfirmed.toLocaleString();
    document.getElementById('global-deaths').textContent = TotalDeaths.toLocaleString();
    console.log(Global);
}
getSummary();

//USA cases API=======================================================================
const us_url = 'https://corona.lmao.ninja/v2/countries/us?yesterday=false';

async function getUsSummary() {
    const response = await fetch (us_url);
    const data = await response.json();
    const { cases, deaths } = data;

    document.getElementById('us-confirmed').textContent = cases.toLocaleString();
    document.getElementById('us-deaths').textContent = deaths.toLocaleString();

    console.log(data);
}
getUsSummary();

//Texas Greater Areas graph======================================================

var ctx = document.getElementById('myChartTexas').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['3/16/2020', '3/23/2020', '3/30/2020', '4/6/2020', '4/13/2020', '4/20/2020', '4/27/2020', '5/4/2020', '5/11/2020', '5/18/2020'],
        datasets: [
            {
            //El paso area and Las Cruces, NM(doesn't include Ciudad de Juarez)
                label: 'El Paso(TX) & Las Cruces(NM) Statistical Area',
                tension: '.5',
                borderColor: 'rgb(255, 128, 0)',
                data: [2, 16, 65, 155, 350, 600, 928, 1199, 1572, 2120]
            },
            
            {
            //Greater Austin area made up of Travis, Williamson, Hays, & Bastrop counties
                label: 'Greater Austin Area',
                tension: '.5',
                borderColor: 'rgb(254,228,110)',
                data: [7, 7, 265, 653, 1095, 1434, 1965, 2409, 2817, 3390]
            },
            {
            //Greater Houston area made up of Austin, Brazos, Chambers, Fort Bend, Galveston, Harris, Montgomery, & Waller counties
                label: 'Greater Houston Area',
                tension: '.5',
                borderColor: 'rgb(46,76,157)',
                data: [26, 164, 894, 2675, 5147, 6679, 8126, 9742, 11020, 13164]
            },
            {
            //DFW metroplex is Dallas, Denton, Tarrant, Collin, Ellis, Hood, Hunt, Johnson, Kaufman, Parker, Rockwall, & Wilson counties 
                label: 'Dallas Fort Worth Metroplex',
                tension: '.5',
                borderColor: 'rgb(3,133,62)',
                data: [28, 304, 1055, 2370, 3856, 5084, 6949, 9184, 12090, 15232]
            },
            {
            // Greater San Antonio Area is Atacosta, Bexar, Bandera, Comal, Guadulupe, Kendall, Medina, & Wilson counties
                label: 'Greater San Antonio Area',
                tension: '.5',
                borderColor: 'rgb(200,0,62)',
                data: [13, 51, 191, 543, 916, 1179, 1489, 1902, 2174, 2524]
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

//United States total cases and Deaths======================================================
const xlabels = [];

chartIt();

async function chartIt() {
    await getUsData();
    var ctx = document.getElementById('myChartUS').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Cases',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        }
    });
}

async function getUsData() {
    const response = await fetch('./us.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const date = columns[0];
        xlabels.push(date);
        const cases = columns[1];
        const deaths = columns[2];
        console.log(date, cases, deaths)
    })
}

// var ctx = document.getElementById('myChartUS').getContext('2d');
// var chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['3/20/20', '3/21/20', '3/22/20', '3/23/20', '3/24/20', '3/25/20', '3/26/20','3/27/20',
//         '3/28/20', '3/29/20', '3/30/20', '3/31/20', '4/1/20', '4/2/20', '4/3/20','4/4/20',
//         '4/5/20', '4/6/20', '4/7/20', '4/8/20', '4/9/20', '4/10/20', '4/11/20', '4/12/20',
//         '4/13/20', '4/14/20', '4/15/20', '4/16/20', '4/17/20', '4/18/20', '4/19/20','4/20/20',
//         '4/21/20', '4/22/20', '4/23/20', '4/24/20', '4/25/20', '4/26/20', '4/27/20', '4/28/20',
//         '4/29/20', '4/30/20', '5/1/20', '5/2/20', '5/3/20', '5/4/20', '5/5/20', '5/6/20',
//         '5/7/20', '5/8/20', '5/9/20', '5/10/20', '5/11/20' ],
//         datasets: [
//             {
//                 label: 'Total deaths from Covid-19 in the United States',
//                 tension: '.5',
//                 pointRadius: '0',
//                 backgroundColor: 'rgb(255,0,0)',
//                 data: [244, 307, 417, 557, 706, 942, 1209, 1581,
//                     2026, 2467, 2978, 3873, 4757, 5926, 7087, 8407,
//                     9619, 10783, 12722, 14695, 16478, 18586, 20463, 22020,
//                     23529, 25831, 28325, 32916, 36773, 38664, 40661, 42094,
//                     44444, 46622, 49724, 51493, 53755, 54881, 56259, 58355,
//                     60897, 63108, 64870, 66453, 67784, 68843, 71077, 73785,
//                     75744, 77309, 78763, 79694, 80683 ]
//             },
//             {
//                 label: 'Total confirmed cases in the United States',
//                 tension: '.5',
//                 pointRadius: '0',
//                 backgroundColor: 'rgb(40,40,40)',
//                 data: [19273, 25600, 33276, 43847, 53740, 65778, 83836, 101657,
//                     121478, 140909, 161837, 188172, 213372, 243616, 275586, 308850,
//                     337072, 366667, 392663, 429052, 461437, 496535, 526396, 555313,
//                     580619, 607670, 636350, 667592, 699706, 732197, 759086, 784326,
//                     811865, 840351, 869170, 905358, 938154, 965785, 988197,1012582,
//                     1045116, 1075530, 1109505, 1138970, 1165057, 1186979, 1210686, 1235190,
//                     1264001, 1291528, 1316443, 1336755, 1354350 ]
//             },
//         ]
//     },
//     options: {
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
//             }]
//         }
//     }
// });