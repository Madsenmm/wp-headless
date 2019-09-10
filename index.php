<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>

		<div id="app">
			<router-view></router-view>
		</div>

		<?php wp_footer(); ?>
	</body>

</html>