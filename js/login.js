document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // 登录提交
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取输入值
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // 简单验证
        if (!username || !password) {
            alert('请输入用户名和密码');
            return;
        }
        
        // 模拟登录成功
        console.log('登录提交');
        console.log('用户名:', username);
        
        // 存储登录状态
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // 跳转到学习资源页面
        window.location.href = 'study.html';
    });
});