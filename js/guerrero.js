
    let imagen_guerrero_derecha  = new Image ();
    imagen_guerrero_derecha.src = "./img/guerrero.png";
    
    let imagen_guerrero_izquierda = new Image ();
    imagen_guerrero_izquierda.src = "./img/guerreroiz.png";
   // console.log("imagen guerrero:   " + imagen_guerrero_png);




   let hacha = new Image();
   hacha.src = "./anim/golpe_hacha_guerrero/guerrerohacha1.png";



let Guerrero = {





    "nombre": "Guerrero",
    "imagen_derecha" : imagen_guerrero_derecha,
    "imagen_izquierda": imagen_guerrero_izquierda,
    "vida" : 100,
    "posicion_x": 650,
    "posicion_y": 360,


    
    w: 100,
    h: 100,
    
    muerto: false,
}






//console.log(Guerrero.imagen.naturalWidth);


//console.log(imagen_guerrero_png);