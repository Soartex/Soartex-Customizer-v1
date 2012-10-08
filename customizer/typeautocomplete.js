/* 
 * Gets the list of types and puts them in a convenient autocomplete box
 */

function makeField(data, status, xhr) {
    typeNames = ['te', 'tr'];
    $.each(data, function(i,item) {
       typeNames.push(item.name);
    });
    $("#type-autocomplete").autocomplete({
        source: typeNames
    });
}

function getTypes() {
    $.getJSON('customizer/gettypes.php', [], makeField);
}

$(document).ready(getTypes);

function switchToPredefined() {
    $('#create-type :input').attr('disabled', true);
    $('#create-type :form').attr('disabled', true);
    $('#premade-type :select').attr('disabled', false);
}

function switchToPredefined() {
    $('#premade-type :input').attr('disabled', true);
    $('#create-type :input').attr('disabled', false);
    $('#create-type :select').attr('disabled', false);
}