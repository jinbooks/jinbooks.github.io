(function(doc, win) {
    if (!doc || !win) {
        return;
    }
    var docEl = doc.documentElement
      , resizeEvt = "orientationchange"in window ? "orientationchange" : "resize"
      , recalc = function() {
        var clientWidth = docEl.clientWidth;
        // if (!clientWidth)
        //     return;
        // if (clientWidth <= 1200) {
        //     docEl.style.fontSize = 100 * (clientWidth / 1200) + "px";
        // } else {
        //     // docEl.removeAttribute("style");
        //     docEl.style.fontSize = '65%'
        // }
        clientWidth=docEl.clientWidth>1200?1200:docEl.clientWidth
        docEl.style.fontSize = clientWidth/12 +'px'
    };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
  }
  )(document, window);


//   var deviceWidth
// setHtmlFontSize()

// if (window.addEventListener) {
//   window.addEventListener('resize', function () {
//       setHtmlFontSize()
//   }, false)
// }
// function setHtmlFontSize () {
//   // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
//     deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
//     document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.20 + 'px !important'
// }