// tests/Greeting.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../src/Greeting';

// Vitestのセットアップが必要です（例：globals: true と jsdom環境）

describe('Greeting Component', () => {
  it('should display welcome message when logged in', () => {
    // ログイン済みパスのテスト
    render(<Greeting name="Masakatsu" isLoggedIn={true} />);
    
    // 期待値: Welcome back, Masakatsu! が表示されていること
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  });
  
  // 意図的にログインしていない状態のテストをコメントアウト
  // it('should prompt for login when logged out', () => {
  //   render(<Greeting name="Guest" isLoggedIn={false} />);
  //   expect(screen.getByText(/Please log in/i)).toBeInTheDocument();
  // });
});
