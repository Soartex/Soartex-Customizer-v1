<nav class="navbar">
	<div class="navbar-inner">

		<!--Responsive Button to a small screen-->
		<button type="button" class="btn btn-navbar collapsed closed" data-toggle="collapse" data-target=".nav-collapse" >
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>

		<!--Main Code for menu-->
		<a class="brand" href="index.php" style="padding-top: 5px; padding-bottom: 7px;"> <img src="assets/img/soar-mainbar.png"> <?php echo($name)?>
		Customizer</a>
		<div class="nav-collapse" style="height: auto;">
			<ul class="nav">
				<li<?php if($page=="HOME"){echo ' class="active"';}?>>
					<a href=""><i class="icon-home"></i> Home </a>
				</li>
				<li<?php if($page=="FORUMS"){echo ' class="active"';}?>>
					<a href=""> <i class="icon-pencil"></i> Forums </a>
				</li>
				<li<?php if($page=="DOWNLOADS"){echo ' class="active"';}?>>
					<a href=""> <i class="icon-download"></i> Downloads </a>
				</li>
				<li<?php if($page=="FILE_SERVER"){echo ' class="active"';}?>>
					<a href=""> <i class="icon-file"></i> File Server </a>
				</li>
				<li class="dropdown closed">
					<a class="dropdown-toggle" data-toggle="dropdown" ><i class="icon-wrench"></i> Tools <b class="caret"></b> </a>
					<ul class="dropdown-menu">
						<li>
							<a href="">Customizer</a>
						</li>
						<li>
							<a href="">Texture-Patcher</a>
						</li>
				</li>
			</ul>
		</div>
	</div>
</nav>