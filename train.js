// toogle nav popup

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

// tabs list

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
    })

    tabs.forEach(tab => {
        tab.classList.remove('active');
})

     tab.classList.add('active');
     target.classList.add('active');
    })
});

// 1st tab

const tabone = document.querySelectorAll('[data-tab-targetone]')
const tabContentone = document.querySelectorAll('[data-tab-contentone]')


tabone.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTargetone)
        tabContentone.forEach(tabContent => {
            tabContent.classList.remove('active');
    })

    tabone.forEach(tab => {
        tab.classList.remove('active');
})

     tab.classList.add('active');
     target.classList.add('active');
    })
});

