// компонент Заголовок приложения Header
import {Component} from '../core/components'//импорт класса Component
import {Form} from '../core/form'//импорт класса Form
import {Validators} from '../core/validators'//импорт класса Validators
import {apiService} from '../services/api.service';


export class CreateComponent extends Component{
    constructor(id){
        super(id)//импорт конструктора родительского класса

        //this.form = null
    }

    init(){
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, 
            {
                title:[Validators.required],
                fulltext:[Validators.required, Validators.minLength(10)]
            })
    }
}

async function submitHandler(event){
    event.preventDefault()

    if (this.form.isValid()){
            const formData = {
             type: this.$el.type.value,
             date: new Date().toLocaleDateString(),
                ...this.form.value()
            }

          await apiService.createPost(formData)
          this.form.clear()
          
          alert('Сохранено в БД') 
        }  
    }