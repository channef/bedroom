let chair = document.querySelectorAll('.chair')[0]
chair.addEventListener('mousemove',function (e) {
    // console.log(chair.className)
    if (-1 === chair.className.indexOf('chair-move')) {
        chair.classList.add('chair-move')
        setTimeout(() => {
            chair.classList.remove('chair-move')

        }, 2000);
    }
})