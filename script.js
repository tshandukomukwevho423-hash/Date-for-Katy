let stage = 0;

function nextStep(){

    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const button = document.getElementById("continueBtn");

    if(stage===0){

        title.innerHTML="One Question... 🌹";

        message.innerHTML=`
        Will you go on a date with me? ❤️
        <br><br>

        <button id="yes">YES 🥹</button>

        <button id="no"
        onmouseover="moveButton()"
        ontouchstart="moveButton()">
        NO 🙈
        </button>
        `;

        button.style.display="none";

        document.getElementById("yes").onclick=function(){

            title.innerHTML="YAY!! ❤️🥹";

            message.innerHTML=`
            You just made my day.<br><br>
            I can't wait to spend time with you.
            <br><br>
            See you on our date. ❤️🌹
            `;

        };

        stage++;
    }

}

function moveButton(){

    const no=document.getElementById("no");

    no.style.position="absolute";

    no.style.left=Math.random()*(window.innerWidth-120)+"px";

    no.style.top=Math.random()*(window.innerHeight-60)+"px";

}
