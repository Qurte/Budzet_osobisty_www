var previousOverlap = "mainPage";
var overlapMainPage = document.getElementById("mainPage");
var overlapContact = document.getElementById("contact");
var overlapAboutUs = document.getElementById("aboutUs");
var overlapLogin = document.getElementById("login");

overlapMainPage.addEventListener("click", function() {changeStyle("mainPage"); });
overlapContact.addEventListener("click", function() {changeStyle("contact"); });
overlapAboutUs.addEventListener("click", function() {changeStyle("aboutUs"); });
overlapLogin.addEventListener("click", function() {changeStyle("login"); });

//var addIncome = document.getElementById("addIncome");
//var addExpense = document.getElementById("addExpense");
//var balance = document.getElementById("balance");

//addIncome.addEventListener("click", function() {changeContent("addIncome"); });
//addExpense.addEventListener("click", function() {changeContent("addExpense"); });
//balance.addEventListener("click", function() {changeContent("balance"); });

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
