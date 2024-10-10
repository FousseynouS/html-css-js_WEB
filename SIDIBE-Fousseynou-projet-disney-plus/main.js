const faqs = document.querySelectorAll('.accordion')
const menus = document.querySelectorAll(".footer-accordion")



faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle("active");
    })
})

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("show");
    })
})
