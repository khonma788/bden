## 本リポジトリは
「Bden」サービスのフロントエンド実装の公開を目的としています

以下が含まれます。

* HTML
* CSS
* JavaScript
* 画像・アイコン等の静的アセット

含まれるソースコードから、

* 画面構成
* UI設計
* クライアントサイドの処理フロー
* API連携の考え方

を確認できます。以下は公開対象外です。

* バックエンド実装
* データベース構成
* サーバー設定
* 認証基盤
* 運用環境固有の設定
* 秘密情報・APIキー

そのため、本リポジトリのみではサービスを完全再現することはできません。

公開目的

* サービスの透明性向上
* 実装方針の共有
* 技術的な情報公開

バックエンドおよび運用環境の公開・配布は行っていません。

## 全体像
一台の共用バックエンドを各フロントエンドが使うことで、呼の確立・音声の送受信までを実現させます、バックエンド関数はCORS下で呼び出されます、作業はHTML記載だけ、無料ホームページスペースでも動作します、<code>&lt;head&gt;&lt;/head&gt;</code>に<code>agent3s('電話番号:');</code>を書き入れ、適所に描画用タグを配置します、皆が「固有の識別子（電話番号）」を持ち、位置情報を共有することで各設置者の動的変化を実現します、加えて、IPドレスを管理するシグナリングサーバーもありません、サーバー依存度も下げられます

## 対象者！設置者
フロントエンド導入作業を進められる方、設置者の立場で利用される方を指します

## 対象外！押下者の存在
電話絵を押し、電話を掛けてくる人を指します、音声のやり取りには、Windows-APIが必要になります、同梱物は関係ありません<br>
※Windows-APIは「Bden」サイトからダウンロードします

## 使い方
本プロジェクトは、HTML・CSS・JavaScript・画像など、フロントエンドのすべてのファイルをローカルに配置して動作するよう設計されています、デフォルトでは相対パスを使用しているため、追加の設定なしで動作します
```html
<link rel="stylesheet" href="style.css"/>
<script src="bden.min.js"></script>
```
※CDNの利用は任意ですが…画像リンクが404になります<br>
※一式をダウンロードされた場合、相対パスのままお使いください<br>
※一式をダウンロードせずに済ませたい場合、Bdenサイトに手順がございます<br>
```html
<HTML>
<HEAD>
<link rel="stylesheet" href="style.css"/>
<script src="bden.min.js"></script>
<script>
agent3s('5002:');
</script>
</HEAD>

<BODY>
<div style="caret-color:transparent; display:flex; flex-direction:column;">
<div id="agentsts"></div>
<span id="spekksts" style="font-family: Arial, sans-serif; font-size:12px; color:#666666; letter-spacing:1px;"></span>
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
設置者の状態表示です、通話中, 在席保証なし, 離席, トイレ, 在席

`<div id="iam" hidden>9999</div>`必須<br>
無条件で必要な初期化(9999[必須])です、運用サイトを多人数が閲覧しているとします、Ａさんが電話機を押すとその人にユニークな値(9999より若い番号)が真っ先に割り当てられます、以後、サーバー管理の対象になります、只見ているだけのＢさんＣさんはＡさんの通話に影響を与えられません

`<a href="https://bden.siptables.net/" class="adsFly"></a>`任意<br>
通話とは関係ありません、電話機の直下にサイズに適した動画を用意しています、adsFly, adsSeven, adsFrog！記載しなければ出ないだけ

### 部品
押下者が電話機を押下すると、３秒間隔でリフレッシュ描画が開始されます、通話中も続きます、受話器を置いてようやく終了します
* div
上記をご覧ください
* scriptタグ
上記をご覧ください
* 初期化コード
上記をご覧ください
* 電話番号
[こちら](https://bden.siptables.net/issue/number.php)が取得ページです、一人一人に電話番号(４桁)を発行します、設置者には必須作業
* 電話絵の表示<br>
<strong>イス：</strong>設置者がログインしていない！導入はうまくいっています<br>
<strong>電話機：</strong>ログインしている
* 音声通話<br>
Windowsで動作するAPI！FEの補助的なツールの位置づけ、[こちら](https://bden.siptables.net)からダウンロード、動的に空いている50000以上のUDPポートを一個取得し、通話が終われば返却します、一方、呼び出し（ベル鳴）は音は鳴るもののツール有無とは無関係

### 動作確認・デモ用
電話設置を望む人が、Bdenサービスから電話番号を取得し、貼り付けるのが基本です、もしハードルが高ければ、[こちら](https://bden.siptables.net)にお試し用ID/PASSWORDがあります、すぐに電話設置を体験できます、重複利用の衝突はないと思います、気軽にお試しください

### ブランチ・タグ
モジュール修正があれば基本、tagを更新します、説明の後追いが多くなりがちなのでmainをオススメしています、たまにmainモジュールが意図しないものだったり…不可抗力の事故みたいなもの…気になるようであれば最初から「tag」でもいいと思います
<table>
  <tr>
    <th></th>
    <th>役割</th>
    <th>用途</th>
    <th>備考</th>
  </tr>
  <tr>
    <td>main</td>
    <td>最新状態</td>
    <td>困らない範囲の更新</td>
    <td>最初のトライ</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>≒リリース</td>
    <td>安定稼動を確認済み</td>
    <td>セカンドトライ</td>
  </tr>
</table>

### リンク
[Top](https://bden.siptables.net) Bdenサービス）Windows-APIダウンロード, トラシューなど<br>
[demo](https://khonma788.github.io/bden/) FE一式導入のテストサイト<br>
### 連絡先
[運用グループ](https://bden.siptables.net/group.htm)
<!-- trigger pages rebuild -->
<!-- trigger pages rebuild -->
