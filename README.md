# react-native-marvel-characters
React Nativeを勉強するために作成したアプリです。  
私の好きなMarvelのAPIを発見したため、それを使用しました。

# 前準備
以下の2つを準備してください。

## Marvel APIのPublic KeyとPrivate Key
Marvel Developer siteにいってユーザー登録をしてください。  
登録が完了すると[My Developer Account]というリンクから **Your public key** と **Your private key** が確認できます。 
ルートディレクトリに .env というファイルを作成し、そこにAPIのURLと上記のキーを登録してください。
```.env
MARVEL_URL=http://gateway.marvel.com/v1/public
MARVEL_PUBLIC_API_KEY=YOUR＿PUBLIC＿API
MARVEL_PRIVATE_API_KEY=YOUR＿PRIVATE＿API
```

## BackCoverの用意
ルートディレクトリに images というディレクトリを作成してください。  
自分の好きな画像を取得し、作成したimagesの中に **backcover.png** というファイル名で保存してください。

# 使い方
yarnでこのプロジェクトを起動してください。
```command
yarn start
```

起動が完了したら、別のターミナルで以下のいずれかを実行すればエミュレータで起動できます。  
```command
// iOS
react-native run-ios

// android
// 事前にAndroid StudioでVirtual Deviceを起動させてください。
react-native run-android
```

# スクリーンショット
あとで