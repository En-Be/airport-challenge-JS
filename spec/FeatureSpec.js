describe ('Feature test:', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it ('planes can land at airports', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it ('planes can takeoff from airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents takeOff in bad weather', function() {
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeOff(airport); }).toThrowError('cannot takeoff during storm');
  });

});
