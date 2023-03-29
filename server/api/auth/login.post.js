export default defineEventHandler(async(event)=>{
    const body = await readBody(event)

    const { username, password } = body

    if(!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid parameters'
        }))
    }
})