/**
 * This class contains data for the side-tabs in the Vanilla section (e.g. 'Armor', 'Art' etc.)
 */

function TextureCategory(parameters) {
	this.id = parameters.id; // Type int
	this.categoryName = parameters.categoryName; // Type string
	this.groups = parameters.groups; // Type array (containing textureGroups)

	this.calculateHtmlData();
}

TextureCategory.prototype.select = function(groups) {
	this.tabElements.link.tab('show');
}

TextureCategory.prototype.setGroups = function(groups) {
	this.groups = groups;
	this.resetGroupElements();
}

TextureCategory.prototype.calculateHtmlData = function() {
	this.tabElements = {};
	var tabElements = this.tabElements;
	tabElements.container = $("<li>")
	tabElements.link = $("<a data-toggle='tab' href='#category-"+this.id+"'>")
		.text(this.categoryName)
		.appendTo(tabElements.container);

	this.contentElements = {};
	var contentElements = this.contentElements;
	contentElements.container = $("<div class='tab-pane' id='category-"+this.id+"'>");
	contentElements.groups = $("<div>").appendTo(contentElements.container);

	$('<hr class="btn-add">')
		.hide()
		.appendTo(contentElements.container);
	contentElements.addButton = $("<button class='btn btn-large btn-add btn-add-group'>Add a group</button>")
		.hide()
		.appendTo(contentElements.container);

	this.resetGroupElements();
}

// Called when a texture is added/deleted/modified
TextureCategory.prototype.resetGroupElements = function() {
	this.contentElements.groups.empty();
	for (var i in this.groups) {
		this.contentElements.groups.append(this.groups[i].getHtml());
	}
}

TextureCategory.prototype.getTabHtml = function () {
	return this.tabElements.container;
}

TextureCategory.prototype.getContentHtml = function () {
	return this.contentElements.container;
}