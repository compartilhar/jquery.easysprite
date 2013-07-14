jquery.easysprite
=================

My first jquery plugin, an easy way to implement a sprite animation tested on jQuery 2.0.3

example
==========

``` html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Easysprite</title>
	<style>
	#image
	{
		width: 300px;
		height: 300px;
		background: transparent url(bkg.png) left top no-repeat;
		float: left;
	}
	</style>
	<script src="jquery.min.js"></script>
	<script src="jquery.easysprite.min.js"></script>
  <script>
  $(function() { 
    $("#image").easysprite({
  		total_frames: 30
  	});    
  });
  </script>
</head>
<body>
	<div id="image"></div>
</body>
</html>
```

default params
==========

``` html
$("#image").easysprite({
  width: null, // element width, if is null, gets from css style
  height: null, // element height, if is null, gets from css style
	fps: 30, // speed animation
	total_frames: 0, // sprite's total frame
	auto: true, // automatic starts the animation
	loop: true, // loop the animation
});
```

actions
==========

play
``` html
$("#image").easysprite( "play" );
```

pause
``` html
$("#image").easysprite( "pause" );
```

stop
``` html
$("#image").easysprite( "stop" );
```
