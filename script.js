var listado = [[0,'JOSE','NO','LA PAZ'],[1,'SUSANA','NO','LA PAZ'],[2,'PABLO','NO','LA PAZ'],[3,'LUCAS','NO','LA PAZ'],[4,'CHESTER','NO','LA PAZ']];
Array.prototype.votar = function(nombre,ciudad,voto){
    var votoActual;
    var existe;
    var i;
    voto = voto.toUpperCase();
    nombre = nombre.toUpperCase();
    ciudad = ciudad.toUpperCase();
    existe = false;
    if(this.length>0){
        for (i = 0 ; i<this.length ; i++ ) {
            var arrayLocal = this[i];
            if(arrayLocal[1]===nombre){
                    existe = true;
            }
        }
    }
    if(!existe){
        if(voto==='SI' || voto===  'NO')
        {

            if(ciudad==='TARIJA' || ciudad==='COCHABAMBA' || ciudad === 'LA PAZ' || ciudad === 'ORURO'|| ciudad === 'SANTA CRUZ'|| ciudad === 'CHUQUISACA'|| ciudad === 'POTOSI'|| ciudad === 'BENI'|| ciudad === 'PANDO'){
                    votoActual = [this.length,nombre,voto,ciudad];
                    console.log(votoActual);
                    this.push(votoActual);
            } else {
                console.log('Ciudad no valida');
            }
        } else {
            console.log('Voto no Valido');
        }
    } else {
        console.log("Que ya no puede votar denuevo");
    }
}

Array.prototype.listadoDePersonas = function(){
    var i;
    for (i = 0; i < this.length; i++) {
        console.log(this[i][1]);
    }
}

Array.prototype.cantidadVotosPorCiudad = function(){
    var ciudades=['TARIJA','COCHABAMBA','LA PAZ','ORURO','SANTA CRUZ','CHUQUISACA','POTOSI','BENI','PANDO'];
    var index;
    for(index = 0; index<ciudades.length ; index++ ){
        var si=0;
        var no = 0;
        var i;
        for (i = 0; i < this.length; i++) {
            var votoActual = this[i];
            if(votoActual[3]===ciudades[index]){
                if(votoActual[2]==='SI'){
                    si++;
                }else {
                    no++;
                }
            }
        }
        if(si>no){
        console.log(ciudades[index]+'Total si: '+si +' Total no: '+no+' GANA EL SI' );
        }else {
          if(si === no){
            console.log(ciudades[index]+' Total si: '+si +' Total no: '+no+' ES UN EMPATE TECNICO');
          }
          else {
              console.log(ciudades[index]+' Total si: '+si +' Total no: '+no+' GANA EL NO');
          }
        }
    }
}

Array.prototype.cantidadDeVotos = function(){
    var i;
    var totalVotosSi = 0;
    var totalVotosNo = 0;
    var resultado = [];
    for (i = 0; i < this.length; i++) {
        if (this[i][2] === 'SI') {
          totalVotosSi ++;
        }
        if (this[i][2] === 'NO') {
          totalVotosNo ++;
        }
    }
    console.log('Total Votos por el SI: ' + totalVotosSi + '       Total votos por el NO: ' + totalVotosNo);
}

Array.prototype.copiar = function(){
    Array.prototype.copia = [];
    var index;
    for( index = 0 ; index < this.length ; index++ ){
        (function(pos,arreglo){
            arreglo.copia[pos] = [arreglo[pos][0],arreglo[pos][1],arreglo[pos][2],arreglo[pos][3]];
        })(index,this)
    }
}
    listado.votar('Carmen','cochabamba','SI');
    listado.listadoDePersonas();
    listado.cantidadVotosPorCiudad();
    listado.cantidadDeVotos();
    listado.copiar();

// Parte B

// invertir las letras del username
String.prototype.invertirUsername = function(user){
   return function(){
       var userInvert = '';
       for(var i = user.length-1; i>=0; i--){
          userInvert = userInvert + user[i];
       }
       return user[i] = userInvert;
   }
}
//cambiar el voto si por el no e inversa
Array.prototype.cambiarVoto = function(){
   var option = this[2];

   if(option == "SI"){
       this[2] = "NO";
   }else if(option == "NO"){
       this[2] = "SI";
   }else{
       console.log("añada una opcion valida");
   }
   return this;
}

// cambiar ciudades
Array.prototype.cambiarCiudades= function(){
    var otrasCiudades = ['Bucaramanga','Buenos Aires','Jalisco','Tijuana','Toronto','San Tiago','Andale Andale','Moscow'];
    var index;
    for( index = 0; index < this.length ; index++ ) {
        var registro = this[index];
        registro[3] = otrasCiudades[Math.round(Math.random()*8)];
    }
}

//cambiar posiciones
Array.prototype.cambiarPosicion = function(){
    var index;
    var pos= this.length-1;
    for( index = 0; index < this.length ; index++ ) {
        var auxiliar = [this[index][0],this[index][1],this[index][2],this[index][3]];
        this[index] = [this[pos][0],this[pos][1],this[pos][2],this[pos][3]]
        this[pos] =  [auxiliar[0],auxiliar[1],auxiliar[2],auxiliar[3]]
        pos--;
    }
}
