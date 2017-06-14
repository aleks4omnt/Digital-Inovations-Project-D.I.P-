		var n=1;

function toggle_visibility() 
    {
        var e = document.getElementById("Frame");
		var c = document.getElementById("exclamation");
		
        if ( e.style.display == 'block' ){
			e.style.display = 'none';
			c.style.display = 'block';
		}
        else{
            e.style.display = 'block';
			c.style.display = 'none';

		}
	}
var area2;
function toggleArea2() {
	if(!area2) {
		area2 = new nicEditor({fullPanel : true}).panelInstance('EditBox',{hasPanel : true});
	} else {
		area2.removeInstance('EditBox');
		area2 = null;
	}
}

