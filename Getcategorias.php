<?php
include("connection.php");

$sql = "SELECT * FROM categorias";
$result = $conn->query($sql);

$categorias = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $categoria = new stdClass();
        $categoria->id = $row["id"];
        $categoria->nombre = $row["nombre"];
        array_push($categorias, $categoria);
    }
}

echo json_encode($categorias);

$conn->close();

