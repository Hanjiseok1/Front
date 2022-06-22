/*
    서버에서 가지고 있는 데이터
*/

let userList = [
    {
        usercode: 20220001,
        username: "jiseok",
        password: "1234",
        name: "한지석",
        email: "aaaa@gamil.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "naver"
    },
    {
        usercode: 20220002,
        username: "jiseok2",
        password: "1234",
        name: "한지숙",
        email: "bbbb@gamil.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "google"
    },{
        usercode: 20220003,
        username: "jiseok3",
        password: "1234",
        name: "한지속",
        email: "cccc@gamil.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "kakao"
    }
];

const userTableList = document.querySelector(".user-table-list");
const userBtn = document.querySelector(".user-list-load-btn");

let userJSON = JSON.stringify(userList); // AJAX 통신을 통해 데이터를 서버로 부터 받음

userBtn.onclick = () => {
    let userListObj = JSON.parse(userJSON); 

    userListObj.forEach(user => {
       userTableList.innerHTML += `
        <tr>
            <td>${user.usercode}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role.join(", ")}</td>
            <td>${user.provider}</td>
        </tr>
       `; 
    });
}

// function createTr(userData){
//     const tr = document.createElement("tr"); //createElement : 태그를 만들기 위해서 사용함 EX)<tr></tr>
//     const td1 = document.createElement("td");
//     const textNode1 = document.createTextNode(userData.usercode);
//     const td2 = document.createElement("td");
//     const textNode2 = document.createTextNode(userData.username);
//     const td3 = document.createElement("td");
//     const textNode3 = document.createTextNode(userData.password);
//     const td4 = document.createElement("td");
//     const textNode4 = document.createTextNode(userData.name);
//     const td5 = document.createElement("td");
//     const textNode5 = document.createTextNode(userData.email);
//     const td6 = document.createElement("td");
//     const textNode6 = document.createTextNode(userData.role.join(", "));
//     const td7 = document.createElement("td");
//     const textNode7 = document.createTextNode(userData.provider);

//     td1.appendChild(textNode1); //appendChild: 태그 사이에 값(변수)을 넣기 위해 사용함 EX)<tr> ~~~.usercode(값)</tr>
//     td2.appendChild(textNode2);
//     td3.appendChild(textNode3);
//     td4.appendChild(textNode4);
//     td5.appendChild(textNode5);
//     td6.appendChild(textNode6);
//     td7.appendChild(textNode7);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tr.appendChild(td6);
//     tr.appendChild(td7);

//     return tr;
// }
