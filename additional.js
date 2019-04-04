const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://paito:newbase123@ds121652.mlab.com:21652/paito', { useNewUrlParser: true });

const getCollection = (collection) => {
    db.users.find()
        .exec((err, contacts) => {
            // assert.equal(null, err);
            console.info(contacts);
            console.info(`${contacts.length} matches`);
            db.close();
        })
};

module.exports = {
    getCollection
};