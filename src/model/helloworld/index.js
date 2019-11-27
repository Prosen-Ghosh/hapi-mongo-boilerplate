import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

const HelloWorldSchema = new Schema({
    title:  {
        type: String,
        trim: true,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default Mongoose.model('helloworld', HelloWorldSchema);