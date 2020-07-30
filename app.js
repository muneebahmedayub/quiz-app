const questionsArray = [
    {
        question: "HTML is what type of language ?",
        answer: "Markup Language",
        options: [
            "Scripting Language",
            "Markup Language",
            "Programming Language",
            "Network Protocol"
        ]
    },

    {
        question: "HTML uses",
        answer: "Fixed tags defined by the language",
        options: [
            "User defined tags",
            "Pre-specified tags",
            "Fixed tags defined by the language",
            "Tags only for linking",
        ]
    },

    {
        question: "The year in which HTML was first proposed _______.",
        answer: "1990",
        options: [
            "1990",
            "1980",
            "1980",
            "1995",
        ]
    },

    {
        question: "Fundamental HTML Block is known as ___________.",
        answer: "HTML Tag",
        options: [
            "HTML Body",
            "HTML Tag",
            "HTML Attribute",
            "HTML Element",
        ]
    },

    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        answer: "&lt;strong&gt;",
        options: [
            "&lt;fat&gt;",
            "&lt;strong&gt;",
            "&lt;black&gt;",
            "&lt;emp&gt;",
        ]
    },

    {
        question: "What is the full form of HTML?",
        answer: "HyperText Markup Language",
        options: [
            "HyperText Markup Language",
            "Hyper Teach Markup Language",
            "Hyper Tech Markup Language",
            "None of these",
        ]
    },

    {
        question: "What should be the first tag in any HTML document?",
        answer: "&lt;html&gt;",
        options: [
            "&lt;head&gt;",
            "&lt;title&gt;",
            "&lt;html&gt;",
            "&lt;document&gt;",
        ]
    },

    {
        question: "How can you make a bulleted list with numbers?",
        answer: "&lt;ol&gt;",
        options: [
            "&lt;dl&gt;",
            "&lt;ol&gt;",
            "&lt;list&gt;",
            "&lt;ul&gt;",
        ]
    },

    {
        question: "What tag is used to display a picture in a HTML page?",
        answer: "img",
        options: [
            "picture",
            "image",
            "img",
            "src",
        ]
    },

    {
        question: "HTML web pages can be read and rendered by _________.",
        answer: "Web Browser",
        options: [
            "Compiler",
            "Server",
            "Web Browser",
            "Interpreter",
        ]
    },
]

const questionDiv = document.querySelector(".question-div")
const question = document.querySelector(".question")
const optionDiv = document.querySelector(".option-div")
const options = document.querySelector(".options")
const exitBtn = document.querySelector(".exit-btn")
const nextBtn = document.querySelector(".next-btn")
const questionNumber = document.querySelector(".question-number")

var score = 0

window.addEventListener("load", function () {
    question.innerHTML = questionsArray[0].question

    questionNumber.innerHTML = "Question 1/10"

    for (var i = 0; i < questionsArray[0].options.length; i++) {
        const radioDiv = document.createElement("div")

        const optionRadio = document.createElement("input")
        optionRadio.setAttribute("type", "radio")
        optionRadio.setAttribute("id", "option" + (i + 1))
        optionRadio.setAttribute("value", questionsArray[0].options[i])
        optionRadio.setAttribute("name", "question1")
        radioDiv.appendChild(optionRadio)


        const optionsLabel = document.createElement("label")
        optionsLabel.innerHTML = questionsArray[0].options[i]
        optionsLabel.setAttribute("for", "option" + (i + 1))
        radioDiv.appendChild(optionsLabel)

        options.appendChild(radioDiv)
    }


})


nextBtn.addEventListener("click", nextQuestion)

var questionCount = 0

function nextQuestion() {
    questionCount++

    if (questionCount == 9) {
        nextBtn.innerHTML = "Submit"
    }

    
    if (questionCount <= 10) {
        const optionsDiv = document.querySelector(".options div")
        const optionInput = document.querySelector(".options input:checked")
        
        // console.log(typeof(questionsArray[questionCount - 1].answer))
        if (optionInput === null) {

        }
        else if (optionInput.value === questionsArray[questionCount - 1].answer) {
            score++
        }

        questionNumber.innerHTML = "Question " + (questionCount + 1) + "/10"


        if (questionCount < questionsArray.length) {
            question.innerHTML = questionsArray[questionCount].question

            options.innerHTML = ""

            for (var i = 0; i < questionsArray[questionCount].options.length; i++) {
                const optionsDiv = document.createElement("div")

                const optionRadio = document.createElement("input")
                optionRadio.setAttribute("type", "radio")
                optionRadio.setAttribute("id", "option" + (i + 1))
                optionRadio.setAttribute("value", questionsArray[questionCount].options[i])
                optionRadio.setAttribute("name", "question1")
                optionsDiv.appendChild(optionRadio)


                const optionsLabel = document.createElement("label")
                optionsLabel.innerHTML = questionsArray[questionCount].options[i]
                optionsLabel.setAttribute("for", "option" + (i + 1))
                optionsDiv.appendChild(optionsLabel)

                options.appendChild(optionsDiv)
            }
        }
    }
    
    if (questionCount == 10) {
        result()
    }
}

exitBtn.addEventListener("click", result)

function result () {
    questionDiv.innerHTML = ""
    questionDiv.style.height = "500px"
    questionDiv.style.justifyContent = "center"


    optionDiv.remove()
    exitBtn.remove()
    nextBtn.remove()

    const result = document.createElement("div")
    result.classList.add("result")
    
    const remarks = document.createElement("h1")
    remarks.classList.add("remarks")
    result.appendChild(remarks)

    const s = document.createElement("p")
    result.appendChild(s)

    const percent = document.createElement("p")
    result.appendChild(percent)

    questionDiv.appendChild(result)
    
    s.innerHTML = "Score: "
    const yourScore = document.createElement("span")
    yourScore.innerHTML = score + "/10"
    s.appendChild(yourScore)

    percent.innerHTML = "Percentage: "
    const percentage = document.createElement("span")
    percentage.innerHTML = (score / 10) * 100 + "%"
    percent.appendChild(percentage)

    if (score >= 8) {
        remarks.innerHTML = "Well done! You did a great job"
        remarks.style.color = "green"
    }
    else if (score >= 5) {
        remarks.innerHTML = "Good! But you need improvement"
        remarks.style.color = "orange"
    }
    else {
        remarks.innerHTML = "Unexceptable! You have to work hard"
        remarks.style.color = "red"
    }
}