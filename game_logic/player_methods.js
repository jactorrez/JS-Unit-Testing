var checkForShip = require('./ship_methods').checkForShip;

function validateLocation(player, coordinates){
	var x = coordinates[0];
	var y = coordinates[1];

	var spaceAvailable = !checkForShip(player, coordinates);

	if((x <= 9 && x >= 0) && (y <= 9 && y >= 0)){
		return spaceAvailable;
	} else{
		return false;
	}
}

function validateLocations(player, locations){
	var validated = locations.map(function(location){
		return validateLocation(player, location);
	});

	return validated.indexOf(false) === -1;
}

function placeShip(player, ship, startingCoordinates, direction){
	if(!direction) throw Error("You left out the direction! I need that for math!");
	var proposedLocations = [];
	var previousLocations, rowNumber, columnNumber;

	for(var i = 0; i < ship.size; i++){
		previousLocations = proposedLocations[i - 1] || [];
		rowNumber = previousLocation[0];
		columnNumber = previousLocation[1];

		proposedLocations[i] = (i === 0) ? startingCoordinates 
							   : (direction === "horizontal") ? [rowNumber, ++columnNumber] 
							   : [++rowNumber, columnNumber];
	}

	if(validateLocations(player, proposedLocations)) {
		ship.locations = proposedLocations;
	} else {
		return false;
	}
}	


function getRandomCoordinates(){
	var x = Math.floor(Math.random() * 9);
	var y = Math.floor(Math.random() * 9);
	return [x, y];
}

function getRandomDirection(){
	return Math.random() > 0.5 ? 'horizontal' 
							   : 'vertical';
}

module.exports = {
	placeShip: placeShip,
	validateLocation: validateLocation,
	validateLocations: validateLocations
};