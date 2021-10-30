let miCanvas = document.getElementById("MiGrafica").getContext("2d");

var chart = new Chart(miCanvas,{
    type:"line",
    data:{
       labels:["0","1", "2", "3", "4"],
       datasets:[
           {
               label:"Mi grafica de bebidas",
               backgroundColor: "rgba(54, 162, 235, 0.2)",
               borderColor:"rgba(54, 162, 235, 1)",
               data:[0,12,20,25,30]
           }
       ] 
    }
})