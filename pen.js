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

function canvas(id, width, height){
  this.self = document.getElementById(id);
  this.size = {w:width, h:height};
  this.width = this.size.w;
  this.height = this.size.h;
  this.paused = false;
  this.draw = function(){
    console.log("ERROR");
  };
}

canvas.prototype.run = functon(frame_rate){
  setInterval(function(){
    if (not(this.paused)){
      this.draw();
    }
  }, 1000 / frame_rate);
};
