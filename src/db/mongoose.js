const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    autoIndex: true,
    // useNewUrlParse: true,
    // useCreateIndex: true
})
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        },
        trim: true,
        lowercase: true
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        trim: true,
        min: 6,
        required: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password can not be password')
            }
        }
    }
})
const me = new User({
    name: "Dk",
    email: 'DK@esvs.com ',
    age: 28,
    password: "24324"
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Errrr', error);
})