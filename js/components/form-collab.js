/* 
  Funcionalidade: Criar um tag dinamicamente e a tag tem aparecer já selecionada
  
  Passo a passo: 
  1 - Pegar o input (OK)
  2 - Criar um ouvindo para o evento KeyUp ou KeyPress ou KeyDown (OK)
  3 - Dentro do evento precisamos descobrir quando o usuário aperta a tecla ENTER (OK)
  4 - Quando usuário apertar o ENTER nós queremos pegar o texto (OK)
*/
"use strict";

const $formCollab = window.document.querySelector(".form-collab");
const $label = $formCollab.querySelector(".label");
const $input = $formCollab.querySelector(".input");

const focusAndBlur = () => $label.classList.toggle("-focus");

$formCollab.addEventListener("submit", event => event.preventDefault());

$input.addEventListener("focus", focusAndBlur);
$input.addEventListener("blur", focusAndBlur);

$input.addEventListener("keyup", event => {
  event.preventDefault();

  // const keyCode = event.keyCode;
  // const key = event.key;

  const { keyCode } = event;
  const keys = {
    13: "ENTER"
  };

  if (keys[keyCode] === "ENTER") {
    const { value } = $input;

    console.log(value);
  }
});
