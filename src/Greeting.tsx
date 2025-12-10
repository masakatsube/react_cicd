// src/Greeting.tsx

import React from 'react';

interface GreetingProps {
  name: string;
  isLoggedIn: boolean;
}

// ユーザー名とログイン状態に応じて挨拶を返すコンポーネント
const Greeting: React.FC<GreetingProps> = ({ name, isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome back, {name}!</h1>;
  }
  
  if (name === 'Admin') {
    return <h2>Admin login detected.</h2>; // 👈 変更行 (未テスト)
  }
  else {
    return <h1>Please log in to continue.</h1>;
  }
};

export default Greeting;
