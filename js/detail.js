const headerEl = document.querySelector('.page__header')
const logoutBtn = document.querySelector('.page__header__button')
const photoDialog = document.querySelector('.page__dialog')
const widgetPhoto = document.querySelector('.page__body__widget.photo')
const closeBtn = document.querySelector('.section-left__header__button.red')

// ------------------------------------------------------------------------------------------

const back = () => {
    location.href = 'index.html'
}

widgetPhoto.addEventListener('click', () => {
    photoDialog.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    photoDialog.classList.remove('active')
})

// ------------------------------------------------------------------------------------------
logoutBtn.addEventListener('click', () => {
    location.href = 'index.html'
})

// ------------------------------------------------------------------------------------------
const buttons = document.querySelectorAll('[data-action]'); // 모든 버튼을 선택

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]').getAttribute('data-action');
        
        // 해당 버튼에 맞는 알림 메시지 표시
        if (action === 'resume' || action === 'email' || action === 'portfolio') {
            alert('학습 부족으로, 아직 구현되지 않았습니다. \n우측 하단의 확인 버튼을 눌러서 창을 닫아주세요 \n--Jack 올림--');
        }

        // 다이얼로그 열기
        const dialog = document.querySelector('.page__empty__dialog');
        dialog.classList.add('active');
    });
});

// 닫기 버튼 클릭 시 다이얼로그 닫기
const closeDialogBtn = document.querySelector('.section-empty-main');
closeDialogBtn.addEventListener('click', () => {
    const dialog = document.querySelector('.page__empty__dialog');
    dialog.classList.remove('active');
});
