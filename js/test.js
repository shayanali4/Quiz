var questions =[
    {   
        id : 1,
        question : "Who is the Founder of Pakistan ?",
        correct : "Mohammad Ali Jinnah",
        options : [
            "Sir Syed Ahmed Khan",
            "Mohammad Ali Jinnah",
            "Liaquat Ali Khan",
            "None of the above"
        ]
    },

    {
        id : 2,
        question : "Who is the current Prime Minister of Pakistan ?",
        correct : "Imran Khan",
        options : [
            "Sir Syed Ahmed Khan",
            "Mohammad Ali Jinnah",
            "Imran Khan",
            "None of the above"
        ]
    },

    {   
        id : 3,
        question : "Who is the current President of Pakistan ?",
        correct : "Arif Alvi",
        options : [
            "Arif Alvi",
            "Mamnoon Hussain",
            "Liaquat Ali Khan",
            "Asif Ali Zardari"
        ]
    },

    {
        id : "last",
        question : "Who is the Cheif Minister of Sindh ?",
        correct : "Syed Murad Ali Shah",
        options : [
            "Syed Murad Ali Shah",
            "Mohammad Ali Jinnah",
            "Usman Buzdar",
            "None of the above"
        ]
    }

    // {
        // id : 5,
        // question : "Who is the Cheif Minister of Sindh ?",
        // correct : "Syed Murad Ali Shah",
        // options : [
        //     "Syed Murad Ali Shah",
        //     "Mohammad Ali Jinnah",
        //     "Usman Buzdar",
        //     "None of the above"
        // ]
    // }

];



// window.onload = next(countQuestions)

// function validateForm() {
//     var x = document.forms["myForm"]["answer"];
//     if (x.checked == true) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

var a = document.getElementsByClassName("myRadio");
var quesCount=0;
var yourScore = 0;
show(quesCount);
quesCount++
var totalQues =questions.length;
document.getElementById('quesTotal').innerHTML = totalQues;
var name =localStorage.getItem("name");
document.getElementById('name').innerHTML=name;




function count(){
    // console.log(quesCount)
    score(quesCount)
    removeRadio()
    show(quesCount)

    quesCount++
    document.getElementById('quesNum').innerHTML = quesCount;

//   console.log(quesCount)


}

  function score(e){
    var b=0;
    for(var j=0;j<=a.length-1;j++){

        if(a[j].checked == true){
           b = a[j].nextSibling.innerHTML;
        //    console.log(b)
        //    console.log(questions[0].correct)
            if(questions[quesCount-1].correct==b){
            yourScore++
            }
            else{
            yourScore=yourScore;
        }
        // console.log("score")
        // console.log(yourScore)

        if(questions[quesCount-1].id=="last") {
            obtScore=yourScore;
            afterTest();
         }
        }
    }
}
function removeRadio(){

    for(var k=0;k<=a.length-1;k++){
        a[k].checked = false;
    }
}

  function show(a){

    var ques = document.getElementById("question");
    ques.innerHTML = questions[a].question;
    var option = document.getElementsByClassName("opt");
      
    for(var i=0;i<= option.length-1;i++)
      {
          option[i].innerHTML = questions[a].options[i];  
      }
    //   console.log(quesCount)
    }


    // if(questions.length == quesCount){
    //     location.replace("score.html")
    // }

function afterTest(){
    localStorage.setItem("total",totalQues);
    localStorage.setItem("obtScore",yourScore);

    var cardHeader =document.getElementById('head');
    var cardMain =document.getElementById('question');
    var cardBody =document.getElementById('text');
    var ul=document.getElementsByTagName("ul");
    ul[0].remove()
    // console.log(cardBody)

    cardHeader.innerHTML ="Thanks for completing the Quiz.";
    cardMain.innerHTML ="Your Response has been recorded, we are generating your result.";

    var text =document.createElement("p");
    text.setAttribute("id","timeLeft")
    var textNode =document.createTextNode("")
    text.appendChild(textNode)
    cardBody.appendChild(text)

    var progress =document.createElement("progress");
    progress.setAttribute("value","0");
    progress.setAttribute("max","5");
    progress.setAttribute("id","progressBar");
    cardBody.appendChild(progress)



    redirectTimer();
}




function redirectTimer(){
    var text =document.getElementById('timeLeft');
    setTimeout('redirect()', 6000);


    var timeleft = 5;
    var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  text.innerHTML="You will be redirected to result page in " +(timeleft)+ " seconds."
  document.getElementById("progressBar").value = 5 - timeleft;
  timeleft -= 1;
}, 1000);

}

    
function redirect(){


    window.location = "score.html";

}