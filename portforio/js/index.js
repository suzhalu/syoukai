$('.slider').slick({
  dots: true
});



var scrollDisplayElm = document.querySelectorAll('.fifth_title');
var scrollDisplay = function () {
    for (var i = 0; i < scrollDisplayElm.length; i++) {
        var triggerMargin = 300; // 画面下部と要素の差が300pxになったらその要素にshowクラスを追加する
        if (window.innerHeight > scrollDisplayElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollDisplayElm[i].classList.add('show');
        }
    }
}
// 画面が読み込まれたときのイベントを設定
window.addEventListener('load', scrollDisplay);
// スクロールされたときのイベントを設定
window.addEventListener('scroll', scrollDisplay);