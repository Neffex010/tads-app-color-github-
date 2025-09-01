// Obtener elementos
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

const rojoInput = document.getElementById("rojo-input");
const verdeInput = document.getElementById("verde-input");
const azulInput = document.getElementById("azul-input");

const colorBox = document.getElementById("color-box");
const hexCode = document.getElementById("hex-code");
const rgbCode = document.getElementById("rgb-code");

// Conversión a HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b]
    .map(x => {
      const hex = parseInt(x).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}

// Actualizar color desde sliders
function updateColor() {
  const r = parseInt(rojo.value);
  const g = parseInt(verde.value);
  const b = parseInt(azul.value);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);

  colorBox.style.backgroundColor = rgb;
  hexCode.textContent = hex.toUpperCase();
  rgbCode.textContent = rgb;

  // sincronizar inputs numéricos
  rojoInput.value = r;
  verdeInput.value = g;
  azulInput.value = b;
}

// Actualizar desde inputs numéricos
function updateFromInputs() {
  let r = parseInt(rojoInput.value) || 0;
  let g = parseInt(verdeInput.value) || 0;
  let b = parseInt(azulInput.value) || 0;

  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);

  rojo.value = r;
  verde.value = g;
  azul.value = b;

  updateColor();
}

// Eventos
[rojo, verde, azul].forEach(input => input.addEventListener("input", updateColor));
[rojoInput, verdeInput, azulInput].forEach(input => input.addEventListener("input", updateFromInputs));

// Inicializar
updateColor();
