const questions = [
    {
        question:"निम्नलिखित विद्वानों में से किसका सम्बन्ध सत्त के सिद्धान्त से है ?",
        answers: [
            { text: "ऐलन", correct: false},
            { text: "पेटरसन", correct: false},
            { text: "डेविस", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"सत्ता की सीमाएँ निम्न में से हैं -",
        answers: [
            { text: "तकनीकी सीमाएँ", correct: false},
            { text: "जैविक सीमाएँ", correct: false},
            { text: "कानूनी सीमाएँ", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'भाग्य का समुदाय' किसे कहा गया है ?",
        answers: [
            { text: "गेमेन्शाफ्ट", correct: true},
            { text: "इन ग्रुप", correct: false},
            { text: "मेजेलन शाफ्ट", correct: false},
            { text: "आउट ग्रुप", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से आर्थिक संस्था कौन-सी नहीं है?",
        answers: [
            { text: "श्रम", correct: false},
            { text: "धर्म", correct: true},
            { text: "सम्पत्ति", correct: false},
            { text: "साम्यवाद", correct: false},
        ] 
    },

    {
        question:"इनमें से किसका नाम प्रतिदर्श समूह में नहीं जुड़ा है ?",
        answers: [
            { text: "शेरीफ", correct: false},
            { text: "टर्नर", correct: false},
            { text: "मर्टन", correct: false},
            { text: "हीगेल", correct: true},
        ] 
    },

    {
        question:"समाज के लिए क्या अप्रासांगिक है ?",
        answers: [
            { text: "समय-सीमा", correct: false},
            { text: "अन्यान्याश्रिता", correct: true},
            { text: "जागरूकता", correct: false},
            { text: "विभिन्नताएँ", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में किसका विकास स्वतः होता है ?",
        answers: [
            { text: "परिवार", correct: false},
            { text: "कानून", correct: false},
            { text: "समाज", correct: false},
            { text: "समुदाय", correct: true},
        ] 
    },

    {
        question:"दायभाग भारत में कहाँ प्रचलन में है ?",
        answers: [
            { text: "उत्तर प्रदेश", correct: false},
            { text: "पंजाब", correct: false},
            { text: "हरियाणा", correct: false},
            { text: "बंगाल", correct: true},
        ] 
    },

    {
        question:"हिन्दू स्त्री के लिए सम्पत्ति उत्तराधिकार अधिनियम' किस सन् में पारित हुआ ?",
        answers: [
            { text: "1920", correct: false},
            { text: "1939", correct: true},
            { text: "1937", correct: false},
            { text: "1950", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सामाजिक प्रतिमान के अन्तर्गत नहीं आते",
        answers: [
            { text: "जनरीतियां", correct: false},
            { text: "धर्म", correct: false},
            { text: "परम्परा", correct: false},
            { text: "संगठन", correct: true},
        ] 
    },

    {
        question:"भीड़ को इसकी - प्रकृति के कारण विभेदीकृत किया जाता है -",
        answers: [
            { text: "अस्थायी", correct: true},
            { text: "स्थिर", correct: false},
            { text: "स्थायी", correct: false},
            { text: "निरन्तर", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन सी जनजाति है ?",
        answers: [
            { text: "ब्राह्मण", correct: false},
            { text: "भील", correct: true},
            { text: "क्षत्रिय", correct: false},
            { text: "वैश्य", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से संगठन कौन-सा है ?",
        answers: [
            { text: "अस्पताल", correct: false},
            { text: "सेना", correct: false},
            { text: "न्यायालय", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"संगठन के आवश्यक तत्व निम्न में से कौन-से हैं?",
        answers: [
            { text: "स्वीकृति", correct: false},
            { text: "सिद्धान्त", correct: false},
            { text: "लक्ष्य", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"मैनहेम ने 'सामाजिक संरचना' को एक नया नाम दिया",
        answers: [
            { text: "संस्था", correct: false},
            { text: "व्यवस्था", correct: false},
            { text: "प्रतिमान", correct: true},
            { text: "मूल्य", correct: false},
        ] 
    },

    {
        question:"सामाजिक स्तरीकरण के प्रदत्त आधार कौन-कौन से हैं ?",
        answers: [
            { text: "लिंग", correct: false},
            { text: "आयु", correct: false},
            { text: "जन्म आदि", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"कार्ल मानहानि ने सामाजिक संरचना को किस नाम से पुकारा",
        answers: [
            { text: "मूल्य", correct: false},
            { text: "व्यवस्था", correct: false},
            { text: "प्रतिमान", correct: true},
            { text: "संगठन", correct: false},
        ] 
    },

    {
        question:"'फोकवेज' नामक पुस्तक के लेखक कौन हैं ?",
        answers: [
            { text: "मीड", correct: false},
            { text: "कूले", correct: false},
            { text: "मैकाइवर", correct: false},
            { text: "समनर", correct: true},
        ] 
    },

    {
        question:"भारत में वर्तमान में कितने प्रकार की दिव्यांगता की पहचान की गई है ?",
        answers: [
            { text: "15 प्रकार की", correct: false},
            { text: "21 प्रकार की", correct: true},
            { text: "20 प्रकार की", correct: false},
            { text: "8 प्रकार की", correct: false},
        ] 
    },

    {
        question:"'द स्टडी ऑफ मैन' नामक पुस्तक के लेखक हैं-",
        answers: [
            { text: "कूले", correct: false},
            { text: "सेण्डरसन", correct: false},
            { text: "मार्क्स", correct: false},
            { text: "राल्फ लिंटन", correct: true},
        ] 
    },

    {
        question:"किसने प्रगति की नैतिक अवधारणा पर जोर दिया?",
        answers: [
            { text: "मैकाइवर", correct: true},
            { text: "गिब्सबर्ग", correct: false},
            { text: "फेरिस", correct: false},
            { text: "जॉनसन", correct: false},
        ] 
    },

    {
        question:"निम्न में से समाजीकरण का अभिकरण कौन सा नहीं है ?",
        answers: [
            { text: "परिवार", correct: false},
            { text: "गैंग", correct: true},
            { text: "मित्र", correct: false},
            { text: "क्रीड़ा समूह", correct: false},
        ] 
    },

    {
        question:"'आत्म दर्पण सिद्धांत' से किस विद्वान का सम्बन्ध है ?",
        answers: [
            { text: "मीड", correct: false},
            { text: "कूले", correct: true},
            { text: "दुर्खीम", correct: false},
            { text: "पारसन्स", correct: false},
        ] 
    },

    {
        question:"'प्रसारवाद' शब्द का सर्वप्रथम किसने प्रयोग किया?",
        answers: [
            { text: "ई. बी. वयलर", correct: false},
            { text: "मालिनोवस्की", correct: true},
            { text: "फैन्ज बोआस", correct: false},
            { text: "मार्गरेट मीड", correct: false},
        ] 
    },

    {
        question:"इमाइल दुखीम का सामाजिक तथ्य किस विषय पर आधारित है ?",
        answers: [
            { text: "धर्म", correct: false},
            { text: "आत्महत्या", correct: false},
            { text: "श्रम विभाजन", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"दुर्खीम ने सामाजिक तथ्य को किस रूप में देखा है ?",
        answers: [
            { text: "विज्ञान", correct: false},
            { text: "भौतिक पदार्थ", correct: true},
            { text: "समाज", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"आधुनिक समाज किससे संचालित होता है ?",
        answers: [
            { text: "परम्परा", correct: false},
            { text: "समाज", correct: false},
            { text: "स्व-नियमन", correct: true},
            { text: "व्यक्", correct: false},
        ] 
    },

    {
        question:"हिन्दुओं में सगोत्र प्रकार का विवाह क्या है ?",
        answers: [
            { text: "नियमानुकूल", correct: false},
            { text: "श्रेष्ठ", correct: false},
            { text: "निषिद्ध", correct: true},
            { text: "अनिवार्य", correct: false},
        ] 
    },

    {
        question:"स्थानीयता तथा सामुदायिक भावना' ये किसके आवश्यक तत्व हैं ?",
        answers: [
            { text: "समाज", correct: false},
            { text: "समिति", correct: false},
            { text: "समुदाय", correct: false},
            { text: "संस्था", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में से कौन सा प्राथमिक समूह है ?",
        answers: [
            { text: "पाठशाला", correct: false},
            { text: "परिवार", correct: false},
            { text: "फैक्टरी", correct: true},
            { text: "राजनीति", correct: false},
        ] 
    },

    {
        question:"समाजीकरण की प्रक्रिया समाप्त होती है ?",
        answers: [
            { text: "बचपन में", correct: false},
            { text: "युवा अवस्था में", correct: true},
            { text: "अधेड़ अवस्था में", correct: false},
            { text: "मृत्युपरांत", correct: false},
        ] 
    },

    {
        question:"ऐतिहासिक पद्धति का है ? अनुसरण किसने नहीं कि",
        answers: [
            { text: "कार्ल मार्क्स", correct: true},
            { text: "रेमण्ड एरोन", correct: false},
            { text: "सी. आर. मिल्स", correct: false},
            { text: "सिमौल", correct: false},
        ] 
    },

    {
        question:"संविधान के निम्न अनुच्छेद में से कौन सा संवैधानिक प्रावधान अनुसूचित जाति और जनजाति से संबंधित ",
        answers: [
            { text: "Article 342", correct: false},
            { text: "Article 244", correct: false},
            { text: "Article 392", correct: false},
            { text: "Article 343", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किस देश में 'शिंतोधर्म' तम बौद्ध धर्म सह अस्तित्व में है ?",
        answers: [
            { text: "जापान", correct: true},
            { text: "अमेरिका", correct: false},
            { text: "ब्रिटिश", correct: false},
            { text: "चीन", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने परिस्थिति से संविदा में संक्रमण के विचार को प्रतिपादित किया है ?",
        answers: [
            { text: "हॉब्स", correct: false},
            { text: "रूसो", correct: true},
            { text: "ब्राउन", correct: false},
            { text: "पारसन्स", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किसमें समोद जादू का प्रयोग किया जाता है ?",
        answers: [
            { text: "कृषि", correct: false},
            { text: "युद्ध", correct: false},
            { text: "स्वास्थ्य लाभ            ", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित विद्वानों में किसका मानना है कि टोटम की पूजा समाज की पूजा है ?",
        answers: [
            { text: "शैव", correct: false},
            { text: "दुर्खीम", correct: true},
            { text: "टोडा", correct: false},
            { text: "स्पेन्सर", correct: false},
        ] 
    },

    {
        question:"'प्रवर' का अर्थ है -",
        answers: [
            { text: "गोत्र", correct: false},
            { text: "धर्म", correct: false},
            { text: "विवाह", correct: false},
            { text: "समान पूर्वज और समान-ऋषियों के नामों का उच्चारण", correct: true},
        ] 
    },

    {
        question:"मरडॉफ के अनुसार, विवाह का / के प्रमुख उद्देश्य है-",
        answers: [
            { text: "आर्थिक सहायक", correct: false},
            { text: "यौन सन्तुष्टि", correct: false},
            { text: "बच्चों का पालन-पोषण एवं समाजीकरण", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"विवाह की विशेषताएँ हैं -",
        answers: [
            { text: "मानसिक सुरक्षा", correct: false},
            { text: "आर्थिक सहयोग", correct: false},
            { text: " दो विषमलिंगियों का सम्बन्ध", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"जो विवाह प्रथा पालिनेशियाई समाज में विद्यमान हैं।",
        answers: [
            { text: "जोड़ा विवाह", correct: false},
            { text: "मोनोगिनी", correct: true},
            { text: "एकल विवाह", correct: false},
            { text: "स्थाई - विवाह", correct: false},
        ] 
    },

    {
        question:"जिस विवाह में पति-पत्नी की स्थिति समान होती है, कहलाता है -",
        answers: [
            { text: "जोड़ा विवाह", correct: true},
            { text: "मोनेगिनी", correct: false},
            { text: "एकल विवाह", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"सरकार के प्रकार हैं -",
        answers: [
            { text: "अधिनायक तन्त्र", correct: false},
            { text: "राजतन्त्र", correct: false},
            { text: "कुलीन तन्त्र", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"धर्म के प्रमुख दोष हैं",
        answers: [
            { text: "भाग्यवादी सोच", correct: true},
            { text: "विद्वान का विरोधी", correct: false},
            { text: "व्यक्ति को निष्क्रिय बनाता है", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"प्रेम विवाह का परम्परात्मक नाम है",
        answers: [
            { text: "धर्म", correct: false},
            { text: "दैव विवाह            ", correct: true},
            { text: "गान्धर्व विवाह", correct: false},
            { text: "आर्ष विवाह", correct: false},
        ] 
    },

    {
        question:"शरीयत अधिनियम किस सन् में पारित हुआ ?",
        answers: [
            { text: "1818 में", correct: false},
            { text: "1856 में", correct: true},
            { text: "1800 में", correct: false},
            { text: "1955 में", correct: false},
        ] 
    },

    {
        question:" धर्म का सम्बन्ध है",
        answers: [
            { text: "पूजा पाठ से", correct: false},
            { text: "धार्मिक कर्म से", correct: false},
            { text: "मूर्ति पूजा में", correct: false},
            { text: "अलौकिक शक्ति से", correct: true},
        ] 
    },

    {
        question:"परिवार की प्रमुख विशेषताएँ हैं",
        answers: [
            { text: "रक्त संबंधों का बन्धन", correct: false},
            { text: "अनिवार्य सदस्य", correct: false},
            { text: "एक निवास स्थान", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"प्रथाओं का निर्माण होता है",
        answers: [
            { text: "20 वर्ष में", correct: false},
            { text: "धीरे-धीरे", correct: true},
            { text: "17 वर्ष में", correct: false},
            { text: "संसद में", correct: false},
        ] 
    },

    {
        question:"संयुक्त परिवार में निम्न विशेषताएँ हैं -",
        answers: [
            { text: "बड़ा आकार", correct: false},
            { text: "सामान्य रसोई घर", correct: false},
            { text: "तुलनात्मक स्थायित्व", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 