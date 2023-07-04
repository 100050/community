import { readFirestore, writeFirestore } from "./db.js";

const loginBtn = document.getElementById('login_btn');

loginBtn.addEventListener("click", login)

function login() {
    const ID = document.getElementById("id").value;
    const PW = document.getElementById("pw").value;
    if (ID == "1234" && PW == "1234") {
        document.getElementById('user').innerHTML='<div>'+ ID +'님</div> <button id="logout_btn">로그아웃</button> <br> <button id="writing_btn">글쓰기</button> <button>활동내역</button>'
        document.getElementById('logout_btn').addEventListener("click", logout);
        document.getElementById('writing_btn').addEventListener("click", getWriting);
    }
    else {
        alert("비밀번호나 아이디가 올바르지 않습니다.");
    }
}

function logout() {
    document.querySelector('.user').innerHTML= '<form action="" class="login"><div><input type="text" id="id" placeholder="아이디"> <br><input type="password" id="pw" placeholder="비밀번호"></div><button onclick="login()">로그인</button><br><a href="">회원가입</a></form>';
}

const articles = document.querySelectorAll('.article');
articles.forEach((art) => {
    art.addEventListener("click", () => {
        request("article.html");
        readFirestore(art.id);
    })
});

function request(file) {
    const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    document.querySelector("main").innerHTML = allText;
                }
            }
        }
        rawFile.send(null);
}

function getWriting() {
    request("writing.html");
    const writeBtn = document.getElementById('write_btn');
    writeBtn.addEventListener("click", writeArticle);
}

function writeArticle() {
    const writeTitle = document.getElementById('write_title').value;
    const writeContent = document.getElementById('write_content').value;
    if (writeTitle == null) {
        alert("제목을 입력해주세요.");
        return;
    }
    if (writeContent == null) {
        alert("내용을 입력해주세요.");
        return;
    }
    writeFirestore(writeTitle, writeContent);
}