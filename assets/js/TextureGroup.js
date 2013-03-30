/**
 * This class holds data for an entire group (e.g. 'Grass', 'Sand', etc.)
 */

function TextureGroup(parameters) {
	this.id = parameters.id; // Type int
	this.groupName = parameters.groupName; // Type string
	this.textures = parameters.textures; // Type array (containing textureOptions)

	this.setDataFromJSON(parameters.exportData); // Type string (encoded in JSON)
	this.calculateHtmlData();

	this.selectedTexture = null;

	this.modalName = "standard.html";

	//this.createOptionForm().show();
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
	$('<hr>').appendTo(elements.container); // CSS is used to remove the first hr
	elements.title = $('<div class="group-title">')
		.text(this.groupName)
		.appendTo(elements.container);
	elements.textures = $('<div class="btn-group texture-group" data-toggle="buttons-radio">')
		.appendTo(elements.container);
	this.elements.addButton = $('<button class="btn btn-add btn-add-texture"><img src="assets/img/addtexture.png"/><p>Add a Texture</p><div>')
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
	//this.exportX = data.exportX; // The x position of the texture in the texture sheet
	//this.exportY = data.exportY; // The y position of the texture in the texture sheet
}

TextureGroup.prototype.showUploadForm = function() {
	var that = this;

	var modal = null;
	$.ajax({
		async: false,
		type: "GET",
		cache: false, // For testing (so that changes can be tested without content being cached)
		url: MODAL_PATH+this.modalName,
		success: function(data) {
			modal = $(data);

			modal.find(".modal-inline h5").text("to "+that.elements.title.html());
			modal.find("#dropbox").dropbox({type: "image/png"});
			modal.find(".modal-close").click(function() {
				modal.modal("hide");
			});
		}
	});

	modal.modal("show");
}