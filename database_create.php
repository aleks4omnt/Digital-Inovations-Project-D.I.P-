<?php 	include 'php_database_conection.php';
		include 'database_queries.php';
		include 'Load().php';
		

$action=$_POST['action'];


	if($action=="create"){
$type = $_POST['type'];
$Title= $_POST['Title'];
$content= $_POST['content'];
$x= $_POST['x'];
$y= $_POST['y'];
$panoID= $_POST['pano_ID'];
	
			
$a=insert($type,$Title,$content,$x,$y,$con,$panoID);

	echo $a;

	}
	
	
	
	if($action=="load"){
$panoID= $_POST['panoID'];
	
ShowHotspotsInPano($panoID,$con);
	}
	
	
	if($action=="move"){		
$id= $_POST['id'];
$x= $_POST['x'];
$y= $_POST['y'];			
UpdateLocation($id,$x,$y,$con);
	}
	
	if($action=="delete"){		
$id= $_POST['id'];
		del($id,$con);
	}
	
	if($action=="save"){		
$id= $_POST['id'];
$Title= $_POST['Title'];
$content= $_POST['content'];		
UpdateContent($id,$Title,$content,$con);
	}
	
	if($action=="delete"){		
$id= $_POST['id'];
		del($id,$con);
	}
	?>