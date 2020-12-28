fetch("https://forbes400.herokuapp.com/api/forbes400?limit=10")

.then(res => res.json())
.then(function (data) {

	var listOfPeople = document.querySelector(".richPeople")

	data.forEach(people => {
		console.log(people);
		const container = document.createElement("article");
		container.classList.add("personCard")
		container.innerHTML = `
		<p>${people.person.name}</p>
		<img src="${people.person.squareImage}">
		`
		listOfPeople.appendChild(container)
	});

})