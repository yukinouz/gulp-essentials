# gulp-essentials

## 初回インストール

1. リポジトリをクローンしてください。
   ```zsh
   git clone https://github.com/yukinouz/gulp-essentials.git
   ```
1. Node `v18.6.0`で動作保証をしております。
1. Node パッケージのインストールしてください。
   ```zsh
   npm install
   ```
1. [tinyPng API](https://tinypng.com/developers)を作成し、gulpfile.js の`YOUR API KEY`にセットしてください。

## 実行方法

### ローカルサーバー起動＆ホットリロード

```zsh
npm run dev
```

または、

```zsh
npx gulp
```

### ビルド

```zsh
npm run build
```

または、

```zsh
npx gulp build
```

その他、個別にコマンドを実行したい場合は、gulpfile.js をご確認ください。
