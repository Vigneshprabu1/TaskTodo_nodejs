const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskslist',{useNewUrlParser: true,useUnifiedTopology:true});


/** Production DataBase */
// mongoose.connect('mongodb+srv://trcbackoffice:trcbackoffice123@clustertrc-x0fss.mongodb.net/trc?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});

/** Testing DataBase */
// mongoose.connect('mongodb+srv://farm2bag:shine1234@cluster0-hhq55.mongodb.net/trc?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('useFindAndModify',true);

var db= mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));

