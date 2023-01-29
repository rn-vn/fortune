'use strict'; //エラーの設定を厳密にする

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => { //クリックしたら次の処理を行う命令
        result.textContent = 'hit!';
    });
}