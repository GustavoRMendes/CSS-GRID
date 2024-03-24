const spider = document.querySelector('#spider')
const flash = document.querySelector('#flash')
const iron = document.querySelector('#iron')
const ufc = document.querySelector('#ufc')
const fifa22 = document.querySelector('#fifa22')
const fifa23 = document.querySelector('#fifa23')

function comprar() {
  confirm('Confirma sua compra? ')
  if(confirm) {
    alert('Compra concluída! Obrigado e volte sempre.')
  }else {
    alert('Compra cancelada.')
  }

}

spider.addEventListener('click',comprar)
flash.addEventListener('click',comprar)
iron.addEventListener('click',comprar)
ufc.addEventListener('click',comprar)
fifa22.addEventListener('click',comprar)
fifa23.addEventListener('click',comprar)