// modalOpen という定数を定義
// querySelector で .hum の要素を取り出してくる
// document は HTMLファイルのこと
const modalOpen = document.querySelector(".ham")
const modalClose = document.querySelector(".close")
const modalNavMenu = document.querySelector(".nav-menu")
const modalOverlay = document.querySelector(".modal-overlay")

// addEventListener でユーザーが行ったイベントを検知
modalOpen.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 0
        },
        {
            opacity: 1,
            display: "block"
        }
    )
})

modalClose.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display: "none"
        }
    )
})

modalNavMenu.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display: "none"
        }
    )
})

modalOverlay.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display: "none"
        }
    )
})