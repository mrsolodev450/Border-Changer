const container = document.querySelector('.container')

let border = {
  properties: {
    color: document.getElementById('border-color'),
    style: document.getElementById('border-style'),
    radius: document.getElementById('border-radius')
  },
  DEFAULT: {
    width: '2px',
    style: 'solid',
    color: 'black',
    radius: '0'
  }

}

border.properties.color.addEventListener('input', ()=>{
  container.style.borderColor = border.properties.color.value
  container.style.borderWidth = border.DEFAULT.width
  border.DEFAULT.color = border.properties.color.value
  
})

border.properties.radius.addEventListener('input', ()=>{
  container.style.borderRadius = border.properties.radius.value
  container.style.borderWidth = border.DEFAULT.width
  border.DEFAULT.raduis = border.properties.radius.value
  
})

border.properties.style.addEventListener('change', () => {
  container.style.borderStyle = border.properties.style.value
  container.style.borderWidth = border.DEFAULT.width
  border.DEFAULT.style = border.properties.style.value
  
})

