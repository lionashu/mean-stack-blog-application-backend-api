const mongoose = require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/blogApp',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}, (err)=>{

if(err){
    console.log('Conection has ended with error' +err);
}else{
    console.log('Conction is Successfull');
}
});
module.exports = mongoose;