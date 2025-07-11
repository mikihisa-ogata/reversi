# オセロアプリ

このプロジェクトは、Vue.js を使用して構築されたシンプルなオセロゲームです。プレイヤー同士でオセロを楽しむことができます。

## プロジェクト構成

- `src/components/Board.vue`: オセロの盤面を描画し、ゲームの状態を管理する Vue コンポーネント。
- `src/App.vue`: アプリケーションのルートコンポーネントで、`Board` コンポーネントを含みます。
- `src/main.js`: アプリケーションのエントリーポイントで、Vue インスタンスを作成し、`App` コンポーネントをマウントします。
- `public/index.html`: アプリケーションの HTML テンプレートで、Vue アプリケーションがマウントされる `<div id="app"></div>` を含みます。
- `package.json`: プロジェクトの依存関係とスクリプトを定義する npm 設定ファイル。

## Setup Instructions

To set up the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd othello-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run serve
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` to see the application in action.

## Features

- Play Othello against another player.
- Interactive board with real-time updates.
- Simple and intuitive user interface.

## License

This project is licensed under the MIT License.