const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String
    },
    date: Date

},
    { timestamps: true }
);

const Todo = model('todo',todoSchema);

module.exports = Todo;