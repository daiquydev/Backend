import user from '#~/model/user.js'

import bcrypt from 'bcrypt'
async function register({
	email,
	password,
	firstName,
	lastName
}) {
	const userRecord = await user.findOne({email})
	if (userRecord) {
		return Promise.reject({
			status: 403,
			message: 'The email has been registered',
		})
	} else {
		console.log("hello")
		const saltRounds = 10

		const hashedPassword = await bcrypt.hash(password, saltRounds)

		return await user.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
	}
}
export default register