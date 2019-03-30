<?php
/**
 * Enqueue scripts and styles.
 */
function DD_parallax_scripts() {
	// Loads bootstrap scripts and dependancies
	wp_enqueue_script( 
    'popper',
    '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
    array(), null, true );

	wp_enqueue_script(
    'jquery',
    '//code.jquery.com/jquery-3.3.1.slim.min.js',
    array(), null, true );

  wp_enqueue_script(
    'bootstrap-js',
    '//maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' );

	// Loads bootstrap sylesheet
	wp_enqueue_style( 
    'bootstrap',
    '//maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' );
	
  // User defined resources. These should always be last for overriding things in third-party frameworks.
  wp_enqueue_style( 'user-style', get_template_directory_uri().'/css/main.css' ); // Compiled scss.
  wp_enqueue_style( 'user-style', get_template_directory_uri().'/css/print.css' ); // Print styles.
	wp_enqueue_style( 'user-style', get_stylesheet_uri() ); // Final styles loaded.
	wp_enqueue_script( 'user-scripts', get_template_directory_uri().'/js/main.js');
}
add_action( 'wp_enqueue_scripts', 'DD_parallax_scripts' );