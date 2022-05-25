const ligada = document.querySelector(`div.container`)
const desligada = document.querySelector("div.container1")
const interruptor = document.querySelector('#ligarDesligar')
ligada.style.opacity='0'
interruptor.addEventListener('click',() =>{
    console.log(ligada.style.opacity)
   if (ligada.style.opacity == '1'){
   ligada.style.opacity='0'
    desligada.style.opacity = '1'
    } else {
        ligada.style.opacity = '1'
            desligada.style.opacity = '0'
    }
}
)