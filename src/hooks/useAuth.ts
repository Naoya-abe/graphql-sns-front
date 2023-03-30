// hooks/useAuth.ts

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface UseAuthOptions {
  requireAuth?: boolean;
}

const useAuth = ({ requireAuth = true }: UseAuthOptions) => {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    // クライアントサイドでログイン状態をチェック
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isSignedIn === null) {
      return; // ログイン状態がまだチェックされていない場合、何もしない
    }
    if (requireAuth && !isSignedIn) {
      // ログインしている状態でしか表示できないページにログインしていない状態でアクセスしようとしている
      router.push('/signin');
    } else if (!requireAuth && isSignedIn) {
      // ログインしていない状態でしか表示できないページにログインしている状態でアクセスしようとしている
      router.push('/home');
    }
  }, [isSignedIn, requireAuth, router]);

  return { isSignedIn };
};

export default useAuth;
