const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask : '',
            todo_list :[
                {
                    text : 'Fare la spesa',
                    done : false,
                    edit : false
                },
                {
                    text : 'Fare i compiti',
                    done : false,
                    edit : false
                },
                {
                    text : 'Pulire la macchina',
                    done : false,
                    edit : false
                },
                {
                    text : 'Aggiustare il computer',
                    done : false,
                    edit : false
                }
            ] 
        }
    },
    methods : {
        removeTodo(index){
            this.todo_list.splice(index,1);
        },
        addNewTask(){
            let obj = {
                text: this.newTask,
                done: false
            };
            this.todo_list.push(obj);
            this.newTask = '';
        }
    }
}).mount('#app')