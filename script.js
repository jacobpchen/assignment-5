$(document).ready(function () {

    $('.col-sm').click(function () {
        console.log("Inside click function")
        let c = document.getElementById('colors')
        let color = c.value
        $(this).css('background-color', color)
        console.log($(this).addClass(color).removeClass('white'))

    })

    $('.fill-all-btn').click(function () {
        console.log("fill all button clicked")
        let c = document.getElementById('fill-all')
        let color = c.value
        $('.row').children().each(function () {
            if ($(this).hasClass('white')) {
                $(this).css('background-color', color)
                console.log($(this).addClass(color).removeClass('white'))
            }
        })
    })

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

    createNewRow()
    createNewCol()
    removeRow()
    removeCol()

})
