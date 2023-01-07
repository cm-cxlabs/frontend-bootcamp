# Coding Challenge 3

Classmethod CX アーキテクトチームによるReact学習用の教材です。

## イントロ

ある架空のクライアントから、ヘッドレスCMSを用いたTechブログを表示するアプリケーションを作るよう依頼されました。ヘッドレスCMSからAPIを利用して記事の一覧、詳細ページを表示する必要があります。このアプリケーションはヘッドレスCMSの技術選定と選定したヘッドレスCMSにあわせたAPIを使用して構成する予定です。

エンジニアとしてクライアントの要求に応えられる提案用のアプリケーションを用意する必要があります。

### ヘッドレスCMSについて

本課題ではmicroCMSというヘッドレスCMSを利用します。microCMSは無料でアカウントが作成可能です。

- [microCMS](https://microcms.io/)

時間的な制約がない場合は自身で選定したヘッドレスCMSを利用して構いません。以下はmicroCMSを利用した場合の記載になっています。

## 技術スタック

リポジトリ内の構築されたReact + Viteの環境を利用して開発をすすめてください。その他必要なライブラリについては自由に構成して問題ありません。

- [Boilerplate](https://github.com/cm-cxlabs/frontend-bootcamp/tree/main/react-vite-boilerplate)

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- その他は自由に構成

### ESLintについて

事前に用意した環境にはあらかじめESLintによるいくつかの制約を設けています。エラーはもちろん警告となる部分についてもできる限り解消できるようコーディングしてください。

下記のようないくつか通常のプロジェクトでは利用しないことも多い制約をいれています。コーディング時にはできる限り気をつけるべきルールのため参考にしてください。

- [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)
- [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions/)
- [Disallow mutating objects and arrays (immutable-data)](https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/immutable-data.md)

## 実装について

1. 下記のURLを参考にアカウントとAPIキーを作成します  
  - [microCMS はじめに](https://document.microcms.io/manual/getting-started)
  - APIは**ブログ**テンプレートを使用してください
2. 初期画面として記事の一覧を表示する必要があります
3. 記事一覧から記事詳細を表示するページへ遷移する必要があります
4. カテゴリー一覧、カテゴリーに属する記事一覧ページを用意する必要があります

## 備考

- トランジションやアニメーション、アプリの使い勝手を良くするための細かな調整にも時間をかけてみてください。  
テンプレートには[Tailwind CSS](https://tailwindcss.com/)を利用しています。[Tailwind CSS](https://tailwindcss.com/)のドキュメントや[Headless UI](https://headlessui.com/)を参考にするにもよいでしょう。
- 関数やコンポーネントの名前やファイル構成にも気をかけてください。  
今後他のメンバーも利用することを想定してわかりやすさを重視し検討してみてください。
- 時間的な制約をもって、その中でできること、できないことを考えて実装してください。  
すべての機能を実装する必要はありません、限られた時間の中で優先順位を考えて実装をすすめてください。
- 余力があればテストコードを実装してください。  
テンプレートには[Vitest](https://vitest.dev/)を同梱しています。

## アプリケーションのイメージ

## Getting Started

### Install

Create the project.

```bash
npx degit -mode=git cm-cxlabs/frontend-bootcamp/react-vite-boilerplate my-app
```

Access the project directory.

```bash
cd my-app
```

Install dependencies.

```bash
yarn install
```

Serve with hot reload at http://localhost:3000.

```bash
yarn dev
```

### Lint

```bash
yarn lint
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
```

### Storybook

```bash
yarn storybook
```
