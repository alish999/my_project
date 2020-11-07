const axios = require('axios');
axios.get('https://5f8fa16c693e730016d7b35f.mockapi.io/api/users')
.then(function(response){
response.data.forEach(function(value, index){
    console.log(value.name);
})
}).catch(function(error){

})
.then (function(){

})