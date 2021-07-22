ling = 6;
logi = 9;
musi = 10;
kine = 5;
visu = 3;
mizh = 7;
vnut = 18;
prir = 14;



window.onload=function () {
    document.getElementById('ling').innerHTML = ling;
    document.getElementById('logi').innerHTML = logi;
    document.getElementById('musi').innerHTML = musi;
    document.getElementById('kine').innerHTML = kine;
    document.getElementById('visu').innerHTML = visu;
    document.getElementById('mizh').innerHTML = mizh;
    document.getElementById('vnut').innerHTML = vnut;
    document.getElementById('prir').innerHTML = prir;
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Motivation Level');

    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['Лингвистический', ling, '#b87333'],            // RGB value
                                                

]);

    var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Rating (scale of 1-10)'
        }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}

