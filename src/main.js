    //    检测设备类型
    var ua = window.navigator.userAgent,
            isQQBrowser = /(?:MQQBrowser | QQ)/.test(ua),
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isIpad = /(?:iPad|PlayBook)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua)||(isFireFox && /(?:Tablet)/.test(ua)),
            isSafari = /(?:Safari)/.test(ua),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isOpen= /(?:Opera Mini)/.test(ua),
            isUC = /(?:UCWEB|UCBrowser)/.test(ua),
            isPc = !isPhone && !isAndroid && !isSymbian;
console.log(isPc)
// if (!isPc) {
//     document.body.innerHTML = '<h1>请使用电脑查看哦</h1>';
// }
// else {
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
}