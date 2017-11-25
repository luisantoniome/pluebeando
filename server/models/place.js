import mongoose, { Schema } from 'mongoose'

const PlaceSchema = Schema({
	description: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, required: true }
})

export default mongoose.model('Place', PlaceSchema)