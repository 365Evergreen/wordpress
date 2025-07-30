<?php

function evergreen_theme_scripts() {
    wp_enqueue_style( 'evergreen-style', get_stylesheet_uri() );
    wp_enqueue_script( 'evergreen-script', get_template_directory_uri() . '/script.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'evergreen_theme_scripts' );

?>