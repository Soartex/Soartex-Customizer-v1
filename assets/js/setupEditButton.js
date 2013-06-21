function setupEditButton() {

	var passwordAccepted = false;

	var $editButton = $("#btn-edit");

	var passwordPopover = "<div class='input-append'><input class='span2' type='password' placeholder='Password' id='admin-password-input' /><button class='btn' type='button' id='submit-admin-password'>Submit</button></div>"
	$editButton.popover({
		content: passwordPopover,
		placement: "left",
		html: true,
		template: '<div class="popover password-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
		title: "Password Required"
	});

	function editButton() {
		if (passwordAccepted) {
			toggleEditButtons();
		} else {
			$("#submit-admin-password").click(submitAdminPassword);
			$("#admin-password-input").keypress(function(e) {
				if (e.keyCode == 13) {
					submitAdminPassword();
				}
			});
			$("#admin-password-input").focus();
		}
	}

	function submitAdminPassword() {
		var isValidPassword;
		$.ajax({
			async: false,
			type: "POST",
			data: { "password": $("#admin-password-input").val() },
			url: httpsPath + "assets/php/password_validation",
			success: function(data) {
				console.log(data);
				isValidPassword = (data == "1");
			}
		});
		if (isValidPassword) {
			passwordAccepted = true;
			$editButton.popover("destroy");
			toggleEditButtons();
		} else {
			$("#admin-password-input").val("");
		}
	}

	function toggleEditButtons() {
		if ($editButton.hasClass("edit-active")) {
			$editButton
				.text("Edit")
				.removeClass("btn-primary edit-active");
			$(".btn-add").fadeOut("fast");
		} else {

			$editButton
				.text("Done")
				.addClass("btn-primary edit-active");
			$(".btn-add").fadeIn("fast");
		}
	}

	$editButton.click(editButton);
}