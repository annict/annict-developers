---
sidebar_position: 1400
slug: /rest-api/v1/records
---

# エピソードへの記録

## GET /v1/records

エピソードへの記録を取得することができます。

### フィールド

| 名前 | 概要 |
| --- | --- |
| id | 記録ID |
| comment | 記録したときに書かれた感想 |
| rating | **[非推奨]** 記録したときに付けられたレーティング。`0` から `5` までの数値が入っています。今後は `rating_state` を参照して下さい。 |
| rating_state | 記録したときに付けられたレーティング。`bad` `average` `good` `great` の4種類が入っています。 |
| is_modified | この記録が編集されたかどうか |
| likes_count | Likeされた数 |
| comments_count | コメントされた数 |
| created_at | 記録された日時 |
| user | この記録をした利用者の情報 |
| work | この記録が紐づく作品情報。取得できるフィールドは [作品](/docs/rest-api/v1/works) と同じです。 |
| episode | この記録が紐づくエピソード情報 |

### パラメータ

| 名前 | 概要 | 使用例 |
| --- | --- | --- |
| fields | レスポンスボディに含まれるデータのフィールドを絞り込みます。 | fields=id,title |
| filter_ids | 記録を記録IDで絞り込みます。 | filter_ids=1,2,3 |
| filter_episode_id | 記録をエピソードIDで絞り込みます。 | filter_episode_id=1111 |
| filter_has_record_comment | 記録を感想のあるなしで絞り込みます。感想付きの記録のみに絞り込むときは `true` を、感想の無い記録のみに絞り込むときは `false` を指定します。| filter_has_record_comment=true |
| page | ページ数を指定します。 | page=2 |
| per_page | 1ページに何件取得するかを指定します。デフォルトは `25` 件で、`50` 件まで指定できます。 | per_page=30 |
| sort_id | 記録を記録IDで並び替えます。`asc` または `desc` が指定できます。 | sort_id=desc |
| sort_likes_count | 記録をLikeされた数で並び替えます。`asc` または `desc` が指定できます。 | sort_likes_count=desc |


### リクエスト例

```
$ curl -X GET https://api.annict.com/v1/records?filter_episode_id=74669&access_token=(access_token)
```

```json
{
  "records": [
    {
      "id": 425551,
      "comment": "ゆるふわ田舎アニメかと思ったらギャグと下ネタが多めのコメディアニメだった。これはこれで。日岡さんの声良いなあ。",
      "rating": 4,
      "is_modified": false,
      "likes_count": 0,
      "comments_count": 0,
      "created_at": "2016-04-11T14:19:13.974Z",
      "user": {
        "id": 2,
        "username": "shimbaco",
        "name": "Koji Shimba",
        "description": "アニメ好きが高じてこのサービスを作りました。聖地巡礼を年に数回しています。",
        "url": "http://shimba.co",
        "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",
        "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",
        "records_count": 1906,
        "created_at": "2014-03-02T15:38:40.000Z"
      },
      "work": {
        "id": 4670,
        "title": "くまみこ",
        "title_kana": "くまみこ",
        "media": "tv",
        "media_text": "TV",
        "season_name": "2016-spring",
        "season_name_text": "2016年春",
        "released_on": "",
        "released_on_about": "",
        "official_site_url": "http://kmmk.tv/",
        "wikipedia_url": "https://ja.wikipedia.org/wiki/%E3%81%8F%E3%81%BE%E3%81%BF%E3%81%93",
        "twitter_username": "kmmk_anime",
        "twitter_hashtag": "kumamiko",
        "episodes_count": 6,
        "watchers_count": 609
      },
      "episode": {
        "id": 74669,
        "number": "1",
        "number_text": "第壱話",
        "sort_number": 10,
        "title": "クマと少女 お別れの時",
        "records_count": 183,
        "record_comments_count": 53
      }
    },
...
```

## POST /v1/me/records

エピソードへの記録が作成できます。

**このリクエストには `write` スコープが必要になります。**

### パラメータ

| 名前 | 概要 | データ例 |
| --- | --- | --- |
| episode_id | **[必須]** エピソードID | 1234 |
| comment | 感想 | あぁ^～心がぴょんぴょんするんじゃぁ^～ |
| rating | **[非推奨]** 旧レーティング。今後は `rating_state` を使用してください。 | 4.5 |
| rating_state | レーティングの種類。`bad` `average` `good` `great` が入力できます。 | great |
| share_twitter | 記録をTwitterにシェアするかどうか。`true` または `false` が入力できます。指定しなかったときは `false` (シェアしない) になります。 | true |
| share_facebook | 記録をFacebookにシェアするかどうか。`true` または `false` が入力できます。指定しなかったときは `false` (シェアしない) になります。 | true |


### リクエスト例

```
$ curl -X POST "https://api.annict.com/v1/me/records?episode_id=5013&comment=あぁ^～心がぴょんぴょんするんじゃぁ^～&access_token=(access_token)"
```

```json
{
  "id": 470491,
  "comment": "あぁ^～心がぴょんぴょんするんじゃぁ^～",
  "rating": null,
  "is_modified": false,
  "likes_count": 0,
  "comments_count": 0,
  "created_at": "2016-05-07T09:40:32.159Z",
  "user": {
    "id": 2,
    "username": "shimbaco",
    "name": "Koji Shimba",
    "description": "",
    "url": null,
    "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",
    "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",
    "records_count": 123,
    "created_at": "2016-05-03T19:06:59.929Z"
  },
  "work": {
    "id": 3994,
    "title": "ご注文はうさぎですか？",
    "title_kana": "ごちゅうもんはうさぎですか",
    "media": "tv",
    "media_text": "TV",
    "season_name": "2014-spring",
    "season_name_text": "2014年春",
    "released_on": "2014-04-10",
    "released_on_about": "",
    "official_site_url": "http://www.gochiusa.com/",
    "wikipedia_url": "http://ja.wikipedia.org/wiki/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F#.E3.83.86.E3.83.AC.E3.83.93.E3.82.A2.E3.83.8B.E3.83.A1",
    "twitter_username": "usagi_anime",
    "twitter_hashtag": "gochiusa",
    "episodes_count": 12,
    "watchers_count": 850
  },
  "episode": {
    "id": 5013,
    "number": null,
    "number_text": "第1羽",
    "sort_number": 1,
    "title": "ひと目で尋常でないもふもふだと見抜いたよ",
    "records_count": 103,
    "record_comments_count": 3
  }
}
```

## PATCH /v1/me/records/:id

作成した記録を編集することができます。

**このリクエストには `write` スコープが必要になります。**

### パラメータ

| 名前 | 概要 | データ例 |
| --- | --- | --- |
| id | **[必須]** 記録ID | 1016 |
| comment | 感想 | あぁ^～心がぴょんぴょんするんじゃぁ^～ |
| rating | **[非推奨]** 旧レーティング。今後は `rating_state` を使用してください。 | 4.5 |
| rating_state | レーティングの種類。`bad` `average` `good` `great` が入力できます。 | great |
| share_twitter | 記録をTwitterにシェアするかどうか。`true` または `false` が入力できます。指定しなかったときは `false` (シェアしない) になります。 | true |
| share_facebook | 記録をFacebookにシェアするかどうか。`true` または `false` が入力できます。指定しなかったときは `false` (シェアしない) になります。 | true |

### リクエスト例

```
$ curl -X PATCH "https://api.annict.com/v1/me/records/1016?comment=あぁ^～心がぴょんぴょんするんじゃぁ^～&share_facebook=true&access_token=(access_token)"
```

```json
{
  "id": 1016,
  "comment": "あぁ^～心がぴょんぴょんするんじゃぁ^～",
  "rating": 5.0,
  "is_modified": true,
  "likes_count": 0,
  "comments_count": 0,
  "created_at": "2016-05-07T09:40:32.159Z",
  "user": {
    "id": 2,
    "username": "shimbaco",
    "name": "Koji Shimba",
    "description": "",
    "url": null,
    "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",
    "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",
    "records_count": 1234,
    "created_at": "2016-05-03T19:06:59.929Z"
  },
  "work": {
    "id": 3994,
    "title": "ご注文はうさぎですか？",
    "title_kana": "ごちゅうもんはうさぎですか",
    "media": "tv",
    "media_text": "TV",
    "season_name": "2014-spring",
    "season_name_text": "2014年春",
    "released_on": "2014-04-10",
    "released_on_about": "",
    "official_site_url": "http://www.gochiusa.com/",
    "wikipedia_url": "http://ja.wikipedia.org/wiki/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F#.E3.83.86.E3.83.AC.E3.83.93.E3.82.A2.E3.83.8B.E3.83.A1",
    "twitter_username": "usagi_anime",
    "twitter_hashtag": "gochiusa",
    "episodes_count": 12,
    "watchers_count": 850
  },
  "episode": {
    "id": 5013,
    "number": null,
    "number_text": "第1羽",
    "sort_number": 1,
    "title": "ひと目で尋常でないもふもふだと見抜いたよ",
    "records_count": 103,
    "record_comments_count": 3
  }
}
```

## DELETE /v1/me/records/:id

作成した記録を削除することができます。

**このリクエストには `write` スコープが必要になります。**

### パラメータ

| 名前 | 概要 | データ例 |
| --- | --- | --- |
| id | **[必須]** 記録ID | 1016 |

### リクエスト例

```
$ curl -X DELETE "https://api.annict.com/v1/me/records/1016?access_token=(access_token)"
```

```
HTTP/1.1 204 No Content
```
