// 个人中心页面交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    
    if(!isLoggedIn || isLoggedIn !== 'true') {
        alert('请先登录');
        window.location.href = 'login.html';
        return;
    }
    
    if(username) {
        document.getElementById('displayUsername').textContent = username;
        document.getElementById('editUsername').value = username;
    }
    
    const email = localStorage.getItem('userEmail') || '';
    const bio = localStorage.getItem('userBio') || '';
    
    document.getElementById('displayEmail').textContent = email || '未填写邮箱';
    document.getElementById('editEmail').value = email;
    
    document.getElementById('displayBio').textContent = bio || '这个人很懒，什么都没有写';
    document.getElementById('editBio').value = bio;
    
    bindEvents();
});


// ... existing code ...
function bindEvents() {
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if(confirm('确定要退出登录吗？')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userBio');
                showToast('已退出登录', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            }
        });
    }
    
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    if(saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function() {
            const newUsername = document.getElementById('editUsername').value;
            const email = document.getElementById('editEmail').value;
            const bio = document.getElementById('editBio').value;
            
            if(newUsername) {
                localStorage.setItem('username', newUsername);
                document.getElementById('displayUsername').textContent = newUsername;
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userBio', bio);
                
                document.getElementById('displayEmail').textContent = email || '未填写邮箱';
                document.getElementById('displayBio').textContent = bio || '这个人很懒，什么都没有写';
                
                const modalEl = document.getElementById('editProfileModal');
                const modal = bootstrap.Modal.getInstance(modalEl);
                if(modal) {
                    modal.hide();
                } else {
                    const newModal = new bootstrap.Modal(modalEl);
                    newModal.hide();
                }
                
                showToast('资料保存成功！', 'success');
            } else {
                showToast('用户名不能为空', 'error');
            }
        });
    }
}


function continueLearning(courseName) {
    showToast(`正在继续学习 ${courseName}`, 'info');
    setTimeout(() => {
        window.location.href = 'study-detail.html';
    }, 1000);
}

function viewProject(projectId) {
    showToast(`正在查看项目`, 'info');
    setTimeout(() => {
        window.location.href = `project-detail.html?id=${projectId}`;
    }, 1000);
}

function editProject(projectName) {
    showToast(`正在编辑项目 ${projectName}`, 'info');
    setTimeout(() => {
        window.location.href = 'project-up.html';
    }, 1000);
}

function showToast(message, type = 'info') {
    const toastEl = document.getElementById('customToast');
    const toastBody = document.getElementById('toastMessage');
    
    toastBody.textContent = message;
    
    const header = toastEl.querySelector('.toast-header');
    if (type === 'success') {
        header.className = 'toast-header bg-success text-white';
    } else if (type === 'error') {
        header.className = 'toast-header bg-danger text-white';
    } else if (type === 'warning') {
        header.className = 'toast-header bg-warning text-dark';
    } else {
        header.className = 'toast-header bg-primary text-white';
    }
    
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

