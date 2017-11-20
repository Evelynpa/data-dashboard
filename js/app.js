/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
  console.log(data);
//TOTAL DE ESTUDIANTES ACTUALES DE TODAS LAS SEDES Y GENERACIONES
  
  var aqp2016 = data['AQP']['2016-2']['students'].length;
  var aqp2017 = data['AQP']['2017-1']['students'].length;

  var cdmx1 = data['CDMX']['2017-1']['students'].length;
  var cdmx2 = data['CDMX']['2017-2']['students'].length;//ACTUAL

  var lim2016 = data['LIM']['2016-2']['students'].length;
  var lim1 = data['LIM']['2017-1']['students'].length;
  var lim2 = data['LIM']['2017-2']['students'].length;//ACTUAL

  var scl2016 = data['SCL']['2016-2']['students'].length;
  var scl1 = data['SCL']['2017-1']['students'].length;
  var scl2 = data['SCL']['2017-2']['students'].length;//ACTUAL

  var result = cdmx2+lim2+scl2;

// Load the Visualization API and the corechart package.
google.charts.load('current', {packages:['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dibujar);

function dibujar() {
// Create the data table.
     var data = google.visualization.arrayToDataTable([
          ['Sede', '2016-2', '2017-1', '2017-2'],
          ['AQP', aqp2016, aqp2017, 0],
          ['CDMX', 0, cdmx1, cdmx2],
          ['LIM', lim2016, lim1, lim2],
          ['SCL', scl2016, scl1, scl2]
        ]);

    // Set chart options
        var options = {'title':'Total estudiantes actuales: ' + result,
        'width':490,
        'height':300,
        legend: { position: 'top' },
        hAxis: {
          title: 'Sedes'
        },
         vAxis: {
          title: 'Cantidad'
        },
     'bar': { groupWidth: '80%' }};

        // Instantiate and draw our chart, passing in some options.

        var chart = new google.visualization.ColumnChart(document.getElementById('graphicInscrip'));
        chart.draw(data, options);
      };

      /******************************************************************************************/
      //PORCENTAJE DE DESERCION DE LAS GENERACIONES ACTUALES
        var desert = [];

        var cdmx2des =[] ;//ACTUAL
        var lim2des =[] ;//ACTUAL
        var scl2des = [];//ACTUAL


        for(var i =0;  i < data['CDMX']['2017-2']['students'].length ;i++){
          cdmx2des.push(data['CDMX']['2017-2']['students'][i]['active']);//AGREGO UN ARRAY SOLO DE LOS ACTIVE
        }
         for(var i =0;  i < data['LIM']['2017-2']['students'].length ;i++){
          lim2des.push(data['LIM']['2017-2']['students'][i]['active']);//AGREGO UN ARRAY SOLO DE LOS ACTIVE
        }
         for(var i =0;  i < data['SCL']['2017-2']['students'].length ;i++){
          scl2des.push(data['SCL']['2017-2']['students'][i]['active']);//AGREGO UN ARRAY SOLO DE LOS ACTIVE
        }

        var mex=[];
        var per=[];
        var cl=[];

        for(var i=0; i<cdmx2des.length;i++){
          if(cdmx2des[i]===false)
        mex.push(cdmx2des[i]);//AGREGO UN ARRAY SOLO DE LOS ACTIVE = FALSE DE CDMX
        }
         for(var i=0; i<lim2des.length;i++){
          if(lim2des[i]===false)
          per.push(i);//AGREGO UN ARRAY SOLO DE LOS ACTIVE = FALSE DE LIM
        }
         for(var i=0; i<scl2des.length;i++){
          if(scl2des[i]===false)
          cl.push(i);//AGREGO UN ARRAY SOLO DE LOS ACTIVE = FALSE DE SCL
        }
        var nums = mex.concat(per, cl); //CONCATENO CADA ARRAY QUE SE CREÓ
        var numb = nums.length;//OBTENGO EL LARGO DEL ARRAY
        var total = Math.round((numb * 100)/result);//SACO EL PORCENTAJE DE ACUERDO A LAS ESTUDIANTES ACTUALES

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Total');
  data.addColumn('number', 'Sede ');
  data.addRows([
    ['Sede AQP', 0],
    ['Sede CDMX', mex.length],
    ['Sede LIM', per.length],
    ['Sede SCL', cl.length]
    ]);

      // Set chart options
        var options = {
        'title':'Total deserción actual: ' + total +' %',
        'width':490,
        'height':300,
        'is3D': true,
        slices: {
            0: { color: 'yellow' },
            1: { color: 'pink' },
            2: { color: 'blue' },
            3: { color: 'purple' }
          },
     'bar': { groupWidth: '80%' }};

      var chart = new google.visualization.PieChart(document.getElementById('graphicDesert'));
      chart.draw(data, options);
    };

   /*****************************************************************************************/
//La cantidad de estudiantes que superan la meta de puntos en promedio de 
//todos los sprints cursados. La meta de puntos es 70% del total de puntos.
 // console.log(data['AQP']['2016-2']['students']);
var student = data['SCL']['2017-1']['students'];
//SPRINT 1
var sprints1 = [];
var tech1 = [];
var hse1 = [];

//SPRINT 2
var sprints2 = [];
var tech2 = [];
var hse2 = [];

//SPRINT 3
var sprints3 = [];
var tech3 = [];
var hse3 = [];

//SPRINT 4
var sprints4 = [];
var tech4 = [];
var hse4 = [];

for(var i = 0; i< student.length ;i++){
  sprints1.push(student[i]['sprints'][0]);
  sprints2.push(student[i]['sprints'][1]);
  sprints3.push(student[i]['sprints'][2]);
  sprints4.push(student[i]['sprints'][3]);
}
//SPRINT 1
for(var i = 0; i< sprints1.length ;i++){
  tech1.push(sprints1[i]['score']['tech']);
  hse1.push(sprints1[i]['score']['hse']);
}
//SPRINT 2
for(var i = 0; i< sprints2.length ;i++){
  tech2.push(sprints2[i]['score']['tech']);
  hse2.push(sprints2[i]['score']['hse']);
}
//SPRINT 3
for(var i = 0; i< sprints3.length ;i++){
  tech3.push(sprints3[i]['score']['tech']);
  hse3.push(sprints3[i]['score']['hse']);
}
//SPRINT 4
for(var i = 0; i< sprints4.length ;i++){
  tech4.push(sprints4[i]['score']['tech']);
  hse4.push(sprints4[i]['score']['hse']);
}

/*1800 = total ----1260 es el 70% tech y
  1200 = total -----840 es el 70% hse*/

//BUSCA A MAYORES DE 1260 EN TECH
var totalTech1 = [];//
var totalProm1 = 0;
for(var i=0;i<tech1.length;i++){
  if(tech1[i] >= 1260){
    totalTech1.push(tech1[i]);
    totalProm1 += tech1[i];//SUMAR TODOS LOS RESULTADOS TECH DE UN SPRINT
  }
}
var totalTech2 = [];//
var totalProm2 = 0;
for(var i=0;i<tech2.length;i++){
  if(tech2[i] >= 1260){
    totalTech2.push(tech2[i]);
    totalProm2 += tech2[i];//SUMAR TODOS LOS RESULTADOS TECH DE UN SPRINT
  }
}
var totalTech3 = [];//
var totalProm3 = 0;
for(var i=0;i<tech3.length;i++){
  if(tech3[i] >= 1260){
    totalTech3.push(tech3[i]);
    totalProm3 += tech3[i];//SUMAR TODOS LOS RESULTADOS TECH DE UN SPRINT
  }
}
var totalTech4 = [];//
var totalProm4 = 0;
for(var i=0;i<tech4.length;i++){
  if(tech4[i] >= 1260){
    totalTech4.push(tech4[i]);
    totalProm4 += tech4[i];//SUMAR TODOS LOS RESULTADOS TECH DE UN SPRINT
  }
}

//BUSCA A MAYORES DE 1260 EN HSE
var totalHse1 = [];//
var totalPromhse1 = 0;
for(var i=0;i<tech1.length;i++){
  if(tech1[i] >= 840){
    totalHse1.push(hse1[i]);
    totalPromhse1 += hse1[i];//SUMAR TODOS LOS RESULTADOS HSE DE UN SPRINT
  }
}
var totalHse2 = [];//
var totalPromhse2 = 0;
for(var i=0;i<tech2.length;i++){
  if(tech2[i] >= 840){
    totalHse2.push(hse2[i]);
     totalPromhse2 += hse1[i];//SUMAR TODOS LOS RESULTADOS HSE DE UN SPRINT
  }
}
var totalHse3 = [];//
var totalPromhse3 = 0;
for(var i=0;i<tech3.length;i++){
  if(tech3[i] >= 840){
    totalHse3.push(hse3[i]);
     totalPromhse3 += hse3[i];//SUMAR TODOS LOS RESULTADOS HSE DE UN SPRINT
  }
}
var totalHse4 = [];//
var totalPromhse4 = 0;
for(var i=0;i<tech4.length;i++){
  if(tech4[i] >= 840){
    totalHse4.push(hse4[i]);
     totalPromhse4 += hse4[i];//SUMAR TODOS LOS RESULTADOS HSE DE UN SPRINT
  }
}
//PROMEDIO FINAL TECH
var cantStudent1 =totalTech1.length;
var techPromSprint1 = Math.round(((totalProm1/cantStudent1)*100)/1800);//PROMEDIO TECH SPRINT 1

var cantStudent2 =totalTech2.length;
var techPromSprint2 = Math.round(((totalProm2/cantStudent2)*100)/1800);//PROMEDIO TECH SPRINT 2

var cantStudent3 =totalTech3.length;
var techPromSprint3 = Math.round(((totalProm3/cantStudent3)*100)/1800);//PROMEDIO TECH SPRINT 3

var cantStudent4 =totalTech4.length;
var techPromSprint4 = Math.round(((totalProm4/cantStudent4)*100)/1800);//PROMEDIO TECH SPRINT 4

//PROMEDIO FINAL HSE
var cantStudentHSE1 =totalHse1.length;
var hsePromSprint1 = Math.round(((totalPromhse1/cantStudentHSE1)*100)/1200);//PROMEDIO TECH SPRINT 1

var cantStudentHSE2 =totalHse2.length;
var hsePromSprint2 = Math.round(((totalPromhse2/cantStudentHSE2)*100)/1200);//PROMEDIO TECH SPRINT 2

var cantStudentHSE3 =totalHse3.length;
var hsePromSprint3 = Math.round(((totalPromhse3/cantStudentHSE3)*100)/1200);//PROMEDIO TECH SPRINT 3

var cantStudentHSE4 =totalHse4.length;
var hsePromSprint4 = Math.round(((totalPromhse4/cantStudentHSE4)*100)/1200);//PROMEDIO TECH SPRINT 4

// Load the Visualization API and the corechart package.
google.charts.load('current', {packages:['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(achievement);

function achievement() {
// Create the data table.
     // Some raw data (not necessarily accurate)
       var data = google.visualization.arrayToDataTable([
          ['Sprint', 'Tech skill', 'Life skills'],
          ['Sprint 1', techPromSprint1, hsePromSprint1],
          ['Sprint 2', techPromSprint2, hsePromSprint2],
          ['Sprint 3', techPromSprint3, hsePromSprint3],
          ['Sprint 4', techPromSprint4, hsePromSprint4]
        ]);

    var options = {
      title : 'Sede Santiago  2017-1',
      legend: { position: 'top' },
      vAxis: {title: 'Porcentaje (%)'},
      hAxis: {title: 'Sprints (turno AM)'},
      seriesType: 'bars',
      'width':1000,
      'height':300
    };

        // Instantiate and draw our chart, passing in some options.

        var chart = new google.visualization.ColumnChart(document.getElementById('graphicLogro'));
        chart.draw(data, options);
      };

/****************************************************************************************************/
//El Net Promoter Score (NPS) promedio de los sprints cursados. 
var promotersSprint1 = data['SCL']['2017-1']['ratings'][0]['nps']['promoters'];
var passiveSprint1 = data['SCL']['2017-1']['ratings'][0]['nps']['passive'];
var detractorsSprint1 = data['SCL']['2017-1']['ratings'][0]['nps']['detractors'];
console.log(promotersSprint1);
console.log(passiveSprint1);
console.log(detractorsSprint1);



google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(npsGraphic);
      function npsGraphic() {
        var data = google.visualization.arrayToDataTable([
          ['Language', 'Speakers (in millions)'],
          ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
          ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
          ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
          ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
          ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
          ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
          ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
        ]);

        var options = {
          title: 'Indian Language Use',
          legend: 'none',
          pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
          'width':1000,
      'height':300
        };

        var chart = new google.visualization.PieChart(document.getElementById('graphicNps'));
        chart.draw(data, options);
      }
/********************************************************************************************************/
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
    //Dashboard Ciudad de Arequipa
    var toggleArequipa = document.getElementById("menu-arequipa");
    subMenuArequipa = document.getElementById("subMenu-arequipa");

    toggleArequipa.addEventListener('click',function(){
      subMenuArequipa.classList.toggle('mostrar');
    })
//Añadir estudiante
var toggleAnadir = document.getElementById("añadir");
subMenuLink = document.getElementById("sub-link");

toggleAnadir.addEventListener('click',function(){
  subMenuLink.classList.toggle('mostrar');
})

//Añadir estudiante 2
var toggleAnadir2 = document.getElementById("añadir-2");
subMenuLink2 = document.getElementById("sub-link2");

toggleAnadir2.addEventListener('click',function(){
  subMenuLink2.classList.toggle('mostrar');
})

//Añadir estudiante 3
var toggleAnadir3 = document.getElementById("añadir-3");
subMenuLink3 = document.getElementById("sub-link3");

toggleAnadir3.addEventListener('click',function(){
  subMenuLink3.classList.toggle('mostrar');
})

//Promedio Niña 1 Tech - Hse
//console.log(data['SCL']['2017-2']['students'][0]['sprints']);
var student1 = data['SCL']['2017-2']['students'][0]['sprints'];
var promedioTech = []; // un array vacio en donde irán los promedios Tech
var promedioHse = [];
for(var i = 0; i< student1.length;i++){ //recorre todo el data de sprints
promedioTech.push(student1[i]['score']['tech']);
promedioHse.push(student1[i]['score']['hse']);
}
//console.log(promedioTech);
//console.log(promedioHse);
var sumaTech = 0;
var sumaHse = 0;
for(var i = 0; i<promedioTech.length;i++){
  sumaTech += promedioTech[i];
}
for(var i = 0; i<promedioHse.length;i++){
  sumaHse += promedioHse[i];
}
//console.log(sumaTech);
//console.log(sumaHse);

//promedio Tech
var totalTech = Math.round(((sumaTech/2)*100)/1800);

//console.log(totalTech);
var totalHse = Math.round(((sumaHse/2)*100)/1200);
//console.log(totalHse);

//Promedio Niña 2 Tech - Hse
var student2 = data['SCL']['2017-2']['students'][1]['sprints'];
var promedioTech1 = []; // un array vacio en donde irán los promedios Tech
var promedioHse1 = [];
for(var i = 0; i< student2.length;i++){ //recorre todo el data de sprints
promedioTech1.push(student2[i]['score']['tech']);
promedioHse1.push(student2[i]['score']['hse']);
}
//console.log(promedioTech);
//console.log(promedioHse);
var sumaTech1 = 0;
var sumaHse1 = 0;
for(var i = 0; i<promedioTech1.length;i++){
  sumaTech1 += promedioTech1[i];
}
for(var i = 0; i<promedioHse.length;i++){
  sumaHse1 += promedioHse1[i];
}
//console.log(sumaTech);
//console.log(sumaHse);

//promedio Tech
var totalTech1 = Math.round(((sumaTech/2)*100)/1800);

//console.log(totalTech);
var totalHse1 = Math.round(((sumaHse/2)*100)/1200);
//console.log(totalHse);

//Promedio niña 3 
var student3 = data['SCL']['2017-2']['students'][2]['sprints'];
var promedioTech2 = []; // un array vacio en donde irán los promedios Tech
var promedioHse2 = [];
for(var i = 0; i< student3.length;i++){ //recorre todo el data de sprints
promedioTech2.push(student3[i]['score']['tech']);
promedioHse2.push(student3[i]['score']['hse']);
}
//console.log(promedioTech);
//console.log(promedioHse);
var sumaTech2 = 0;
var sumaHse2 = 0;
for(var i = 0; i<promedioTech2.length;i++){
  sumaTech2 += promedioTech2[i];
}
for(var i = 0; i<promedioHse2.length;i++){
  sumaHse2 += promedioHse2[i];
}
//console.log(sumaTech);
//console.log(sumaHse);

//promedio Tech
var totalTech2 = Math.round(((sumaTech/2)*100)/1800);

//console.log(totalTech);
var totalHse2 = Math.round(((sumaHse/2)*100)/1200);
//console.log(totalHse);
//alumna 1
var tech1 = document.getElementById('tech-1');
tech1.textContent = totalTech + ' %'
var hse1 = document.getElementById('hse-1');
