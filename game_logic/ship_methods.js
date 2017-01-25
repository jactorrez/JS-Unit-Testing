function checkForShip(player, coordinates){
	var shipPresent, ship;

	for(let x = 0; x < player.ships.length; x++){
		ship = player.ships[x];

		shipPresent = ship.locations.filter(function(realCoordinates){
			return (realCoordinates[0] === coordinates[0]) && (realCoordinates[1] === coordinates[1]);
		})[0];

		if(shipPresent){
			return ship;
		}
	}

	return false;
}

function damageShip(ship, coordinates){
	ship.damage.push(coordinates);
}

function fire(player, coordinates){
	var ship = checkForShip(player, coordinates);

	if(ship){
		damageShip(ship, coordinates); 
	}

}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;