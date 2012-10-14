<?php
include_once 'config.php';
$con = mysql_connect(DBHOST, DBUSERNAME, DBPASSWORD);
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
        <script src="customizer/jquery/screenshotList.js"></script>
        <script src="customizer/jquery/json2.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="bootstrap/form.js"></script>
        <script src="select2/select2.min.js"></script>
        <script src="customizer/step1.js"></script>
        <script src="customizer/step2.js"></script>
        <script src="customizer/submit.js"></script>
        <script src="customizer/texture-picker.js"></script>
        <link rel="stylesheet" type="text/css" href="customizer/texturecreator.css" />
        <link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery.ui.all.css" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="select2/select2.css" />
    </head>
    <body>
        <h1>Texture Submission Form</h1>
        <table border="0" id="upload-table">
            <tr>
                <td>
                    <legend>1. Upload a texture or file</legend>
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
                    <legend>3. Upload preview images</legend>
                    <ul id="snapshot"></ul>
                </td>
                <td class="custom-textfield">
                    <legend>4. Enter in other details.</legend>
                    <label>Description: </label>
                    <textarea id="edit-description"></textarea>
                    <label>Creator: </label>
                    <input type="text" id="creator" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                <br />
                <a href="#" class="submit-button">Submit</a>
                </td>
            </tr>
        </table>
    </body>
</html>