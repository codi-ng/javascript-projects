const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

function render(leads){
    let listItems = "";
    leads.forEach(li => listItems += `<li><a target='_blank' href=${li}>${li}</a></li>`);
    ulEl.innerHTML = listItems;
    
}

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
} 



inputBtn.addEventListener("click", function(){
    let inputValue = inputEl.value;
    if(inputValue.length === 0) return;
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
})

tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let tab = tabs[0];
        myLeads.push(tab.url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

    })
    
})

inputEl.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        let inputValue = inputEl.value;
        if(inputValue.length === 0) return;
        
        myLeads.push(inputValue);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        inputEl.value = "";
        render(myLeads);
    }
})

inputEl.addEventListener("keydown", function(e){
    if(e.key === 'Shift'){
        localStorage.clear();
        myLeads = [];
        render(myLeads);
    }
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})



