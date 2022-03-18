const cSelect = document.querySelectorAll('.c-select__selection');

cSelect.forEach((element:any) => {


    element?.addEventListener('click', (e: Event) => {

        element.closest(".c-select__container").classList.add("c-select__display");
    
    });

});

const cSelectOptions = document.querySelectorAll('.c-select__options li');

cSelectOptions.forEach((element:any) => {


    element?.addEventListener('click', (e: Event) => {

    
        element.closest(".c-select").querySelector('input[type-ui="select"]').setAttribute("value", element.getAttribute('value')); 
        element.closest(".c-select__container").classList.remove('c-select__display');
        element.closest(".c-select").querySelector('.c-select__selection').textContent = element.textContent;
    
    });



});


