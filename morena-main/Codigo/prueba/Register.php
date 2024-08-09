<?php
    $direccion = "localhost";  // Aquí debería ser $dir en lugar de $direccion
    $nombre = "id22380445_chowder";
    $usuario = "id22380445_fortiz";
    $psw = "Fortiz12.";

  
    $enlace = mysqli_connect($direccion, $usuario, $psw, $nombre);
    mysqli_set_charset($enlace, "utf8");
    
 
    $user = mysqli_real_escape_string($enlace, $_POST['usuario']);
    $contra = mysqli_real_escape_string($enlace, $_POST['pswd']);
    $correo = mysqli_real_escape_string($enlace, $_POST['correo']);
    $confirmar = mysqli_real_escape_string($enlace, $_POST['pswd2']);
    
    
    if ($confirmar != $contra) {
    echo "<script>alert('Las contraseñas no coinciden')</script>";
    echo '<script>window.location.href = "register.html";</script>';
} else {
    // Consultar si el usuario ya existe en la base de datos
    $consulta = "SELECT * FROM usuarios WHERE usuario = '$user'";
    $resultado = mysqli_query($enlace, $consulta);

    if (mysqli_num_rows($resultado) > 0) {
        // Si ya existe un usuario con ese nombre, mostrar mensaje y redirigir a register.html
        echo "<script>alert('Ya existe un usuario con ese nombre')</script>";
        echo '<script>window.location.href = "register.html";</script>';
    } else {
        // Insertar nuevo usuario en la base de datos
        $ingresodato = "INSERT INTO usuarios (usuario, correo, contraseña) VALUES ('$user', '$correo', '$contra')";
        $resultado = mysqli_query($enlace, $ingresodato);

        if ($resultado) {
            
            echo "<script>alert('Usuario Registrado')</script>";
            echo '<script>window.location.href = "Login.html";</script>';
        } else {
            
            echo "Error: " . $ingresodato . "<br>" . mysqli_error($enlace);
        }
    }
}
    
    
    
    
    
    
    
    
    
?>
