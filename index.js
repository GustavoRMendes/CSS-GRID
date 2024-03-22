const spider = document.querySelector('#spider')
const flash = document.querySelector('#flash')
const iron = document.querySelector('#iron')

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