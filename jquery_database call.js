	// database interactions

	function CreateSpot(type,Title,content,x,y,pano_ID){
	$.ajax({
	  type: "POST",
	  url: "database/database_create.php",
		// dataType: 'application/json',
	  data: {
		  type:type,
		  Title:Title,
		  content:content,
		  x:x,
		  y:y,
		  pano_ID:pano_ID,
		  action:"create"},
		  success:function(data)
		  {
			CreateContainerDiv(Title,content,y,x,data);
			
	  }
	});
	}

	function LoadSpots(panoID){
	$.ajax({
	  type: "POST",
	  url: "database/database_create.php",
		dataType: 'JSON',
	  data: {
		
		  panoID:panoID,
		  action:"load"},
		  success:function(data){
			  
		   // alert(data[0][0]);
		   // alert(data[0][1]);
		   // alert(data[0][2]);
		   // alert(data[0][3]);
		   // alert(data[0][4]);		   
		for(var i=0;i<data.length;i++){
			var n=		data[i][0];
			var Title=	data[i][1];
			var content=data[i][2];
			var x =		data[i][3];
			var y=		data[i][4];
			CreateContainerDiv(Title,content,y,x,n);
		}
		  
			
	  }
	});

	}
	
	
	

	function Save(id,Title,content){

	$.ajax({
	  type: "POST",
	  url: "database/database_create.php",
	  data: {
		  id:id,
		  Title:Title,
		  content:content,
		  action:"save"},
		  success:function(data)
		  {

			alert("succes");

	  }
		});
		}
		
		
		
		
		
		
		
		function DeleteSpot(id){

	$.ajax({
	  type: "POST",
	  url: "database/database_create.php",
	  data: {
		  id:id,
		  action:"delete"},
		});
	}
	
	
	
	function MoveSpot(id,x,y){

	$.ajax({
	  type: "POST",
	  url: "database/database_create.php",
	  data: {
		  id:id,
		  x:x,
		  y:y,
		  action:"move"},
		});
		}
		// function DeleteSpot(id){

	// $.ajax({
	  // type: "POST",
	  // url: "database/database_create.php",
	  // data: {
		  // id:id,
		  // action:"delete"},
		// });
		// }
	//database interactions
		
