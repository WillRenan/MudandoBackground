
function changeColor(getColor){
    let bg = document.querySelector('.bg ');
    let selectCor = getColor.value;
    let text = getColor.options[getColor.selectedIndex]
                .text;

    bg.style.background = selectCor;
    bg.innerHTML = text;
}