# チーム開発（第11期）
## 開発メンバー
  - コモディ
  - nomoto
  - masuda
  - Yumi Kadono

## プロジェクトの概要

Todo リストの作成を通じて、React.js、Next.js の基礎、Git,github の使い方に慣れ、チーム開発を体験します。
チームメンバー同士でのコードレビュー、毎週 MTG での issue ついての議論など個人開発では行えない内容をカバーしていきます。

## URL
  ブラウザで https://next-todo-11-mi462.vercel.app を開くと表示されます。

## デモ画像
- Login画面
  <br>
  サインアップでemail・passwordを登録します。その後、emailとpasswordを使用してログインします。
<img src="https://github.com/Mi462/next_todo_11/assets/123140215/d6ccd3c0-e0c0-4851-a1a1-c131905f0315" width="500px">

- Top画面
  <br>
  アプリ利用者のTodoリスト（Task・Status・Priority・作成日時・編集日時・編集ボタン・削除ボタン）を表示します。ヘッダー下に絞り込み機能があるため、StatusまたはPriorityごとに表示することができます。また絞り込み機能の右横にTodoリスト作成ボタンがあります。なおTodoリストが6つ以上になるとページネーションが現れます。
<img src="https://github.com/Mi462/next_todo_11/assets/123140215/9c853c5e-b1fc-427d-8266-f66417573930" width="500px">

- Show画面
  <br>
  Todoリスト（Title・Detail・作成日時・編集日時）を表示します。またそれに対するComment（Comment作成者の名前・作成日時・Commentの内容）も表示します。
<img src="https://github.com/Mi462/next_todo_11/assets/123140215/f718f2e9-5bc0-4a66-9bc9-7e9628049a85" width="500px">

- Edit画面
  <br>
  編集対象であるTodoリスト（Title・Detail・作成日時・編集日時）を表示します。
<img src="https://github.com/Mi462/next_todo_11/assets/123140215/5f049415-f66d-411c-8ee3-00f7f5b0e7cd" width="500px">

- Create画面
  <br>
  作成するTodoリスト（TitleとDetailの入力欄・Priority）を表示します。
<img src="https://github.com/Mi462/next_todo_11/assets/123140215/93b3902a-6f07-4006-8f8f-8d99911cadc9" width="500px">

## 使用技術

- React.js (https://github.com/facebook/react)
- Next.js (https://github.com/vercel/next.js)

## バージョン情報

volta で管理
https://volta.sh/

```
"node": "18.17.0",
https://nodejs.org/ja

"npm": "9.8.1"
https://docs.npmjs.com/cli/v9/commands/npm-version
```

## ライブラリ
```
"storybook": "7.2.1"
https://storybook.js.org
```





