let year = 1;

// 자바스크립트에서는 객체를 중괄호를 열고 닫는걸로 나타냄.
let studentObj = {
    name: "한지석",
    schoolName: "코리아아이티아카데미",
    hobby: ["축구", "농구", "골프"],
    info: {
        "year": year,
        group: 2,
        number: 3
    }
};

console.log(studentObj.name);

for(let i = 0; i < studentObj.hobby.length; i++) {
    console.log(studentObj.hobby[i]);
}

console.log(studentObj.info.year);

console.log("학생객체: " + studentObj);
/*
json 형변환
1. Object -> JSON -> JSON.stringify(객체); 오프젝트(객체)를 JSON 문자열로 변환해줌.
2. JSON -> Object -> JSON.parse(JSON); JSON 문자열을 오브젝트(객체)로 변환해줌.
*/

//stringify 문자열로 변환할때 쓰이는 명령어

let jsonData = JSON.stringify(studentObj);
console.log("JSON으로 변환: " + JSON.stringify(studentObj));

//undefined가 뜨는 이유는 초기화가 되지 않았기 때문에 뜨는거임.

let jsonObj = JSON.parse(jsonData);

console.log(jsonData.name);
