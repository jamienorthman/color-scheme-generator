const schemeSelectBox = document.getElementById('choose-scheme')
const getSchemeBtn = document.querySelector('button')
const seedColor = document.querySelector('input')
const schemeOption = document.querySelectorAll('option')

getSchemeBtn.addEventListener('click', () => {
   

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.replace('#', '')}&mode=${schemeSelectBox.value}`)
        .then(res => res.json())
        .then(data => console.log(data))
})
    
    

   