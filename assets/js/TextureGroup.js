function TextureGroup(parameters) {
	this.id = parameters.id; // Type int
	this.groupName = parameters.groupName; // Type string
	this.textures = parameters.textures; // Type array (containing textureOptions)

	this.setDataFromJSON(parameters.exportData); // Type string (encoded in JSON)
	this.calculateHtmlData();

	this.selectedTexture = null;

	this.wizardName = "standard";

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

	// Select the first texture
	if (!(this.selectedTexture in textures)) {
		this.select(textures[0]);
	}
	this.resetTextureElements();
}

TextureGroup.prototype.calculateHtmlData = function () {
	this.elements = elements = {};
	elements.container = $('<div>');
	elements.title = $('<legend>')
		.text(this.groupName)
		.appendTo(elements.container);
	elements.textures = $('<ul class="thumbnails">')
		.appendTo(elements.container);
	for (var i in this.textures) {
		elements.textures.append(this.textures[i].getHtml());
	}
}

TextureGroup.prototype.resetTextureElements = function() {
	this.elements.textures.empty();
	for (var i in this.textures) {
		this.elements.textures.append(this.textures[i].getHtml());
	}
}

TextureGroup.prototype.getHtml = function () {
	return this.elements.container.children();
}

TextureGroup.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
	this.exportPath = data.exportPath; // The image that the texture goes to, eg. 'gui/items.png'
	//this.exportX = data.exportX; // The x position of the texture in the texture sheet
	//this.exportY = data.exportY; // The y position of the texture in the texture sheet
}

TextureGroup.prototype.createOptionForm = function () {
	var that = this;

	var wizard = null;
	$.ajax({
		async: false,
		type: "GET",
		url: "assets/wizards/"+this.wizardName+".html",
		success: function(data) {
			wizard = $(data);

			wizard = wizard.wizard();
			wizard.setSubtitle("to " + that.elements.title.html());

			wizard.cards["details"].on("validate", function(card) {
				var input = card.el.find("#image");
				card.wizard.errorPopover(input, "Test");
				return false;
			});
		}
	});

	return wizard;
}