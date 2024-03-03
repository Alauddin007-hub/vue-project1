import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Header from './components/Header.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('header-item', Header)

app.mount('#app')