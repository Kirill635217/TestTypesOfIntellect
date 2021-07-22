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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Лінгвістичний', ling],
        ['Логіко-математичний', logi],
        ['Музичний', musi],
        ['Кінестетичний', kine],
        ['Візуально-просторовий', visu],
        ['Міжособистісний', mizh],
        ['Внутрішньоособистісний', vnut],
        ['Природничий', prir]
    ]);

    var options = {
        title: 'Види інтелекту'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

