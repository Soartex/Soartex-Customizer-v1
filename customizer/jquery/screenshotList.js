/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $.widget( "custom.snapshotList", {
        _create: function() {
            var that = this;
            
            this.selected = false
            
            // A wrapper to put the buttons in
            var wrapper = this.wrapper = $( "<span>" )
            .insertAfter(this.element)
            .addClass('ui-widget')
            .addClass('snapshot-box');
            
            // Background table
            this.element
            .sortable()
            .addClass('ui-widget-content')
            .addClass('snapshot-list')
            .disableSelection()
            .click(function(e) {
                if ( e.target == this && that.selected != false ) {
                    $( that.selected ).parent().removeClass('ui-state-highlight');
                    that.selected = false;
                }
            });
            
            // Draggable boxes
            this.item = this.element.children( "li" )
            .addClass('ui-state-default')
            .addClass('snapshot-list-item')
            
            // Hidden image upload button
            this.imagePicker = $("<input />", {
                "type" : "file"
            })
            .hide()
            .submit(function(e) {
                return false;
            })
            .change(function(e) {
                var file = e.target.files[0];
                if (!file.type.match('image.*')) {
                    return false;
                }
                
                // Filereader that gets the file data
                var fileReader = new FileReader();
                
                fileReader.onload = (function(file) {
                    return function(e) {
                        
                        fileData = {
                            name : file.name, 
                            value : this.result
                        };
                        var image = this.result;
                        
                        // Add image to box
                        $('<li>')
                        .appendTo(that.element)
                        .addClass('ui-state-default')
                        .addClass('snapshot-list-item')
                        .append('<img class="listimage" draggable="false" src="'+image+'" alt="'+fileData.name+'" height="86" />');
                        
                        $( '.listimage' ).click(function() {
                            if ( that.selected != this && that.selected != false ) {
                                $( that.selected ).parent().removeClass('ui-state-highlight');
                            }
                            that.selected = this;
                            $( this ).parent().addClass('ui-state-highlight');
                        });
                    };

                })(file);
                
                fileReader.readAsDataURL(file);
            });
            
            // Add button
            this.add = $( "<a>", {
                "class": "list-edit-button"
            })
            .appendTo( wrapper )
            .button({
                icons: {
                    primary: "ui-icon-plus"
                },
                text: false
            })
            .removeClass( "ui-corner-all" )
            .addClass( "ui-corner-right" )
            .click( function() {
                $( that.imagePicker ).click();
            })
            .parent().append('<br />');
            
            // Delete button
            this.add = $( "<a>", {
                "class": "list-edit-button"
            })
            .appendTo( wrapper )
            .button({
                icons: {
                    primary: "ui-icon-minus"
                },
                text: false
            })
            .removeClass( "ui-corner-all" )
            .addClass( "ui-corner-right" )
            .click( function() {
                $( that.selected ).parent().remove();
            })
        }
    });
    $( "#snapshot" ).snapshotList();
});