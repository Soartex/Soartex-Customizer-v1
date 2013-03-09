<!-- PHP -->

<?php include("assets/php/config.php") ?>

<!DOCTYPE html>

<html>

	<head>
		<!-- Page information -->
		<title><?php echo($name) ?> Customizer</title>
		<meta charset="UTF-8"/>

		<link rel="shortcut icon" href="../assets/img/favicon.ico" />
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="../assets/img/apple-touch-icon-114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/img/apple-touch-icon-144.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/img/apple-touch-icon-114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/img/apple-touch-icon-144.png" />

		<!-- Stylesheets -->

		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-responsive.min.css" />


		<link rel="stylesheet" type="text/css" href="assets/css/global.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/customizer.css" />
		
		<!-- Add menu bar -->
		
		<?php $page="CUSTOMIZER"; include 'assets/php/menubar.php'; ?>
	</head>

	<body>
		
		<div class="container">
			<section id="intro">

				<!--<?php echo($intro) ?>-->
				Soartex Fanver is a smooth, detailed and clean texture pack (64x). In it's time it has come from a simple terrain-only texture pack to a fan-driven mass of mod support, customization, animation and originality. Fanver has become a very memorable and iconic suit for a lot of Miners out there, and to many, a personal favorite!
				
			</section>

			<section id="main">
				<div class="tabbable">
					<ul id="tab" class="nav nav-tabs">

						<li class="active">
							<a data-toggle="tab" href="#tab1"><?php echo($name) ?>
							Vanilla</a>
						</li>

						<li>
							<a data-toggle="tab" href="#tab2"><?php echo($name) ?>
							Modded</a>
						</li>

						<button class="btn" id="btn-edit">Edit</button>

					</ul>

					<div class="tab-content" style="overflow: visible;">
						<div class="tab-pane active" id="tab1" style="margin-top: 70px;">
							<div class="tabbable tabs-left">
								<ul class="nav nav-tabs">

									<li class="active">
										<a data-toggle="tab" href="#stab1">Armor</a>
									</li>

									<li>
										<a data-toggle="tab" href="#stab2">Art</a>
									</li>

									<li>
										<a data-toggle="tab" href="#stab3">Items</a>
									</li>

									<li>
										<a data-toggle="tab" href="#stab4">Blocks</a>
									</li>

								</ul>

								<div class="tab-content">

									<div class="tab-pane active" id="stab1"></div>

									<div class="tab-pane" id="stab2">

									</div>
									<!--items-->
									<div class="tab-pane" id="stab3">

									</div>
									<!--blocks-->
									<div class="tab-pane" id="stab4">
									
									</div>
								</div>
							</div>
						</div>

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
					<li class="pull-left"><a href="http://soartex.net/">&copy; Soartex 2013 - </a></li>
					<li class="pull-right"><a href="admin.php">Admin</a></li>
					<li class="pull-right active"><a href="#">Home</a></li>
				</ul>
			</footer>

		</div>

		<!-- Javascripts -->

		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>

		<script type="text/javascript" src="assets/js/utils.js"></script>
		<script type="text/javascript" src="assets/js/TextureOption.js"></script>
		<script type="text/javascript" src="assets/js/TextureGroup.js"></script>
		<script type="text/javascript" src="assets/js/main.js"></script>
		<!-- Remove the below when texture rendering is done -->
		<script type="text/javascript" src="assets/js/temp-renders.js"></script>

	</body>

</html>