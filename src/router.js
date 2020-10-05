import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: "/",
      name: "Todo",
      components: {
        Todo: Todo
    }
  }
  ]
})