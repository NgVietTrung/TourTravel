const burgerBtn = document.querySelector('.burger-bar');
const closeBtn = document.querySelector('.mobile-close');
const mobileNav = document.querySelector('.mobile-nav');

// Header
burgerBtn.onclick = () => {
    mobileNav.style.transform = 'translateX(0)';
}

closeBtn.onclick = () => {
    mobileNav.style.transform = 'translateX(100%)';
}

// Banner Search 
const tabs = document.querySelectorAll('.banner-tabs__item');
const contents = document.querySelectorAll('.banner-content');

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        const content = contents[index];

        const activeTab = document.querySelector('.banner--active');
        const activeContent = document.querySelector('.banner-content--active');

        activeTab.classList.remove("banner--active");
        activeContent.classList.remove("banner-content--active");

        tab.classList.add("banner--active");
        content.classList.add("banner-content--active");
    }
})

/* Packages */
const tabPacks = document.querySelectorAll('.packages__tabs-item');
const contentPacks = document.querySelectorAll('.packages__content');

tabPacks.forEach((tabPacks, index) => {
    tabPacks.onclick = () => {
        const content = contentPacks[index];

        const activeTab = document.querySelector('.packages__tabs-item--active');
        const activeContent = document.querySelector('.packages__content--active');

        activeTab.classList.remove("packages__tabs-item--active");
        activeContent.classList.remove("packages__content--active");

        tabPacks.classList.add("packages__tabs-item--active");
        content.classList.add("packages__content--active");
    }
})
