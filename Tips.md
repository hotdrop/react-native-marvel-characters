# Tips
このアプリを作成する際に勉強したことをまとめます。

# 最初にやったこと
アプリを作り始める前に、ReactNativeの公式サイトにある`The Basics`を一通り学習しました。
  - [公式のチュートリアル](https://facebook.github.io/react-native/docs/getting-started.html)
最初の環境構築だけかなり引っかかりましたが、あとはガイドに沿ってすんなり進められました。
また、`Guides`にある``JavaScript Environment`の章でbabelの公式サイトと合わせてES6の構文を確認し、`Components`の章にあるライブラリ群を簡単に流し読みしました。
この2つの章は基本的にアプリ作成を進める中で不明点を調査するため読むことが多かったです。

## 環境構築で引っかかったこと
`The Basics`の`Getting-started`ではReactNativeの始め方を２通り紹介しています。
  1. Quick Start
  2. Building Projects with Native Code

1→2の順で実施しましたが、始める前にまずnode.jsがインストールされていることが前提になります。  
この時、`nodebrew`を入れてnodeのバージョンを切り替えられるようにしたほうが良いです。
私は最新の`npm5`を入れたら「そのバージョンではReactNative対応してません。npm4でお願いします。」とインストール途中でエラーになりました。  
ReactNativeは大きなプロジェクトですので、何かとissueに挙げられています。基本的には詰まったらエラーメッセージをissueに検索かければ大抵は引っかかるはずです。  

### Quick Startについて
`create-react-native-app`コマンドでReactNativeプロジェクトを作成する方法です。  
こちらの方法ではExpoというソフトウェアを使用できるため、GUIでの操作や実機へのアプリインストールがQRコードで簡単にできます。  
反面、ビルド時にネイティブコードを出力しないため、ネイティブコードをいじるようなアプリには向きません。  
現状、サードパーティ製のライブラリを使用するときはまだネイティブコードをいじる必要がある場合が多いと感じました。  
今回であればvectorIconやConfigを使用する際にネイティブコードに手を加えています。  

### Building Projects with Native Codeについて
こちらは従来通り`react-native`コマンドでプロジェクトを作成する方法です。  
`Quick Start`の最後の方でも説明がありますが、ネイティブコードを出力するためビルド後にAndroidStuidoやXcodeを使用してアプリをいじることができます。  
ネイティブコードというのはそのままで、ビルドするとルートディレクトリに`android`と`ios`というディレクトリが生成されます。  
`android`ディレクトリにはgradleプロジェクトが出力されるためbuild.gradleを書き換えたり中身のJavaを触ることができます。  
`ios`ディレクトリにはxcodeプロジェクトが出力されるため、Info.plistなど触ることができます。  
まああまりやらないほうがいいのでしょうが、上記でも説明した通りまだサードパーティ製ライブラリを使用する時はネイティブコード多いため本アプリはこっちの方法でプロジェクトを作成しています。  
よくネット上で検索に引っかかる`index.ios.js`や`index.android.js`はこっちのプロジェクト作成方法でないと多分使えません。

## アプリ作成に当たって
ReactNativeで作成されたSampleアプリが[Github](https://github.com/ReactNativeNews/React-Native-Apps)で多く公開されています。  
最終コミット日が2年前など古いものもありますが、ここにあるアプリのREADMEを眺めて良さそうなのをいくつか読みました。  
特に作成しようとしていたアプリはReduxを使う予定だったのでReduxを使っているアプリをピックアップしました。  

# 良く分からなかったことや学習の補足事項
公式の`The Basics`やアプリ作成を進める中で良く分からなかったことや調査したことをまとめます。

# 画面遷移の方法
react-native-navigationについて

# Gridの実装方法
ListViewとFlatListについて
画像も貼りたい

# Reduxについて
簡単にReduxについて解説。特に概要ではなく実装レベルで

# PropTypesとFlowについて

## 型定義はどうすればいい？

## Flow辛い

# モダンな書き方とは
Functional Componentにしなかったことととか・・

# stateとsetStateについて

# リストの下まで行ったら次を読み込む方法
Infinite-scroll-viewについて

# HTTP通信をするには？

# APIをどのレイヤーで叩けばいいか？

# APIなど設定値をどうするか？
react-native-configの話
