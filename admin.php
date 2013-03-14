<!-- PHP -->

<?php include("assets/php/config.php") ?>

<!DOCTYPE html>

<html>

	<head>

		<!-- Page information -->

		<title>Soartex Fanver Customizer</title>
		<meta charset="UTF-8"/>

		<link rel="shortcut icon" href="../assets/img/favicon.ico" />
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="../assets/img/apple-touch-icon-114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/img/apple-touch-icon-144.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/img/apple-touch-icon-114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/img/apple-touch-icon-144.png" />

		<!-- Stylesheets -->

		<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap-responsive.min.css" />

		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-wizard.css" />

		<link rel="stylesheet" type="text/css" href="../assets/css/global.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/customizer.css" />

	</head>

	<body>

		<div class="container">

			<header class="page-header">

				<h1><img src="../assets/img/soar.png"/> Soartex Fanver <small>Customizer Admin</small></h1>

				<div class="navbar">

					<div class="navbar-inner">

						<ul class="nav">

							<li><a href=".."><i class="icon-home"></i> Home</a></li>
							<li><a href="../forum"><i class="icon-pencil"></i> Forums</a></li>
							<li><a href="../downloads.html"><i class="icon-download"></i> Downloads</a></li>
							<li><a href="http://files.soartex.net/"><i class="icon-file"></i> File Server</a></li>
							<li><a href="../links.html"><i class="icon-share"></i> Links</a></li>
							<li class="dropdown active">

								<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-wrench"></i> Tools <b class="caret"></b></a>

								<ul class="dropdown-menu">

								<li><a href="../about-tools.html"><i class="icon-info-sign"></i> About our Tools</a></li>
								<li><a href="../texture-patcher"><i class="icon-cog"></i> Texture-Patcher</a></li>
								<li class="active"><a href="#"><i class="icon-list"></i> Customizer</a></li>

								</ul>

							</li>

						</ul>

					</div>

				</div>

			</header>

			<button class="btn" onclick="showWizard()">SHOW</button>
			
			<div class="wizard" id="texture-upload-wizard">
				
				<h1>Upload Texture</h1>
				
				<div class="wizard-card" data-cardname="card1">
					
        			<h3>Card 1</h3>
        			Some content
        		
    			</div>
				
			</div>
			
			<form action="assets/php/insert.php" method="post">
				
				<fieldset>
					
					<legend>File Upload</legend>

					<label>Pack</label>
					<input type="text" name="pack" placeholder="Ex: Vanilla; Modded; Halloween">
					<label>Mod</label>
					<input type="text" name="mod" placeholder="Ex: Vanillia; Buildcraft; Redpower">
					<label>Category</label>
					<input type="text" name="category" placeholder="Ex: Swords; Armor; Art">
					<label>Texture Name</label>
					<input type="text" name="texture_name" placeholder="Ex: Gold Sword">
					<label>Creator</label>
					<input type="text" name="creator" placeholder="Ex: Shoe!">
					<label>X (in pixals)</label>
					<input type="text" name="x" placeholder="128">
					<label>Y (in pixals)</label>
					<input type="text" name="y" placeholder="128">
					<label>Export Path</label>
					<input type="text" name="export_path" placeholder="cpw/ironchest/terrain.png">

					<br/>
					<br/>
					
					<button type="submit" class="btn">Submit</button>

				</fieldset>
				
			</form>

			<hr/>

			<footer>

				<ul class="nav nav-pills">

					<li class="pull-left"><a href="http://soartex.net/">&copy; Soartex 2013-</a></li>

					<li class="pull-right active"><a href="#">Admin</a></li>
					<li class="pull-right"><a href="index.php">Home</a></li>

				</ul>

			</footer>

			<!-- Javascripts -->

			<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
			
			<script type="text/javascript" src="assets/js/bootstrap-wizard.js"></script>

			<script type="text/javascript" src="assets/js/utils.js"></script>
			<script type="text/javascript" src="assets/js/TextureOption.js"></script>
			<script type="text/javascript" src="assets/js/TextureGroup.js"></script>
			<script type="text/javascript" src="assets/js/main.js"></script>

		</div>

	</body>

</html>