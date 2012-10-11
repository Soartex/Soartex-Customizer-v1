/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function load() {
    
    var image;
    $('.submit-button').click(function() {
        if ($('.dropimage').length >= 0) {
            // Texture data
            image = $('.dropimage').attr('src');
            
            // Array of screenshot data
            var screenshots = [];
            $("#snapshot li").each(function() {
                screenshots.push($(this).children('img').attr('src'));
            });
            
            var form = $('form').serializeArray();
            
            // True if the 'optional' checkbox is selected
            var is_optional = ($.grep(form, function(item) {
                return (item.name == 'image-optional');
            }).length > 0);
            
            // True if the 'tile' checkbox is selected
            var is_tile = ($.grep(form, function(item) {
                return (item.name == 'is-tile');
            }).length > 0);
            
            // 'start x' and 'start y' data
            if (is_tile) {
                var start_x = $('#startx').attr('value');
                var start_y = $('#starty').attr('value'); 
            }
            else {
                start_x = ""
                start_y = ""
            }
            
            // Rest of the form
            var image_path = $('#imagepath').attr('value');
            var texture_name = $('#texturename').attr('value');
            var mod_name = $('#image-modname').attr('value');
            var description = $('#edit-description').attr('value');
            var creator = $('creator');
            
            // The data that will be submitted 
            data = {
              image : image,
              screenshots: JSON.stringify(screenshots),
              image_path: image_path,
              is_optional: is_optional,
              is_tile: is_tile,
              start_x: start_x,
              start_y: start_y,
              texture_name: texture_name,
              mod_name: mod_name,
              description: description,
              creator: creator
            };
            postIt('submit.php', data);
        }
    });
}

function postIt(url, data){

    $('body').append($('<form/>', {
      id: 'jQueryPostItForm',
      method: 'POST',
      action: url
    }));

    for(var i in data){
      $('#jQueryPostItForm').append($('<input/>', {
        type: 'hidden',
        name: i,
        value: data[i]
      }));
    }

    $('#jQueryPostItForm').submit();
}

$(document).ready(load);