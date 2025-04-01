import { expect, describe, it } from 'vitest'
import { RegisterService } from './register.service'
import { compare } from 'bcryptjs'

describe('Register Service', () => {
  it('should hash user password upon registration', async () => {
    const registerService = new RegisterService({
      async findByEmail() {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerService.execute({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
