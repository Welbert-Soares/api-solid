import { FastifyInstance } from 'fastify'

import { register } from '@/http/controllers/register.controller'

export const appRoutes = async (app: FastifyInstance) => {
  app.post('/users', register)
}
