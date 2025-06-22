# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a word quiz application project. The repository is currently in initial setup phase.

## Environment

- Node.js version: 22.12.0 (specified in .node-version)

## Development Setup

- `npm install` - Install dependencies
- `npm start` - Start the development server (http://localhost:6080)
- `npm test` - Run tests
- `npm run build` - Build the project for production

## Architecture

食べ物の英単語クイズアプリ（React + TypeScript）

### プロジェクト構造
- `/src/components/WordQuiz.tsx` - メインクイズコンポーネント
- `/src/components/QuestionScreen.tsx` - 出題画面コンポーネント
- `/src/components/ResultScreen.tsx` - 結果表示画面コンポーネント
- `/src/components/SpeakerIcon.tsx` - 音声再生アイコンコンポーネント
- `/src/data/foods.ts` - 食べ物データと問題生成関数
- `/src/hooks/useSpeech.ts` - 音声合成カスタムフック
- `/src/types/index.ts` - TypeScript型定義
- `/src/App.tsx` - アプリケーションのルートコンポーネント
- `/src/App.css` - スタイルシート

### 主要機能
- 食べ物（果物、野菜、肉、魚、乳製品、穀物など）の絵文字を表示
- スピーカーアイコンをクリックして英単語の発音を聞く
- ユーザーの英単語入力と回答判定
- ランダムな問題出題（連続で同じ問題を避ける）
- 正解表示と次の問題への遷移（正解をクリック）

### 食べ物のカテゴリ
- 果物（apple, banana, orange など）
- 野菜（tomato, carrot, broccoli など）
- 肉・魚（chicken, fish, shrimp など）
- 乳製品・卵（cheese, egg, milk など）
- 穀物・パン（bread, rice など）
- その他（honey, peanut など）

### TypeScript型定義
```typescript
interface Food {
  name: string;
  emoji: string;
  japanese: string;
}

interface FoodWithIndex {
  food: Food;
  index: number;
}
```

## Notes

- The project uses Node.js 22.12.0
- Claude Code permissions are configured in .claude/settings.local.json


## 共通ルール
- 日本語で応対してください
