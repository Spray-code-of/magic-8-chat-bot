var responses = ["It is certain", "Reply hazy, try again", "Don’t count on it", "It is decidedly so", "Ask again later", "My reply is no", "Without a doubt", "Better not tell you now", "My sources say no", "Yes definitely", "Cannot predict now", "Outlook not so good", "You may rely on it", "Concentrate and ask again", "Very doubtful", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"]
const messageArea = document.getElementById("middle")
const messageInput = document.getElementById('messageinput')
const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    const yourMessage = document.createElement("li")
    messageArea.appendChild(yourMessage)
    yourMessage.innerText = messageInput.value
    yourMessage.setAttribute("class", "youmessage")
    messageInput.value = ""
    messageArea.scrollTop = messageArea.scrollHeight
    setTimeout(() => {
        const aiMessage = document.createElement('li')
        messageArea.appendChild(aiMessage)
        aiMessage.innerText = responses[(Math.floor(Math.random() * responses.length))]
        aiMessage.setAttribute("class", "aimessage")
        messageInput.value = ""
        messageArea.scrollTop = messageArea.scrollHeight
    }, 1000)
})
/*
const aiMessage = document.createElement('li')
    messageArea.appendChild(aiMessage)
    aiMessage.innerText = responses[(Math.floor(Math.random() * responses.length))]
    aiMessage.setAttribute("class", "aimessage")
    messageInput.value = ""
    messageArea.scrollTop = messageArea.scrollHeight
    */