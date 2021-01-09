$(document).ready(function () {

    const createNewRow = () => {
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

    const createNewCol = () => {
        // get all the rows and convert to an array
        let allRows = document.querySelectorAll('.row')
        allRows = Array.from(allRows)

        // for each element in the allRows array, append a col child
        allRows.forEach(element => {
            let newCol = document.createElement('div')
            newCol.classList.add('col-sm', 'box', 'border', 'border-dark')
            element.appendChild(newCol)
        })
    }

    const removeRow = () => {
        let content = document.querySelector('.content')
        let lastRow = content.lastElementChild
        lastRow.remove()
    }

    const removeCol = () => {
        let allRows = $('.row')

        for (let i = 0; i < allRows.length; i++) {
            console.log(allRows[i])
            let lastElement = allRows[i].lastElementChild
            lastElement.remove()

        }
    }

    const selectColors = () => {
        document.getElementById('colors').addEventListener('change', function () {
            let c = document.getElementById('colors')
            let color = c.value
            // create function here??

        })
    }

    createNewRow()
    createNewCol()
    removeRow()
    removeCol()
    let myColor = selectColors()
    // console.log("This is my color: " + myColor)


})
