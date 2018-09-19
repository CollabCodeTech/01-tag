/*
  Objetivo: fazer o focus funcionar sem usar o :focus-within
  Vai fazer: Adiconar uma class chamada -focus no label quando o input estiver com foco
  
  Passo a passo com código:
  0 - Pegar o compoenet e guardar em uma variável (OK)
  1 - Pegar o label e guardar ele em uma variável (OK)
  2 - Pegar o input e guardar ele em uma variável (OK)
  3 - Ouvir o evento focus do input (OK)
  4 - Agora que ouvimos o evento focus, podemos adiconar a class -focus na label

  Anotações:
  BOM (Browser Object Model) - window
  DOM (Document Object Model) - document
*/

"use strict";

const $formCollab = window.document.querySelector(".form-collab");
const $label = $formCollab.querySelector(".label");
const $input = $formCollab.querySelector(".input");

const focusAndBlur = () => $label.classList.toggle("-focus");

$input.addEventListener("focus", focusAndBlur);
$input.addEventListener("blur", focusAndBlur);
