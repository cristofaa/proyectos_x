<?php
$costo= $_POST["cantidad"];
$nombre_de_cliente= $_POST["nombre_de_cliente"];
$telefono= $_POST["telefono"];

//include ("conexion.php");
$conexion = mysqli_connect('localhost','root','','login') or die ('no se pudo conectar  a la base de datos' .mysql_error($conexion));


$db = mysqli_select_db($conexion, "recargas" );


	
$consulta  = "INSERT INTO tabla_de_recargas (telefono,nombre_usuario,monto) VALUES('$costo','$nombre_de_cliente','$telefono');";


$resultado = mysqli_query( $conexion, $consulta );

mysqli_close( $conexion );

echo $costo;


?>