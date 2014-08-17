// Create palette table set w/ colors

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
											.addClass("paletteColorCell")
											.css("background-color", colors[eachColor]);
				row.append(col);
				eachColor++;
			}
			paletteTable.append(row);

		}

		$('#controls').append(paletteTable);

	};

	PixelPainter();



	// Create table w/ empty rows and columns

	function controlsTable (width, height) {
		this.controls = $("<div id=controls></div>")

		var emptyTable = $("<tale></table>");

		for(var i = 0; i < 5; i++) { // create rows
			var row = $("<tr></tr>");
			for (var j = 0; j < 5; j++) {
				var col = $("<td></td>")
											.addClass("emptyColorCell")
											.css("background-color", '');
				row.append(col);

			}
			emptyTable.append(row);
		}

		$('#artboard').append(emptyTable);

	}

	// Drawing functionality
	var currentColor;

	$('#controls').on("click", ".paletteColorCell", function(){
		currentColor = $(this).css("background-color");
		console.log(currentColor);
	})

	$('#artboard').on("click", ".emptyColorCell", function(){
		$(this).css("background-color", currentColor);
	})

	controlsTable();


	// Clear button
	$('#clearButton').on("click", function(){
		$('.emptyColorCell').css("background-color", "");
	})


	// Erase button




})();

