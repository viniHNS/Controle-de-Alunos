//mensagem para o usuário
console.log('%cSe você não sabe o que está fazendo, não mexa no código e no console.', 'font-size: 20px; font-weight: bold; color: red;');
console.log('%cIgnore as mensagens de erro abaixo, elas são normais.', 'font-size: 12px;');

// coisas do bootstrap
/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

// Mascaras de input
//Telefone
function applyMask(masks, max, event) {
  var c = event.target;
  var v = c.value.replace(/\D/g, '');
  var m = c.value.length > max ? 1 : 0;
  VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  c.value = VMasker.toPattern(v, masks[m]);
}

var telMask = ['(99) 9999-9999', '(99) 99999-9999'];
var tel1 = document.querySelector('#floatingInputTelefoneResponsavel1');
tel1.addEventListener('input', applyMask.bind(undefined, telMask, 14), false);

var tel2 = document.querySelector('#floatingInputTelefoneResponsavel2');
tel2.addEventListener('input', applyMask.bind(undefined, telMask, 14), false);

//CPF
VMasker(document.querySelector("#floatingInputCPF")).maskPattern("999.999.999-99");

//Prevenir que o enter envie o formulário
document.querySelector('form').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    return false;
  }
});









  
