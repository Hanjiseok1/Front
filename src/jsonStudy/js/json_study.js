let userData = {
    
        "code": 1,
        "msg": "유저정보 로드 성공",
        "data": {
            "usercode": 20220621,
            "username": "jiseok",
            "password": "1234",
            "name": "한지석",
            "email": "heemoon25@naver.com",
            "role": ["ROLE_ADMIN", "ROLE_USER"],
            "proider": "naver"
        }
}

let jsonData = JSON.strinaify(userData);

console.log(jsonData);

// main();

// function main() {
//     loadJsonFile()
//     .then(result => {
//         console.log(result);
//     })
// }

// async function loadJsonFile() {
//     let response = await fetch("/json/json/user.json");
//     return response
// }