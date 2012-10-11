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
        <script src="customizer/jquery/jquery-1.8.2.min.js"></script>
        <script src="customizer/jquery/jquery-ui-1.9.0.custom.min.js"></script>
        <script src="customizer/jquery/acExtension.js"></script>
        <script src="customizer/jquery/combobox.js"></script>
        <script src="customizer/jquery/screenshotList.js"></script>
        <script src="customizer/jquery/jquery.validate.min.js"></script>
        <script src="customizer/jquery/json2.js"></script>
        <script src="customizer/step1.js"></script>
        <script src="customizer/step2.js"></script>
        <script src="customizer/submit.js"></script>
        <link rel="stylesheet" type="text/css" href="customizer/texturecreator.css" />
        <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery.ui.all.css" />
    </head>
    <body>
        <form action="" onsubmit="uploadTexture()">
            <table border="0" id="upload-table">
                <tr>
                    <td>
                        <div class="step-header">1. Upload a texture or file</div>
                        <br />
                        <div id="drop-files" ondragover="return false" style="background: url('images/Up_arrow.png') no-repeat center FCFCFC">
                            <br />
                            <div id="image-upload-text">Drag a file here to upload</div>
                        </div>
                    </td>
                    <td>
                        <?php readfile("customizer/step2.php"); ?>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="step-header">3. Upload preview images</div>
                        <br />
                        <ul id="snapshot"></ul>
                    </td>
                    <td class="custom-textfield">
                        <div class="step-header">4. Enter in other details.</div>
                        <br />
                        <div class="form-indent">
                            <span style="vertical-align: top">Description: </span>
                            <textarea id="edit-description" class="ui-widget ui-widget-content"></textarea>
                            <br />
                            Creator: <input id="creator" name="creator" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <br />
                        <a href="#" class="submit-button">Submit</a>
                    </td>
                </tr>
            </table>
        </form>
    </body>
</html>