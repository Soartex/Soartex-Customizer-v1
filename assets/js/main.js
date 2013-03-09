var WIZARD_PATH = "assets/wizards/"

$(document).ready(function() {
	$('#btn-edit').click(function() {
		if ($(this).hasClass("edit-active")) {
			$(this)
				.text('Edit')
				.removeClass("btn-primary edit-active");
			$('.add-texture-button').fadeOut("fast");
		} else {
			$(this)
				.text('Done')
				.addClass("btn-primary edit-active");
			$('.add-texture-button').fadeIn("fast");
		}
	});

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