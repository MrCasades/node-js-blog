// компонент Заголовок приложения Header
import {Component} from '../core/components'//импорт класса Component

export class HeaderComponent extends Component {
    constructor(id){
        super(id)//импорт конструктора родительского класса
    }

    init(){
        if (localStorage.getItem('visited')){
            this.hide()//если есть значение localStorage.getItem('visited'), то скрываем Headernp
        }

        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))//Добавление действия к кнопке приватно. bind
                                                            //создаёт контекст, чтобы восприниматьthis
    }
}

function buttonHandler(){
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()//добавить CSS класс hide для скрытия блока
}