// src/Greeting.tsx

import React from 'react';

interface GreetingProps {
  name: string;
  isLoggedIn: boolean;
}

// ユーザー名とログイン状態に応じて挨拶を返すコンポーネント
const Greeting: React.FC<GreetingProps> = ({ name, isLoggedIn }) => {
  if (isLoggedIn) {
    // ⬇️ テストによって実行されるパス ⬇️
    return <h1>Welcome back, {name}!</h1>;
  } else {
    // ⬇️ テストによって実行されないパス ⬇️
    return <h1>Please log in to continue.</h1>;
  }
};

export default Greeting;
