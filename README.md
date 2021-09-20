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
