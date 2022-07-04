import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()

    const mommentId = params.mommentId

    await Moment.findOrFail(mommentId)

    body.mommentId = mommentId

    const comment = await Comment.create(body)

    response.status(201)

    return {
      message: 'Comentário adicionado com sucesso',
      data: comment,
    }
  }
}
