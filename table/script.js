
let addCardBtn = document.querySelector("#addCard");
let toDocontainer = document.getElementById("todo")

addCardBtn.addEventListener("click", addingTask)

function addingTask(){

    // let divCard = document.createElement("div")
    // divCard.className = "divCard"
    let card = document.createElement("div")
    card.className = "card";
    card.id = "card" + Date.now()
    // card.innerHTML = "click to Edit"
    toDocontainer.append(card);
    card.setAttribute("contenteditable", "true");
    card.setAttribute("draggable", true)
    card.focus();
    // divCard.append(card)

    card.addEventListener("blur", (eventDeatils) => {
        let targetCard = eventDeatils.target;
        if(!targetCard.innerHTML.trim()){
            targetCard.remove();
            //remove the card if it is empty.
        }
    })
    // const selector = document.createElement("select")
    // selector.className = "selector"
    // selector.innerHTML = `
    //     <option value = "todo">ToDo</option>
    //     <option value = "inprogress">InProgress</option>
    //     <option value = "done">Done</option>
    // `
    // divCard.append(selector)

    // selector.addEventListener("change", (eventDetails) => {
    //     const status = eventDetails.target.value
    //     document.getElementById(status).append(card);
    // })

    card.addEventListener("dragstart", (eventDetails) => {
        let cardDragged = eventDetails.target
        eventDetails.dataTransfer.setData("text/plain", cardDragged.id)
        cardDragged.style.opacity = "0.5"
    });

    card.addEventListener("dragend", (eventDetails) => {
        let cardDragged = eventDetails.target
        cardDragged.style.opacity = "1"
    })

    let dragEvents = ["dragover", "dragenter", "drop"]

    dragEvents.forEach(dropEvent => {
        document.querySelectorAll(".column").forEach(colunm => {
            colunm.addEventListener(dropEvent, (eventDetails) => {
                eventDetails.preventDefault()

                if(dropEvent == "drop"){
                    const cardId = eventDetails.dataTransfer.getData("text/plain")
                    const card = document.getElementById(cardId)
                    colunm.append(card)
                }
            }) 
        })
    })
}



































































































































































































































// let container = document.getElementById("tableContainer")

// let table = document.createElement("table");
// table.id = "dynamicTable";
// table.className = "tableDynamic"


// let thead = document.createElement("thead");

// {/* <table>
//     <thead>
//         <tr></tr>
//     </thead>
//     <tbody>
        
//     </tbody>
// </table> */}

// //it will create the head and add it to the table
// const header = table.createTHead();

// const row = header.insertRow(0);

// let arr = ["column1", "column2", "column3", "column4", "column5"]

// arr.forEach((headerText, index) => {
//     const cell = row.insertCell(index);
//     cell.innerText = headerText;
// })

// //create body

// // const body = table.createTBody();

// function addRow(dataArray){
//     let tableBody = table.getElementsByTagName("tbody")[0] || (table.createTBody())

//     let newrow = tableBody.insertRow()

//     dataArray.forEach((headerText, index) => {
//         const cell = newrow.insertCell(index);
//         cell.innerText = headerText;
//     })
// }

// addRow(["Data1", "Data2", "Data3", "Data4", "Data5"])
// addRow(["value1", "value2", "value3", "value4", "value5"])
// addRow(["info1", "info2", "info3", "info4", "info5"])
















// container.append(table)
// // container.appendChild(table)