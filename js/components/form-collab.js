/* 
  Funcionalidade: Criar um tag dinamicamente e a tag tem aparecer já selecionada
  
  Passo a passo: 
  1 - Pegar o input (OK)
  2 - Criar um ouvindo para o evento KeyUp ou KeyPress ou KeyDown (OK)
  3 - Dentro do evento precisamos descobrir quando o usuário aperta a tecla ENTER (OK)
  4 - Quando usuário apertar o ENTER nós queremos pegar o texto (OK)
  5 - Criar o component tag com o texto dentro como valor e usar o id e for
*/
"use strict";

const $formCollab = window.document.querySelector(".form-collab");
const $label = $formCollab.querySelector(".label");
const $input = $formCollab.querySelector(".input");
const $tags = $formCollab.querySelector(".tags");

const focusAndBlur = () => $label.classList.toggle("-focus");
const newTag = value => {
  const $tag = document.createElement("span");
  const template = `
      <input class="tagInput" id="${value}" type="checkbox" checked>
      <label class="tag" for="${value}">${value}</label>
    `;
  $tag.innerHTML = template;

  return $tag;
};

$formCollab.addEventListener("submit", event => event.preventDefault());

$input.addEventListener("focus", focusAndBlur);
$input.addEventListener("blur", focusAndBlur);

$input.addEventListener("keyup", event => {
  event.preventDefault();

  const { keyCode } = event;
  const keys = {
    13: "ENTER"
  };

  if (keys[keyCode] === "ENTER") {
    const { value } = $input;

    $tags.prepend(newTag(value));

    $input.value = "";
  }
});

$tags.addEventListener("click", event => {
  const { target } = event;

  if (target.classList.contains("remove")) {
    const $wrapTag = target.closest(".wrapTag");

    $wrapTag.classList.add("-remove");
    $wrapTag.addEventListener("transitionend", () => $wrapTag.remove());
  }
});
