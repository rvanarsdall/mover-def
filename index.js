let startDate = document.getElementById('startDate')
let button = document.querySelector('.btn')
let results = document.getElementById('results')
let mmr = document.getElementById('MMR')
let year_contract = document.getElementById('year-contract')




button.addEventListener("click", calcluate)

function calcluate(e){
    e.preventDefault()
    console.log(startDate.value)
    let installDate = new Date(startDate.value)
    let endDate = new Date(startDate.value)
    console.log(year_contract.value)

    endDate.setFullYear(endDate.getFullYear()+parseInt(year_contract.value))
    let today=new Date()

    console.log(endDate)
    if (installDate< today){ 

        let remainingMonths=monthDiff(today, endDate)
        let moneyOwed = remainingMonths * mmr.value
        let moneyOwed2 = moneyOwed*.75
        
        results.innerHTML = `Total Money Owed (Left on Contract): $${moneyOwed.toFixed(2)}<br>75% remaining balance due is: $${moneyOwed2.toFixed(2)}<br> Total Months Remaining: ${remainingMonths}`
        
        calculation.classList.remove('animated', 'fadeIn')
        calculation.style.visibility = "hidden"
        window.setTimeout(function () {
            
            calculation.classList.add('animated', 'fadeIn', 'delay-1s')
            calculation.style.visibility = "visible"
        }, 50);
    }else{
        alert("Install date either not selected or is set in the future.")
    }


}


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months+1;
}