import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = process.env.PORT || 3000
const debug = new Debug('puebleando:root')

app.listen(PORT, () => {
	debug(`Server running at port ${PORT}`)
})