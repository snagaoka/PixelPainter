// Create table set w/ colors

(function () {

function PixelPainter (width, height) {
	this.artboard = $("<div id=artboard></div>");

	var colors = [
		'#FAEBD7', '#00FFFF', '#7FFFD4', '#0000FF', 
		'#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', 
		'#7FFF00', '#FF7F50', '#6495ED', '#FFF8DC', 
		'#DC143C', '#008B8B', '#B8860B', '#556B2F', 
	];

	var eachColor = 0;

	var paletteTable = $("<table></table>");

	for (var i = 0; i < 4; i++) { // create rows
		var row = $("<tr></tr>");
		for (var j = 0; j < 4; j++){ // create columns
			var col = $("<td></td>")
										.addClass("paletteColor")
										.css("background-color", colors[eachColor]);
			row.append(col);
			eachColor++;
		}
		paletteTable.append(row);

	}

	$('#controls').append(paletteTable);

};

PixelPainter();


// Erase button



// Clear button



// Create table w/ empty rows and columns



})();

