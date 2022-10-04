---
sidebar_position: 4
slug: /graphql-api/beta/mutation
---

# Mutation

データを保存するときは `mutation` キーワードの中にクエリを記述します。
例えば以下はエピソードに記録するクエリになります。

```graphql
mutation {
  createRecord(
    input: {
      episodeId: "RXBpc29kZS05NTkyMg==",
      comment: "おもしろかった。"
    }
  ) {
    record {
      annictId
    }
  }
}
```

上記の `createRecord` 以外にもAnnict GraphQL APIではいくつかのクエリを提供しています。
詳細は[GraphQL APIリファレンス](/docs/graphql-api/beta/reference)をご覧ください。
