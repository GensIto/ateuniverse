export const login = (message: string, password: string) => {
  if (!sessionStorage.getItem('user')) {
    const psw = prompt(message, '');
    if (psw === password) {
      sessionStorage.setItem('user', 'login');
      window.alert('ログイン成功');
    } else {
      window.alert('ログイン失敗');
      location.replace('http://localhost:5173/');
    }
  }
};
