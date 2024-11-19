# note YouTube link formatter

[メインのサイト]()

## Overview

YouTubeのリンクをnoteに貼る際に、配信のリンクだと埋め込まれない（サムネイルがプレビューされない）ことがあります。

これをプレビュー可能なリンクに変換するためのツールです。

## Usage

上の[リンク]()にアクセスしてコピペするだけです。

> [!IMPORTANT]
> - とりあえずで作ったのでYouTube以外を貼り付けたときの挙動は未定義。
> - YouTubeの貼り付けにおいても例外の可能性あり。

## Cause

YouTubeのリンクをコピーしたときのドメイン（たぶん）が、コピー場所、動画の種類によって異なるためです。

通常の動画では次の3種類を確認しました。
- `https://www.youtube.com/watch?v=XXXXXXXXXXX`（PCのブラウザ）
- `https://youtu.be/XXXXXXXXXXX`（PC・スマホの共有）
- `https://m.youtube.com/watch?v=XXXXXXXXXXX`（スマホのブラウザ）

一方、配信のリンクでは次の3種類を確認しました。
- `https://www.youtube.com/live/watch?v=XXXXXXXXXXX`（スマホ共有）
- `https://m.youtube.com/watch?v=XXXXXXXXXXX`（スマホブラウザ）

配信は`/live/`が入るため`www`を`m`にして`/live`が入らないようにすればよいとして作成しました。
