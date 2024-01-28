window.addEventListener( // привязать функцию к событию
    'load',   // тип события
    () => {   // функця, в данном случае - безымянная
        calc.addEventListener(
            'click',
            () => {
                var m= weight.value / height.value;
                console.log("Индекс массы тела = " + m);
            }
        );
    }
);