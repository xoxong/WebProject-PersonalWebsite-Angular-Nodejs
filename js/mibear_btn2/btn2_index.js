	    (function ($){
//	      $('#tiles').imagesLoaded(function() {
//	        // Prepare layout options.
//	        var options = {
//	          autoResize: true, // This will auto-update the layout when the browser window is resized.
//	          container: $('#main'), // Optional, used for some extra CSS styling
//	          offset: 2, // Optional, the distance between grid items
//	          itemWidth: 210, // Optional, the width of a grid item
//	          fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
//	        };
//	
//	        // Get a reference to your grid items.
//	        var handler = $('#tiles li'),
//	            filters = $('#filters li');
//	
//	        // Call the layout function.
//	        handler.wookmark(options);1
//	
//	        /**
//	         * When a filter is clicked, toggle it's active state and refresh.
//	         */
//	        var onClickFilter = function(event) {
//	          var item = $(event.currentTarget),
//	              activeFilters = [];
//	
//	          if (!item.hasClass('active')) {
//	            filters.removeClass('active');
//	          }
//	          item.toggleClass('active');
//	
//	          // Filter by the currently selected filter
//	          if (item.hasClass('active')) {
//	            activeFilters.push(item.data('filter'));
//	          }
//	
//	          handler.wookmarkInstance.filter(activeFilters);
//	        }
//	
//	        // Capture filter click events.
//	        filters.click(onClickFilter);
//	      });
	      
	    })(jQuery);