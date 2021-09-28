# インフラ勉強用リポジトリ
インフラ周りの勉強をするためのリポジトリです。
インフラがメインのため、アプリケーションの実装は最低限に留めます。
ここでは、下記の実現を目指します。

### AWS ECS(Fargate)を用いたインフラ構築
- BFF(Backend For Frontend)アーキテクチャで構築
- SSL対応
- Terraformによるインフラのコード管理

### CircleCIによるCI/CDの構築
- Githubへのpush時の自動テストを実施
- 特定のブランチへマージされた時の自動デプロイ

#### アプリケーションの技術スタック
APIサーバ: Ruby on Rails 6
DB: postgresql
フロントエンド: Nuxt.jsによるSSR

## 参考サイト
- https://zenn.dev/hibriiiiidge/books/49ee4063b10cec1df1a2/viewer/2ac314f5633e674d4b0c
- https://y-ohgi.com/introduction-terraform/

## 備忘録
.envファイルで各サーバのポートを任意で起動できるように調整。
```
BACKEND_PORT=5000
FRONTEND_PORT=3000
DATABASE_PORT=5432
```

### frontend環境構築手順
frontendディレクトリ、Dockerファイルを作成。
- project name: frontend
- packeage manager: yarn
- script type: JavaScript
- UI components: vuetify
- ajax: axios
- testing framework: jest
- lint: eslint, stylelint
```
docker-compose run frontend yarn create nuxt-app --overwrite-dir frontend
```

nuxt.config.jsに下記を追記
```
server: {
  host: '0.0.0.0',
  port: process.env.FRONTEND_PORT || '3000'
}
```

#### BASE API URLのhの注意事項
SSRとブラウザ上でのAPI通信のときとで、下記のようにホストを使い分ける必要がある。
環境変数で`API_URL`と`API_URL_BROWSER`を設定すると、axiosが自動で設定してくれる。
```
SSR => host.docker,internal
ブラウザ => localhost
```

#### scss
Nuxtの公式を参考に導入。
※ fibersパッケージはNode.jsのバージョンが16だと使えないためいれない

https://nuxtjs.org/ja/docs/directory-structure/assets

```
yarn add -D sass sass-loader@10 stylelint-scss stylelint-config-recommended-scss
```

##### stylelint-scssを導入
```
yarn add -D stylelint-scss stylelint-config-recommended-scss
```

stylelint.config.jsを下記のように変更。
```
module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  extends: [
    'stylelint-config-recommended-scss'
  ]
}

```
