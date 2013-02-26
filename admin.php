<!-- PHP -->

<?php include("assets/php/config.php") ?>

<!DOCTYPE html>

<html>

	<head>

		<!-- Page information -->

		<title><?php echo($name) ?> Customizer</title>
		<meta charset="UTF-8"/>
		
		<!-- Stylesheets -->

		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-responsive.min.css" />
		
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-wizard.css"/>
		
		<link rel="stylesheet" type="text/css" href="../assets/css/global.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/customizer.css" />

	</head>

	<body>

		<div class="container">

		<div class="container">

			<div class="page-header">

				<h1><img src="assets/img/soar.png"/> <?php echo($name) ?> <small>Customizer Admin </small></h1>

				<div class="navbar">
					
					<div class="navbar-inner">

						<ul class="nav">

							<li><a href="..">Home</a></li>
							<li><a href="../forum">Forums</a></li>
							<li><a href="../downloads.php">Downloads</a></li>
							<li><a href="../texture-patcher">Texture-Patcher</a></li>
							<li class="active"><a href="#">Customizer</a></li>

						</ul>

					</div>

				</div>
        
			</div>

			
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

					<li class="pull-left"><a href="http://soartex.net/">&copy; Soartex 2012-2013</a></li>

					<li class="pull-right active"><a href="#">Admin</a></li>
					<li class="pull-right"><a href="index.php">Home</a></li>

				</ul>
				
			</footer>
			
			<!-- Javascripts -->

			<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
			
			<script type="text/javascript" src="../assets/js/bootstrap-wizard.js"></script>
	
			<script type="text/javascript" src="assets/js/utils.js"></script>
			<script type="text/javascript" src="assets/js/TextureOption.js"></script>
			<script type="text/javascript" src="assets/js/main.js"></script>

		</div>

	</body>

</html>