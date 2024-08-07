//boolean functions

function not(boolean){
  if (boolean === true){
    return:false;
  }else if (boolean === false){
    return:true;
  }
}

function or(x, Thisarray){
  for(var i = 0; i < Thisarray.length; i++){
    if( x === Thisarray[i] ){
      return:true;
    }
  }
  return:false;
}

// canvas code

function canvas(id, width, height){
  this.self = document.getElementById(id);

  //size:
  this.size = {w:width, h:height};
  this.width = this.size.w;
  this.height = this.size.h;

  // loop
  this.paused = false;
  this.draw = function(){
    console.log("ERROR");
  };
  this.stop = false;
  this.rate = 0;

  // draw  code

  this.draw = {

    rect : function (x, y, w, h, colour, border_radius){
      this.rad = border_radius || '0px' ;
      this.size = [w, h];
      this.colour = colour;
      this.cords = [x, y];
    },
    circle : function (x, y, radius, h){
      this.h = h || 'clear';
      this.rad = radius;
      this.cords = [x, y];
    }
    
  };

  
}

// canvas.run(rate) {

canvas.prototype.run = function(frame_rate){
  this.rate = frame_rate;
  setInterval(function(){
    if (not(this.paused)){
      this.draw();
    }
    if (this.stop){
      clearInterval()
    }
  }, 1000 / frame_rate);
};

// canvas.pause()

canvas.prototype.pause = function(){
  this.paused = true;
};

// canvas.unpause()

canvas.prototype.pause = function(){
  this.paused = false;
}
// canvas.tick()

canvas.prototype.tick = function(){
  this.run();
}

// canvas.stop() / canvas.stop('NOW')
// canvas.stop('RESET')

canvas.prototype.stop = function(satus){
  if( satus === 'RESET'){
    this.stop = false;
  }else {
    this.stop = true;
  }
}
