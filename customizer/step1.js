// Sets up the file upload box

$(document).ready(function() {

    // Makes sure the dataTransfer information is sent when we
    // Drop the item in the drop box.
    jQuery.event.props.push('dataTransfer');

    // Contains the data URI
    var fileData = {};

    // Bind the drop event to the dropzone.
    $('#drop-files').bind('drop', function(e) {
        // Stop the default action, which is to redirect the page
        // To the dropped file
        
        var file = e.dataTransfer.files[0];
        
        // Get the file type
        var type
        if ($.inArray(file.type, ["image/gif", "image/png", "image/jpeg"]) > -1) {
            type = 'image'
        }
        else if (file.type.match("text.*")) {
            type = 'text'
        }
        else {
            return true;
        }
        
        // Start a new instance of FileReader
        var fileReader = new FileReader();
        

        // When the filereader loads initiate a function
        fileReader.onload = (function(file) {
            return function(e) {
                fileData = {
                    name : file.name, 
                    value : this.result
                };
                var data = this.result;
                
                // Resise the background to fit the image
                $('#drop-files').css({
                    'width' : 'auto',
                    'height' : 'auto',
                    'padding' : '25px 25px 25px 25px'
                });
                
                // Put the file into the box
                $('#drop-files').empty();
                $('#drop-files').css('background', '#FCFCFC');
                
                var droppedFile;
                
                // If the file is an image
                if (type == 'image') {
                    droppedFile = $('<img class="dropimage" draggable="false" src="'+data+'" alt="'+fileData.name+'">')
                    .appendTo(('#drop-files'))
                    
                    // Restrict either the width or height, whichever one is bigger
                    .load(function() {
                        var width = this.width;
                        var height = this.height;
                        if (height > width) {
                            $('.dropimage').css('height', '250')
                        }
                        else {
                            $('.dropimage').css('width', '250')
                        }
                    });
                    
                    switchToImageForm();
                }
                // If the file is text
                else {
                    droppedFile = $('<div class="dropfile">')
                    .appendTo('#drop-files');
                    
                    var splitData = data.split("\n"),
                        lineNumber;
                    for (lineNumber in data.split("\n")) {
                        droppedFile
                            .append(splitData[lineNumber])
                            .append('<br />');
                    }
                    
                    switchToFileForm();
                }
                droppedFile.bind('dragstart', function(event) {
                    event.preventDefault();
                });
                droppedFile.bind('select', function(event) {
                    event.preventDefault();
                });
                
                // Special effects
                droppedFile.hide();
                droppedFile.fadeIn('fast');
            };

        })(file);

        // For data URI purposes
        if (type == 'image') {
            fileReader.readAsDataURL(file);
        }
        else {
            fileReader.readAsText(file)
        }
    });

    // Just some styling for the drop file container.
    $('#drop-files').bind('dragenter', function() {
        $(this).css({
            'background-color' : '#DDDDDD',
            'transition' : 'background 0.4s',
            '-moz-transition' : 'background 0.4s', // Firefox 4
            '-webkit-transition':  'background 0.4s', // Safari and Chrome
            '-o-transition' : 'background 0.4s' // Opera
        });
        return false;
    });

    $('#drop-files').bind('dragleave', function() {
        $(this).css({
            'background-color' : '#FCFCFC',
            'transition' : 'background 0.4s',
            '-moz-transition' : 'background 0.4s', // Firefox 4
            '-webkit-transition':  'background 0.4s', // Safari and Chrome
            '-o-transition' : 'background 0.4s' // Opera
        });
        return false;
    });

    $('#drop-files').bind('drop', function() {
        $(this).css({
            'background-color' : '#FCFCFC'
        });
        return false;
    });
});