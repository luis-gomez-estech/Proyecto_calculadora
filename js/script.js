

		// PARA HACER APARECER EL CONVERSOR

		function muestraConversores(id) {
		if(document.getElementById('boton_conversor').value=='Cerrar'){

		document.getElementById('boton_conversor').value = 'Con';
		document.getElementById(id).style.display = 'none';

		}else{
		document.getElementById('boton_conversor').value = 'Cerrar';
		document.getElementById(id).style.display = 'inline';
		}
		}


		// Pone el numero en pantalla
		function introducirNumero(numero) {
		   document.getElementById('pantalla').value = document.getElementById('pantalla').value + numero; // Le digo con num entre parentesis en la funcion, que el valor de la pantalla sea su valor actual mas el numero que aparece y asi para todos los que vayamos introduciendo
		}

		// Pone letras en pantalla PARA LOS HEXADECIMALES
		function introducirLetra(letra) {

			switch (letra) {
				case 1:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "A";
					break;
				case 2:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "B";
					break;

				case 3:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "C";
					break;

				case 4:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "D";
					break;

				case 5:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "E";
					break;

				case 6:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "F";
					break;

				case 7:
					document.getElementById('pantalla').value = document.getElementById('pantalla').value + "G";
					break;
									
			}				   
		}


		// Limpia o borra la pantalla
		function limpiar() {
		   document.getElementById('pantalla').value= " "; // Borro cualquier numero que haya en pantalla
		}

		// Mensaje que aparece al borrar la pantalla
		function mensaje() {
		   document.getElementById('pantalla').value= " Borrando... "; // Mostro mensaje
		   setTimeout("limpiar()",500); // y borro la pantalla 1 sg depsues

		}

		// Para borrar el ultimo digito de la pantalla
		function retroceso() {
		   	var valor_pantalla = pantalla.value; // Esta nueva variable recoge el valor de la pantalla. donde pone pantalla es el id de la pantalla

    		var nuevo_valor = valor_pantalla.substring(0,valor_pantalla.length - 1); // Aqui creo otra variable y le digo que:
    		// Con substring le digo que me muestre todos los caracteres del valor actual d ela pantalla desde el caracter 0 hasta el ultimo menos 1 (0,valor_pantalla.length - 1)
    		
    		pantalla.value = nuevo_valor; // por ultimo le digo que el valor de la pantalla ahora sea el valor de a nueva variable
		}

		// Realiza la operacion de suma, resta, multiplicacion, division,
		function calculo() {

			// Aqui hago lo siguiente, y es que uso la funcion eval, la cual es capaz de operar con una serie de caracteres, por tanto con poner
			// document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value); le estamos diciendo que el resultado de la pantalla,
			// es igual a lo que calcule eval dentro de ella segun los numeros y caracteres, por tanto, si hemos entroducido 2+3, reconoce tanto numero como simbolo y realiza el calculo

			// Pero si cuando la pantalla esta sin ningun numero pulsamos el boton igual, va a calcular lo que hay que es nada, por tanto, aparece la palabra undefined, osea nulo,
			// asi que para evitarlo, le decimos que si eval(document.getElementById('pantalla').value)==null, osea que si el resultado de eval es nulo, entonces, que muestre
			// lo que haya, es decir nada, pero si hay valores, entonces que realice eval el calculo segun la cadena de valores

			if(eval(document.getElementById('pantalla').value)==null) { //cuando le demos al boton igual, si no hay nada escrito, que no salga la palabra undefined y ponga lo mismo que habia osea nada
				document.getElementById('pantalla').value = document.getElementById('pantalla').value;
			} else {
			document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
			}	

		}

		// Metodos de la calculadora AVANZADA

		// Con esto calculo la raiz cuadrada
		function raiz() {
			document.getElementById('pantalla').value = Math.sqrt(document.getElementById('pantalla').value); 
		}

		// Aqui calculo la raiz cuadrada
		function potencia() {
			document.getElementById('pantalla').value = Math.pow(document.getElementById('pantalla').value, 2);
		}

		// FUNCIONES CONVERSOR

		function calculaDivisa(){

			var cantidad_divisa = document.getElementById("pantalla").value; // Recojo el valor de la cantidad
			var opcion1 = document.getElementById("opcion1").value; // Aqui recojo el valor de la seleccion 1
			var opcion2 = document.getElementById("opcion2").value; // Aqui recojo el valor de la seleccion 2

			  	if( (cantidad_divisa - 0) != cantidad_divisa && (''+cantidad_divisa).replace(/^\s+|\s+$/g, "").length > 0)
				    {
				      alert("Ingrese numeros");
				      return false;
				} else{

					if(opcion1=="euro"&&opcion2=="euro"){
						document.getElementById("pantalla").value = cantidad_divisa;
						muestraConversores('cal_conversor'); // Cierra bloque de conversores

					} else if(opcion1=="euro"&&opcion2=="libra"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.88).toFixed(2) + " £";
						muestraConversores('cal_conversor');		

					} else if  (opcion1=="euro"&&opcion2=="dolar"){
						document.getElementById("pantalla").value = (cantidad_divisa * 1.15).toFixed(2) + " $";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="euro"&&opcion2=="dolarM"){
						document.getElementById("pantalla").value = (cantidad_divisa * 21.82).toFixed(2) + " $X";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="euro"&&opcion2=="yenes"){
						document.getElementById("pantalla").value = (cantidad_divisa * 125.24).toFixed(2) + " Y";
						muestraConversores('cal_conversor');

					} else if  (opcion1=="libra"&&opcion2=="libra"){
						document.getElementById("pantalla").value = cantidad_divisa;
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="libra"&&opcion2=="euro"){
						document.getElementById("pantalla").value = (cantidad_divisa * 1.16).toFixed(2) + " €";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="libra"&&opcion2=="dolar"){
						document.getElementById("pantalla").value = (cantidad_divisa * 1.32).toFixed(2) + " $";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="libra"&&opcion2=="dolarM"){
						document.getElementById("pantalla").value = (cantidad_divisa * 25.46).toFixed(2) + " $X";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="libra"&&opcion2=="yenes"){
						document.getElementById("pantalla").value = (cantidad_divisa * 147.94).toFixed(2) + " Y";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolar"&&opcion2=="dolar"){
						document.getElementById("pantalla").value = cantidad_divisa;
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolar"&&opcion2=="euro"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.88).toFixed(2) + " €";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolar"&&opcion2=="libra"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.76).toFixed(2) + " £";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolar"&&opcion2=="dolarM"){
						document.getElementById("pantalla").value = (cantidad_divisa * 19.29).toFixed(2) + " $X";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolar"&&opcion2=="yenes"){
						document.getElementById("pantalla").value = (cantidad_divisa * 147.98).toFixed(2) + " Y";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolarM"&&opcion2=="dolarM"){
						document.getElementById("pantalla").value = cantidad_divisa;
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolarM"&&opcion2=="euro"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.046).toFixed(2) + " €";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolarM"&&opcion2=="libra"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.039).toFixed(2) + " £";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolarM"&&opcion2=="dolar"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.05).toFixed(2) + " $";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="dolarM"&&opcion2=="yenes"){
						document.getElementById("pantalla").value = (cantidad_divisa * 5.79).toFixed(2) + " Y";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="yenes"&&opcion2=="yenes"){
						document.getElementById("pantalla").value = cantidad_divisa;
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="yenes"&&opcion2=="euro"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.0079).toFixed(2) + " €";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="yenes"&&opcion2=="libra"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.0068).toFixed(2) + " £";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="yenes"&&opcion2=="dolar"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.0089).toFixed(2) + " $";
						muestraConversores('cal_conversor');	

					} else if  (opcion1=="yenes"&&opcion2=="dolarM"){
						document.getElementById("pantalla").value = (cantidad_divisa * 0.17).toFixed(2) + " $X";
						muestraConversores('cal_conversor');	

					} 

				}	
	    
    		}
		


		function calculaConversor(){

			
			var tipo1_conversor = document.getElementById("opcion1_conversor").value; // Aqui recojo el valor de la seleccion 1
			var tipo2_conversor = document.getElementById("opcion2_conversor").value; // Aqui recojo el valor de la seleccion 2

			 
					if(tipo1_conversor=="decimal"&&tipo2_conversor=="decimal"){
						document.getElementById("pantalla").value = document.getElementById("pantalla").value;
						muestraConversores('cal_conversor'); // Cierra bloque de conversores

					} else if(tipo1_conversor=="decimal"&&tipo2_conversor=="binario"){

					// Le digo que el valor de la pantalla va a ser el valr de la pantalla convertido a float con parseFloat, y despues con toString y 2 como valor de la base, obtenemos
					// el numero convertido a Binario. 
					
						document.getElementById('pantalla').value = parseFloat(document.getElementById('pantalla').value).toString(2);	
						muestraConversores('cal_conversor'); // Cierra bloque de conversores

					} else if(tipo1_conversor=="decimal"&&tipo2_conversor=="hexadecimal"){


					// Le digo que el valor de la pantalla va a ser el valr de la pantalla convertido a float con parseFloat, y despues con toString y 16 como valor de la base, obtenemos
					// el numero convertido a Hexadecimal, 					

						document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value).toString(16);	
						muestraConversores('cal_conversor'); // Cierra bloque de conversores

					} else if(tipo1_conversor=="binario"&&tipo2_conversor=="decimal"){

						document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value, 2);	
						muestraConversores('cal_conversor'); // Cierra bloque de conversores			

					} else if(tipo1_conversor=="binario"&&tipo2_conversor=="binario"){

						document.getElementById('pantalla').value = document.getElementById('pantalla').value;
						muestraConversores('cal_conversor'); // Cierra bloque de conversores		

					} else if(tipo1_conversor=="binario"&&tipo2_conversor=="hexadecimal"){

						document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value , 2).toString(16).toUpperCase();	
						muestraConversores('cal_conversor'); // Cierra bloque de conversores				

					} else if(tipo1_conversor=="hexadecimal"&&tipo2_conversor=="decimal"){

						document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value, 16);	
						muestraConversores('cal_conversor'); // Cierra bloque de conversores			

					} else if(tipo1_conversor=="hexadecimal"&&tipo2_conversor=="binario"){

						document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value, 16).toString(2).substr(-8);
						muestraConversores('cal_conversor'); // Cierra bloque de conversores		

					} else if(tipo1_conversor=="hexadecimal"&&tipo2_conversor=="hexadecimal"){

						document.getElementById('pantalla').value = document.getElementById('pantalla').value
						muestraConversores('cal_conversor'); // Cierra bloque de conversores				

					}

	    
    		}
		
		// Para mostrar digitos para introducir hexadecimales
	    function mostrar_digitos_hexadecimales(){
	     	document.getElementById("botonera_secundaria").style.display = "inline"; // muestro los digitos para operar con hexadecimales
	    }

	    function ocultar_digitos_hexadecimales(){
	      	document.getElementById("botonera_secundaria").style.display = "none"; // oculto los digitos para operar con hexadecimales
	    }

	      // Hace aparecer la calculadora avanzada y cambia boton de color si esta activada
		var flag =1; //Aqui creo una variable boolean
		var style = document.getElementById('avanzada');  //Aqui creo una variable para cambio de estilo
		function avanzada() {
			if (flag==1){ //Si es 1 lo muestra
				document.getElementById('cal_avanzada').style.display="block"; // Aparece calculadora avanzada
				flag=0; // Aqui le decimos que cuando pinchemos de nuevo, vuelva al estado inicial
				style.classList.add('botones_toggle_calculadora_avanzada_y_conversor_activados'); //  Cambia el estilo del boton 
			
			} else {
				document.getElementById('cal_avanzada').style.display="none"; // Desaparece calculadora avanzada
				flag=1;
				style.classList.remove('botones_toggle_calculadora_avanzada_y_conversor_activados'); // Vuelve al estilo inicial del boton 	
			}
		}



		// Cambia el color del boton Conversor cuando esta activado
		function botonConversor() {
		    document.getElementById("boton_conversor").classList.toggle("botones_toggle_calculadora_avanzada_y_conversor_activados");
		    document.getElementById("boton_conversor").classList.toggle("botones_toggle_calculadora_avanzada_y_conversor");
		}



		// Cambiar imagen boton on a off y viceversa
	   	function cambia_imagen() {
	        var img = document.getElementById('boton_on').src;
	        if (img.indexOf('imagenes/botonOff.png')!=-1) {
	            document.getElementById('boton_on').src  = 'imagenes/botonOn.png';
	        }
	         else {
	           document.getElementById('boton_on').src = 'imagenes/botonOff.png';
	       }

	    }


		// Para encender la pantalla y los botonos, se activa al abrir la pagina, y tambien cuando pulsamos el boton toggle de on-off,
		// asi le asignamos la class que tendrá en cada posicion del toggle. Tambien la uso para borrar la pantalla al encender o apagar

		function encender() {

			document.getElementById('pantalla').value= " "; // con esto borro la pantalla al apagar la calculadora y si ante sd enecenderla hay algo escrito igualmente lo borro

		    document.getElementById("pantalla").classList.toggle("pantalla_activada"); // al darle al boton encender, a la pantalla LCD que tiene un id=pantalla,
		    // le cambio la class actual inicial llamada pantalla por la class pantalla_activada
		    document.getElementById("pantalla").classList.toggle("pantalla"); // pero si vuelvo a pinchar el boton, cambio de la class pantalla_activada que tenia asignada a la class inicial pantalla
		    
		    document.getElementById("fondo").classList.toggle("fondo_activado");
		    document.getElementById("fondo").classList.toggle("fondo");

		    document.getElementById("btn1").classList.toggle("btn_activado");
		    document.getElementById("btn1").classList.toggle("btn");

		   	document.getElementById("btn2").classList.toggle("btn_activado");
		    document.getElementById("btn2").classList.toggle("btn");

		    document.getElementById("btn3").classList.toggle("btn_activado");
		    document.getElementById("btn3").classList.toggle("btn");

		    document.getElementById("btn4").classList.toggle("btn_activado");
		    document.getElementById("btn4").classList.toggle("btn");

		    document.getElementById("btn5").classList.toggle("btn_activado");
		    document.getElementById("btn5").classList.toggle("btn");

		    document.getElementById("btn6").classList.toggle("btn_activado");
		    document.getElementById("btn6").classList.toggle("btn");

		    document.getElementById("btn7").classList.toggle("btn_activado");
		    document.getElementById("btn7").classList.toggle("btn");

		    document.getElementById("btn8").classList.toggle("btn_activado");
		    document.getElementById("btn8").classList.toggle("btn");

		    document.getElementById("btn9").classList.toggle("btn_activado");
		    document.getElementById("btn9").classList.toggle("btn");

		    document.getElementById("btn0").classList.toggle("btn_activado");
		    document.getElementById("btn0").classList.toggle("btn");

		    document.getElementById("btnComa").classList.toggle("btn_activado");
		    document.getElementById("btnComa").classList.toggle("btn");

		    document.getElementById("btnDel").classList.toggle("btndel_activado");
		    document.getElementById("btnDel").classList.toggle("btn");

		    document.getElementById("btnce").classList.toggle("btnce_activado");
		    document.getElementById("btnce").classList.toggle("btn");

		    document.getElementById("btnIgual").classList.toggle("btnigual_activado");
		    document.getElementById("btnIgual").classList.toggle("btn"); 

		    		

		}
		
		//Para desactivar los botones cuando la calculadora esta apagada

		//Creo una variable que inicializo en cero
		var contador=0;
		
		// Ahora cada vez que se pinche sobre el boton on-off, llammamos a este metodo, el cual va a incrementar en uno el valor de la variable contador
		// cada vez que se pinche sobre la imagen del boton, y con un if, le digo que cuando el contador es un numero par,
		// los botones estan activos, pero sino es par, entonces estaran estan desactivados

		function contadorOnOff() {
		  
		   contador++;
		     if(contador%2==0){
		    	document.getElementById("btn1").disabled = false;
		    	document.getElementById("btn2").disabled = false;
		    	document.getElementById("btn3").disabled = false;
		    	document.getElementById("btn4").disabled = false;
		    	document.getElementById("btn5").disabled = false;
		    	document.getElementById("btn6").disabled = false;
		    	document.getElementById("btn7").disabled = false;
		    	document.getElementById("btn8").disabled = false;
		    	document.getElementById("btn9").disabled = false;
		    	document.getElementById("btn0").disabled = false;
		    	document.getElementById("btnComa").disabled = false;
		    	document.getElementById("btnSum").disabled = false;
		    	document.getElementById("btnRest").disabled = false;
		    	document.getElementById("btnMult").disabled = false;
		    	document.getElementById("btnDiv").disabled = false;
		    	document.getElementById("avanzada").disabled = false;
		    	document.getElementById("boton_conversor").disabled = false;
		    	document.getElementById("btnIgual").disabled = false;
		    	document.getElementById("btnDel").disabled = false;
		    	document.getElementById("btnce").disabled = false;
		    	document.getElementById("pantalla").disabled = false;
		    

		    } else {
   			    document.getElementById("btn1").disabled = true;
		    	document.getElementById("btn2").disabled = true;
		    	document.getElementById("btn3").disabled = true;
		    	document.getElementById("btn4").disabled = true;
		    	document.getElementById("btn5").disabled = true;
		    	document.getElementById("btn6").disabled = true;
		    	document.getElementById("btn7").disabled = true;
		    	document.getElementById("btn8").disabled = true;
		    	document.getElementById("btn9").disabled = true;
		    	document.getElementById("btn0").disabled = true;
		    	document.getElementById("btnComa").disabled = true;
		    	document.getElementById("btnSum").disabled = true;
		    	document.getElementById("btnRest").disabled = true;
		    	document.getElementById("btnMult").disabled = true;
		    	document.getElementById("btnDiv").disabled = true;
		    	document.getElementById("avanzada").disabled = true;
		    	document.getElementById("boton_conversor").disabled = true;
		    	document.getElementById("btnIgual").disabled = true;
		    	document.getElementById("btnDel").disabled = true;
		    	document.getElementById("btnce").disabled = true;
		    	document.getElementById("pantalla").disabled = true;

		    }


		}

		// Para encender pantalla al abrir la pagina el cual llama al metodo encender()
		function encenderInicio() {
		  
		   setTimeout("encender()",1000); // Llama a la funcion encender 1 sg despues de abrir la pagina, por eso en body ponemos <body onload="encender()"
		   setTimeout("cambia_imagen()",1000) // Llama a la funcion cambia_imagen 1 sg despues de abrir la pagina, por tanto en body onload="cambia_imagen()"

		}

	/*

<!--

	/*
		// Aqui le he puesto un toFixed para limitar los decimales a 2 (igual tengo que poner a más?? 
		function euro() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value.toFixed(2) + " €";
		}

		function libra() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value * 0.88.toFixed(2) + " £";
		}

		function dolar() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value * 1.13.toFixed(2) + " $";
		}

		function dolarM() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value * 21.82.toFixed(2) + " $X";
		}

		function yenes() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value * 125.24.toFixed(2) + " Y";

		}

		function dolarC() {
			document.getElementById('pantalla').value = document.getElementById('pantalla').value * 1.5.toFixed(2)  + " $C";
		}

*/
/*
		// Decimal a binario

		function decimalBinario() {

			// Le digo que el valor de la pantalla va a ser el valr de la pantalla convertido a float con parseFloat, y despues con toString y 2 como valor de la base, obtenemos
			// el numero convertido a Binario. tambien hago una validacion ya que  si le damos a boton HEX sin haber introducido un nuemro en la pantalla,
			// aparece entonces las siglas NaN (no es un numero), y para evitarlo, le digo que si lo que encuentra con eval en la pantalla es igual a nada,
			// entonces no pondrá nada sino si que mostrara el resultado

			if (eval(document.getElementById('pantalla').value)==null) {

				document.getElementById('pantalla').value = document.getElementById('pantalla').value;	

			} else {

				document.getElementById('pantalla').value = (parseFloat(document.getElementById('pantalla').value).toString(2));	

			}

		}
*/

/*		// Decimsl s hexadecimal
		function decimalHexadecimal() {

				// Le digo que el valor de la pantalla va a ser el valr de la pantalla convertido a float con parseFloat, y despues con toString y 16 como valor de la base, obtenemos
			// el numero convertido a Hexadecimal, y Valido como he hecho con el binario

			if (eval(document.getElementById('pantalla').value)==null) {

				document.getElementById('pantalla').value = document.getElementById('pantalla').value;	
			} else {		

			document.getElementById('pantalla').value = (parseFloat(document.getElementById('pantalla').value).toString(16));	

			}	
					
		}

*/


/*
		// Hexadecimal a decimal

		function hexadecimalDecimal() {
				

			var dec = document.getElementById('pantalla').value;

						// Integer outputDecimal = Integer.parseInt(hexString, 16);						

						document.getElementById('pantalla').value = parseInt(dec , 16);

						//(parseFloat(document.getElementById('pantalla').value).toString(16));

					}

*/


/*


<!--YA NO LA USO PORQUE LO HAGO DE OTRA FORMA

		// Hace aparecer la calculadora conversor
		function conversor() {
		    var show_hide = document.getElementById('cal_conversor'); // aqui creo la variable para asignarla al div cal_conversor
		    var style = document.getElementById('conversor'); // aqui creo la variable para asignarla al boton C.moneda con id=conversor
		    if (show_hide.style.display == 'block') {  // Aqui comprobamos cuál es el estado del elemento, si está visible, al hacer click lo ocula y tambien vuelve al estilo inicial 
		            show_hide.style.display = 'none';
		            style.classList.remove('botones_toggle_calculadora_avanzada_y_conversor_activados'); //  Cambia el estilo del boton       
		    }  else { // pero si esta oculto, lo mostrara y aplicara el nuevo estilo para el fondo (en este caso, lo pone de color verde)
		            show_hide.style.display = 'block';
		            style.classList.add('botones_toggle_calculadora_avanzada_y_conversor_activados');   
		        }
		    }
-->


<!--


function calculate(expr) {
     expr = expr.toUpperCase();
     var filter = 'ABCDFGHIJKLMNOPQRSTUVWXYZ';
     for (i=0; i<filter.length; i++) {
          if (expr.indexOf(filter.charAt(i)) != -1) {
               document.Calc.Input.value = '';
               return;
               }  
          }
     document.Calc.Input.value = eval(document.Calc.Input.value);
     }


//Declaracion de variables
var numero1 = 0; // creo variable que recoge el primer valor
var numero2 = 0; // creo variable que recoge el segundo valor
var operacion; // Variable que recoge el valor para que operacion realizar

//cuando se apreta un numero, esta funcion lo recibe.

// La variable numero tiene el valor que le asignamos a cada tecla, para la tecla 1, será 1
// la variable numero1 recoge el valor 	que haya ne la pantalla, si es igual a cero, o si no hay nada escrito (osea cero tambien), entonces numero1 es igual al valor introducido
// sino numero1 será igual a numero1+numero
function asignarNumero(numero){
    if(document.getElementById("pantalla").value == "0" || numero1==0){
        numero1 = numero; // La variable numero tiene el valor que le asignamos a cada tecla, para la tecla 1, será 1
    }else{
        numero1 += numero;
    }
        document.getElementById("pantalla").value = numero1;

}

 function coma(){
            if(numero1 == 0) {
                numero1 = '0.';
            } else if(numero1.indexOf('.') == -1) {
                numero1 += '.';
            }
            document.getElementById("pantalla").value += numero1;
        }



//Esta funcion se llama cada vez que se presiona un boton de operacion.
function operar(valor){
	if (numero1 == 0){
		resultado = parseInt(document.getElementById("pantalla").value);
	}
	numero2 = parseInt(numero1);
	numero1= 0;
	operacion = valor;
}

function esIgual(){
    numero1 = parseInt(numero1);
	switch (operacion){
		case 1:
			numero1 += numero2;
		break;
		case 2:
			numero1 = numero2 - numero1;
		break;
		case 3:
			numero1 *= numero2;
		break;
		case 4:
			numero1 = numero2 / numero1;
		break;
		case 5:
			numero1 = Math.pow(numero2, numero1); // aqui calcula numero al cuadrado X^2
		break;
	}
	document.getElementById("pantalla").value = numero1;
	numero2 = parseInt(numero1);
}


/*





<!-- pruebas de script


<script>

  var style = document.getElementById("boton_on_off").classList;
  var style_pantalla = document.getElementById("pantalla").classList;

	function encender() {



  if (style.contains("botones_toggle_calculadora_avanzada_y_conversor")||style_pantalla.contains("pantalla")) { //AQUI comprueba el la class qe tiene asignada y si es la misma, la sustituye por otra nueva class
    style.remove("botones_toggle_calculadora_avanzada_y_conversor");
    style_pantalla.remove("pantalla");
  } else {
    style.add("botones_toggle_calculadora_avanzada_y_conversor");
    style_pantalla.add("pantalla");
  }
  if (style.contains("botones_toggle_calculadora_avanzada_y_conversor_activados")||style_pantalla.contains("pantalla_activada1")) {
    style.remove("botones_toggle_calculadora_avanzada_y_conversor_activados");
     style_pantalla.remove('pantalla_activada1');
  } else {
    style.add("botones_toggle_calculadora_avanzada_y_conversor_activados");
    style_pantalla.add('pantalla_activada1');
  }
}

   




<!--

<script type="text/javascript">
// Script to hide/show menu
var button = document.querySelector('#conversor');
var menu = document.querySelector('#cal_conversor');
button.addEventListener('click', function (event) {
      if (menu.style.display == "") {
          menu.style.display = "none";
          button.innerHTML = "Hide C.moneda";
      } else {
          menu.style.display = "";
          button.innerHTML = "Show C.moneda";
      }
    }
  );
</script>

-->

<!-- PARA USARLO CON LIBRERIA JQUERY

<script>
$(document).ready(function(){
  $("#conversor").click(function(){
    $(".boton_calculadora_conversor").toggleClass("boton_calculadora_conversor_activado");
  });
});
</script>

-->

<!-- PARA USARLO CON LIBRERIA JQUERY
<script>
$(document).ready(function(){
  $("#avanzada").click(function(){
    $(".calculadora_avanzada").style.fontSize(120);
  });
  $("#avanzada").click(function(){
    $(".calculadora_avanzada").show();
  });
});
</script>

-->

*/

