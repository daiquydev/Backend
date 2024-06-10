import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'
import user from '#~/model/user.js'
const access_token_key = process.env.ACCESS_TOKEN_KEY

async function getUserInfo(accessToken) {
   try {

		var {user_id, session_id} = jwt.verify(accessToken, access_token_key)
		var userRecord = await user
			.findOne({_id: user_id})
			.select(`
			-password
			-createdAt
			-updatedAt
			-pets
			-feedingStations
			-__v
		`)

		return userRecord
	} catch (err) {
		return Promise.reject({status: 401, message: 'Unauthorized'})
	}
}

export default getUserInfo
