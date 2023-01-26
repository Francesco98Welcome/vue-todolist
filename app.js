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
        newAddToDo: '',
        /* newTodo: {
            text: '',
            done: false
        }*/
      }
    },
    methods: {
        removeToDo(index) {
            console.log('ciao');
            this.myTasks.splice(index, 1);         
        },
        addToDo() {
            newTask = {
                text: this.newAddToDo,
                done: false
            },
            this.myTasks.push(newTask);
            this.newAddToDo = '';
        },
    }
}).mount('#app')