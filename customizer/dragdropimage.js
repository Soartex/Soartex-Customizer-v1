$(document).ready(function() {

    // Makes sure the dataTransfer information is sent when we
    // Drop the item in the drop box.
    jQuery.event.props.push('dataTransfer');

    // Get all of the data URIs and put them in an array
    var fileData = {};

    // Bind the drop event to the dropzone.
    $('#drop-files').bind('drop', function(e) {
        // Stop the default action, which is to redirect the page
        // To the dropped file
        
        var file = e.dataTransfer.files[0];
        
        // Some error messaging
        if (!file.type.match('image.*')) {
            return false;
        }

        // Check length of the total image elements

        // Change position of the upload button so it is centered
        var imageWidths = 110;
        $('#upload-button').css({
            'left' : imageWidths+'px', 
            'display' : 'block'
        });

        // Start a new instance of FileReader
        var fileReader = new FileReader();
        

        // When the filereader loads initiate a function
        fileReader.onload = (function(file) {
            return function(e) {
                // Push the data URI into an array
                fileData = {
                    name : file.name, 
                    value : this.result
                };
                var image = this.result;
                
                // Resise the background to fit the image
                $('#drop-files').css({
                    'width' : 'auto',
                    'height' : 'auto',
                    'padding' : '25px 25px 25px 25px'
                });
                
                $('#drop-files').empty();
                $('#drop-files').css('background', '#FCFCFC');
                $('#drop-files').append('<img class="dropimage" draggable="false" src="'+image+'" alt="'+fileData.name+'">');
                var droppedImage = $('#drop-files .dropimage');
                droppedImage.bind('dragstart', function(event) {
                    event.preventDefault();
                });
                droppedImage.load(function() {
                    width = this.width;
                    height = this.height;
                    if (height > width) {
                        $('.dropimage').css('height', '250')
                    }
                    else {
                        $('.dropimage').css('width', '250')
                    }
                });
            };

        })(file);

        // For data URI purposes
        fileReader.readAsDataURL(file);

    });

    $('#upload-button .upload').click(function() {

        $("#loading").show();
        var totalPercent = 100;
        var x = 0;
        var y = 0;

        $('#loading-content').html('Uploading '+fileData.name);

        $.post('upload.php', fileData, function(data) {

            var fileName = fileData.name;
            ++x;

            // Change the bar to represent how much has loaded
            $('#loading-bar .loading-color').css({
                'width' : totalPercent*(x)+'%'
            });

            if(totalPercent*(x) == 100) {
                // Show the upload is complete
                $('#loading-content').html('Uploading Complete!');

                // Reset everything when the loading is completed
                setTimeout(restartFiles, 500);

            } else if(totalPercent*(x) < 100) {

                // Show that the files are uploading
                $('#loading-content').html('Uploading '+fileName);

            }

            // Show a message showing the file URL.
            var dataSplit = data.split(':');
            if(dataSplit[1] == 'uploaded successfully') {
                var realData = '<li><a href="images/'+dataSplit[0]+'">'+fileName+'</a> '+dataSplit[1]+'</li>';

                $('#uploaded-files').append('<li><a href="images/'+dataSplit[0]+'">'+fileName+'</a> '+dataSplit[1]+'</li>');

                // Add things to local storage
                if(window.localStorage.length == 0) {
                    y = 0;
                } else {
                    y = window.localStorage.length;
                }

                window.localStorage.setItem(y, realData);

            } else {
                $('#uploaded-files').append('<li><a href="images/'+data+'. File Name: '+fileData.name+'</li>');
            }

        });

        return false;
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

    // Append the localstorage the the uploaded files section
    if(window.localStorage.length > 0) {
        $('#uploaded-files').show();
        for (var t = 0; t < window.localStorage.length; t++) {
            var key = window.localStorage.key(t);
            var value = window.localStorage[key];
            // Append the list items
            if(value != undefined || value != '') {
                $('#uploaded-files').append(value);
            }
        }
    } else {
        $('#uploaded-files').hide();
    }
});