var Airport = function(){
  this._hangar = [];
  this.weather = new Weather();

};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar.pop(plane);
};

Airport.prototype.isStormy = function(){
  return this.weather.condition() === 'stormy';
};
