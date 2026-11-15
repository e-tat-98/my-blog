# my-posts

個人の記事を置くブログサイト。

**サイト:** https://my-posts-olive.vercel.app/

## 技術構成

| | |
|---|---|
| フレームワーク | [Nuxt 4](https://nuxt.com/) |
| コンテンツ管理 | [Nuxt Content v3](https://content.nuxt.com/)（Markdown） |
| 記事エディタ | [Nuxt Studio](https://nuxt.studio/)（GitHub ログインでブラウザから編集） |
| ホスティング | [Vercel](https://vercel.com/) |
| パッケージマネージャ | pnpm |

## ディレクトリ構成

```
.
├── app/
│   ├── app.vue              # 共通レイアウト（ヘッダー・フッター）
│   ├── assets/css/main.css  # 全体のスタイル
│   ├── pages/
│   │   ├── index.vue        # 記事一覧
│   │   └── posts/[slug].vue # 記事ページ
│   └── utils/formatDate.ts
├── content/
│   └── posts/               # 記事の Markdown（ファイル名がそのまま URL になる）
├── content.config.ts        # コレクション定義（frontmatter のスキーマ）
└── nuxt.config.ts
```

`content/posts/hello-world.md` は `/posts/hello-world` で公開される。

## 記事の書き方

`content/posts/` に Markdown ファイルを置く。frontmatter はこの形式。

```md
---
title: 記事タイトル
description: 一覧に出る説明文
date: 2026-11-15
tags:
  - nuxt
draft: false
---

本文
```

| キー | 必須 | 説明 |
|---|---|---|
| `title` | ○ | 記事タイトル |
| `description` | | 一覧ページに出る説明文 |
| `date` | ○ | 公開日（`YYYY-MM-DD`）。一覧はこの日付の新しい順に並ぶ |
| `tags` | | タグの配列 |
| `draft` | | `true` にすると一覧に出なくなる（デフォルト `false`） |

## ブラウザから編集する（Nuxt Studio）

1. https://my-posts-olive.vercel.app/_studio を開く
2. GitHub でログインする
3. 記事を追加・編集・削除して **Publish** する
4. `main` ブランチにコミットされ、Vercel が自動で再デプロイして反映される

ログインできるのは `NUXT_STUDIO_AUTH_GITHUB_MODERATORS` に登録したメールアドレスの GitHub アカウントだけ。コミットするにはリポジトリへの書き込み権限も必要。

## ローカル開発

Node.js `>=22.12.0` と pnpm が必要。

```sh
pnpm install
pnpm dev      # http://localhost:3000
```

| コマンド | 内容 |
|---|---|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番ビルド |
| `pnpm preview` | ビルド結果をローカルで確認 |

ローカルで Studio を使う場合は、`.env.example` をコピーして `.env` を作り、値を入れる。ローカルでは編集内容が手元のファイルにそのまま保存される（コミットはされない）。

## 環境変数

| 変数名 | 説明 |
|---|---|
| `NUXT_STUDIO_AUTH_GITHUB_CLIENT_ID` | GitHub OAuth App の Client ID |
| `NUXT_STUDIO_AUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth App の Client Secret |
| `NUXT_STUDIO_AUTH_GITHUB_MODERATORS` | Studio にログインできるメールアドレス（カンマ区切り） |

GitHub OAuth App（https://github.com/settings/developers）のコールバック URL は次のとおり。

- 本番: `https://my-posts-olive.vercel.app/__nuxt_studio/auth/github`
- ローカル: `http://localhost:3000/__nuxt_studio/auth/github`（本番とは別の OAuth App を作る）

## デプロイ

`main` に push すると Vercel が自動でビルド・デプロイする。環境変数は Vercel の Project Settings → Environment Variables で設定する。環境変数を変えたら再デプロイが必要。

## メモ

- pnpm 11 以降は package.json の `pnpm` フィールドが読まれない。ネイティブビルドを許可するパッケージ（better-sqlite3 など）は `pnpm-workspace.yaml` の `allowBuilds` に書く
