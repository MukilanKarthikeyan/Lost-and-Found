document.addEventListener("DOMContentLoaded", function(e) {
    
    const scrollers = Array.from(document.querySelectorAll(".scroller"));


    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        console.log("its working");
        
        
        console.log(scrollers);
        addAnimation();
    }

    function addAnimation() {
        for (let i = 0; i < scrollers.length; i++) {
            console.log(i);
            scrollers[i].setAttribute("data-animated", true);
            let scroll_inside = scrollers[i].querySelector(".scroller_inner");
            console.log(scroll_inside);
            //static array does not change if DOM is changed
            let content = Array.from(scroll_inside.children);

            
            
            content.forEach(node => {
                let duplicate = node.cloneNode(true);
                // hide it from screen readers
                duplicate.setAttribute("aria-hidden", true);
                scroll_inside.appendChild(duplicate);

            });
            

        }
    }
});
