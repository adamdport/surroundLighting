
$(document).ready(function(){
    SLMagic();
});

function SLMagic(){
	var v = document.getElementById('v');
	var canvas = document.getElementById('c');
	var context = canvas.getContext('2d');
	var filter;

	var cw = canvas.clientWidth;
	var ch = canvas.clientHeight;
	canvas.width = cw;
	canvas.height = ch;

	$(v).on("play", function(){
            draw(this,context,cw,ch,filter);
	});


	function draw(v,c,w,h,filter) {
            if(v.paused || v.ended)	return false;
            c.drawImage(v,0,0,w,h);

            imgData=c.getImageData(0,0,1,1);
            hex = rgbToHex(imgData.data[0],imgData.data[1],imgData.data[2]);
            //dominateColor = getDominantColor(imgData);
            //hex = rgbToHex(dominateColor[0],dominateColor[1],dominateColor[2]);
            $('#tl').css('background','linear-gradient(to left top, ' + hex + ', black)');
            
            
            imgData=c.getImageData(w-1,0,w,1);
            hex = rgbToHex(imgData.data[0],imgData.data[1],imgData.data[2]);
            //dominateColor = getDominantColor(imgData);
            //hex = rgbToHex(dominateColor[0],dominateColor[1],dominateColor[2]);
            $('#tr').css('background','linear-gradient(to right top, ' + hex + ', black)');
            
            imgData=c.getImageData(0,h-1,1,h);
            hex = rgbToHex(imgData.data[0],imgData.data[1],imgData.data[2]);
            //dominateColor = getDominantColor(imgData);
            //hex = rgbToHex(dominateColor[0],dominateColor[1],dominateColor[2]);
            $('#bl').css('background','linear-gradient(to left bottom, ' + hex + ', black)');
            
            imgData=c.getImageData(w-1,h-1,w,h);
            hex = rgbToHex(imgData.data[0],imgData.data[1],imgData.data[2]);
            //dominateColor = getDominantColor(imgData);
            //hex = rgbToHex(dominateColor[0],dominateColor[1],dominateColor[2]);
            $('#br').css('background','linear-gradient(to right bottom, ' + hex + ', black)');

            setTimeout(draw,20,v,c,w,h,filter);
            
            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }

            function rgbToHex(r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
	}

	$("#pause-button").click(function() {
		if(v.paused) {
			v.play();
			$(this).html("pause");
		} else {
			v.pause();
			$(this).html("play");
		}
	});

}