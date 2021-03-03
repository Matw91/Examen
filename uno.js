/*Debemos realizar la carga de una compra de 5(cinco) productos 
de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignifugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	var nombre;
	var tipo;
	var precio;
	var unidades;
	var tipoInflamable;
	var marca;
	var masCaro;
	var marcaDelmasCaro;
	var tipoDelmasCaro;
	var flag=0;	
	var unidadIac=0;	
	var acumuladorAlcohol=0;
	var acumuladorIac=0;
	var acumuladorQuat=0;
	var contadoralcohol=0;
	var contadorQuat=0;
	var contadorIac=0;
	var promedioAcohol;
	var promedioIac;
	var promedioQuat;
	var acumuladorIgnifugo=0;	
	var acumuladorCombustible=0;
	var acumuladorExplosivo=0;
	var masUnidades;


	for (var i = 0; i < 5; i++)
	{
		nombre= prompt("Ingrese el nombre.");
		nombre= nombre.toLowerCase();
		while(!(isNaN(nombre)) || nombre =="" )
		{
			nombre= prompt("Dato incorrecto. Ingrese el nombre.");
			nombre= nombre.toLowerCase();
		}
		tipo= prompt("Ingrese el tipo de producto(ALCOHOL,IAC,QUAT).");
		tipo= tipo.toLowerCase();
		while(!(tipo == "alcohol" || tipo =="iac" || tipo == "quat"))
		{
			tipo= prompt("Dato incorrecto. Ingrese el tipo de producto(ALCOHOL,IAC,QUAT).");
		}
		precio = parseInt(prompt("Ingrese un precio "));
	    while( precio < 100|| precio>300 || isNaN(precio))
	    {
	      	precio = parseInt(prompt("Dato incorrecto.Ingrese un precio "));
	    }
	    unidades = parseInt(prompt("Ingrese un unidades "));
	    while( unidades < 1|| unidades>1000 || isNaN(unidades))
	    {
	      	unidades = parseInt(prompt("Dato incorrecto.Ingrese un unidades "));
	    }
	    tipoInflamable= prompt("Ingrese el tipoInflamable de producto(ignifugo,combustible,explosivo).");
		tipoInflamable= tipoInflamable.toLowerCase();
		while(!(tipoInflamable == "ignifugo" || tipoInflamable =="combustible" || tipoInflamable == "explosivo"))
		{
			tipoInflamable=prompt("Dato incorrecto. Ingrese el tipo de producto.");
			tipoInflamable= tipoInflamable.toLowerCase();

		}
	    marca= prompt("Ingrese el marca.");
		marca= marca.toLowerCase();
		while(!(isNaN(marca)) || marca =="" )
		{
			marca= prompt("Dato incorrecto. Ingrese la marca.");
			marca= marca.toLowerCase();
		}

		if(flag==0||precio>masCaro)
		{
			masCaro= precio;
			marcaDelmasCaro= marca;
			tipoDelmasCaro= tipo;
			flag=1;
		}
		
		switch(tipoInflamable)
		{
			case"alcohol":
				acumuladorAlcohol= acumuladorAlcohol + unidades;
				contadoralcohol++;
				break;
			case"iac":
			if (precio<201) 
				{
				unidadIac= unidadIac + unidades;
				flagDos=1;
				}
				acumuladorIac= acumuladorIac + unidades;
				contadorIac++;
				break;
			case"quat":
				acumuladorQuat= acumuladorQuat + unidades;
				contadorQuat++;
				break;
		}
		switch(tipoInflamable)
		{
			case"ignifugo":
				acumuladorIgnifugo= acumuladorIgnifugo+unidades;
				acumuladorIgnifugo
				break;
			case"combustible":
				acumuladorCombustible= acumuladorCombustible+unidades;
				break;
			case"explosivo":
				acumuladorExplosivo= acumuladorExplosivo+unidades;
				break;
		}

		

		
	}

	if(acumuladorIgnifugo>acumuladorCombustible && acumuladorIgnifugo>acumuladorExplosivo)
	{
		masUnidades="ignifugo";
	}
	else if (acumuladorCombustible>acumuladorExplosivo) 
	{
		masUnidades="combustible";
	}
	else
	{
		masUnidades="explosivo";
	}
	promedioAcohol= acumuladorAlcohol+contadoralcohol;
	promedioIac= acumuladorIac+contadorIac;
	promedioQuat= acumuladorQuat+contadorQuat;
	document.writer("Promedio de ALCOHOL: "+promedioAcohol+"Promedio de IAC: "+promedioIac+"Promedio de QUAT: "+promedioQuat+"<br>"+
					"unidades de IAC: "+unidadIac+" marca del producto mas cara: "+marcaDelmasCaro+"<br>"+
					"Y su tipo:"+tipoDelmasCaro+"<br>"+
					"Tipo inflamable con mas unidades: "+masUnidades);
	
}
