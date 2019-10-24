// (function () {
    let danmaku_mask = $("#danmaku-mask")
    let danmaku_show = $("#danmaku-show")
    let danmaku_content = $("#content")
    let launcher = $("#launcher")
    let clear = $("#clear")

    // let content = ''
    let danmakuList = []
    let danmaku = null;
    let index = 0


    // 弹幕上下界分别为 mask 的上下界
    let mask_top = danmaku_mask.offset().top
    let mask_bottom = mask_top + danmaku_mask.height()
    let mask_left = danmaku_mask.offset().left
    let mask_right = mask_left + danmaku_mask.width()

    // 单挑弹幕的起始高度
    let _top = mask_top

    launcher.click(function () {
        danmaku = $(`<div class='danmaku'>${danmaku_content.text()}</div>`)
        let _left = mask_right - danmaku.width()
        danmaku.css({
            left: _left,
            top: _top,
            color: '#000'
        })
        console.log(danmaku)
        danmaku_show.append(danmaku)
        danmaku.animate({
            left: `-${_left}px`
        }, 7, function () {
            danmaku.remove()
        })
    })

    clear.click(function () {})
// })(jQuery)
