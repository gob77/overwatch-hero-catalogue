document.addEventListener("DOMContentLoaded", function(){
	var selectedClass = document.getElementById("selectedClass");
	selectedClass.addEventListener("change", function(){

		var hideClass = document.getElementsByClassName("image-holder");
		for(var i = 0; i < hideClass.length; i++){

			if(selectedClass.value === "all"){
				hideClass[i].classList.remove("displayNone");
			}
			else {
				if(hideClass[i].classList.contains(selectedClass.value)){
					hideClass[i].classList.remove("displayNone");
				}
				else{
					hideClass[i].classList.add("displayNone");
				}
			}
		}
	})
})