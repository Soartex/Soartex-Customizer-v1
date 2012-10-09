<?php
$con = mysql_connect('localhost', 'root', 'ari2ari');
if (!$con) {
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("local", $con);

$result = mysql_query("SELECT * FROM Types ORDER BY modid");
?>
<html>
    <head>
        <meta charset="utf-8">
        <title>Texture Upload</title>
        <script src="js/jquery-1.8.2.min.js"></script>
        <script src="js/jquery-ui-1.8.24.custom.min.js"></script>
        <script src="js/acExtension.js"></script>
        <script src="js/combobox.js"></script>
        <script src="js/snapshotList.js"></script>
        <script src="customizer/dragdropimage.js"></script>
        <script src="customizer/typeautocomplete.js"></script>
        <link rel="stylesheet" type="text/css" href="customizer/customizer_upload.css" />
        <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.8.24.custom.css" />
    </head>
    <body>
        <table border="0" id="upload-table">
            <tr>
                <td>
                    <div class="step-header">1. Upload a texture or file</div>
                    <br />
                    <div id="drop-files" ondragover="return false" style="background: url('images/Up_arrow.png') no-repeat center FCFCFC">
                        <br />
                        <div id="image-upload-text">Drag a file here to upload</div>
                    </div>
                    <div id="file-name-holder">
                        <ul id="uploaded-files">
                            <h1>Uploaded Files</h1>
                        </ul>
                    </div>
                </td>
                <td>
                    <table border="0" id="select-type">
                        <tr>
                            <td id="premade-type">
                                <div class="step-header">2. Select which image it is</div>
                                <br />
                                Image name:
                                <select id="combobox">
                                    <?php
                                    while ($row = mysql_fetch_array($result)) {
                                        $name = $row['name'];
                                        echo "<option value='$name' title='images/box.png'>$name</option>";
                                    }
                                    ?>
                                </select>
                                <br /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td id="custom-type">
                                <div class="step-header">Or create a custom image type</div>
                                <br />
                                Image path: <input name="path" />
                                <br />
                                <input type="checkbox" name="optional" value="Optional" /> Optional
                                <br />
                                <input type="checkbox" name="tilesheet" value="Tilesheet" id="TilesheetCheck" />
                                <span id="tilesheet-form">
                                    Tile start x: <input name="startx" size="2" disabled="disabled" /> 
                                    start y: <input name="starty" size="2" disabled="disabled" />
                                </span>
                                <br />
                                Image name: <input name="imageName" />
                                <br />
                                Mod name: <input name="modName" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>  
            <tr>
                <td>
                    <div class="step-header">3. Upload preview images</div>
                    <br />
                    <ul id="snapshot"></ul>
                </td>
            </tr>
        </table>
    </body>
</html>