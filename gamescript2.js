document.addEventListener("DOMContentLoaded", function(){
	var selectedClass = document.getElementById("selectedClass");
	selectedClass.addEventListener("change", function(){
		if(selectedClass.value === "tank"){
			var hideClass = document.getElementsByTagName("img");
			var charName = document.getElementsByClassName("characterName");
			for(var i = 0; i < hideClass.length; i++){
				if(hideClass[i].classList.contains("offense")){
hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("deffense")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("support")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("tank")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
			}
		}
		else if(selectedClass.value === "offense"){
			var hideClass = document.getElementsByTagName("img");
			var charName = document.getElementsByClassName("characterName");
			for(var i = 0; i < hideClass.length; i++){
				if(hideClass[i].classList.contains("tank")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("deffense")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("support")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("offense")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
			}
		}
		else if(selectedClass.value === "deffense"){
			var hideClass = document.getElementsByTagName("img");
			var charName = document.getElementsByClassName("characterName");
			for(var i = 0; i < hideClass.length; i++){
				if(hideClass[i].classList.contains("offense")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("tank")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("support")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("deffense")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
			}
		}
		else if(selectedClass.value === "support"){
			var hideClass = document.getElementsByTagName("img");
			var charName = document.getElementsByClassName("characterName");
			for(var i = 0; i < hideClass.length; i++){
				if(hideClass[i].classList.contains("offense")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("deffense")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("tank")){
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
				else if(hideClass[i].classList.contains("support")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
			}
		}
		if(selectedClass.value === "Show All"){
			var hideClass = document.getElementsByTagName("img");
			var charName = document.getElementsByClassName("characterName");
			for(var i = 0; i < hideClass.length; i++){
				if(hideClass[i].classList.contains("displayNone")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
			}
		}

	})
})