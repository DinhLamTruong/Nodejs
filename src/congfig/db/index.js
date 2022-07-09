const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fullstack_Nodejs')
        console.log('connect successfully')
    }
    catch (error) {
        console.log('connect failure')

    }
}
module.exports = { connect }


// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/fullstack_Nodejs', {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             // useCreateIndex: true,

//         });


//         console.log('connect successfully');
//     } catch (error) {
//         console.log('connect failure');
//     }

// } s
// module.exports = { connect };