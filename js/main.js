// document.getElementById("bars").addEventListener("click",() => {

//     const menu = document.getElementById("nav-area");
//    menu.classList.toggle('nav-area');

// });


function toggleMenu(){
    const closeButton = document.getElementById('close');
    const bars = document.getElementById('bars');
    const menu = document.getElementById('nav-area');

    if (bars.className === 'active'){
        hideBars();
        showCloseButton();
        showMenu();
    }else{
        showBars();
        hideCloseButton();
        hideMenu();
    }

    function hideBars() {
        bars.classList.remove('active');
        bars.classList.add('hidden');
    }

    function showBars() {
        bars.classList.remove('hidden');
        bars.classList.add('active');
    }

    function showCloseButton() {
        closeButton.classList.remove('hidden');
        closeButton.classList.add('active');
    }

    function hideCloseButton() {
        closeButton.classList.remove('active');
        closeButton.classList.add('hidden');
    }

    function showMenu() {
        menu.classList.remove('hidden');
        menu.classList.add('active');
    }

    function hideMenu() {
        menu.classList.remove('active');
        menu.classList.add('hidden');
    }


}

