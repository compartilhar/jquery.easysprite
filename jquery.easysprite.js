/**
 * jQuery EasySprite - easy sprite animation
 * (c) 2013 compartilhar
 * MIT Licensed.
 *
 * http://github.com/compartilhar/jquery.easysprite
 */
(function( $ ) {

	// declaring plugin
	$.fn.easysprite = function( options ) {
		// plugin name
		var pluginName = "easysprite";

		return this.each(function() {
			// set this
			var $this = $(this);

			// actions
			if ( typeof options === "string" ) {
				if ( options === "play" ) {
					$this.data( pluginName ).play();
				}

				if ( options === "pause" ) {
					$this.data( pluginName ).pause();
				}

				if ( options === "stop" ) {
					$this.data( pluginName ).stop();
				}
			}  else {
				// default options
				var default_opts = {
					timer: 0,
					position: 0,
					play: false,
					version: "0.1.0",
				},

				// merge all options
				merged_opts = $.extend( default_opts, $.fn.easysprite.defaults, options ),
				
				// functions encapsulated
				// module pattern technique
				plugin = (function() {

					// options
					var opts = merged_opts,

					// initialize all variables
					init = function() {

						// set default width
						if ( opts.width === null ) {
							opts.width = $this.width();
						}

						// set default height
						if ( opts.height === null ) {
							opts.height = $this.height();
						}

						// set css
						$this.css({
							width: opts.width,
							height: opts.height
						});
					},

					// start animation
					play = function() { 
						opts.timer = setTimeout( next_position, opts.fps );	
					},

					// pause animation
					pause = function() {
						clearTimeout( opts.timer );
					},

					// stop animation
					stop = function() {
						pause();
						set_position( 0, 0 );
					},

					// set position
					set_position = function( x, y ) {
						$this.css( "background-position", x + "px " + y + "px" );
					},

					// reset position
					reset_position = function() {
						opts.position = 0;
					},

					// move next position
					next_position = function() {
						set_position( ( -opts.width * opts.position++ ), 0 );
						action();
					},

					// decide animation action
					action = function() {
						if (  opts.position < opts.total_frames ) {
							play();
						} else if (  opts.position === opts.total_frames && opts.loop === true ) {
							reset_position();
							play();
						} else {
							reset_position();
						}
					};

					// initialize all variables
					init();

					// starts automatic the animation
					if ( opts.auto === true ) {
						play();
					}

					// return public functions and vars to plugin
					return {
						play: play,
						pause: pause,
						stop: stop,
						options: opts
					};
				})();

				// set plugin functions
				$this.data( pluginName, plugin );
			}
		});
	};

	// plugin defaults
	$.fn.easysprite.defaults = {
		width: null, // element width, if is null, gets from css style
		height: null, // element height, if is null, gets from css style
		fps: 30, // speed animation
		total_frames: 0, // sprite's total frame
		auto: true, // automatic starts the animation
		loop: true, // loop the animation
	};

})( jQuery );