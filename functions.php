<?php
/**
 * Register scripts and styles
 */

function register_scripts() {
	$base_url  = esc_url_raw( home_url() );
	$base_path = rtrim( parse_url( $base_url, PHP_URL_PATH ), '/' );


	// Scripts
	wp_enqueue_script('main', get_template_directory_uri() . '/dist/main.js', array(), false, true);
	wp_localize_script( 'main', 'WP', array(
		'root'      => esc_url_raw( rest_url() ),
		'base_url'  => $base_url,
		'base_path' => $base_path ? $base_path . '/' : '/',
		'dir' 		=> get_template_directory_uri(),
		'nonce'     => wp_create_nonce( 'wp_rest' ),
		'site_name' => get_bloginfo( 'name' ),
		'routes'    => rest_theme_routes(),
	) );


	// Styles
	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Poppins:300,300i,700,700i,900&display=swap', false, null );
	wp_enqueue_style('main', get_template_directory_uri() . '/dist/main.css', array(), false, null);


	// Deregister
	wp_dequeue_style( 'wp-block-library' );
	wp_deregister_script( 'jquery' );
	wp_deregister_script( 'wp-embed' );
}

add_action('wp_enqueue_scripts', 'register_scripts', 100);


/**
 * Fetch routes
 * @return [type] [description]
 */

function rest_theme_routes() {

	// Array to populate
	$routes = array();

	$args = array(
		'post_type'      => 'any',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
	);

	$query = new WP_Query($args);

	// Loop posts
	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();

			$routes[] = array(
				'id'   => get_the_ID(),
				'type' => get_post_type(),
				'slug' => basename( get_permalink() ),
				'name' => get_the_title(),
			);
		}
	}

	wp_reset_postdata();
	return $routes;
}



/**
 * Theme support
 */

add_theme_support( 'title-tag' );



/**
 * Number of post revisions stored
 */

function revisions_to_keep( $num, $post ) {
	return 10;
}

add_filter( 'wp_revisions_to_keep', 'revisions_to_keep', 10, 2 );



/**
 * Add attribute to specified scripts
 * @link http://diywpblog.com/add-defer-or-async-attribute-to-wordpress-scripts/
 */

function add_script_attributes( $tag, $handle, $source ) {
	if ( $handle == 'app' ) {
		$tag = str_replace(" type='text/javascript'", " type='module'", $tag);
	}

	return $tag;
}

add_filter('script_loader_tag', 'add_script_attributes', 10, 3);



/**
 * Clean up <head>
 */

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
?>