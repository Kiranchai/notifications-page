const notifications = document.querySelectorAll('.notification');
const markAllBtn = document.querySelector('.mark-all-btn');
const notificationAmount = document.querySelector('.notifications-amount');
let unreadNotifications = [...notifications].filter(notification => !notification.classList.contains('read'));

const refreshAmount = () => {
    unreadNotifications = [...notifications].filter(notification => !notification.classList.contains('read'));
    notificationAmount.textContent = unreadNotifications.length;
}

notifications.forEach(notification => {
    notification.addEventListener('click' , e => {
        if (!notification.classList.contains('read')){
            notification.classList.add('read');
            
            refreshAmount();
        }
    })
})

markAllBtn.addEventListener('click', e => {
    unreadNotifications.forEach(notification => {
        notification.classList.add('read');
        refreshAmount();
    })
})
