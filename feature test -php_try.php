<?php 	include 'database/php_database_conection.php';
		include 'database/database_queries.php';
		$pano=2;
		?>
<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" href="style.css">
<script src="jquery-3.2.1.js"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
<script src="database/jquery_database call.js"></script>
<script src="scrypts.js" type="text/javascript"></script>
<script src="nicEdit2.js" type="text/javascript"></script>
  <meta charset="UTF-8">
<title>php -feature testing html</title>

<form name="form" action="" method="get">
<div id="pano_ID" name ="pano_ID" type="text" value="<?php echo $pano;?>"></div>
</form>

</head>

<body onload="EditSwitchCheck()">
<script>
<!-- window.onload = EditSwitchCheck(); -->

</script>
<div id="bigImage" class="bigImage" >

<label class="switch" onMouseOver="this.style.cursor='pointer'" >
<input type="checkbox" id="togBtn" onclick="toggleEdit()" checked>
<div class="slider round">
<span class="on">View</span>
<span class="off">Edit</span>
</div>
</label>

<img id="dragNdrop" class="EditSwitch" src="exclamation.png" 
draggable="true" ondragstart="drag(event)"
 style="width:50px;height:50px;  
position:absolute; top: 100px; left: 50px;";
onMouseOver="this.style.cursor='pointer'"
/ >

<img id="TrashCan" class="EditSwitch" src="recycle.png" 
 style="width:50px;height:50px;  
position:absolute; top: 200px; left: 50px;";
onMouseOver="this.style.cursor='pointer'" 
ondragover="allowDrop(event)" 
draggable="false"
ondrop="deleteDrop(event)"
/ >


<!--<img id="QuestionMark" class="EditSwitch" src="question.png" 
 style="width:50px;height:50px;  
position:absolute; top: 200px; left: 150px;";
onMouseOver="this.style.cursor='pointer'" 
onclick="pano_ID()"
draggable="false"
/ >-->


<img class="backroundImg" src="backround.jpg" 
onmousedown="return false"
ondragover="allowDrop(event)" 
draggable="false"
ondrop="drop(event)"
/ >

<?php

ShowHotspotsInPano($pano,$con);
				


?>
</body>


<script "type="text/javascript">


</script>
<?php 	

function ShowHotspotsInPano($Pano_ID,$con) {
	$query="
	SELECT 
`pano model`.`text spot`.ID,
`pano model`.`text spot`.Title,
`pano model`.`text spot`.Text_content, 
`pano model`.`text spot`.x ,
`pano model`.`text spot`.y
FROM `pano model`.`text spot`,`pano model`.`panos_has_id`
Where
 `pano model`.`panos_has_id`.pano_ID ='$Pano_ID' AND
`pano model`.`text spot`.ID =`pano model`.`panos_has_id`.Hotspot_ID";
if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($ID, $Title, $content, $x, $y);
    while ($stmt->fetch()) {
         // printf("%s, %s,%s,%s,%s</br>", $ID, $Title,$content,$x,$y);
			echo "<script type='text/javascript'>
				CreateContainerDiv('$Title','$content','$y','$x','$ID');

				 </script>"
				 ;

    }
    $stmt->close();
}

}

	


?>
