const temp_zahl = document.getElementById('show_temp');
const regler = document.getElementById('slider_1');

function upd_temp(){
    temp_zahl.textContent = regler.value;
}

regler.addEventListener('input', upd_temp)