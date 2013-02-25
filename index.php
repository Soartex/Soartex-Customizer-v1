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
		
		<link rel="stylesheet" type="text/css" href="assets/css/global.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/global.css" />

	</head>

	<body>

		<div class="container">

			<div class="page-header">

				<h1><img src="assets/img/soar.png"/> <?php echo($name) ?> <small>Customizer </small></h1>

				<div class="navbar">
					
					<div class="navbar-inner">

						<ul class="nav">

							<li><a href="../index.php">Home</a></li>
							<li><a href="../forum">Forums</a></li>
							<li><a href="../downloads.php">Downloads</a></li>
							<li><a href="../texture-patcher/index.php">Texture-Patcher</a></li>
							<li class="active"><a href="#">Customizer</a></li>

						</ul>

					</div>

				</div>
        
			</div>

			<section id="intro">

				<?php echo($intro) ?>

			</section>

			<section id="main">

				<div class="tabbable">

					<ul id="tab" class="nav nav-tabs">

						<li class="active">

							<a data-toggle="tab" href="#tab1"><?php echo($name) ?> Vanilla</a>

						</li>

						<li>

							<a data-toggle="tab" href="#tab2"><?php echo($name) ?> Modded</a>

						</li>

					</ul>

					<div class="tab-content" style="overflow: visible;">

						<div class="tab-pane active" id="tab1" style="margin-top: 70px;">

							<div class="tabbable tabs-left">

								<ul class="nav nav-tabs">

									<li class="active"><a data-toggle="tab" href="#stab1">Armor</a></li>

									<li><a data-toggle="tab" href="#stab2">Art</a></li>

									<li><a data-toggle="tab" href="#stab3">Items</a></li>

									<li><a data-toggle="tab" href="#stab4">Blocks</a></li>

								</ul>

								<div class="tab-content">

									<div class="tab-pane active" id="stab1"></div>

									<div class="tab-pane" id="stab2">
										<!--temp code -->
										<div class="container-fluid">
											<div class="accordion" id="accordion2">
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
														<legend>
															Wool
														</legend> </a>
													</div>
													<div id="collapseOne" class="accordion-body collapse" style="height: 0px; ">
														<div class="accordion-inner">
															<ul class="thumbnails">

															</ul>
														</div>
													</div>
												</div>
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
														<legend>
															Leaves
														</legend></a>
													</div>
													<div id="collapseTwo" class="accordion-body collapse">
														<div class="accordion-inner">
															<ul class="thumbnails">

															</ul>
														</div>
													</div>
												</div>
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
														<legend>
															Sand
														</legend> </a>
													</div>
													<div id="collapseThree" class="accordion-body collapse">
														<div class="accordion-inner">
															<ul class="thumbnails">

															</ul>
														</div>
													</div>
												</div>
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour">
														<legend>
															Sapplings
														</legend> </a>
													</div>
													<div id="collapseFour" class="accordion-body collapse">
														<div class="accordion-inner">
															<ul class="thumbnails">

															</ul>
														</div>
													</div>
												</div>
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFive">
														<legend>
															Stone
														</legend> </a>
													</div>
													<div id="collapseFive" class="accordion-body collapse">
														<div class="accordion-inner">
															<ul class="thumbnails">

															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!--End of Temp Code-->
									</div>
									<!--items-->
									<div class="tab-pane" id="stab3">

										<legend>
											Brewing Item
										</legend>
										<ul class="thumbnails">

										</ul>

										<legend>
											Cauldron Item
										</legend>
										<ul class="thumbnails">

										</ul>

									</div>
									<!--blocks-->
									<div class="tab-pane" id="stab4">
										<legend>
											Wool
										</legend>
										<ul class="thumbnails">

										</ul>

										<legend>
											Leaves
										</legend>
										<ul class="thumbnails">

										</ul>

										<legend>
											Sandstone
										</legend>
										<ul class="thumbnails">

										</ul>
									</div>
								</div>
							</div>
						</div>

						<!-- Modded Content -->

						<div class="tab-pane" id="tab2">

							Modded Content

						</div>

						<!-- Seasonal Content -->

						<div class="tab-pane" id="tab3">

							Seasonal Content

						</div>

					</div>

				</div>

			</section>

			<hr/>

			<footer>

				<ul class="nav nav-pills">

					<li class="pull-left"><a href="http://soartex.net/">&copy; Soartex 2012-2013</a></li>

					<li class="pull-right"><a href="admin.php">Admin</a></li>
					<li class="pull-right active"><a href="#">Home</a></li>

				</ul>

			</footer>

		</div>
		
		<!-- Javascripts -->

        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="assets/js/bootstrap-wizard.js"></script>

        <script type="text/javascript" src="assets/js/utils.js"></script>
        <script type="text/javascript" src="assets/js/TextureOption.js"></script>
        <script type="text/javascript" src="assets/js/TextureGroup.js"></script>
        <script type="text/javascript" src="assets/js/main.js"></script>

	</body>

</html>