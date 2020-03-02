//Класс хранящий возможности компонентов экспорт по умолчанию

export class Component {
    constructor(id){
        this.$el = document.getElementById(id) //со знаком $ помечаются DOM-компоненты
        this.init()
    }

    init(){}//характеризует жизненный цикл компонента

    onHide(){

    }

    onShow(){

    }

    hide(){
        this.$el.classList.add('hide')

        this.onHide()
    }//спрятать элемент добавить CSS класс hide для скрытия блока

    show(){
        this.$el.classList.remove('hide')

        this.onShow()
    }//показать элемент убрать CSS класс hide для показа блока
}