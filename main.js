'use strict'; //エラーの設定を厳密にする

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => { //クリックしたら次の処理を行う命令
        const results = ['大吉', '中吉', '小吉', '吉', '末吉']; //配列文と呼ばれる書き方ですっきり見える
        // const n = Math.floor(Math.random() * 5); //5通りの結果を出すために5倍
        const n = Math.floor(Math.random() * results.length); //要素の数が変わっても、それを上のように数字として入力しなくていい

        result.textContent = results[n];

        // switch (n) {
        //     case 0:
        //         result.textContent = '大吉';
        //         break;
        //     case 1:
        //         result.textContent = '中吉';
        //         break;
        //     case 2:
        //         result.textContent = '小吉';
        //         break;
        //     case 3:
        //         result.textContent = '吉';
        //         break;
        //     case 4:
        //         result.textContent = '末吉';
        //         break;
        // }
    });
}