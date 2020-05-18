## **Reactとgsapを使ってゴリゴリ重いサイトを作成**

***

Reactで少し慣れてきてjsも書けるようなってきたのでアニメーションの<br>
[GSAP](https://greensock.com/gsap/)を使い結構重たい処理をした。

### 独自マウス
`
 let cursor = document.querySelector('.cursor');
 let follow = document.querySelector('.follow');
 function move(obj, event) {
     obj.style = "";
     obj.style.top = event.clientY + "px";
     obj.style.left = event.clientX + "px";
  }
  window.addEventListener("mousemove", function (event) {
      move(cursor, event);
      move(follow, event);
  });
`
jsのstyleでtopとleftを画面のXYをclientX、clientYで取得して動かした。

### Textのアニメーションは
`
let tl = gsap.timeline();
tl.from(".main__tl span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
        amount: 0.3
     }
})
`
GSAPを使い元のstyleから上記のコードで変換するようにして
変形させた。
<br>
補足として[circletype.js](https://circletype.labwire.ca/)を使い
テキストを円形にした
