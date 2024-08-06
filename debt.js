

function save() {


	const amount = document.querySelector("#amount").value;
    const income = document.querySelector("#income").value;
  
	
	const months = document.querySelector("#months").value;
	
		calculate(amount,income,months);
	
   
}
function calculate(amount,income,months){
	const rate = (10.75/100).toFixed(2);
	const interest = (amount * (rate * 0.01)) / months;
	const total = ((amount / months) + interest).toFixed(2);
    const gtotal=12*total;
    const pamount=income*(32.5/100).toFixed(2);
	let Total=document.querySelector("#total");
	
    if(isNaN(gtotal) || isNaN(pamount) || isNaN(months)){

			Total.innerHTML = "";
            
        }
    else if(gtotal>pamount){
        Total.innerHTML = "you may face debt";
    }
        else{
           
			Total.innerHTML = "you may not face debt";
        }
    
}
