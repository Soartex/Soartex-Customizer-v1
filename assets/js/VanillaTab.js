function VanillaTab(parameters) {
	this.categories = parameters.categories;
	this.calculateHtmlData();
}

TextureCategory.prototype.setCategories = function(categories) {
	this.categories = categories;
	this.resetCategoryElements();
}

VanillaTab.prototype.calculateHtmlData = function() {
	this.tabElements = {};
	var tabElements = this.tabElements;

	tabElements.container = $("<li class='active'><a data-toggle='tab' href='#vanilla'>Soartex Fanver Vanilla</a></li>");

	this.contentElements = {};
	var contentElements = this.contentElements;

	contentElements.container = $("<div class='tab-pane active' id='vanilla'>");
	contentElements.categoryContainer = $("<div class='tabbable tabs-left'>").appendTo(contentElements.container);
	contentElements.categoryTab = $("<ul class='nav nav-tabs'>").appendTo(contentElements.categoryContainer);
	contentElements.categoryContent = $("<ul class='tab-content'>").appendTo(contentElements.categoryContainer);

	contentElements.addButton = $("<button class='btn btn-small btn-add btn-add-category'><i class='icon-plus'></i> Add a category</button>")
		.hide();
	var popover = "<div class='input-append' id='category-form'><input class='span2' type='password' placeholder='Name' maxlength='25' id='category-name' /><button class='btn' type='button' id='submit-category'>Submit</button></div>"
	contentElements.addButton.popover({
		content: popover,
		placement: "right",
		html: true,
		template: '<div class="popover password-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
	});

	this.resetCategoryElements()
}

VanillaTab.prototype.resetCategoryElements = function() {
	this.contentElements.categoryTab.empty();
	this.contentElements.categoryContent.empty();
	for (var i in this.categories) {
		this.contentElements.categoryTab.append(this.categories[i].getTabHtml());
		this.contentElements.categoryContent.append(this.categories[i].getContentHtml());
	}
	this.contentElements.categoryTab.children(":first").addClass("active");
	this.contentElements.categoryContent.children(":first").addClass("active");

	this.contentElements.addButton.appendTo(this.contentElements.categoryTab);
}

VanillaTab.prototype.getTabHtml = function() {
	return this.tabElements.container;
}

VanillaTab.prototype.getContentHtml = function() {
	return this.contentElements.container;
}