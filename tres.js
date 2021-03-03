/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata
 con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
	var nombre;
	var edad;
	var estadoCivil;
	var temperatura;
	var sexo;
	var boleto=600;
	var viudoViejo=0;
	var solteraJoven;
	var nombreSoltera;	
	var personas=0;
	var contadorViejos=0;
	var descuento;
	var continuar;
	var viajeSinDescuento;
	var personaMedia;
	var viajeConDescuento;

	do
	{
		nombre= prompt("Ingrese el nombre.");
		nombre= nombre.toLowerCase();
		while(!(isNaN(nombre)) || nombre =="" )
		{
			nombre= alert("Dato incorrecto. Ingrese el nombre.");
			nombre= nombre.toLowerCase();
		}
		estadoCivil= prompt("Ingrese un estado civil. (soltero, casado, viudo)");
		estadoCivil= estadoCivil.toLowerCase();
		while( !(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
		{
			estadoCivil= prompt("Dato incorrecto. Ingrese un estado civil. (soltero, casado, viudo)");
			estadoCivil= estadoCivil.toLowerCase();
		}
		edad= parseInt(prompt("Ingrese una edad (mayor de 18)"));
		while( edad < 18 || isNaN(edad))
		{
		 	edad= parseInt(prompt("Dato incorrecto. Ingrese una edad (mayor de 18)"));
		} 
		sexo= prompt("Ingrese un sexo (m o f)");
		sexo= sexo.toLowerCase.();
		while( !(sexo == "m" || sexo == "f")){
			sexo= prompt("Dato incorrecto. Ingrese un sexo (m o f).");
			sexo= sexo.toLowerCase.();
		}
		temperatura = parseInt(prompt("Ingrese un temperatura "));
	    while( temperatura < 29 || temperatura> 48|| isNaN(temperatura))
	    {
	      	temperatura = parseInt(prompt("Dato incorrecto.Ingrese un temperatura "));
	    }

	    personas++;

	    if(flag==0||edad>60)
	    {	    
	    	contadorViejos++;
	    	if(estadoCivil=="viudo")
	    	{
	    		viudoViejo++;
	    	}
	    }
	    if(sexo=="f"&&estadoCivil=="soltero")
	    {
	    	 if(flagDos==0||edad<solteraJoven)
		    {
		    	solteraJoven= edad;
		    	nombreSoltera= nombre;
		    	flagDos=1;
		    }
	    }
	   

	}while(continuar=="si");

	viajeSinDescuento= personas*boleto;
	personaMedia= persona/2;
	if(contadorViejo>personaMedia)
	{
		descuento= viajeSinDescuento/4
		viajeConDescuento= viajeSinDescuento-descuento;
	}
	else
	{
		viajeConDescuento=0
	}

	document.write("Viudos mayores de 60 años: "+viudoViejo+"<br>"+
					"Nombre de la soltera mas joven: "+nombreSoltera+" Su edad: "+solteraJoven+"<br>"+
					"Total del viaje sin descuento"+viajeSinDescuento+"<br>"+
					"Descuento del viaje(solo aparece si el 50% de loa pasajeros son +60): "+viajeConDescuento);



}		
