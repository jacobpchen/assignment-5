$(document).ready(function () {



    // Click on a box to change the color 
    $('.col-sm').click(function () {
        console.log("Inside click function")
        let c = document.getElementById('colors')
        $(this).css('background-color', c.value)
        $(this).addClass(c.value).removeClass('white')
    })

    // Click on the button to fill all white boxes to the selected color
    $('.fill-all-white-boxes-btn').click(function () {
        console.log("fill-all-white-boxes clicked")
        let c = document.getElementById('fill-all-white-boxes')
        $('.row').children().each(function () {
            if ($(this).hasClass('white')) {
                $(this).css('background-color', c.value)
                console.log($(this).addClass(c.value).removeClass('white'))
            }
        })
    })

    // Click on the button to fill ALL boxes to the selected color
    $('.fill-all-btn').click(function () {
        console.log("fill all button clicked")
        let c = document.getElementById('fill-all')
        $('.row').children().each(function () {
            $(this).css('background-color', c.value)
        })
    })

    // Click down and drag to color
    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
    })

    $('.col-sm').mouseover(function () {
        if (isDown) {
            let c = document.getElementById('drag-and-fill')
            $(this).css('background-color', c.value)
        }
    })

    // Add a row
    $('.add-row').click(createNewRow = () => {
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
            newBox.classList.add('col-sm', 'box', 'border', 'border-dark', 'white')
            lastRow.appendChild(newBox)
        }
    })

    // Add a col
    $('.add-col').click(createNewCol = () => {
        // get all the rows and convert to an array
        let allRows = document.querySelectorAll('.row')
        allRows = Array.from(allRows)

        // for each element in the allRows array, append a col child
        allRows.forEach(element => {
            let newCol = document.createElement('div')
            newCol.classList.add('col-sm', 'box', 'border', 'border-dark', 'white')
            element.appendChild(newCol)
        })
    })

    // Delete a row
    $('.del-row').click(removeRow = () => {
        console.log("delete row clicked")
        let content = document.querySelector('.content')
        let lastRow = content.lastElementChild
        lastRow.remove()
    })

    // Delete a col
    $('.del-col').click(removeCol = () => {
        let allRows = $('.row')
        for (let i = 0; i < allRows.length; i++) {
            console.log(allRows[i])
            let lastElement = allRows[i].lastElementChild
            lastElement.remove()
        }
    })

})
