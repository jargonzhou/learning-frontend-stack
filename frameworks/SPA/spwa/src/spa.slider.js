import './css/style.css' // chapter 1
import $ from 'jquery'


window.$ = $;
// $("#spa").on("click", function (event) {
//   alert('jQuery works')
// })

export function spa($) {
  var configMap = {
    extended_height: 434,
    extended_title: 'Click to retract',
    retracted_height: 16,
    retracted_title: 'Click to extend',
    template_html: '<div class="spa-slider"><\/div>'
  }

  var $chatSlider

  var toggleSlider = function () {
    var slider_height = $chatSlider.height()
    if (slider_height === configMap.retracted_height) {
      $chatSlider
        .animate({ height: configMap.extended_height })
        .attr('title', configMap.extended_title)
      return true
    } else if (slider_height === configMap.extended_height) {
      $chatSlider
        .animate({ height: configMap.retracted_height })
        .attr('title', configMap.retracted_height)
      return true
    }
    return false
  }
  var onClickSlider = function (event) {
    toggleSlider()
    return false
  }
  var initModule = function ($container) {
    // render HTML
    $container.html(configMap.template_html)
    $chatSlider = $container.find('.spa-slider')
    $chatSlider
      .attr('title', configMap.retracted_title)
      .click(onClickSlider)

    return true
  }

  return { initModule: initModule }
}

jQuery(function () {
  spa(jQuery).initModule(jQuery('#spa'))
})