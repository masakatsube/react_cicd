import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // 環境に合わせて
    environment: 'jsdom', // Reactプロジェクトの場合
    
    coverage: {
      provider: 'v8', // デフォルトはc8。必要に応じて設定
      reporter: ['text', 'json', 'cobertura'], // CLIにも表示しつつ、octocov用にcoberturaを出力
    },
  },
});
