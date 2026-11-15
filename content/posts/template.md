---
title: 記事テンプレート
description: 新しい記事を書くときはこのファイルを複製して使う。
date: 2026-01-01
tags:
  - tag
draft: true
---

このファイルは Studio に `posts/` フォルダを表示させておくためのテンプレート。消さないこと。

`draft: true` なので一覧には出ず、本番で URL を直接開いても 404 になる（Studio にログイン中だけプレビューできる）。

## 新しい記事の作り方

1. このファイルを複製してファイル名を変える（ファイル名がそのまま URL になる）
2. frontmatter の `title` / `description` / `date` / `tags` を書き換える
3. 公開するときは `draft: false` にする
