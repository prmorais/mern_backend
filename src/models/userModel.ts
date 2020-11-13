import mongoose, { Document } from 'mongoose';

interface IUserSchema extends Document {
  username: string,
  name: string,
  email: string,
  imagens: [],
  about: string
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  images: {
    type: Array,
    default: [
      {
        url: 'https://via.placeholder.com/200x200.png?text=Profile',
        public_id: Date.now,
      },
    ],
  },
  about: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
