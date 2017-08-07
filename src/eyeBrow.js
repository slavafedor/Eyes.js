var EyeBrow = function(ctx, x, y, color, length, width, topOffset){
	var me = this;
	me.ctx = ctx;
	me.x = x;
	me.y = y;
	me.color = color;
	me.halfLength = length /2;
	me.width = width;
	me.topOffset = topOffset;

 	me.draw = function (leftYOffset, centerYOffset, rightYOffset, topOffset) {     
		var 
			lOff = leftYOffset || 0,
			cOff = centerYOffset || 0,
			rOff = rightYOffset || 0;
		me.topOffset = topOffset || 0;	
		me.ctx.fillStyle = me.color;
		me.ctx.beginPath();
		me.ctx.moveTo(x - me.halfLength, me.y + lOff);
		me.ctx.bezierCurveTo(me.x - me.halfLength, me.y + lOff, me.x + me.topOffset, me.y + cOff, me.x + me.halfLength, me.y + rOff);
		    
		me.ctx.strokeStyle = me.color;
  	me.ctx.lineWidth = me.width;
		me.ctx.stroke();

	}
}
