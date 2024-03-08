
console.log ('Class 4 Assignment: Homegrown "AI" Chatbot\n-------------------------------------------');

let nothing = "Nothing";

class Chatbot {
    constructor(question, answer) { 
        this.question = question;
        this.answer = answer;
    }
    checkAnswer() {
        if (q == this.question){
            return this.answer;
        }
        else {
            return nothing;
        }
        
    }
}

const questions = [
    new Chatbot('How are you?', "I'm doing ok"),
    new Chatbot('Who are you?', "I'm a chatbot"),
    new Chatbot('What is your favourite color?', "I don't have a favourite color, I'm a bot"),
    new Chatbot('What is this for?', "Javascript class assignment"),
];


let q = prompt('Ask away');
let result = nothing;

for (let i = 0; i < questions.length; i++) {
    result = questions[i].checkAnswer(q);
    if (result !== nothing) {
        break; 
    }
}

if (result !== nothing) {
    console.log(result);
} else {
    console.log("I don't have an answer to that question.");
}
