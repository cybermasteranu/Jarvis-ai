function startJarvis() {

    const message = new SpeechSynthesisUtterance();

    message.text = "Hello Anu. JARVIS is online. How can I help you?";

    message.rate = 1;
    message.pitch = 1;

    window.speechSynthesis.speak(message);

}
