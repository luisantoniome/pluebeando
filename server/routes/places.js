import express from 'express'
var Places = require('../api/index')

const app = express.Router()

const place = {
	_id: 1,
	title: 'Place 1',
	description: 'Description 1',
	createdAt: new Date(),
	icon: 'devicon-android-plain',
	answers: [],
	user: {
		firstName: 'Agent',
		lastName: 'L',
		email: 'l@agent.com',
		password: '123456'
	}
}

const places = new Array(10).fill(place)

// /api/places
app.get('/', (req, res) => res.status(200).json(Places.testData))

// /api/question/:id
app.get('/:id', (req, res) => res.status(200).json(place))

export default app