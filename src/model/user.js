import mongoose from 'mongoose'
const Schema = mongoose.Schema
const user = new Schema(
	{
		email: {type: String, default: null, maxLength: 100},
        password: { type: String, default: null },
        role: {type: String, default: null, maxLength: 50},

		firstName: {type: String, default: null, maxLength: 50},
        lastName: { type: String, default: null, maxLength: 50 },
        
 phoneNumber: {type: String, default: null, maxLength: 50},



	
	},
	{
		timestamps: true,
	}
)
export default mongoose.model('users', user)