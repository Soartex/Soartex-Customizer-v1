<!--Image form-->
<div class="image-form">
    <legend>2. Select which image it is</legend>
    <select id="texture-selector" data-placeholder="Texture name" tabindex="2" class="input-xlarge">
        <option></option>
        <?php
        /* Get the list of options for the dropdown list */
        $imageresult = mysql_query("SELECT * FROM Types
                                                WHERE is-file = FALSE
                                                ORDER BY modid");
        while ($row = mysql_fetch_array($imageresult)) {
            $name = $row['name'];
            echo "<option value='$name' title='images/box.png'>$name</option>";
        }
        ?>
    </select>
    <br />
    <span class="help-block" style="font-size: 12px">Leave blank to choose a custom texture</span>
 	<br /><br />
    <legend>Or create a custom texture</legend>
    <label>Image path</label>
    <input type="text" name="image-path" id="imagepath" class="input-xlarge" placeholder="eg. mob/pig.png" style="height: auto"/>
    <label class="checkbox">
        <input type="checkbox" name="image-optional" /> Optional
    </label>
    <form class="form-inline" id="tile-form-inline">
        <label class="checkbox">
            <input type="checkbox" name="is-tile" id="TilesheetCheck" />
        </label>
        <label>Tile (</label>
        <span id="tilesheet-form">
            <input type="text" class="input-mini" id="startx" placeholder="Start x" disabled="disabled" />
            <label>, </label>
            <input type="text" class="input-mini" id="starty" placeholder="Start y" disabled="disabled" />
            <label>)</label>
        </span>
    </form>
    <label>Texture name</label>
    <input type="text" id="texturename" placeholder="eg. Pig Texture" class="input-xlarge" />
    <label>Mod name</label>
    <input type="text" id="image-modname" placeholder="eg. Vanilla" class="input-xlarge" />
    <span class="help-block" style="font-size: 12px">Do not enter in the version number</span>
</div>

<!--File form-->
<div class="file-form">
    <legend>2. Select which file it is</legend>
    <select id="file-selector" data-placeholder="File name" tabindex="2" style="width: 250px">
        <option></option>
        <?php
        /* Get the list of options for the dropdown list */
        $fileresult = mysql_query("SELECT * FROM Types
                                           WHERE is-file = TRUE
                                           ORDER BY modid");
        while ($row = mysql_fetch_array($fileresult)) {
            $name = $row['name'];
            echo "<option value='$name'>$name</option>";
        }
        ?>
    </select>
    <br /><br /><br />
    <legend>Or create a custom file type</legend>
    <label>File path</label>
    <input type="text" id="file-path" placeholder="eg. anim/flame.properties" />
    <label class="checkbox">
        <input type="checkbox" name="file-optional" value="true" /> Optional
    </label>
    <form class="form-inline">
        <input type="checkbox" value="true" id="fileline-check" />
        <span id="fileline-form">
            <label>Text starts at line</label>
            <input type="text" id="startline" class="input-mini" disabled="disabled" /> 
        </span>
    </form>
    <label>File name</label>
    <input type="text" id="file-name" placeholder="eg. Custom Flame" />
    <label>Mod name</label>
    <input type="text" id="file-mod-name" placeholder="eg. Custom Animations" />
</div>