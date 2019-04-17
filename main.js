function rot13(str) { // LBH QVQ VG!
	var i = 0;
	var output = ""
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var strlist = str.split("");

	for (i = 0; i < strlist.length; i++) {


		if (strlist[i] == "!") {
			output = output + strlist[i];
		}
		else if (strlist[i] == "?") {
			output = output + strlist[i];
		}
        else if (strlist[i] == ".") {
			output = output + strlist[i];
		}
		else if (strlist[i] == " ") {
			output = output + " "
		}

		else {
			var a = alphabet.indexOf(strlist[i].toLowerCase());
		a = a + 13;

		if (a >= 26) {
			a = a - 26;
		}

		output = output + alphabet[a];
	}
}

output = output.toUpperCase();

console.log(output);

return output;
}

// Change the inputs below to test
rot13("SERR CVMMN!")
