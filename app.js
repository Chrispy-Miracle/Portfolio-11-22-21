
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const width = window.innerWidth;
    const pic = document.querySelector('#profile-pic');
    const guru = document.querySelector('#guru');
    
    console.log(width);
    // const screenCheck = () =>{
        
    //     //slide pic to right
    //     i
    // }

    const slide = ()=> {
        // toggle nav
        nav.classList.toggle('nav-active');
    
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation= '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .7}s`;
            }
        
    });
    
    // burger animation
    burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', ()=> {
        if (width <= 475){
            pic.classList.toggle('pic-active');
            guru.classList.toggle('pic-active');
        } 
        slide();        
    });

    nav.addEventListener('click', ()=>{
        if (width <= 475){
            pic.classList.toggle('pic-active');
            guru.classList.toggle('pic-active');
        }
        slide();
        
        
    
    
        

        });
    
}


navSlide();