const colorleft = document.getElementById('colorleft')
const colorright = document.getElementById('colorright')
const bodyinfo = document.getElementById('bodyinfo')
const showdata = document.getElementById('showvalue')

function setbackground() {
    bodyinfo.style.background = `linear-gradient(to right,${colorleft.value},${colorright.value})`;
    showdata.textContent = `Copy your code: linear-gradient(to right,${colorleft.value},${colorright.value})`;

}

colorleft.addEventListener('input', setbackground)

colorright.addEventListener('input', setbackground)