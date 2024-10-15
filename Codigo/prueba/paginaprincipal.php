<?php
session_start(); // Inicia la sesión

if (!isset($_SESSION['usuario_id'])) {
    // Si no hay sesión activa, redirige al login
    header("Location: index.html");
    exit();
}

$direccion = "localhost";  
$nombre = "casino_chowder";
$usuario = "root";
$psw = "";



$usuario = $_SESSION['usuario']; // Nombre de usuario
$correo = $_SESSION['correo']; // Correo
?>


?>