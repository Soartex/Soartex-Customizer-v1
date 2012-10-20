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
    
    $('.submit-button').click(function() {
        
        var accepted = true
        
        var validate = function(element, bool, text, dir) {
            if (!bool) {
                errorTip(element, text, dir)
                accepted = false
            }
        }
        
        var image, file, screenshots, is_optional, is_tile, start_x, start_y,
        start_line, path, name, mod_name, description, creator, validatepath,
        is_segment
        ;
        
        if ($('.dropimage').length) {
            // Texture data
            image = $('.dropimage').attr('src');
            
            // Array of screenshot data
            screenshots = [];
            $("#snapshot li").each(function() {
                screenshots.push($(this).children('img').attr('src'));
            });
            
            // Equiv. to true if the 'optional' checkbox is selected
            is_optional = $("#is-optional:checked").length
            
            // Equiv. to true if the 'tile' checkbox is selected
            is_tile = $("#TilesheetCheck:checked").length
            
            // 'start x' and 'start y' data
            if (is_tile) {
                start_x = $('#startx').attr('value'),
                start_y = $('#starty').attr('value');
                var validatedx = /^\+?(0|[1-9]\d*)$/.test(start_x),
                validatedy = /^\+?(0|[1-9]\d*)$/.test(start_y);
                    
                validate('#startx', validatedx, 'The start x value must be a number', 'bottom');
                validate('#starty', validatedy, 'The start y value must be a number', 'top');
            }
            
            // Rest of the form
            path = $('#imagepath').attr('value');
            validatepath = /^\/?([\w\d]+\/.)*[\w\d]+\.png$/.test(path);
            validate('#imagepath', validatepath, 'The image path must be a valid path ending in .png');
            
            name = $('#texturename').attr('value');
            validate('#texturename', name, 'Please enter in a texture name');
            
            mod_name = $('#image-modname').attr('value');
            validate('#image-modname', mod_name, 'Please enter in a mod name');
            
            description = $('#edit-description').attr('value');
            creator = $('creator');
           
        }
        
        // If the file is text
        else if ($('.dropfile').length) {
            // Texture data
            file = $('.dropfile').html();
            file = file.replace(/&amp;/g, '&')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/<br>/g, '\n');
            
            // Array of screenshot data
            screenshots = [];
            $("#snapshot li").each(function() {
                screenshots.push($(this).children('img').attr('src'));
            });
            
            // Equiv. to true if the 'optional' checkbox is selected
            is_optional = $("#file-optional:checked").length
            
            // Equiv. to true if the 'tile' checkbox is selected
            is_segment = $("#fileline-check:checked").length
            
            // 'start x' and 'start y' data
            if (is_segment) {
                start_line = $('#startx').attr('value');
                var validatedline = /^\+?(0|[1-9]\d*)$/.test(start_line);
                validate('#startline', validatedline, 'The start line value must be a number');
            }
            
            // Rest of the form
            path = $('#file-path').attr('value');
            validatepath = /^\/?([\w\d]+\/.)*[\w\d]+\.[\w\d]+$/.test(path);
            validate('#file-path', validatepath, 'The file path must be a valid path');
            
            name = $('#file-name').attr('value');
            validate('#file-name', name, 'Please enter in a file name');
            
            mod_name = $('#file-mod-name').attr('value');
            validate('#file-mod-name', mod_name, 'Please enter in a mod name');
            
            description = $('#edit-description').attr('value');
            creator = $('creator');
        }
        else {
            accepted = false;
        }
        
        // The data that will be submitted 
        var data = {
            image : image,
            file : file,
            screenshots: JSON.stringify(screenshots),
            path: path,
            is_optional: is_optional,
            is_tile: is_tile,
            is_segment: is_segment,
            start_x: start_x,
            start_y: start_y,
            start_line : start_line,
            name: name,
            mod_name : mod_name,
            description: description,
            creator: creator
        };
        if (accepted) {
            postIt('submit.php', data);
        }
    });
}

function errorTip(element, text, dir) {
    var direction = dir || 'right'
    $(element)
    .tooltip({
        title: '<i class="icon-warning-sign icon-white"></i> ' + text,
        trigger: 'manual',
        placement: direction
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