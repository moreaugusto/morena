<?php

$servidor = "localhost"; // servidor de la base de datos
$usuario = "tutorioz"; // usuario de la base de datos
$contraseña = "Z2uFaWMqcuCF-EHP"; // contraseña de la base de datos
$base_de_datos = "tutorioz"; // nombre de la base de datos

// Creamos la conexión a la base de datos utilizando la función mysqli_conexionect
$enlace = mysqli_connect($servidor, $usuario, $contraseña, $base_de_datos);

// Verificamos si la conexión fue exitosa
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error()); // Si la conexión falla, se muestra un mensaje de error y se termina la ejecución del script
}

// Cerramos la conexión a la base de datos utilizando la función mysqli_close
//mysqli_close($conexion);
?>
