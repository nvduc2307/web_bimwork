const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(process.env.PATH_DATABASE);
        console.log('connected mongodb');
    } catch (error) {
        console.log('Can\'t connected mongodb');
    }
}
module.exports = {connect};
