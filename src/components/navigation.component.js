// компонент Заголовок приложения Header
import {Component} from '../core/components'//импорт класса Component

export class NavigationComponent extends Component{
    constructor(id){
        super(id)

        this.tads = []
    }

    init(){
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs){
        this.tabs = tabs
    }
}
//выбор раздела навигации
function tabClickHandler (event){
    event.preventDefault()
    if (event.target.classList.contains('tab')){
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        })
        event.target.classList.add('active')

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name)
        this.tabs.forEach(t => t.component.hide())
        activeTab.component.show()
    }
}