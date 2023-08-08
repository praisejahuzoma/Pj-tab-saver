let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLead()
})

function renderLead(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>
    `
        
    }
    ulEl.innerHTML = listItems 
}

