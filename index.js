// function saveLead(){
//     console.log("Button clicked!")
// } //in js we can use this line of code when the button is
// clicked but out in the wild professsionals uses a code 
// called event listener to run when the button is clicked
// fun fact is that we dont need to write any onclick event 
// in the html and make it clean and easy to read.

let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function () {
    // console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value) //to save the value of the textbox into the array.
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})

function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        // here we use innerHTML because we are to list items in unordered list but we do it in <li> 
        // here js doesnt understant that it is html soo we uses innerHTML so that the js understand its an html tag 
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
        // to open the link in the new tab we use target = "_blank" inside the <a>
        listItems += `
        <li>
            <a 
            target='_blank' href='${Leads[i]}'>${Leads[i]}
            </a>
        </li> 
        `
        // another way of doing is using createElement() and apend() insead of innerHTML
        // const li = document.createElement[li]
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

const tabs = [
    { url: "www.google.com" }
]

tabBtn.addEventListener("click", function () {
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
    render(myLeads)
})