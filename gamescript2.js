document.addEventListener("DOMContentLoaded", function(){
	var selectedClass = document.getElementById("selectedClass");
	selectedClass.addEventListener("change", function(){
		var hideClass = document.getElementsByClassName("overwatch");
		var charName = document.getElementsByClassName("characterName");
		for(var  i = 0; i < hideClass.length; i++){
			if(selectedClass.value === "offense"){
				if(hideClass[i].classList.contains("offense")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
				else{
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
			}
			else if (selectedClass.value === "deffense"){
				if (hideClass[i].classList.contains("deffense")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
				else{
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
			}
			else if(selectedClass.value === "tank"){
				if(hideClass[i].classList.contains("tank")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
				else{
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
			}
			else if(selectedClass.value === "support"){
				if(hideClass[i].classList.contains("support")){
					hideClass[i].classList.remove("displayNone");
					charName[i].classList.remove("displayNone");
				}
				else{
					hideClass[i].classList.add("displayNone");
					charName[i].classList.add("displayNone");
				}
			}
			else{
				hideClass[i].classList.remove("displayNone");
				charName[i].classList.remove("displayNone");
			}
		}
	})
});