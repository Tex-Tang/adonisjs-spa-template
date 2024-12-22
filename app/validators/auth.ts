import vine from '@vinejs/vine'

export const LoginValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(4),
    password: vine.string(),
    rememberMe: vine.boolean(),
  })
)
