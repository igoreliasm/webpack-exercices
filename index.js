document.getElementById('send').onclick = () => {
    const m = document.getElementById('message').value
    document.getElementById('messages').innerHTML += `<li>${m}`
}

if (module && module.hot) {
    module.hot.accept()
}