<html>
    <head>
        <meta charset="utf-8">
        <title>Texture Upload</title>
        <script src="js/jquery-1.8.2.min.js"></script>
        <script src="js/dragdropimage.js"></script>
        <link rel="stylesheet" type="text/css" href="css/customizer_upload.css" />
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
                </td>
            </tr>
        </table>
    </body>
</html>