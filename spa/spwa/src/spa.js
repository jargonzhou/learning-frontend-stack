import './css/spa.css' // chapter 3
import $ from 'jquery'
import { shell } from './spa.shell'
import { model } from './spa.model';
import { data } from './spa.data';

window.$ = $;
// $("#spa").on("click", function (event) {
//   alert('jQuery works')
// })


var spa = (function () {
  'use strict';
  // ========================================================
  // Public Methods
  // ========================================================
  var initModule = function ($container) {
    // render HTML
    // $container.html(`<h1 style="display:inline-block; margin:25px;">
    // hello world!
    // </h1>`)

    data.initModule()
    model.initModule()
    shell.initModule($container)
  }

  return { initModule: initModule }
})()

// Binds a function to be executed when the DOM has finished loading.
jQuery(function () {
  spa.initModule(jQuery('#spa'))
})