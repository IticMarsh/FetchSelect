<?php
include("connection.php");

$cat = $_POST['cat1'];

$sql = "SELECT * FROM subcategorias WHERE categoria_id = $cat";
$result = $conn->query($sql);

$subcategorias = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $subcategoria = new stdClass();
        $subcategoria->id = $row["id"];
        $subcategoria->nombre = $row["nombre"];
        $subcategoria->categoria_id = $row["categoria_id"];
        array_push($subcategorias, $subcategoria);
    }
}

echo json_encode($subcategorias);

$conn->close();

