// List render, laver listen til tid og dato
var timeDate = new Vue({
    el: '#time-date',
    data: {
        times: [
            {message: '21:30'},
            {message: '04-09-2016'}
        ]
    }
});


// List render, laver listen til klasse information
var className = new Vue({
    el: '#class',
    data: {
        classes: [
            {message: 'Digital Development Interaction'},
            {message: '13:00 - 14:30'},
            {message: 'Admin Pronestor'}
        ]
    }
});

new Vue({
    el: '.room-number',
    data: {
        message: 'S.30'
    }
});
