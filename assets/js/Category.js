function Category(parameters) {
	this.id = parameters.id; // Type int
	this.categoryName = parameters.categoryName; // Type string
	this.textures = parameters.textures; // Type array (containing textureOptions)

	this.setDataFromJSON(parameters.exportData); // Type string (encoded in JSON)
	this.calculateHtmlData();
}

Category.prototype.calculateHtmlData = function () {
	this.elements = elements = {};
	elements.container = $('<div>');
	elements.title = $('<legend>')
		.text(this.categoryName)
		.appendTo(elements.container);
	elements.textures = $('<ul class="thumbnails">')
		.appendTo(elements.container);
	for (var i in this.textures) {;
		$(elements.textures).append(this.textures[i].getHtml());
	}
}

Category.prototype.getHtml = function () {
	return this.elements.container.children();
}

Category.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
	this.exportPath = data.exportPath; // The image that the texture goes to, eg. 'gui/items.png'
	this.exportX = data.exportX; // The x position of the texture in the texture sheet
	this.exportY = data.exportY; // The y position of the texture in the texture sheet
}