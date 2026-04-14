## 概要
bden.min.js は、電話機表示など、UI機能を簡単に導入できるJavaScriptライブラリです、JS関数単体で動作し、CSSと画像は固定URLを参照することで、運用サイト側の管理と干渉せずに使用できます

## 使い方
以下ソースは、説明に必要なものだけを記載し、cdn公開バージョンも気にしておりません！必ず…ダウンロードリンクをお使いください
```html
<HTML>
<HEAD>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/khonma788/bden@v1.0.4/style.css" type="text/css">
<script src="https://cdn.jsdelivr.net/gh/khonma788/bden@v1.1.0/bden.min.js"></script>
<script>
agent3s('5002:');
</script>
</HEAD>

<BODY>
<div style="caret-color:transparent; display:flex; flex-direction:column;">
<div id="agentsts"></div>
<div style="font:12px Kosugi Maru; color:#666666; letter-spacing:1px;">
<span id="spekksts"></span></div>
<a href="https://bden.siptables.net/" class="adsFly"></a>
</div>
<div id="iam" hidden>9999</div>
</BODY>
</HTML>
```

### 中身を分解して説明します

`<div id="agentsts"></div>`必須<br>
描画用`<div>`タグです、電話機の状態に応じた絵・ベル鳴の音源や状態保持用の変数等が動的に入れ替わり立ち替わりします

`<span id="spekksts"></span>`任意<br>
電話を受ける人の状態です、通話中, 在席保証なし, 離席, トイレ, 在席！記載しなければ出ないだけ

`<div id="iam" hidden>9999</div>`必須<br>
無条件で必要な初期化(9999[必須])です、運用サイトを多人数が閲覧しているとします、Ａさんが電話機を押すとその人にユニークな値(9999より若い番号)が真っ先に割り当てられます、以後、サーバー管理の対象になります、只見ているだけのＢさんＣさんはＡさんの通話に影響を与えられません…要求は無視されて9999のまま！必ず、呼び出しを受け入れられる電話機に対して押下しましょう

`<a href="https://bden.siptables.net/" class="adsFly"></a>`任意<br>
通話とは関係ありません、電話機の直下にサイズに適した動画を用意しています、adsFly, adsSeven, adsFrog！記載しなければ出ないだけ

### 既存サイトに組み込む
* WordPress
* 自作サイト
* 他のHTML<br>
無料ホームページサイトで動作確認済み(FC2・忍者)

### 部品
電話機が押下されると、通話の開始から切られるまで３秒間隔で再描画がおこなれます、終われば、３秒更新はなくなります
* div
上記をご覧ください
* scriptタグ
上記をご覧ください
* 初期化コード
上記をご覧ください
* 電話番号
[こちら](https://bden.siptables.net)に電話番号を取得するページがあります、一人一人に電話番号(４桁)を発行します、必ず取得し、以後、その値を`agent3s('5002:');`のように記入してください
* 電話絵の表示<br>
<strong>イス：</strong>設置者がログインしていない！導入はうまくいっています<br>
<strong>電話機：</strong>取得した電話番号に沿うIDでログインしている
* 音声通話<br>
Windowsで動作するAPIが必要です、[こちら](https://bden.siptables.net)からダウンロードできます、もし話すつもりがなければ入れずとも構いません！電話絵は出ますし、相手も呼び出せます、無論、話せませんが

## 考え方
運用サイトにどの程度隙間を取れる？分かりませんが最小`80Ｘ80`で何とかなります、配置はサンプルと違っても構いません、「描画用`<div>`タグ」「`<script>`での関数呼び出し」を上手に割り込ませてください、３秒更新は運用サイト側に一切影響を与えません(電話絵の描画のみ)ので、ご安心ください

### 動作確認・デモ用
電話設置を望む人が、電話番号を取得し、部品を適宜、配置するのが基本です、[こちら](https://bden.siptables.net)にお試し用のID/PASSWORDがあります、どんな感じか体験できます、滅多に衝突しないので気軽にお使いください

### 一発で動く最小コード設計
* 何もしたくない<br>
お試し用のID/PASSWORDでログインしてみてください！これなら何もダウンロード及び設置しなくても動きます
* 運用サイト以外で<br>
無料ホームページへサンプルをそのまま貼り付けるのが手っ取り早いです、おすすめします

## CDN からの読み込み

### JS・CSS（バージョン付き）
README.md記載時のバージョンであり、ダウンロードリンクに紐づく最上位バージョンこそがより安定稼動します
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/khonma788/bden@v1.1.1/style.css" type="text/css">
<script src="https://cdn.jsdelivr.net/gh/khonma788/bden@v1.1.0/bden.min.js"></script>
```
## モジュール管理
[GitHub bden](https://github.com/khonma788/bden)

## 連絡先
[運用グループ](https://bden.siptables.net/group.htm)
