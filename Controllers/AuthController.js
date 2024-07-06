
class AuthenticationRequiredData{
    constructor(username ,password){
        this.Username = username;
        this.Password = password;
    }
}

function IsValidUser(user){
    if (user instanceof(AuthenticationRequiredData)){
        userData = Users.find(x => x.Username === user.Username && x.Password === user.Password);
        return userData != undefined;
    }
    else{
        return false;
    }

}

const Users = [];
Users.push(new AuthenticationRequiredData('Talha','helloworld'));
Users.push(new AuthenticationRequiredData('rof11','noobplastic'));
Users.push(new AuthenticationRequiredData('kinger','kingkrlega'));

module.exports = {
    AuthenticationRequiredData,
    IsValidUser
};
