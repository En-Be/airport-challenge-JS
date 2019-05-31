describe('Airport:', function() {

  var airport;
  var plane; // a spy

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', '[land]')
  });


  it('starts with no planes landed', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear a plane for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear a plane for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  describe('In stormy weather a plane', function(){

    beforeEach(function(){
      spyOn(airport,'isStormy').and.returnValue(true);
    });

    it('cannot take off', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });

    it('cannot land', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });

  });

  describe('In fine weather a plane', function(){

    beforeEach(function(){
      spyOn(airport,'isStormy').and.returnValue(false);
    });

    it('can take off', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).not.toThrowError('cannot takeoff during storm');
    });

    it('can land', function(){
      expect(function(){ airport.clearForLanding(plane); }).not.toThrowError('cannot land during storm');
    });

  });

});
