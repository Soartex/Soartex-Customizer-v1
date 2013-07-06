function VanillaTab(parameters) {
	this.categories = parameters.categories;
	this.calculateHtmlData();
}

TextureCategory.prototype.setCategories = function(categories) {
	this.categories = categories;
	this.resetCategoryElements();
}

VanillaTab.prototype.calculateHtmlData = function() {
	var that = this;

	this.tabElements = {};
	var tabElements = this.tabElements;

	tabElements.container = $("<li class='active'><a data-toggle='tab' href='#vanilla'>Soartex Fanver Vanilla</a></li>");

	this.contentElements = {};
	var contentElements = this.contentElements;

	contentElements.container = $("<div class='tab-pane active' id='vanilla'>");
	contentElements.categoryContainer = $("<div class='tabbable tabs-left'>").appendTo(contentElements.container);
	contentElements.categoryTab = $("<ul class='nav nav-tabs'>").appendTo(contentElements.categoryContainer);
	contentElements.categoryContent = $("<ul class='tab-content'>").appendTo(contentElements.categoryContainer);

	contentElements.addForm = $("<div class='input-append category-form edit'>'").hide();
	contentElements.nameInput = $("<input class='input-small' type='text' placeholder='Name'/>").appendTo(contentElements.addForm);
	contentElements.addButton = $("<button class='btn btn-small btn-add-category'><i class='icon-plus'></i></button>").appendTo(contentElements.addForm);

	contentElements.addButton.click(function() {
		var that = $(this);
		$(this).attr("disabled", "disabled");

		var data = {
			password: password,
			name: contentElements.nameInput.val()
		};
		$.post(HTTPS_PATH+"assets/php/insert/category/vanilla.php", data, function(data) {
			that.removeAttr("disabled");
		});

	})

	this.resetCategoryElements();
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

	this.contentElements.addForm.appendTo(this.contentElements.categoryTab);
}

VanillaTab.prototype.getTabHtml = function() {
	return this.tabElements.container;
}

VanillaTab.prototype.getContentHtml = function() {
	return this.contentElements.container;
}

VanillaTab.prototype.uploadCategory = function() {
	var data = {
		name: $('#category-form').val()
	};
	console.log(data);
}