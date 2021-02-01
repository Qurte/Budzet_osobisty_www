var previousOverlap = "mainPage";
var overlapMainPage = document.getElementById("mainPage");
var overlapContact = document.getElementById("contact");
var overlapAboutUs = document.getElementById("aboutUs");
var overlapLogin = document.getElementById("login");

overlapMainPage.addEventListener("click", function() {changeStyle("mainPage"); });
overlapContact.addEventListener("click", function() {changeStyle("contact"); });
overlapAboutUs.addEventListener("click", function() {changeStyle("aboutUs"); });
overlapLogin.addEventListener("click", function() {changeStyle("login"); });


function changeStyle(nameOverlap)
{
	if (nameOverlap != previousOverlap)
	{
		var color = '#25a02b';
		var colorNav = '#36b03c';
		$('#'+nameOverlap).css('background-color', color);
		$('#'+previousOverlap).css('background-color', colorNav);
		previousOverlap = nameOverlap;
	}
}

