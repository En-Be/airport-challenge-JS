describe ('Weather', function(){

  beforeEach(function() {
    weather = new Weather();
  });

  it('randomly is good or bad', function(){
    expect(['fine', 'stormy']).toContain(weather.condition());
  });


});
