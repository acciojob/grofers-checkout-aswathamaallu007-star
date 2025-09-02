const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.getElementId("table")
  let totalsum = 0
  const sum = document.querySelectorAll(".price")
	function totalsum(){
		for(let ch of sum){
			totalsum += parseInt(ch.innerText)
		}
		const newrow = document.createElement("tr")
		const newdata = document.createElement("td")
		newdata.colSpan = 2
		newdata.innerText = `Total Amount : ${totalsum}`
		newrow.appendChild(newdata) 
		table.appendChild(newrow)
		
	}
	totalsum()
};

getSumBtn.addEventListener("click", getSum);

