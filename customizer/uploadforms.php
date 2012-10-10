<!--Image form-->
<div class="image-form">
    <table border="0" id="select-type">
        <tr>
            <td id="premade-type">
                <div class="step-header">2. Select which image it is</div>
                <br />
                <div class="form-indent">
                    Image name:
                    <select class="combobox" name="type-combobox">
                        <?php
                        $imageresult = mysql_query("SELECT * FROM Types
                                            WHERE is-file = FALSE
                                            ORDER BY modid");
                        while ($row = mysql_fetch_array($imageresult)) {
                            $name = $row['name'];
                            echo "<option value='$name' title='images/box.png'>$name</option>";
                        }
                        ?>
                    </select>
                </div>
                <br /><br /><br />
            </td>
        </tr>
        <tr>
            <td id="custom-type" class="custom-textfield">
                <div class="step-header">Or create a custom image type</div>
                <br />
                <div class="form-indent">
                    Image path: <input name="image-path" />
                    <br />
                    <input type="checkbox" name="image-optional" /> Optional
                    <br />
                    <input type="checkbox" name="is-tile" id="TilesheetCheck" />
                    <span id="tilesheet-form">
                        Tile start x: <input name="startx" size="2" disabled="disabled" /> 
                        start y: <input name="starty" size="2" disabled="disabled" />
                    </span>
                    <br />
                    Image name: <input name="imageName" />
                    <br />
                    Mod name: <input name="image-modName" />
                </div>
            </td>
        </tr>
    </table>
</div>

<!--File form-->
<div class="file-form">
    <table border="0" id="select-type">
        <tr>
            <td id="premade-type">
                <div class="step-header">2. Select which file it is</div>
                <br />
                <div class="form indent">
                File name
                <select class="combobox">
                    <?php
                    $fileresult = mysql_query("SELECT * FROM Types
                                           WHERE is-file = TRUE
                                           ORDER BY modid");
                    while ($row = mysql_fetch_array($fileresult)) {
                        $name = $row['name'];
                        echo "<option value='$name'>$name</option>";
                    }
                    ?>
                </select>
                </div>
                <br /><br /><br />
            </td>
        </tr>
        <tr>
            <td id="custom-type" class="custom-textfield">
                <div class="step-header">Or create a custom file type</div>
                <br />
                <div class="form-indent">
                File path <input name="file-path" /> 
                <br />
                <input type="checkbox" name="file-optional" value="true" /> Optional
                <br />
                <input type="checkbox" name="fileline" value="true" id="fileline-check" />
                <span id="fileline-form">
                    Text starts at line <input name="startline" size="2" class="custom-textfield" disabled="disabled" /> 
                </span>
                <br />
                File name <input name="fileName" />
                <br />
                Mod name <input name="file-modName" />
                </div>
            </td>
        </tr>
    </table>
</div>