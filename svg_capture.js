//var pic = document.getElementById("pic");

var clear = function(){
	while(pic.hasChildNodes()){
		pic.removeChild(pic.firstChild)
	}
}

/*var drawCircle = function(e){
    

    var newCircle = circle(e);
    newCircle.display();
    
}*/ 

var makeCircle = function(e){
    
    var circle = {
	cx: e.offsetX,
	cy: e.offsetY,
	radius: 10,
	svg: document.getElementById("pic"),
	color: "lightsteelblue",
	
	display: function(){
	    var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
	    c.setAttribute("cx", this.cx);
	    c.setAttribute("cy", this.cy);
	    c.setAttribute("r", this.radius);
	    c.setAttribute("fill", this.color);
	    c.addEventListener("click", this.changeColor, true);
	    this.svg.appendChild(c);
	    console.log(this);
	},
	
	changeColor: function(){
	    this.removeEventListener("click", this.changeColor, true);
	    this.setAttribute("fill", "black"); 
	    this.addEventListener("click", this.remove, true);
	    e.stopPropagation();
	    console.log(this);
	    
	},

	remove: function(){
	    this.svg.removeChild(this)
	    this.cx = Math.floor(Math.random() * parseInt(this.svg.getAttribute("width"),10));
	    this.cy = Math.floor(Math.random() * parseInt(this.svg.getAttribute("height"),10));
	    console.log(this.cx + ' ' + this.cy);
	    this.display();
	    e.stopPropagation();
	    console.log(this);
	}
    };
    return circle;
};

var drawCircle = function(e){
    var circle = makeCircle(e);
    circle.display();
}
    
pic.addEventListener("click", drawCircle);
document.getElementById("clear").addEventListener("click", clear)
