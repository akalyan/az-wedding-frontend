/*global jQuery:false */
/*jshint trailing:false */

'use strict';

jQuery(document).ready(function() {
  
  jQuery('.question').click(function(e) {
    var el = e.target.parentElement.id;
    jQuery('#answer_'+el).toggle();
    e.preventDefault();
  });
          
});
