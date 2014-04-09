(function($) {
  $.fn.measure = function(options) {

    var defaults = {
        perfectMeasure: 65,
        acceptableMeasure: 10,
        paragraphCount: 3
    };

    var options = $.extend({}, defaults, options);

    function wrapChars(element) {
    	$(element).contents().each(function() {

    		if(this.nodeType === 1) {
                // If it's a tag run through this function again

    			wrapChars(this);

    		} else if (this.nodeType === 3) {
                // If it is a character do this

    			$(this).replaceWith($.map(this.nodeValue.split(''), function(c, i) {

                   return '<span class="measure">' + c + '</span>';

    			}).join(''));

    		}

    	});
  
    }

    var $this = $(this).selector + ' p:lt("' + options.paragraphCount + '")';

    wrapChars($this);

    $('p').each(function(i) {

        $(this).find('.measure').each(function(i) {

            var perfectMeasure = options.perfectMeasure,
                acceptableMeasure = options.acceptableMeasure,
                remainder = i % perfectMeasure;

            if(remainder == 0) {
                $(this).addClass('perfectMeasure');
            } else if (remainder <= acceptableMeasure || remainder >= perfectMeasure - acceptableMeasure) {
                $(this).addClass('acceptableMeasure');
            } else {
                $(this).addClass('badMeasure');
            }

            $('.badMeasure').css('opacity', '0.3');
            $('.perfectMeasure').css('opacity', '1');
            $('.acceptableMeasure').css('opacity', '1');

        });

    });

    // Clean up results
    $(this).removeClass('measure');

  };

})(jQuery);