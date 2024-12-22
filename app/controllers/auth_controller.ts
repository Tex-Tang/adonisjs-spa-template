import User from '#models/user'
import { LoginValidator } from '#validators/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request, response, auth }: HttpContext) {
    const { username, password, rememberMe } = await LoginValidator.validate(request.all())

    const user = await User.verifyCredentials(username, password)

    await auth.use('web').login(user, rememberMe)

    return response.ok(user)
  }
}
