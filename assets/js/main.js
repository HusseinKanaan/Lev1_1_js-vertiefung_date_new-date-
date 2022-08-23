const date = new Date();
let textAusgabe = () => {
    document.getElementById('d').innerHTML = date + get.Date();
   
}

console.log(date)

const date1 = new Date(0)
let textAusgabe1 = () => {
    document.getElementById('d1').innerHTML = date1;
}

const date2 = new Date(31556908800)
let textAusgabe2 = () => {
    document.getElementById('d2').innerHTML = date2;
}

const date3 = new Date(86400000)
let textAusgabe3 = () => {
    document.getElementById('d3').innerHTML = date3;
}


textAusgabe()
textAusgabe1()
textAusgabe2()
textAusgabe3()