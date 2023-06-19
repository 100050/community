function alter(title) {
    console.log(title);
    document.querySelector('main').innerHTML='<section class="mainArticle"><h2>'+ title +'</h2><br><article>내용</article></section>';
}

function login() {
    const ID = document.getElementById("id").value;
    const PW = document.getElementById("pw").value;
    if (ID == "1234" && PW == "1234") {
        document.querySelector('.user').innerHTML='<div>'+ ID +'님</div> <button onclick="logout();">로그아웃</button> <br> <button onclick="wa();">글쓰기</button> <button>활동내역</button>'
    }
    else {
        alert("비밀번호나 아이디가 올바르지 않습니다.");
    }
    
}

function logout() {
    document.querySelector('.user').innerHTML= '<form action="" class="login"><div><input type="text" id="id" placeholder="아이디"> <br><input type="password" id="pw" placeholder="비밀번호"></div><button onclick="login()">로그인</button><br><a href="">회원가입</a></form>';
}

function wa() {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "writing.html", false);
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