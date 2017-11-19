/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

// Load the Visualization API and the corechart package.
google.charts.load('current', {packages:['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dibujar);
      //google.setOnLoadCallback(dibujar);
      var sprint1 = data['SCL']['2017-2']['students'][0]['sprints'][0]['number'];
      var sprint2 = data['SCL']['2017-2']['students'][0]['sprints'][1]['number'];

/*for (var i = 0; data['SCL']['2017-2']['students'].length>0; i ++){
	//console.log(data['SCL']['2017-2']['students']['active']==true);
}*/

function dibujar() {
// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Inscripción');
	data.addColumn('number', 'Visitas');
	data.addRows([
		['Sprint '+sprint1, 3],
		['Sprint '+sprint2, 134],
		]);

    // Set chart options
        var options = {'title':'Inscripción',
        'width':300,
        'height':290,
        'float' : 'left',
     'bar': { groupWidth: '45%' }};

        // Instantiate and draw our chart, passing in some options.

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      };

      console.log(data);

      /******************************************************************************************/
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1],
        [{v: [9, 0, 0], f: '9 am'}, 2],
        [{v: [10, 0, 0], f:'10 am'}, 3],
        [{v: [11, 0, 0], f: '11 am'}, 4],
        [{v: [12, 0, 0], f: '12 pm'}, 5],
        [{v: [13, 0, 0], f: '1 pm'}, 6],
        [{v: [14, 0, 0], f: '2 pm'}, 7],
        [{v: [15, 0, 0], f: '3 pm'}, 8],
        [{v: [16, 0, 0], f: '4 pm'}, 9],
        [{v: [17, 0, 0], f: '5 pm'}, 10],
      ]);

      var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          },
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div2'));

      chart.draw(data, options);
    };


   /* console.log(data['AQP']);
    console.log(data['AQP']['2016-2']);
    console.log(data['AQP']['2016-2']['students'][0]['name']);
    console.log(data['AQP']['2016-2']['students'][0]['sprints'][0]['number']);
     console.log(data['AQP']['2016-2']['students'][0]['sprints']['active']=true);*/
   /*****************************************************************************************/

    var menuAm = document.getElementById("am");
    var menuPm = document.getElementById("pm");
    //dashboard Chile - Mostrar y esconder 
    var toggleMenu = document.getElementById("menu-1");
     subMenu = document.getElementById("sub-menu");

    toggleMenu.addEventListener("click",function(){
      subMenu.classList.toggle('mostrar');
      menuAm.style.display = "none";
      menuPm.style.display = "none";
    })
   //dashboard Chile - sub menu AM - PM
    var toggle = document.getElementById("menu2017");
    subMenu2017 = document.getElementById("sub-menu2017");

    toggle.addEventListener("click",function(){
      subMenu2017.classList.toggle('mostrar2017');
      menuAm.style.display = "block";
      menuPm.style.display = "block";
    })
    //Dashboard Ciudad de México
    var toggleMexico = document.getElementById("menu-mexico");
    subMenuMexico = document.getElementById("subMenu-mexico");

    toggleMexico.addEventListener('click',function(){
      subMenuMexico.classList.toggle('mostrar');
    })
    //Dashboard Ciudad de Lima
    var toggleLima = document.getElementById("menu-lima");
    subMenuLima = document.getElementById("subMenu-lima");

    toggleLima.addEventListener('click',function(){
      subMenuLima.classList.toggle('mostrar');
    })


