var btn = document.getElementById('close__toast');
btn.onclick = function(e){
    const toast = document.getElementById('toast');
    toast.classList.add('toast__ani')
    toast.style.display = 'none'
    

}

var open = document.getElementsByClassName('open__toast');
for (let i = 0; i < open.length; i++) {
    // console.log(open[i]);
    open[i].onclick = function(e){
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        // console.log(e.target)
    }
        
}

var menu = document.querySelector('.ti-menu');
menu.onclick = function(){
    const open = document.querySelector('.header');
    // open.style.height = '230px';
    Object.assign(open.style, {
        height: '230px',
        overflow: 'auto',
    });
    
    open.classList.add('header__ani');
}