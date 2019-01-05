window.onload = function() {
    var menu = document.getElementById('menu'),
        icon_menu = document.getElementById('icon_menu'),
        target = 0;

    if (icon_menu.addEventListener) 
        icon_menu.addEventListener('click', show_menu, false);
    else if (icon_menu.attachEvent)
        icon_menu.attachEvent('onclick', show_menu);

    function show_menu(event) {
        // Для IE 8 и ниже. объект событие не передается как аргумент функ. а храниться в window.event
        event = event || window.event;
        var obj = event.target;
          
        if (obj === icon_menu) {
            
            if (target === 1) {                
                menu.className = 'hide_menu'; 
                icon_menu.style.color = '#f5f5f5';
                target = 0; 
            }
            else {               
                menu.className = 'show_menu';
                icon_menu.style.color = '#787b80';
                target = 1; 
            }    

        };
       
    }
    
}