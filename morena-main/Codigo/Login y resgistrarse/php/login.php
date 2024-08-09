<?php

require 'conexion.php';


if(isset($_POST['login'])) {

// Obtener los valores enviados por el formulario
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Ejecutamos la consulta a la base de datos utilizando la función mysqli_query
$consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario' and contrasena = '$contrasena'";
$resultado = mysqli_query($enlace,$consulta);
$filas = mysqli_num_rows($resultado);


/*	if($filas != 0) {
		// Inicio de sesión exitoso
		echo "Inicio de sesión exitoso. Bienvenido, " . $usuario . "!";
	} else {
		// Credenciales inválidas
		echo "Credenciales inválidas. Por favor, verifica tu nombre de usuario y/o contraseña."."<br>";
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}
}*/
?>
