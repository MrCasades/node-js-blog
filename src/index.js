import {HeaderComponent} from './components/header.component' // импорт класса HeaderComponent
import {NavigationComponent} from './components/navigation.component' // импорт класса NavigationComponent
import {CreateComponent} from './components/create.component' // импорт класса CreateComponent
import {PostsComponent} from './components/posts.component' // импорт класса PostsComponent
import {FavoriteComponent} from './components/favorite.component' // импорт класса FavoriteComponent
import {LoaderComponent} from './components/loader.component';

const header = new HeaderComponent('header')// Экземпляр класса HeaderComponent

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader') //значение в скобках соответствует id в html-шаблоне

const create = new CreateComponent('create')
const posts = new PostsComponent('posts', {loader})//если ключ равен значению оьекта, то можно указать только ключ
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])