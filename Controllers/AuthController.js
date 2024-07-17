const bcrypt = require('bcrypt');
const saltRounds = 10;

async function IsPasswordValid(inputPassword,databasePassword){
    const passwordMatch = await bcrypt.compare(inputPassword,databasePassword);
    return passwordMatch;
}


async function GetPasswordHash(password){
    return await bcrypt.hash(password,saltRounds)
}

module.exports = {
    IsPasswordValid,
    GetPasswordHash
}
