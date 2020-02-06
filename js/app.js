
document.getElementById("myBtn").addEventListener("click", generarTexto);




function generateRandom(min, max) {
  
    return Math.floor(Math.random() * (max - min)) + min;
    
  }

  function generarTexto(){
    console.log("Pruebas");
  

  var quepasara=generateRandom(0,4);
  var quien=["Mi jefe ","Mi perro ", "Mi hermana ", "El gobierno "];
  var quehizo=["no me dejo ","se comio ","se llevo ", "quito la luz "];
  var aque=["estudiar","la tarea ", "mi pc ", " "];
  var cuando=[" hoy","ayer", "desde el lunes", "ayer"];
  console.log (quien[quepasara]+quehizo[quepasara]+aque[quepasara]+cuando[quepasara]);
  console.log("y el afortunado es "+quepasara);
  msja=quien[quepasara]+quehizo[quepasara]+aque[quepasara]+cuando[quepasara];
  document.getElementById("app").innerHTML =msja;
  

  }
  
  //alert("This is from JavaScript");