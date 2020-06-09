// API page link references
// 1. https://www.programmableweb.com/news/apis-to-track-coronavirus-covid-19/review/2020/05/01 
// 2. https://corona.lmao.ninja/docs/#/Default/get_v2_states__states_

//Global cases API ==================================================================================================================
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


//USA cases API======================================================================================================================
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


//Texas Greater Areas graph==========================================================================================================
var ctx = document.getElementById('myChartTexas').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['3/16/2020', '3/23/2020', '3/30/2020', '4/6/2020', '4/13/2020', '4/20/2020', '4/27/2020', '5/4/2020', '5/11/2020', '5/18/2020', '5/25/2020', '6/1/2020', '6/8/2020'],
        datasets: [
            {//El paso area and Las Cruces, NM(doesn't include Ciudad de Juarez)
                label: 'El Paso(TX) & Las Cruces(NM) Statistical Area',
                tension: '.5',
                borderColor: 'rgb(255, 128, 0)',
                data: [2, 16, 65, 155, 350, 600, 928, 1199, 1572, 2120, 2541, 3281, 4051]},
            {//Greater Austin area made up of Travis, Williamson, Hays, & Bastrop counties
                label: 'Greater Austin Area',
                tension: '.5',
                borderColor: 'rgb(254,228,110)',
                data: [7, 7, 265, 653, 1095, 1434, 1965, 2409, 2817, 3390, 3716, 4555, 5209]},
            {//Greater Houston area made up of Austin, Brazos, Chambers, Fort Bend, Galveston, Harris, Montgomery, & Waller counties
                label: 'Greater Houston Area',
                tension: '.5',
                borderColor: 'rgb(46,76,157)',
                data: [26, 164, 894, 2675, 5147, 6679, 8126, 9742, 11020, 13164, 14322, 17002, 19990]},
            {//DFW metroplex is Dallas, Denton, Tarrant, Collin, Ellis, Hood, Hunt, Johnson, Kaufman, Parker, Rockwall, & Wilson counties 
                label: 'Dallas Fort Worth Metroplex',
                tension: '.5',
                borderColor: 'rgb(3,133,62)',
                data: [28, 304, 1055, 2370, 3856, 5084, 6949, 9184, 12090, 15232, 16678, 19852, 23083]},
            {// Greater San Antonio Area is Atacosta, Bexar, Bandera, Comal, Guadulupe, Kendall, Medina, & Wilson counties
                label: 'Greater San Antonio Area',
                tension: '.5',
                borderColor: 'rgb(200,0,62)',
                data: [13, 51, 191, 543, 916, 1179, 1489, 1902, 2174, 2524, 2757, 3267, 3955]}
            ]},
                options: {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'white',
                                display: false,
                            },
                            ticks: { fontSize: 10 },
                        }],
                        yAxes: [{
                            gridLines: {
                                color: 'white',
                                display: false
                            },
                        }],
                    }
                }
            });


//United States total cases and Deaths===============================================================================================
const xlabels = [];
const ycases = [];
const ydeaths = [];

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
                data: ycases,
                backgroundColor: 'rgb(40,40,40)',
                borderWidth: 1
            }, {
                label:'Deaths',
                data: ydeaths,
                backgroundColor: 'rgb(255,0,0)',
                borderWidth: .5
            }]
        },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'white',
                            display: false,
                        },
                        ticks: { fontSize: 10 },
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'white',
                            display: false
                        },
                    }],
                }
            }
        }
    );
}

async function getUsData() {
    const response = await fetch('covid-19-data/us.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const date = columns[0];
        xlabels.push(date);
        const cases = columns[1];
        ycases.push(cases);
        const deaths = columns[2];
        ydeaths.push(deaths);
        console.log(date, cases, deaths)
    })
}
