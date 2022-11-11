# Coding Challenge 1

Classmethod CX アーキテクトチームによるReact学習用の教材です。

## イントロ

ある架空のクライアントから、顧客が映画を検索し、その映画の詳細を見たり、その映画をお気に入りにしたり、お気に入りにしたすべての映画を見ることができるアプリを作るよう依頼されました。このアプリはおもに[themoviedb.org](https://www.themoviedb.org/)のAPIを使用して構成する予定です。

エンジニアとしてクライアントの要求に応えられる提案用のアプリケーションを用意する必要があります。

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

1. 下記のURLを参考にAPIキーを作成します。  
[Getting Started](https://developers.themoviedb.org/3/getting-started/introduction)
2. フィルム検索APIを利用して好きなキーワードの結果を表示するUIを自由に作成します。  
`https://api.themoviedb.org/3/search/movie?api_key={apikey}&query={search_query}`
3. ユーザーがそれぞれのフィルム詳細を見ることができるページを作成します。  
`https://api.themoviedb.org/3/movie/{movie_id}?api_key={apikey}`
4. ユーザーは、ムービーをお気に入りにしたり、解除したりすることができる必要があります。
5. ユーザーは、お気に入りの映画のリストを見ることができる必要があります。（映画の詳細画面にも移動することができること）

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