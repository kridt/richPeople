fetch("https://forbes400.herokuapp.com/api/forbes400?limit=10")

.then(res => res.json())
.then(function (data) {

	var listOfPeople = document.querySelector(".richPeople")

	data.forEach(people => {
		const container = document.createElement("article");
		container.classList.add("personCard")
		const netWorth = people.estWorthPrev.toFixed(2)
		container.innerHTML = `
		
		<h1>Number ${people.rank}</h1>
		<p>${people.person.name}</p>
		<p>Source: ${people.source}</p>
		<p>Networth: $${netWorth}M</p>
		<p>Nationality: ${people.countryOfCitizenship}</p>
		<img src="${people.person.squareImage}">
		
		
		`
		listOfPeople.appendChild(container)
		console.log(people);
	});


	setTimeout(function(){  

	function showHide() {
		if(document.querySelectorAll("showMore").style.display == 'none'){
document.querySelectorAll("showMore").style.display='block';
}

else
{
document.querySelectorAll("showMore").style.display = 'none';
}
	}

	showHide()

}, 1000);



})