function Weather(){
  this._conditions = ['fine', 'stormy'];
};

Weather.prototype.condition = function(){
  return this._conditions[Math.floor(Math.random()*this._conditions.length)];
};
