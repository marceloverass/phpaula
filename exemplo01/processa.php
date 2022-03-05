<?php

	error_reporting(E_ERROR | E_PARSE);
	$nome = $_GET["nome"];
	$senha = $_GET["senha"];
	$sexo = $_GET["sexo"];
	$estado = $_GET["estado"];
	$linguagem = $_GET["linguagem"];
	$arquivo = $_GET["arquivo"];
	
	
	echo "Nome: $nome <br>";
	echo "Senha: $senha <br>";
	echo "Sexo: $sexo <br>";
	echo "Estado: $estado <br>";
	echo "Arquivo: $arquivo";

	if(isset($GET_["linguagem"])){
		foreach ($_GET["linguagem"] as $selected) {
		echo "$selected ";
	}
	}

	// COMO EU FIZ

	// if ($selected == null) {
	// 	echo "Nenhuma linguagem selecionada.";
	// }
?>

