const fontSizeEl = document.querySelector (`#font-size-control`);
fontSizeEl.addEventListener (`input`, () => {
    document.querySelector (`#text`).style.fontSize = fontSizeEl.value + `px`;
    
})