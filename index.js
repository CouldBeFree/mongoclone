const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://paito:newbase123@ds121652.mlab.com:21652/paito', { useNewUrlParser: true });
const db = mongoose.connection;