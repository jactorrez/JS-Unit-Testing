var expect = require('chai').expect;

describe("checkForShip", function(){
	var checkForShip = require('../game_logic/ship_methods').checkForShip;

	it("should correctly report no ship at a given players coordinates", function(){
		var player = {
			ships: [
				{ 
					locations: [[0,0]]
				}
			]
		}
		expect(checkForShip(player, [9,9])).to.be.false;
	});


	it("should correctly report a ship exists at a given players coordinates", function(){
		var player = {
			ships: [
				{
					locations: [[0,0]]
				}
			]
		}
		expect(checkForShip(player, [0,0])).to.be.true; 
	
	});

	it("should handle ships located at more than one coordinate", function(){
		var player = {
			ships: [
				{
					locations: [[0,0], [0,1]]
				}
			]
		}
		expect(checkForShip(player, [0,1])).to.be.true; 
		expect(checkForShip(player, [0,0])).to.be.true; 
		expect(checkForShip(player, [0,9])).to.be.false; 
	});

	it("should handle checking multiple ships", function(){
		var player = {
			ships: [
				{ 
					locations: [[0,1],[0,2]]
				},
				{
					locations: [[3,2], [3,3]]
				},
				{
					locations: [[2,0], [2,1], [2,2], [2,3]]
				}
			]
		}

		expect(checkForShip(player, [0,1])).to.be.true;
		expect(checkForShip(player, [0,2])).to.be.true;
		expect(checkForShip(player, [3,2])).to.be.true;
		expect(checkForShip(player, [3,3])).to.be.true;
		expect(checkForShip(player, [9,9])).to.be.false;
		expect(checkForShip(player, [2,3])).to.be.true;
	});



});