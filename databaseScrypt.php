<?php 	include 'php_database_conection.php';
		include 'database_queries.php';
		include 'Load().php';
		?>

<html>
<head><title>database php</title>
</head>
<body>
<form action="" method = "POST">
<input id="variable" name="variable" value="" type="text"></br>
<button type ="submit" name="SelectAll" value="SelectAlla"> SelectAll </button>
<button type ="submit" name="insert" value="insert"> insert </button>
<button type ="submit" name="DELETE" value="DELETE"> DELETE </button>
<button type ="submit" name="update" value="update"> hotspots in panos </button>
</form>

</body>
</html>
<?php 
// $action=$_POST['action'];
	// if($action=="create"){
// $type = $_POST['type'];
// $Title= $_POST['Title'];
// $content= $_POST['content'];
// $x= $_POST['x'];
// $y= $_POST['y'];
	
			
// $a=insert($type,$Title,$content,$x,$y,$con);

// echo json_encode(array("a"=>"asd","b"=>"asdAS"))
	// }
	
	
	
	// if($action=="move"){		
// $id= $_POST['id'];
// $x= $_POST['x'];
// $y= $_POST['y'];			
// UpdateLocation($id,$x,$y,$con);
	// }
	
	// if($action=="delete"){		
// $id= $_POST['id'];
		// del($id,$con);
	// }
	
	
	
if (isset($_POST['DELETE']))
{
        $variable= $_POST['variable'];
		del($variable,$con);
}
if (isset($_POST['insert']))
{
        $variable= $_POST['variable'];
			ShowHotspotsInPano($variable,$con);

}
if (isset($_POST['SelectAll']))
{
        select($con);
}
if (isset($_POST['update']))
{
	$variable= $_POST['variable'];
ShowHotspotsInPano($variable,$con);
}
$con->close(); 
?>
