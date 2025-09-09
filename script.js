const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const table = document.getElementById("table")
	let sum = 0
	const prices = document.querySelectorAll(".prices")
	function total(){
		for(let ch of prices){
			sum += parseInt(ch.innerText)
		}
		const newrow = document.createElement("tr")
		const newdata = document.createElement("td")
		newdata.id = "ans"
		newdata.colSpan = 2
		newdata.innerText = `Total Price is ${sum}`
		newrow.appendChild(newdata)
		table.appendChild(newrow)
	}
	total()
};

getSumBtn.addEventListener("click", getSum);

