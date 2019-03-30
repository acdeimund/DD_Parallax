<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head>
 * section and everything up until <article class="main-content">
 */

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
</head>
<body <?php if(is_front_page()) echo 'id="front-page"' ?> >
<header class="site-header">
  <nav class="navbar navbar-expand-md sticky-top navbar-dark bg-custom">
    <!-- Logo -->
    <a class="navbar-brand" href="#">
      <img class="logo"src="https://www.dropbox.com/s/vmh6wkz0m2wtyi3/WccLogo.svg?raw=1">
    </a>

    <!-- Hamburger Button -->
    <button id="primary-navigation-button"class="navbar-toggler"
            type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </button>

    <!-- Main Navigation -->
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Online Church</a>
        </li>      
        <li class="nav-item">
          <a class="nav-link" href="#">Giving</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#" id="navbarDropdown"
             role="button" data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">
            Staff
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Kendall</a>
            <a class="dropdown-item" href="#">Jennifer</a>
          </div><!-- .dropdown-menu -->
        </li>
      </ul>
    </div><!-- #navbarSupportedContent -->
  </nav><!-- .navbar -->
</header><!-- .site-header -->