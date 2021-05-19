var price=0;

function addTotals(pr){
	price=price+pr;
	document.getElementById("Total").innerHTML=price;
	
}	
function takeTotals(pr){
	price-=price;
	document.getElementById("Total").innerHTML=price;
	
}	