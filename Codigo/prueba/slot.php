<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json'); // Agrega el punto y coma aquí

$direccion = "localhost";  
$nombre = "casino_chowder";
$usuario = "root";
$psw = "";

$enlace = mysqli_connect($direccion, $usuario, $psw, $nombre);
mysqli_set_charset($enlace, "utf8");

// Verifica la conexión
if (!$enlace) { // Cambié esto para usar $enlace
    die("Connection failed: " . mysqli_connect_error()); // Cambié para usar mysqli_connect_error()
}

// Obtén los datos de la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);

$usuarioId = 15;
//$usuarioId = $data['usuarioId'];
$nuevoSaldo = $data['nuevoSaldo'];
$montoApuesta = $data['montoApuesta'];
$ganancia = $data['ganancia'];

// Inicia la transacción
$result = $enlace->query("SELECT id FROM usuarios WHERE id = $usuarioId");
if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'error' => 'Usuario no encontrado']);
    exit;
}

// Inicia la transacción
$enlace->begin_transaction();

try {
    // Actualiza el saldo del usuario
    $sql = "UPDATE usuarios SET saldo = ? WHERE id = ?";
    $stmt = mysqli_prepare($enlace, $sql); 
    mysqli_stmt_bind_param($stmt, "di", $nuevoSaldo, $usuarioId); 
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    // Inserta el registro de la apuesta
    $sql = "INSERT INTO apuestas (ID_Usuario, monto, ganancia) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($enlace, $sql); 
    mysqli_stmt_bind_param($stmt, "idd", $usuarioId, $montoApuesta, $ganancia); 
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    // Confirma la transacción
    mysqli_commit($enlace);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    // Deshace la transacción en caso de error
    mysqli_rollback($enlace); 
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

// Cierra la conexión
mysqli_close($enlace); 
?>
