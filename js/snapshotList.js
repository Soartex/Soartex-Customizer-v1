/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    $.widget( "custom.snapshotList", {
        _create: function() {
            var that = this;
            
            this.selected = false
            
            var wrapper = this.wrapper = $( "<span>" )
            .insertAfter(this.element)
            .addClass('ui-widget')
            .addClass('snapshot-box');
            
            this.element
            .sortable()
            .addClass('ui-widget-content')
            .addClass('snapshot-list')
            .disableSelection();
            
            this.item = this.element.children( "li" )
            .addClass('ui-state-default')
            .addClass('snapshot-list-item')
            
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
                
                var fileReader = new FileReader();
                
                fileReader.onload = (function(file) {
                    return function(e) {
                        // Push the data URI into an array
                        fileData = {
                            name : file.name, 
                            value : this.result
                        };
                        var image = this.result;
                        $('<li>')
                        .appendTo(that.element)
                        .addClass('ui-state-default')
                        .addClass('snapshot-list-item')
                        .append('<img class="listimage" draggable="false" src="'+image+'" alt="'+fileData.name+'" height="86" />');
                        
                        $( '.listimage' ).click(function() {
                            console.log(that.selected);
                            if ( that.selected != this && that.selected != false ) {
                                $( that.selected ).parent().css('background', '');
                            }
                            that.selected = this;
                            $( this ).parent().css('background', '#FFFF99');
                        });
                    };

                })(file);
                
                fileReader.readAsDataURL(file);
            });
            
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
            .addClass( "ui-corner-bottom" )
            .click( function() {
                $( that.imagePicker ).click();
            });
            
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
            .addClass( "ui-corner-bottom" )
            .click( function() {
                $( that.selected ).parent().remove();
            })
        }
    });
    $( "#snapshot" ).snapshotList();
});