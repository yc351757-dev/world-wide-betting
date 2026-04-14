let balance = localStorage.getItem("balance") 
    ? parseInt(localStorage.getItem("balance")) 
    : 0;

let history = localStorage.getItem("history") 
    ? JSON.parse(localStorage.getItem("history")) 
    : [];

document.getElementById("balance").innerText = balance;
showHistory();

function addIncome() {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    balance += amount;
    history.push(`${desc}: +₹${amount}`);

    saveData();
}

function addExpense() {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    balance -= amount;
    history.push(`${desc}: -₹${amount}`);

    saveData();
}

function saveData() {
    localStorage.setItem("balance", balance);
    localStorage.setItem("history", JSON.stringify(history));

    document.getElementById("balance").innerText = balance;
    showHistory();

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function showHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}