<?php
require 'conexion.php';

if(isset($_POST['registro'])) {

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$correo = $_POST['correo'];



$consulta1 = "INSERT INTO USUARIO (ID_usuario, nombre, apellido, Email, contrasena) VALUES (null, '$nombre', '$apellido', '$correo', '$contrasena')";
$resultado = mysqli_query($conexion,$sql);
	
/*if($resultado) {
		// Iserción correcta
		echo "¡Se insertaron los datos correctamente!";
	} else {
		// Iserción fallida
		echo "¡No se puede insertar la informacion!"."<br>";
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}
}*/

?>
