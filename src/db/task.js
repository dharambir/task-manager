const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    autoIndex: true
});

// Creating Model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    shift: {
        type: String,
        required: [true, 'Shift field is required'],
        enum: {
            values: ['morning', 'day'],
            message: "{VALUE} is not supported!"
        }
    },
    isCompleted: {
        type: Boolean,
        required: [true, 'Status field is required']
    }
})
const myTask = new Task({
    description: "Creating mongoose task model",
    shift: 'night',
    isCompleted: true
})

myTask.save().then(() => {
    console.log('Task saved!');
}).catch((error) => {
    console.log(error);
    // console.log(error.errors.isCompleted.properties.message);
})