const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.getElementById("table")
  let totalsum = 0
  const sum = document.querySelectorAll(".price")
	function total(){
		for(let ch of sum){
			totalsum += parseInt(ch.innerText)
		}
		const newrow = document.createElement("tr")
		const newdata = document.createElement("td")
		newdata.id = "ans"
		newdata.colSpan = 2
		newdata.innerText = `Total Amount : ${totalsum}`
		newrow.appendChild(newdata) 
		table.appendChild(newrow)
		
	}
	total()
};

getSumBtn.addEventListener("click", getSum);

