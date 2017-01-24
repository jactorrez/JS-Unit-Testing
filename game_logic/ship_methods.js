function checkForShip(player, coordinates){
	var shipPresent, ship;

	for(let x = 0; x < player.ships.length; x++){

		ship = player.ships[x];

		shipPresent = ship.locations.filter(function(realCoordinates){
			return (realCoordinates[0] === coordinates[0]) && (realCoordinates[1] === coordinates[1]);
		})[0];

		if(shipPresent){
			return true;
		}
	}

	return false;
}

module.exports.checkForShip = checkForShip;