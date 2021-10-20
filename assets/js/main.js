const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tab_active = $('.tab-item.active');
const line = $('.line');

    line.style.left = tab_active.offsetLeft + 'px';
    line.style.width = tab_active.offsetWidth + 'px';

tabs.forEach((tab,index) => {
    tab.addEventListener('click',function(){
        //tabs
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');
        //panes
        const pane = panes[index]
        $('.tab-pane.active').classList.remove('active');
        pane.classList.add('active')
        //line
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    })
})