import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 環境に合わせて
    environment: 'jsdom', // Reactプロジェクトの場合
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'c8', // デフォルトはc8。必要に応じて設定
      reporter: ['text', 'json', 'cobertura'], // CLIにも表示しつつ、octocov用にcoberturaを出力
    },
  },
});
