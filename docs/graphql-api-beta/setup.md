---
sidebar_position: 2
slug: /graphql-api/beta/setup
---

# セットアップ

## アクセストークンを用意する

GraphQL APIを操作するにはアクセストークンが必要です。
アクセストークンについては[認証の概要ページ](/docs/authentication)をご参照ください。

## クエリの実行環境を用意する

GraphQL APIは以下のような方法で操作することができます。

- `curl` コマンド
- GUIクライアント

GUIクライアントは[GraphiQL](https://github.com/graphql/graphiql)や[Insomnia](https://insomnia.rest)などがあります。
このページではInsomniaを使用します。

## クエリを実行する

### curlコマンドで実行する

`curl` コマンドを使用して実行する場合は以下のようなオプションを付加します。

```bash
$ curl https://api.annict.com/graphql \
-H "Authorization: bearer <アクセストークン>" \
-X POST \
-d "query=query { viewer { name } }"
```

`query` パラメータに `query { viewer { name } }` というクエリを付加してPOSTリクエストを送っています。
上記コマンドを実行すると下記のようなJSONデータが返ります。

```json
{"data":{"viewer":{"name":"Koji Shimba"}}}
```

### Insomniaで実行する

Insomniaを立ち上げると下の画像ようなウィンドウが表示されます。

![image](https://user-images.githubusercontent.com/56767/192594292-f2fb6e2c-1ec9-4b5c-b374-fb6f4a945c4a.png)

左のカラムにある追加ボタンをクリックし、 `GraphQL Request` をクリックします。

![image](https://user-images.githubusercontent.com/56767/192594629-3882b3d5-fe5d-46c4-b106-b580115075a7.png)

下記エンドポイントを入力します。

```
https://api.annict.com/graphql
```

![image](https://user-images.githubusercontent.com/56767/192595107-1f9eb181-72d5-471f-a1d8-0f0685bc2030.png)

GraphQL APIにリクエストを投げるとき、エンドポイントは常にこのURLになります。

次にアクセストークンをヘッダに登録します。
`Auth` タブをクリックし、`Bearer Token` をクリックします。

![image](https://user-images.githubusercontent.com/56767/192595425-a92607fd-87e1-42ea-9e03-7132aeeaf09c.png)

`TOKEN` 欄にアクセストークンを指定します。

以上でGraphQL APIを操作するための設定が終わりました。`GraphQL` タブをクリックし、以下のクエリを書いてみます。

```graphql
query {
  viewer {
    username
    name
  }
}
```

![image](https://user-images.githubusercontent.com/56767/192596615-c2383b4d-1c93-4c23-9789-24ba91df139e.png)

クエリを入力したあと、`Send` ボタンをクリックすると、右側に取得結果が表示されます。

![image](https://user-images.githubusercontent.com/56767/192596753-392e6430-ce49-4a2d-a19f-96ac300a37e5.png)

## スキーマを確認する

GraphQL APIが提供するクエリやミューテーションなどはGraphQLクライアントから閲覧することができます。
Insomniaで閲覧する方法については[Insomniaのドキュメント](https://docs.insomnia.rest/insomnia/graphql-queries)をご参照ください。
