<?php
session_start();

$direccion = "localhost";  
$nombre = "casino_chowder";
$usuario = "root";
$psw = "";
    
    
    $enlace = mysqli_connect($direccion, $usuario, $psw, $nombre);
    

    $user = mysqli_real_escape_string($enlace, $_POST['usuario']);
    $contrasena = mysqli_real_escape_string($enlace, $_POST['contrasena']);


    $consulta = "SELECT * FROM usuarios WHERE usuario = '$user' and contraseña = '$contrasena'";
    $resultado = mysqli_query($enlace,$consulta);
    $filas = mysqli_num_rows($resultado);
    $idioma = $_POST['idioma'];

	if($filas != 0) {
		// Inicio de sesión exitoso y redirige al inicio
		echo "<script>alert('Inicio de sesion exitoso') </script>";
		echo '<script>window.location.href = "paginaPrincipal.html";</script>';
	} else {
		// Credenciales inválidas
		echo "<script>alert('el nombre de Usuario o Contraseña son incorrectos') </script>";
		echo '<script>window.location.href = "index.html";</script>';
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}

?>