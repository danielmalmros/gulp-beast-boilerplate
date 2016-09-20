var app = new Vue({
    el: '#app',
    data: {
        name: '',
        errors: '',
        newExtra: '',
        extras: [{
            name: 'Daniel Malmros'
        }]
    },
    methods: {
        addExtra: function() {
            var text = this.newExtra.trim()
            if (text) {
                this.extras.push({
                    name: text
                })
                this.newExtra = '';
            }
        },
        // removeTodo: function(index) {
        //     this.todos.splice(index, 1)
        // }
    },
    ready: function() {
        // GET request with ES6
        this.$http.get('http://private-3f637-vuetest1.apiary-mock.com/questions').then((response) => {
            this.errors = response.data.errors;
        }, (response) => {
            // error callback
        });

        // GET request
        // this.$http({
        //     url: 'https://baditicker.herokuapp.com/',
        //     method: 'GET'
        // }).then(function(response) {
        //     this.pools = response.data.pools;
        // }, function(response) {
        //     // error callback
        // });
    }
});


// http://jsonplaceholder.typicode.com/users
