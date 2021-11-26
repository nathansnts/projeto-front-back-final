
function verifySession (request, response, next) {
    const authorization = request.session.authotization ? true : false;

    console.log(authorization);

    if(!authorization) {
       return response.redirect('/')
    }

    next()
}

module.exports = { verifySession };