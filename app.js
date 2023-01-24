const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        myTasks: [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Comprare scarpe da calcetto',
                done: true
            },
            {
                text: 'Fare esercizi per Boolean',
                done: true
            }
        ],
        newAddTodo: '',
        /* newTodo: {
            text: '',
            done: false
        }*/
      }
    },
    methods: {
        removeTodo(index) {
            console.log('ciao');
            this.myTasks.splice(index, 1);         
        },
        addTodo() {
            newTask = {
                text: this.newAddTodo,
                done: false
            },
            this.myTasks.push(newTask);
            newAddTodo = '';
        },
    }
}).mount('#app')