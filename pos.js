var x0 = null;
var y0 = null;
var xw = null;
var yw = null;
var xr = null;
var yr = null;


function onMouseUpdate(e) {
    xr = Math.floor((e.pageX - x0)/xw*100);
    yr = Math.floor((e.pageY - y0)/yw*100);
    $( "#x" ).html(xr);
    $( "#y" ).html(yr);
}

function genTemplate(event) {
    event.preventDefault();
    var text = "{{Karte\n"
             + "| Position-X = " + xr + "\n"
             + "| Position-Y = " + yr + "\n"
             + "}}";
    $( "#template" ).html(text).fadeIn(300);
    
}

$( document ).ready(
    function() {       
        var img = $( "#image");
        var pos = img.position()
        x0 = pos.left;
        y0 = pos.top;
        xw = img.width();
        yw = img.height();
        img.mousemove(onMouseUpdate);
        img.on('click', genTemplate);
    }
);
