var MODAL_PATH = "assets/modals/";
var HTTPS_PATH = "https://soartex.net/new-site/customizer/";
var groupTypes = [TextureGroup]; // Group types will be accessed through its index, and vice versa

$(document).ready(function() {

	setupGroupIndices(); // Assigns an index ID to each group type (equal to it's index in groupTypes)
	setupEditButton();

	/*
	 // Adds a new texture to the database
	 $.post('assets/php/insert/texture.php', {
	 name: 	 "Test",
	 creator: "Nobody",
	 info:	 "",
	 preset:	 1,
	 group:	 1,
	 export_data: "{}"
	 }, function(result) {
	 $('body').append(result);
	 })
	 */

});

function setupGroupIndices() {
	for (var i in groupTypes) {
		groupTypes[i].index = Number(i);
	}
}