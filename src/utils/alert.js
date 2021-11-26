
function alertSuccessNotify (route) {
    return {
        alert: true,
        title: 'Autenticação feita com sucesso!',
        text: 'Successful Autentication',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        route: route
   }
}

function alertErrorNotify (route) {
    return {
        alert: true,
        title: 'Email ou senha incorretos!',
        text: 'Error Autentication',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        route: route
   }
}

function alertSucessRegistration (route){
    return {
        alert: true,
        title: 'Usuário cadastrado com sucesso!',
        text: 'Successful Registration',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        route: route
    }
}

function alertErrorRegistration (route) {
    return {
        alert: true,
        title: 'Falha ao cadastrar o usuario!',
        text: 'Error Registration',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        route: route
    }
}

function alertErrorSearchUser(route){
    return {
        alert: true,
        title: 'Usuário não cadastrado no sistema!',
        text: 'Error Autentication',
        icon: 'error',
        showConfirmButton: false,
        timer: 2500,
        route: route
    }
}


module.exports = { 
    alertSuccessNotify, 
    alertErrorNotify,
    alertSucessRegistration,
    alertErrorRegistration,
    alertErrorSearchUser
}