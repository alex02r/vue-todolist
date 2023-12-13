const { createApp } = Vue;

createApp({
    data(){
        return{
            todo_list :[
                {
                    text : 'Fare la spesa',
                    done : false
                },
                {
                    text : 'Fare i compiti',
                    done : false
                },
                {
                    text : 'Pulire la macchina',
                    done : false
                },
                {
                    text : 'Aggiustare il computer',
                    done : false
                }
            ] 
        }
    },
    methods : {
        
    }
}).mount('#app')