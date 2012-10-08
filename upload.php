<html>
    <head>
        <meta charset="utf-8">
        <title>Texture Upload</title>
        <script src="js/jquery-1.8.2.min.js"></script>
        <script src="js/jquery-ui-1.8.24.custom.min.js"></script>
        <script src="customizer/dragdropimage.js"></script>
        <script src="customizer/typeautocomplete.js"></script>
        <link rel="stylesheet" type="text/css" href="customizer/customizer_upload.css" />
        <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.8.24.custom.css" />
    </head>
    <body>
        <table border="0" id="upload-table">
            <tr>
                <td>
                    <div id="step-header">1. Upload a texture or file</div>
                    <br />
                    <div id="drop-files" ondragover="return false">
                        <embed style="opacity:0.2" src="images/Down_arrow.svg" type="image/svg+xml" />
                        <div id="image-upload-text">Drag files here to upload</div>
                    </div>
                    <div id="file-name-holder">
                        <ul id="uploaded-files">
                            <h1>Uploaded Files</h1>
                        </ul>
                    </div>
                </td>
                <td>
                    <div id="step-header">2. Select which image it is</div>
                    <div class="ui-widget" id="premade-type">
                         <input id="type-autocomplete" />
                    </div>
                    <div id="custom-type">
                        <input 
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>