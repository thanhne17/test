var btn = document.getElementById('close__toast');
btn.onclick = function(e){
    const toast = document.getElementById('toast');
    toast.style.display = 'none'
}

var open = document.getElementsByClassName('open__toast');
for (let i = 0; i < open.length; i++) {
    // console.log(open[i]);
    open[i].onclick = function(e){
        const toast = document.getElementById('toast');
    toast.classList.add('toast__ani')
    toast.style.display = 'block';
        // console.log(e.target)
    }

        
}

// var menu = document.querySelector('.ti-menu');
// menu.onclick = function(){
//     const open = document.querySelector('.header');
//     // open.style.height = '230px';
//     Object.assign(open.style, {
//         height: '230px',
//         overflow: 'auto',
//     });
    
//     open.classList.add('header__ani');
// }

var menu = document.querySelector('.ti-menu');
var openMenu = document.querySelector('.header');
menu.onclick = function(){
    var open = openMenu.clientHeight === 46;
    if (open) {
        openMenu.style.height = '228px';
        openMenu.classList.add('header__ani')
        openMenu.classList.remove('header--close__ani');
        
    }
    else{
        openMenu.style.height = null;
        openMenu.classList.toggle('header__ani')
        openMenu.classList.add('header--close__ani');
    }
}

var autoCloseMenu = document.querySelectorAll('a[href*="#"]');
var autoCloseMenuItem;
for (let i = 0; i < autoCloseMenu.length; i++) {
    autoCloseMenuItem = autoCloseMenu[i];
    
    autoCloseMenuItem.onclick = function(e){
        var itemSubMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-menu');
        if(itemSubMenu){
            e.preventDefault()
        }
        else{
            openMenu.style.height = null;
            openMenu.classList.add('header--close__ani');
        }
        
    }
}
