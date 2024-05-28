const quizData=[

    {
        question:"What does HTML stands for ?",
        options:[
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct:0,
    },

    {
        question:"Which CSS property is used to control the spacing between elements ?",
        options:[
            "Margin",
            "Padding",
            "Spacing",
            "Border-Spacing",
        ],
        correct:1,
    },

    {
        question:"Which JavaScript function used to select an HTML element by id ?",
        options:[
            "document.query",
            "getElementById",
            "selectElements",
            "findElementById",
        ],
        correct:1,
    },

    {
        question:"Which HTML Tag is used to create an ordered list ?",
        options:[
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>",
        ],
        correct:2,
    },

    {
        question:"Which HTML Tag is used to create an unordered list ?",
        options:[
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>",
        ],
        correct:0,
    },


];
const quiz=document.querySelector("#quiz_section");
const answerElm=document.querySelectorAll(".answer")
const[questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question",".option_1",".option_2",".option_3",".option_4");
const submitBtn=document.getElementById("submit");
let currentQuiz=0;
let score=0;

//Load quiz question

const loadQuiz=()=>
{
    const {question,options}=quizData[currentQuiz];
    console.log(question);
    questionElm.innerText=`${currentQuiz+1}:${question}`;
    options.forEach((curOption,index)=>(window[`option_${index+1}`].innerText=curOption));
};

loadQuiz();

const getSelectedOption=()=>
    {
        // answerElm.forEach((curOption,index)=>{
        //     if(curOption.checked)
        //         {
        //             ans_index=index;
        //         }
        // });
        // return ans_index;
        let answerElement=Array.from(answerElm);
       return  answerElement.findIndex((curElem,index)=>curElem.checked);
    };

    const desselectedanswers=()=>
        {
            return answerElm.forEach((curElem)=>curElem.checked=false);
        }
submitBtn.addEventListener("click",()=>{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex===quizData[currentQuiz].correct)
        {
            score+=1;
        }
    currentQuiz++;
    if(currentQuiz<quizData.length)
        {   desselectedanswers();
            loadQuiz();
        }
    else
    {
        quiz.innerHTML=`
        <div class="result">
        <h2>🏆 Your Score:${score}/${quizData.length} Correct Answers</h2>
        <p id="result">Congratulations on completing the quiz</P>
        <button class="reload_button" onclick="location.reload()">Play Again 🔃</button>
        </div>
        `;
    }
});