//let you define private implementation details
//that are hidden from the outside world,as well as
//a public API that is accessible from the outside.

function User() {
    var username,password;

    function doLogin(user,psw) {
        username = user;
        password = psw;

        //do the rest of the login work
    }
    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

//create a user module instance
var fred = User();

console.log(fred.login("fred", "123kahuhouhuru"));