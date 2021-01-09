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
        newBox.classList.add('col-sm', 'box', 'border', 'border-danger')
        lastRow.appendChild(newBox)
    }
}

createNewRow()