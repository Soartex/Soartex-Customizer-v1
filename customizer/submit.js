/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function load() {
    
    $('input').blur(function() {
        $(this).tooltip('destroy');
    });
    $('input').keyup(function() {
        $(this).tooltip('destroy');
    });
    
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
            
            // Equiv. to true if the 'optional' checkbox is selected
            var is_optional = $("#is-optional:checked").length
            
            // Equiv. to true if the 'tile' checkbox is selected
            var is_tile = $("#TilesheetCheck:checked").length
            
            // 'start x' and 'start y' data
            if (is_tile) {
                var start_x = $('#startx').attr('value'),
                    start_y = $('#starty').attr('value');
                var validatedx = /^\+?(0|[1-9]\d*)$/.test(start_x),
                    validatedy = /^\+?(0|[1-9]\d*)$/.test(start_y);
                    
                validate('#startx', validatedx, 'The start x value must be a number', 'top');
                validate('#starty', validatedy, 'The start y value must be a number', 'top');
            }
            else {
                start_x = ""
                start_y = ""
            }
            
            // Rest of the form
            var image_path = $('#imagepath').attr('value');
            var validatepath = /^\/?([\w\d]+\/.)*[\w\d]+\.png$/.test(image_path);
            validate('#imagepath', validatepath, 'The image path must be a valid path ending in .png');
            
            var texture_name = $('#texturename').attr('value');
            validate('#texturename', texture_name, 'Please enter in a texture name');
            
            var mod_name = $('#image-modname').attr('value');
            validate('#image-modname', mod_name, 'Please enter in a mod name');
            
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
        //postIt('submit.php', data);
            
            
        }
    });
}

function validate(element, bool, text, dir) {
    console.log(1);
    if (!bool) {
        errorTip(element, text, dir)
    }
}

function errorTip(element, text, dir) {
    var direction = dir || 'right'
    $(element)
        .tooltip({
            title: '<i class="icon-warning-sign icon-white"></i> ' + text,
            trigger: 'manual',
            placement: dir
        })
        .tooltip('show')
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