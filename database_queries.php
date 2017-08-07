<?php 

function resetAutoInc($con){
$query = "ALTER TABLE id AUTO_INCREMENT = 1";
if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->close();
}
}


function UpdateLocation($id,$x,$y,$con) {
$query = "UPDATE `pano model`.`text spot` SET `x`='$x', `y`='$y' WHERE `ID`='$id'";
if ($stmt = $con->prepare($query)) {
	$stmt->execute();
    $stmt->close();
}
}

function UpdateContent($id,$Title,$content,$con) {
$query = "UPDATE `pano model`.`text spot` SET `Title`='$Title', `text_content`='$content' WHERE `ID`='$id'";
if ($stmt = $con->prepare($query)) {
	$stmt->execute();
    $stmt->close();
}
}
function insert($type,$Title,$content,$x,$y,$con,$panoID) {
$query ="INSERT INTO `pano model`.`id` (`type`) VALUES ('$type')";
if ($stmt = $con->prepare($query)) {
	$stmt->execute();
    $stmt->close();
}
		$last_id = $con->insert_id;
		insertText($last_id,$Title,$content,$x,$y,$con);
		HotspotToPano($panoID, $last_id, $con);
		return $last_id;
}

function insertText($ID,$Title,$content,$x,$y,$con) {
$query ="INSERT INTO `pano model`.`text spot` (`ID`, `Title`, `text_content`, `x`, `y`) 
VALUES ('$ID', '$Title', '$content', '$x', '$y')";
if ($stmt = $con->prepare($query)) {
	$stmt->execute();
    $stmt->close();

}
}
function HotspotToPano($panoID, $HotspotID, $con) {
$query ="INSERT INTO `pano model`.`panos_has_id` (`Pano_ID`, `Hotspot_ID`) 
VALUES ('$panoID', '$HotspotID')";

if ($stmt = $con->prepare($query)) {
	$stmt->execute();
    $stmt->close();

}
}

function del($num,$con) {
$query = "DELETE FROM `pano model`.`id` WHERE `Hotspot_ID`='$num'";
echo $num;
if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->close();
}
resetAutoInc($con);

}
function selectID($query,$con) {
if ($stmt = $con->prepare($query)) {
	echo "ID</br>";
    $stmt->execute();
    $stmt->bind_result($field1, $field2);
    while ($stmt->fetch()) {
        printf("%s, %s &nbsp\n", $field1, $field2);
    }
    $stmt->close();
}
}
function Show($type,$query,$con) {
if ($stmt = $con->prepare($query)) {
	echo "$type</br>";
    $stmt->execute();
    $stmt->bind_result($field1, $field2, $field3, $field4, $field5);
    while ($stmt->fetch()) {
        printf("%s, %s,%s,%s,%s</br>", $field1, $field2,$field3,$field4,$field5);
    }
    $stmt->close();
}
}
function select($con) {
$query = "SELECT * FROM `pano model`.id";	
selectID($query,$con);
echo "</br>";
$query = "SELECT * FROM `pano model`.`text spot`";	
Show('text',$query,$con);

}

?>