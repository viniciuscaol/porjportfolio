const btn = document.getElementById('icon');

if(localStorage.getItem('tema') == null) {
    localStorage.setItem('tema','modo_claro');
}

const localData = localStorage.getItem('tema');

if(localData == 'modo_claro') {
    icon.src = "imgs/moon.png";
    document.body.classList.remove('modo_noturno');
} else if (localData == 'modo_noturno') {
    icon.src = "imgs/sun.png";
    document.body.classList.add('modo_noturno');
} 

btn.addEventListener('click', () => {
    document.body.classList.toggle("modo_noturno");
    if(document.body.classList.contains('modo_noturno')) {
        btn.src = "imgs/sun.png";
        localStorage.setItem('tema','modo_noturno')
    } else {
        btn.src = "imgs/moon.png";
        localStorage.setItem('tema','modo_claro')
    }
})