---
sidebar_position: 1300
slug: /rest-api/v1/followers
---

# フォロワー

## GET /v1/followers

Annictに登録されているユーザのフォロワー (フォローされている人) 情報を取得することができます。

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
$ curl -X GET https://api.annict.com/v1/followers?access_token=(access_token)&filter_username=shimbaco&per_page=2
```

```json
{
  "users": [
    {
      "id": 7,
      "username": "Yukino",
      "name": "雪ノ下雪乃",
      "description": "総武高校2年J組に所属している女子生徒で奉仕部の部長です。",
      "url": null,
      "avatar_url": "https://api-assets.annict.com/480862747fc5f7152a031e24f0c0374dc71c539a.jpg",
      "background_image_url": "https://api-assets.annict.com/7e258e0189e9ee38f4dc0c57b2c9f6b39dd2cd95.jpg",
      "records_count": 260,
      "created_at": "2014-03-10T04:11:54.000Z"
    },
    {
      "id": 8,
      "username": "Ayase",
      "name": "新垣あやせ",
      "description": "桐乃のクラスメイトです。",
      "url": null,
      "avatar_url": "https://api-assets.annict.com/cd7b66919fea1952e63855632665812839e2a394.jpg",
      "background_image_url": "https://api-assets.annict.com/cd7b66919fea1952e63855632665812839e2a394.jpg",
      "records_count": 739,
      "created_at": "2014-03-10T04:11:55.000Z"
    }
  ],
  "total_count": 191,
  "next_page": 2,
  "prev_page": null
}
```
