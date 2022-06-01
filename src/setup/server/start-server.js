// Imports
import { NODE_ENV, PORT } from '../config/env'

export default function (server) {
  console.info('SETUP - Start server..')

  server.listen(PORT, (error) => {
    if (error) {
      return console.error(error)
    } else {
      return console.info(`Server running on http://192.168.49.2:${ PORT } [${ NODE_ENV }]`)
    }
  })
}
