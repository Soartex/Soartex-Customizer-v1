<!DOCTYPE html>

<html>

	<head>

		<title>Soartex Customizer</title>
		<meta charset="UTF-8"/>

		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/global.css" />

		<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
		<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>

	</head>

	<body>
		<div class="container">
			<div class="page-header">
				<h1>Soartex Customizer <small>Admin</small></h1>
			</div>

			<!--old code-->
			<form>
				<div id="upload-box" ondragover="return false">
					<div id="upload-text">
						Drag a file here to upload
					</div>
				</div>
			</form>

			<!--new code-->
			<form>
				<fieldset>
					<legend>
						File Upload
					</legend>
					<label>Pack</label>
					<input type="text" placeholder="Ex: Vanilla; Modded; Halloween">
					<label>Mod</label>
					<input type="text" placeholder="Ex: Vanillia; Buildcraft; Redpower">
					<label>Category</label>
					<input type="text" placeholder="Ex: Swords; Armor; Art">
					<label>Texture Name</label>
					<input type="text" placeholder="Ex: Gold Sword">
					<label>X (in pixals)</label>
					<input type="text" placeholder="128">
					<label>Y (in pixals)</label>
					<input type="text" placeholder="128">
					<label>Export Path</label>
					<input type="text" placeholder="cpw/ironchest/terrain.png">
					
					<br><br>
					<button type="submit" class="btn">
						Submit
					</button>
				</fieldset>
			</form>

			<footer>
				<hr/>
				<ul class="nav nav-pills">
					<li class="pull-left">
						<a href="http://soartex.net/">&copy; Soartex 2012-2013</a>
					</li>
					<li class="pull-right active">
						<a href="#">Admin</a>
					</li>
					<li class="pull-right">
						<a href="index.php">User</a>
					</li>
				</ul>
			</footer>

		</div>
	</body>
</html>
