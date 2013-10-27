/**
 * This class holds data for an entire group (e.g. 'Grass', 'Sand', etc.)
 */

function TextureGroup(parameters) {
	this.id        = parameters.id;        // Type int
	this.textures  = parameters.textures;  // Type array (containing textureOptions)
	this.groupName = parameters.groupName; // Type string

	this.setDataFromJSON(parameters.exportData); // Type string (encoded in JSON)
	this.calculateHtmlData();

	this.selectedTexture = null;

	this.optionModalName = "standard.html";
}

TextureGroup.prototype.select = function(texture) {
	if (this.selectedTexture !== null) {
		this.selectedTexture.setDeselected();
	}
	if (texture !== null) {
		texture.setSelected();
	}
	this.selectedTexture = texture;
}

TextureGroup.prototype.setTextures = function(textures) {
	this.textures = textures;

	this.resetTextureElements();
}

TextureGroup.prototype.calculateHtmlData = function() {
	var that = this;

	this.elements = {};
	var elements = this.elements;

	elements.container = $('<div class="group-container">');
	$('<hr>').appendTo(elements.container); // CSS is used to remove the first <hr>
	elements.title = $('<div class="group-title">')
		.text(this.groupName)
		.appendTo(elements.container);
	elements.remove = $("<i class='icon-remove edit remove'>")
		.click(function() {
			that.delete();
		})
		.appendTo(elements.title)
		.hide();
	elements.textures = $('<div class="btn-group texture-group" data-toggle="buttons-radio">')
		.appendTo(elements.container);
	this.elements.addButton = $('<button class="btn edit btn-add-texture"><img src="assets/img/addtexture.png"/><p>Add a Texture</p><div>')
		.click(function() {
			that.showUploadForm();
		})
		.mousedown(function(e) {
			e.preventDefault();
		})
		.hide()
		.appendTo(this.elements.container)
	this.resetTextureElements();
}

// Called when a texture is added/deleted/modified
TextureGroup.prototype.resetTextureElements = function() {
	this.elements.textures.empty();
	for (var i in this.textures) {
		this.elements.textures.append(this.textures[i].getHtml());
	}
	this.elements.textures.children(":first").addClass("active");
}

TextureGroup.prototype.getHtml = function() {
	return this.elements.container;
}

TextureGroup.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
	this.exportPath = data.exportPath; // The image that the texture goes to, eg. 'gui/items.png'
	this.width = data.width; // The x position of the texture in the texture sheet
	this.height = data.height; // The y position of the texture in the texture sheet
}

TextureGroup.prototype.showUploadForm = function() {
	var that = this;

	var modal = null;
	$.ajax({
		async: false,
		type: "GET",
		url: OPTION_MODAL_PATH+this.optionModalName,
		success: function(data) {
			modal = $(data);

			modal.find(".modal-inline h5").text("to "+that.groupName);
			modal.find("#dropbox").dropbox({type: "image/png"});
			modal.find(".btn-submit").click(function() {
				$(this).attr("disabled", "disabled");
				that.uploadOption(modal);
			})
			modal.find(".modal-close").click(function() {
				modal.modal("hide");
			});
		}
	});

	modal.modal("show");
}

TextureGroup.prototype.uploadOption = function(modal) {
	var data = {
		"password":   password,
		"creator":    modal.find("#creator").val(),
		"info": 	  modal.find("#info").val(),
		"image_data": modal.find("#dropbox").attr("data"),
		"export_data": "{}",
		"group":      this.id
	};
	$.post(HTTPS_PATH+"assets/php/insert/option/default.php", data, function(data) {
		var newWindow = window.open("");
		newWindow .document.open()
		newWindow .document.write(data)
		newWindow .document.close()
		modal.modal("hide");
		resetCustomizer();
	});
}

TextureGroup.getExportData = function(modal) {
	return {
		width: modal.find("#width").val(),
		height: modal.find("#height").val(),
		exportPath: modal.find("#path").val()
	};
}

TextureGroup.prototype.delete = function() {
	$.post(HTTPS_PATH+"assets/php/delete/group.php", {
		"password": password,
		"id":       this.id
	}, function(data) {
		resetCustomizer();
	});
}

TextureGroup.optionType = TextureOption;
TextureGroup.groupModalPath = "standard.html";
TextureGroup.typeName = "Stand-alone texture";