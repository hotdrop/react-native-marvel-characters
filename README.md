# react-native-marvel-characters
React Nativeを勉強するために作成したアプリです。  
Marvel APIを使用しています。

# Preparation
使用する前に必要な準備です。

## 1. Getting Started with Marvel API
`DEVELOPER PORTAL`(developer.marvel.com)でユーザー登録をしてください。  
登録が完了すると[My Developer Account]というリンクから **Your public key** と **Your private key** が確認できます。 
ルートディレクトリに `.env` というファイルを作成してください。  
`.env`ファイルにAPIのEndpoint、`Public key`, `private key`の３つを指定してください。
```.env
MARVEL_URL=http://gateway.marvel.com
MARVEL_PUBLIC_API_KEY=[YOUR＿PUBLIC＿API]
MARVEL_PRIVATE_API_KEY=[YOUR＿PRIVATE＿API]
```

## 2. backcover.pngの用意
`images`ディレクトリに**backcover.png**という画像ファイルを用意してください。  
この画像ファイルはCharacterの詳細画面でサムネイルとキャラ名の背景になります。  

## 3. Install dependencies package
依存パッケージをinstallしてください。
```command
yarn
```

# Usage
ReactNativeの[Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)の`Building Projects with Native Code`でiOSとAndroidのエミュレータ動作をしておくとスムースに進められると思います。

1. react-nativeクライアント起動
```command
yarn start
```

2. 別のターミナルでiOSエミュレータまたはAndroidエミュレータを実行します。
```command
// iOS（Xcodeがインストールされている必要があります）
react-native run-ios

// android（事前にAndroid StudioでVirtual Deviceを起動させてください。
react-native run-android
```

# スクリーンショット
## iOS
<img src="screenshot/ios_characters.png" width="175" />
<img src="screenshot/ios_character_detail.png" width="175" />  

## Android
<img src="screenshot/android_characters.png" width="175" />
<img src="screenshot/android_character_detail.png" width="175" />  
