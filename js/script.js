const btnControl = document.querySelector('.accordion__control-btn');

btnControl.disabled = true;

const acordsBtn = document.querySelectorAll('.accordion__item-btn');

const acordsBlock = document.querySelectorAll('.accordion__item-text');

acordsBtn.forEach(function(item) {
   
    item.addEventListener('click', function() {

        let currentBtn = item;

        let tabId = currentBtn.getAttribute('data-tab');

        let currentTab = document.querySelector(tabId);


        if (! currentBtn.classList.contains('active') ) {
            currentBtn.classList.add('active');
            currentTab.classList.add('active');

        } else {
            acordsBlock.forEach(function(item){
                currentBtn.classList.remove('active');
            });
            acordsBtn.forEach(function(item){
                currentTab.classList.remove('active');
            });

            btnControl.disabled = true;

        }
       
        
        let acordsBtnActive = document.querySelectorAll('.accordion__item-btn.active');

        if (acordsBtn.length == acordsBtnActive.length){
        btnControl.disabled = false;
        }

        
    });
    
});


