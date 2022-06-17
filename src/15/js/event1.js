const box1 = document.querySelector(".box1"); // . 쓰면 클래스 # 쓰면 아이디
const changeBtn = document.querySelector(".btn2");

changeBtn.onclick = () => {
    box1.classList.toggle("bg-color");
}