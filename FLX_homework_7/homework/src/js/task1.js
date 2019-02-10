let login = prompt('Please, enter your login:')
if (!login ) {
    alert('Canceled.')
}else if (login.trim().length < 4){
    alert(`I don't know any users having name length less than 4 symbols`)
}else if (login === 'User' || login === 'Admin'){
    let password = prompt('Please, enter your password:')
    if (password === 'UserPass' && login ==='User'){
        alert(new Date().getHours() < 20 ? 'Good day, dear ' + login + '!' : 'Good evening ' + login + '!')
        }else if (password === 'RootPass' && login === 'Admin') {
        alert(new Date().getHours() < 20 ? 'Good day, dear ' + login + '!' : 'Good evening ' + login + '!')
    }else if (!password){
        alert('Canceled.')
    }else{
        alert('Wrong password')
    }
}else{
    alert(`I don't know you`)
}
