
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStroge = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStroge) {
    myLeads = leadsFromLocalStroge
    render(myLeads)
}

const tabs = [
    { url: "https://linkedin.com/in/abhinav-sharma-750342175" }
]

tabBtn.addEventListener("click", function () {
     
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


function render(myLeads) {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        // listItems += 
        // <li>
        // <a traget='_blank' href='${myLeads[i]} '>${myLeads[i]} </a>
        // </li>

        // const li = document.createElement("li")
        // li.textContent = myLead[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLead"))
})

