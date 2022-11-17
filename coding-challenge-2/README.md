# Coding Challenge 2

Classmethod CX アーキテクトチームによるReact学習用の教材です。

## イントロ

ある架空のクライアントから、現在地の天気予報が表示できるアプリケーションを作るよう依頼されました。現在地の取得とともに8時間の予想気温、7日間の天気予報を取得し表示する必要があります。このアプリケーションは[Google Maps](https://developers.google.com/maps/documentation)と[OpenWeather](https://openweathermap.org)のAPIを使用して構成する予定です。

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
  - [OpenWeather API](https://openweathermap.org/api)
  - [Google Maps API](https://developers.google.com/maps/documentation)
2. 初期画面としてHTML5のLocationAPIを利用して現在地を取得する必要があります。（会社支給のPCでは現在地の取得ができないため初期位置がでる形で問題ありません）
3. 取得した現在地情報をもとに現在地の天気予報を取得する必要があります
4. 住所で検索した場所の地図と天気予報を表示する必要があります
5. 8時間の予想気温はグラフを利用して表示する必要があります

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

![125216126-25dded00-e2f8-11eb-8c4f-9f8820b5c1a2](https://user-images.githubusercontent.com/71954454/201236023-8580338e-1c35-4318-890d-9c1966d553be.png)

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
