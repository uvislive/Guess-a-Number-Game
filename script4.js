// highscore
function calcScore() {
    let val_highscore = document.getElementById("highscore").innerHTML;
    localStorage.setItem("highscore", val_highscore);
}
document.getElementById("highscore").innerHTML = getSavedValue("highscore");


function getSavedValue(v) {
    console.log("check", localStorage.getItem(v));
    if (!localStorage.getItem(v)) {
        return "0"; // You can change this to your defualt value.
    }
    return localStorage.getItem(v);
}

// set high score if win






// alert("lets try To Solve the Game ")
let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);
var scoring = false;
var score = 20;

// var newHighScore = 0;
// const HighScoreArr = [0, 2];
// var HighScore = HighScoreArr[0];
// // var highscore = newHighScore;
// var myScore = document.getElementById("highscore");
// myScore.innerHTML = HighScore;
// localStorage.setItem("highscore", JSON.stringify(HighScoreArr));
// console.log("higher score", HighScore);




const getValue = () => {
    let inputValue = parseInt(document.getElementById("inputNum").value);
    console.log(inputValue);


    if (inputValue > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Ooops Out Of Range...',
            text: 'Please Enter Number between 1 to 100!',
            footer: '<a href="">Why do I have this issue?</a>'
        })

    }

    if (inputValue < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Ooops Out Of Range...',
            text: 'Please Enter Number between 1 to 100!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    if (inputValue == randomNum) {
        // document.getElementById()
        winner();
        score--;
        document.getElementById("score").innerHTML = score;
        // newHighScore = score;
        // let num = localStorage.getItem(highscore);
        // if (newHighScore > num) {
        //     HighScoreArr.push(newHighScore);
        //     console.log(HighScoreArr)
        //     // console.log('this is uv')
        //     localStorage.setItem("highscore", JSON.stringify(HighScoreArr));

        //     let myElement = document.getElementById("highscore");
        //     let myarr = localStorage.getItem("highscore");
        //     console.log("this is myarr", myarr)
        //     const bigNum = (arr) => {
        //         let big = 0;
        //         for (let i = 0; i < myarr.length; i++) {
        //             if (arr[i] > big) {
        //                 return big = arr[i];
        //             }
        //         }


        //     }
        //     let bigVal = bigNum(myarr);
        //     myElement.innerHTML = bigVal;
        // console.log(bigVal)

        // console.log("myHighscore", localStorage.getItem("highscore"))
        // }

        if (score > localStorage.getItem("highscore")) {
            localStorage.setItem("highscore", score);
        }
        const hscore = localStorage.getItem("highscore")
        document.getElementById("highscore").innerHTML = hscore;

    }

    else if (inputValue < randomNum) {
        leftDiv();
        score--;
        document.getElementById("score").innerHTML = score;
    }

    else if (inputValue > randomNum) {
        RightDiv();
        score--;
        document.getElementById("score").innerHTML = score;
    }


}




const winner = () => {


    $("#winner").css("background-color", "black");
    let myWinner = document.getElementById("winner");
    console.log("innerHTml", myWinner);
    myWinner.innerHTML = randomNum;

    Swal.fire({
        title: 'You Won The Game!',
        html: 'You can Play After<b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    clearTimeout(myTimeout)
    clearInterval(intervalclear);

}

let loading = false;

const leftDiv = async () => {

    setTimeout(() => {
        changeColor();
        loading = true;
        if (loading) {
            changeself();
            loading = false;
        }
    }, 300);


    function changeColor() {
        // $("#lower").css("background-color", "red");
        $("#lower").fadeOut("slow");
    }

    function changeself() {
        $("#lower").fadeIn();
    }
    changeself();

}

const RightDiv = async () => {
    setTimeout(() => {
        changeColor();
        loading = true;
        if (loading) {
            changeself();
            loading = false;
        }
    }, 300);


    function changeColor() {
        // $("#lower").css("background-color", "red");
        $("#higher").fadeOut("slow");
    }

    function changeself() {
        $("#higher").fadeIn();
    }
    changeself();
}



slider.value = 0;
const intervalclear = setInterval(() => {
    slider.value++;
    // console.log(slider.value)
    // let showTime = document.getElementById("display");
    // showTime.innerText = slider.value;
    // showTime.value = slider.value;

}, 340);



const myTimeout = setTimeout(() => {
    Swal.fire({
        icon: 'error',
        title: 'Time is Up',
        text: 'You Lose!',
        footer: '<a href="https://google.com">How Can You Win?</a>'
    })
}, 36000)



const playAgain = () => {
    location.reload();

}
$("#resume").hide();

const pauseGame = () => {
    clearInterval(intervalclear);
    clearTimeout(myTimeout);

    $("#pause").fadeOut();
    $("#resume").fadeIn();

}
const resumeGame = () => {
    location.reload();
    $("#resume").fadeOut();
    $("#pause").fadeIn();

}


var startAudio = document.getElementById("myaudio")
startAudio.play();