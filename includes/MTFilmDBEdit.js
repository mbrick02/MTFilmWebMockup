/**
 * @Michael
 * This file based on rotate images .js files in:
 * C:\Users\bricklerml\Documents\MB\MBProjects n Stuff\MTMovDB\MThroopTest0412\WebPageTests
 * 
 * current location:
 * C:\xampp\htdocs\MTFilmWebMockup\includes
 */
// .js for rotating gallery of review pages
// C:\Users\bricklerml\Documents\MB\MBProjects n Stuff\MTMovDB\MThroopTest0412\RvwsSepPgs

(function($){ // function to create private scope with $ parameter
	// private scope and using $ without worry of conflict
})(jQuery);

var myImage = document.getElementById("OldRvwImg");
var MTRvwImgPre = "MThroopRvws_Page_";
var imgFileNm = "";
var txtZeroes = "00";
/*  ****Use this for production: var iNumPics = 590; */
var iNumPics = 20;
var imageNmArray = ["MThroopRvws_Page_001.jpg", "MThroopRvws_Page_002.jpg"];

// Constants need to be set up correctly
var chngNext = 1;
var chngPrev = 0;

//"...etc...MThroopRvws_Page_592.jpg"];
// change above to = set of commands or function to load all 592 images -- 2/27/13 20 pre-prod
// e.g. Loop: imageNmArray = push(ifExists(strDir + strFilePre + str3digNum));
var imageIndex = 0;

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function changeImage(typeChng) {
	// global imageIndex;
	// console.log("in changeImage");
	txtZeroes = pad((imageIndex + 1), 3),
	imgFileNm = "../RvwsSepPgs/" + MTRvwImgPre + txtZeroes + ".jpg";
	myImage.setAttribute("src", imgFileNm);
	
	if (typeChng == chngNext){
		imageIndex++;	
	} else {
		imageIndex--;
	}
	
	// if (imageIndex >= imageNmArray.length) {
	if (imageIndex >= iNumPics) {
		imageIndex = 0;
	}
	
	if (imageIndex <= 0) {
		imageIndex = iNumPics-1;
	}
}

$("#nextRvw").button().click(function(){changeImage(chngNext);});
$("#prevRvw").button().click(function(){changeImage(chngPrev);});
/* ***In old rotate images file we set it on interval 
 *   here we will attach it to forward back button click events
 *******
// set Interval in  milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}

*******************
*/