$(document).ready(function () {
    var currentFloor = 2; //переменная,где хранится текущий этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
    var counterUp = $(".counter-up"); //кнопка увеличения этажа 
    var counterDown = $(".counter-down"); //понижение 
    var modal = $(".modal");
    var modalColseButton = $(".modal-close-button");

    // функция при наведении мышькой на этаж
    floorPath.on("mouseover" , function () {
        floorPath.removeClass("current-floor"); //  удаляем активный класс у этажей
       currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
       $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal);/* При клике вызывает окно */
    modalColseButton.on('click', toggleModal); /* Закрывает */
    
    counterUp.on("click", function () {  // отслеживаем клик по кнопке вверх
        // проверяем значение этажа,оно должно быть не больше 18
        if (currentFloor < 18) { 
            currentFloor++; // прибавляем на 1
            usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
            useGrouping:false}); // Форматируем  переменную с этажом в 01,а не 1
        $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // добавляем подсветку текущему этажу
    }
    });

    counterDown.on('click' , function(){
        if (currentFloor >2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
            useGrouping:false}); 
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");/*очищаем этажи*/
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");        
    }
    });
    function toggleModal() {  /* Функция открыть/закрыть окно */
        modal.toggleClass("is-open");
    }
});