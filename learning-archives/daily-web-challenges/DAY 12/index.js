let btn = document.querySelector('button')
let body = document.querySelector('body')
let isDark = true
btn.addEventListener('click', function() {
    // body.classList.toggle('red')
    if (isDark) {
        body.style.backgroundColor = 'purple'
    } else {
        body.style.backgroundColor = 'red'
    }
    isDark = !isDark

})