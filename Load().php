<?php 

function ShowHotspotsInPano($Pano_ID,$con) {
	$array=array();
	$i=0;
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
		$array[$i]=array($ID,$Title,$content,$x,$y);
		// $array[$i]=array('id'=>$ID,'title'=>$Title,'content'=>$content,'x'=>$x,'y'=>$y);
		$i++;
    }

	
	// }
    $stmt->close();
}
echo json_encode($array);
// echo $array[0][0];

}
?>