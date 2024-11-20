

// gsapからメディアクエリの関数を実行
const mm = gsap.matchMedia()
// ブレイクポイントを指定
// 端末の画面幅が1025px以上のとき（PC）
mm.add("(min-width: 1025px)", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        2,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: true,
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: true,
            }
        }
    )

    // gsap.fromTo(
    //     "#works",
    //     2,
    //     {
    //         y: 200,
    //         opacity: 0
    //     },
    //     {
    //         y: 0,
    //         opacity: 1,
    //         scrollTrigger: {
    //             trigger: "#works",
    //             start: "top center",
    //             markers: true,
    //         }
    //     }
    // )
})


// 端末の画面幅が599px以下のとき（スマホ）
mm.add("(max-width: 599px)", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        2,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
                // markers: true,
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
                // markers: true,
            }
        }
    )
})
