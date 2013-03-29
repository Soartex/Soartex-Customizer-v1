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

		<link rel="stylesheet" type="text/css" href="../assets/css/global.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/customizer.css" />

	</head>

	<body>
		
		<div class="container">

			<header class="page-header">

				<h1><img src="../assets/img/soar.png"/> Soartex Fanver  <small>Customizer</small></h1>

				<div class="navbar">

					<div class="navbar-inner">

						<ul class="nav">

							<li><a href=".."><i class="icon-home"></i> Home</a></li>
							<li><a href="../forum"><i class="icon-comment"></i> Forums</a></li>
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

			</header>

			<section id="intro">

				Soartex Fanver is a smooth, detailed and clean texture pack (64x). In it's time it has come from a simple terrain-only texture pack to a fan-driven mass of mod support, customization, animation and originality. Fanver has become a very memorable and iconic suit for a lot of Miners out there, and to many, a personal favorite!
				
			</section>

			<section id="main">
				<div class="tabbable">
					<ul id="mod-tab" class="nav nav-tabs">
						<li>
							<a data-toggle="tab" href="#tab2">Soartex Fanver
							Modded</a>
						</li>

						<button class="btn" id="btn-edit">Edit</button>


					</ul>

					<div id="mod-tab-content" class="tab-content" style="overflow: visible;">
						<!-- Modded Content -->

						<div class="tab-pane" id="tab2">

							Modded Content

						</div>
					</div>
				</div>
			</section>

			<hr/>

			<footer>

				<ul class="nav nav-pills">

					<li class="pull-left"><a href="http://soartex.net/">&copy; Soartex 2013-</a></li>

				</ul>

			</footer>

			<!-- Javascripts -->

			<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
			
			<script type="text/javascript" src="assets/js/utils.js"></script>
			<script type="text/javascript" src="assets/js/dropbox.js"></script>
			<script type="text/javascript" src="assets/js/TextureOption.js"></script>
			<script type="text/javascript" src="assets/js/TextureGroup.js"></script>
			<script type="text/javascript" src="assets/js/TextureCategory.js"></script>
			<script type="text/javascript" src="assets/js/VanillaTab.js"></script>
			<script type="text/javascript" src="assets/js/setupEditButton.js"></script>
			<script type="text/javascript" src="assets/js/main.js"></script>

			<!-- Remove when texture rendering is done -->

			<script type="text/javascript" src="assets/js/temp-renders.js"></script>

		</div>

	</body>

</html>