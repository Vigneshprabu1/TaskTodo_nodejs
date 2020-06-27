const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/taskslist',{useNewUrlParser: true,useUnifiedTopology:true});


/** Production DataBase */
mongoose.connect('mongodb://admin:Admin12345678@ds119323.mlab.com:19323/tasktodolist',{useNewUrlParser: true,useUnifiedTopology: true});

mongoose.set('useFindAndModify',true);

var db= mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));

