const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://paito:newbase123@ds121652.mlab.com:21652/paito', { useNewUrlParser: true });
const db = mongoose.connection;

const getCollection = (collection) => {
    let data = collection.toString();
    console.log(typeof data);
    db.collection(data).find({}).exec((err, data) => {
        console.info(data);
        console.info(`${data.length} matches`);
        db.close();
    });
};

module.exports = {
    getCollection
};