/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.post('/login', [AuthController, 'login'])
    router
      .group(() => {
        router.get('/me', async ({ auth, response }) => response.ok(auth.user))
      })
      .middleware(middleware.auth())
  })
  .prefix('api')

router.get('/login', async ({ view, response, auth }) => {
  if (auth.user) {
    return response.redirect('/dashboard')
  }

  return view.render('index')
})
router.get('/*', async ({ view }) => view.render('index')).middleware(middleware.auth())
