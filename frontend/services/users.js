import { HTTPClient } from '../utils/request'

export default {
  create: ({ payload }) => HTTPClient.post('/users', payload),
  auth: ({ payload }) => HTTPClient.post('users/auth', payload)
}
