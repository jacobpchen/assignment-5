function createNewRow() {
    let content = document.querySelector('.content')
    let lastRow = content.lastElementChild
    let numCols = lastRow.childElementCount

    // create a new row and append it to content
    let newRow = document.createElement('div')
    newRow.classList.add('row')
    content.appendChild(newRow)

    // target the last row
    lastRow = content.lastElementChild

    for (let i = 0; i < numCols; i++) {
        let newBox = document.createElement('div')
        newBox.classList.add('col-sm', 'box', 'border', 'border-dark')
        lastRow.appendChild(newBox)
    }
}

function createNewCol() {
    // get all the rows and convert to an array
    let allRows = document.querySelectorAll('.row')
    console.log(allRows)
    allRows = Array.from(allRows)
    console.log(Array.isArray(allRows))
    // for each element in the allRows array, append a col child
    allRows.forEach(element => {
        let newCol = document.createElement('div')
        newCol.classList.add('col-sm', 'box', 'border', 'border-dark')
        element.appendChild(newCol)
    })
}

function removeRow() {
    let content = document.querySelector('.content')
    let lastRow = content.lastElementChild
    lastRow.remove()
}

createNewRow()
createNewCol()
removeRow()