var OPTION_MODAL_PATH = "assets/modals/option/";
var HTTPS_PATH = "https://soartex.net/new-site/customizer/";
var GROUP_TYPES = [TextureGroup]; // Group types will be accessed through its index, and vice versa

var password;

$(document).ready(function() {

	setupGroupIndices(); // Assigns an index ID to each group type (equal to it's index in GROUP_TYPES)
	setupTextures();
	setupEditButton();
});

function setupGroupIndices() {
	for (var i in GROUP_TYPES) {
		GROUP_TYPES[i].index = Number(i);
	}
}

function setupTextures() {
	$.post("assets/php/get/all.php", "", function(data) {
		processTextures(JSON.parse(data));
	});
}

function processTextures(data) {
	var vanillaTabObj = data;

	var categories = [];
	for (i in vanillaTabObj) {
		var categoryObj = vanillaTabObj[i];

		var groups = [];
		for (j in categoryObj.groups) {
			var groupObj = categoryObj.groups[j];

			var GroupType = GROUP_TYPES[groupObj.type_id];

			var options = [];
			for (k in groupObj.options) {
				var optionObj = groupObj.options[k];
				options.push(new GroupType.optionType({
					id:          Number(optionObj.texture_id),
					info:        optionObj.info,
					group:       optionObj.group_id,
					creator:     optionObj.creator,
					dateAdded:   new Date(optionObj.date_added+" GMT+0"),
					screenshots: [],
					exportData:  optionObj.export_data
				}));
			}

			groups.push(new GroupType({
				id:         Number(groupObj.group_id),
				textures:   options,
				groupName:  groupObj.name,
				exportData: groupObj.export_data
			}));
		}

		categories.push(new TextureCategory({
			id:           categoryObj.category_id,
			groups:       groups,
			categoryName: categoryObj.name
		}));
	}
	var vanillaTab = new VanillaTab({
		categories: categories
	})
	vanillaTab.getTabHtml().appendTo("#mod-tab");
	vanillaTab.getContentHtml().appendTo("#mod-tab-content");
	console.log(vanillaTab);
}