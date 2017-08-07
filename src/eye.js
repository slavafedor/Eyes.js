var Eye = function(ctx, x, y, radius, color)
{
	var me = this;
	var eyeRmaxX = 100;
	var eyeRmaxY = 60;
	
	me.ctx = ctx;
	me.centerX = x;
	me.centerY = y;
	me.x = x;
	me.y = y;
	me.radius = radius || 50;
	me.color = color;
	me.vX = 0;
	me.vY = 0;

	me.updatePosition = function (poi)
	{
		var dY = poi.y - me.centerY;
		var dX = poi.x - me.centerX;
		var d = Math.sqrt( dY * dY + dX * dX);
		var rEyeX = (d >= eyeRmaxX) ? eyeRmaxX * eyeRmaxX / d : d;
		var rEyeY = (d >= eyeRmaxY) ? eyeRmaxY * eyeRmaxY / d : d;

		me.x = rEyeX * dX / d + me.centerX;
		me.y = rEyeY * dY / d + me.centerY;
	}

	me.draw = function() {     
		me.ctx.fillStyle = me.color;
		me.ctx.beginPath();
		me.ctx.arc(me.x, me.y, me.radius, 0, 2*Math.PI, true);
		me.ctx.closePath();          
		me.ctx.fill();     
		me.ctx.strokeStyle = 'black';
  	me.ctx.lineWidth = 4;
		me.ctx.stroke();

		me.ctx.fillStyle = "white"
		me.ctx.beginPath();
		me.ctx.arc(me.x, me.y, me.radius/3 + 1, 0, 2 * Math.PI, true);
		me.ctx.closePath();
		me.ctx.fill();

		me.ctx.fillStyle = "black";
		me.ctx.beginPath();
		me.ctx.moveTo(me.x, me.y);
		me.ctx.arc(me.x, me.y, me.radius/3, 0, 1.8 * Math.PI, false);
		me.ctx.closePath();          
		me.ctx.fill();
	}
}


