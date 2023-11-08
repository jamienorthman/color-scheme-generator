const schemeSelectBox = document.getElementById('choose-scheme')
const getSchemeBtn = document.querySelector('button')
const seedColor = document.querySelector('input')

renderColors()

getSchemeBtn.addEventListener('click', () => {
    renderColors()
})

function renderColors() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.replace('#', '')}&mode=${schemeSelectBox.value}`)
        .then(res => res.json())
        .then(data => {
        let colorHtml = ''
            for (let color of data.colors) {
                colorHtml += `
                <div class="color" style="background-color:${color.hex.value}">
                    <h3 class="color-code">${color.hex.value}</h3>
                </div>
                `
            }
            document.querySelector('.color-palette').innerHTML = colorHtml
        })
}

    
    
    
    

   