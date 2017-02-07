document.addEventListener("DOMContentLoaded", function() {
	var selectedClass = document.getElementById("selectedClass");

	selectedClass.addEventListener("change", function() {
		var i, image,
		type = this.value,
		images = document.getElementsByClassName("image-holder");

		for(i = 0; i < images.length; i++) {
			image = images[i].classList;

			this.value === 'all' || image.contains(this.value) ?
				image.remove("displayNone") : image.add("displayNone");
		}
	});

});