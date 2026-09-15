# annict-developers

developers.annict.comで404ページを配信するためのリポジトリです。

開発者向けドキュメントは、WikinoのAnnictスペースにある「Developer Help」トピック (https://wikino.app/s/annict/topics/5) へ移しました。
このリポジトリはドキュメントを持たず、移転を案内する `404.html` を管理します。

GitHub Pagesの公開元はmainブランチのルートです。
ルートおよび削除した旧ドキュメント・ブログのURLには、移転を案内する `404.html` をHTTP 404で返します。
`404.html` など公開元に実在するファイルへの直接アクセスは除きます。

## ファイル

- `404.html` - 移転を案内するページ
- `CNAME` - developers.annict.comのカスタムドメイン設定
- `.nojekyll` - GitHub PagesのJekyll処理を止める
