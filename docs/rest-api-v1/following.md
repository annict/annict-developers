---
sidebar_position: 1200
slug: /rest-api/v1/following
---

# フォロイー

## GET /v1/following

Annictに登録されているユーザのフォロイー (フォローしている人) 情報を取得することができます。

### フィールド

[ユーザ](/docs/rest-api/v1/users) のフィールドと同じです。

### パラメータ

| 名前 | 概要 | 使用例 |
| --- | --- | --- |
| fields | レスポンスボディに含まれるデータのフィールドを絞り込みます。 | fields=id,username |
| filter_user_id | ユーザIDで絞り込みます。 | filter_user_id=2 |
| filter_username | ユーザ名で絞り込みます。 | filter_username=shimbaco |
| page | ページ数を指定します。 | page=2 |
| per_page | 1ページに何件取得するかを指定します。デフォルトは `25` 件で、`50` 件まで指定できます。 | per_page=30 |
| sort_id | IDで並び替えます。`asc` または `desc` が指定できます。 | sort_id=desc |


### リクエスト例

```
$ curl -X GET https://api.annict.com/v1/following?access_token=(access_token)&filter_username=shimbaco&per_page=2
```

```json
{
  "users": [
    {
      "id": 3,
      "username": "Nadeshiko",
      "name": "各務原なでしこ",
      "description": "山梨に住む女子高生です。",
      "url": null,
      "avatar_url": "https://api-assets.annict.com/cc301ca5c5e13399144c79daa4e4727b783676de.jpg",
      "background_image_url": "https://api-assets.annict.com/cc301ca5c5e13399144c79daa4e4727b783676de.jpg",
      "records_count": 0,
      "created_at": "2014-03-04T09:32:25.000Z"
    },
    {
      "id": 4,
      "username": "ShimaRin",
      "name": "志摩リン",
      "description": "キャンプが好き。",
      "url": null,
      "avatar_url": "https://api-assets.annict.com/33ce537a4cf38f71b509f295f2afa3291c281dcf.jpg",
      "background_image_url": "https://api-assets.annict.com/33ce537a4cf38f71b509f295f2afa3291c281dcf.jpg",
      "records_count": 0,
      "created_at": "2014-03-04T09:32:28.000Z"
    }
  ],
  "total_count": 274,
  "next_page": 2,
  "prev_page": null
}
```
