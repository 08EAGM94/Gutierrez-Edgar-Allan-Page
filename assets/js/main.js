document.addEventListener("DOMContentLoaded", () =>{

    //---------------------constenates----------------------------------
    const headerNav = document.querySelector(".main-header__nav");
    const chevronBtn = document.querySelector(".main-header__mobile-nav-btn-wrapper");
    const navLinks = document.querySelectorAll(".main-header__link");
    const mobileNavLinks = document.querySelectorAll(".mobile-menu__link");
    const mobileMenu = document.querySelector(".mobile-menu");
    const webPageImgs = document.querySelectorAll(".web-page__image");
    const zoomInBackWindow = document.querySelector(".zoom-in-img-backwindow ");
    const zoomImgZone = document.querySelector(".zoom-in-img-backwindow__img-wrapper");
    const imageCloseBtn = document.querySelector(".zoom-in-img-backwindow__close-btn");
    const webPageSections = document.querySelectorAll(".main-content__section-wrapper");
    //---------------------constenates----------------------------------
    
    //----------------------valores-por-defecto------------------------

    navLinks[0].classList.add("laboral-exp-selection");
    mobileNavLinks[0].classList.add("mobile-selection");
    webPageSections[0].classList.remove("hide");

    //----------------------valores-por-defecto------------------------
    
    //----------------------eventos-------------------------------------
    window.addEventListener("resize", () =>{
        
        if(window.innerWidth <= 880){
            headerNav.classList.add("hide");
            chevronBtn.classList.remove("hide");
        }else{
            
            headerNav.classList.remove("hide");
            chevronBtn.classList.add("hide");
            if(chevronBtn.firstElementChild.className.includes("mobile-nav-btn-wrapper__chevron--up")) chevronBtn.innerHTML = `<img class="mobile-nav-btn-wrapper__chevron--down" src="assets/img/down.png"/>`; 
            
            if(mobileMenu.className.includes("menu-show")){
                mobileMenu.classList.remove("menu-show");
                mobileMenu.classList.add("menu-hide");
                setTimeout(()=>{
                    mobileMenu.classList.remove("menu-hide");
                    mobileMenu.classList.add("hide");
                    mobileMenu.style.top = "15px";
                }, 200);
            }
        }
       
    });

    if(window.innerWidth <= 880){
        headerNav.classList.add("hide");
        chevronBtn.classList.remove("hide");
    }

    chevronBtn.addEventListener("click", (e)=>{
         if(chevronBtn.firstElementChild.className.includes("mobile-nav-btn-wrapper__chevron--down")){
            chevronBtn.innerHTML = `<img class="mobile-nav-btn-wrapper__chevron--up" src="assets/img/up.png"/>`;
            mobileMenu.classList.remove("hide");
            mobileMenu.classList.add("menu-show");
            setTimeout(()=>{
                mobileMenu.style.top = "144px";
            }, 250);
         }else{
            chevronBtn.innerHTML = `<img class="mobile-nav-btn-wrapper__chevron--down" src="assets/img/down.png"/>`;
            mobileMenu.classList.remove("menu-show");
            mobileMenu.classList.add("menu-hide");
            setTimeout(()=>{
                mobileMenu.classList.remove("menu-hide");
                mobileMenu.classList.add("hide");
                mobileMenu.style.top = "15px";
            }, 200);
         }
    });

    navLinks.forEach(navLink =>{
        navLink.addEventListener("click", () =>{

            if(navLink.id === "laboralExp"){
                if(navLinks[1].className.includes("education-selection")) navLinks[1].classList.remove("education-selection");
                if(navLinks[2].className.includes("portfolio-selection")) navLinks[2].classList.remove("portfolio-selection");
                if(mobileNavLinks[1].className.includes("mobile-selection")) mobileNavLinks[1].classList.remove("mobile-selection");
                if(mobileNavLinks[2].className.includes("mobile-selection")) mobileNavLinks[2].classList.remove("mobile-selection");

                if(!navLink.className.includes("laboral-exp-selection")) navLink.classList.add("laboral-exp-selection");
                if(!mobileNavLinks[0].className.includes("mobile-selection")) mobileNavLinks[0].classList.add("mobile-selection");

                if(!webPageSections[1].className.includes("hide")) webPageSections[1].classList.add("hide");
                if(!webPageSections[2].className.includes("hide")) webPageSections[2].classList.add("hide");
                if(webPageSections[0].className.includes("hide")) webPageSections[0].classList.remove("hide");
            }

            if(navLink.id === "education"){
                if(navLinks[0].className.includes("laboral-exp-selection")) navLinks[0].classList.remove("laboral-exp-selection");
                if(navLinks[2].className.includes("portfolio-selection")) navLinks[2].classList.remove("portfolio-selection");
                if(mobileNavLinks[0].className.includes("mobile-selection")) mobileNavLinks[0].classList.remove("mobile-selection");
                if(mobileNavLinks[2].className.includes("mobile-selection")) mobileNavLinks[2].classList.remove("mobile-selection");

                if(!navLink.className.includes("education-selection")) navLink.classList.add("education-selection");
                if(!mobileNavLinks[1].className.includes("mobile-selection")) mobileNavLinks[1].classList.add("mobile-selection");

                if(!webPageSections[0].className.includes("hide")) webPageSections[0].classList.add("hide");
                if(!webPageSections[2].className.includes("hide")) webPageSections[2].classList.add("hide");
                if(webPageSections[1].className.includes("hide")) webPageSections[1].classList.remove("hide");
            }

            if(navLink.id === "portfolio"){
                if(navLinks[0].className.includes("laboral-exp-selection")) navLinks[0].classList.remove("laboral-exp-selection");
                if(navLinks[1].className.includes("education-selection")) navLinks[1].classList.remove("education-selection");
                if(mobileNavLinks[0].className.includes("mobile-selection")) mobileNavLinks[0].classList.remove("mobile-selection");
                if(mobileNavLinks[1].className.includes("mobile-selection")) mobileNavLinks[1].classList.remove("mobile-selection");

                if(!navLink.className.includes("portfolio-selection")) navLink.classList.add("portfolio-selection");
                if(!mobileNavLinks[2].className.includes("mobile-selection")) mobileNavLinks[2].classList.add("mobile-selection");

                if(!webPageSections[0].className.includes("hide")) webPageSections[0].classList.add("hide");
                if(!webPageSections[1].className.includes("hide")) webPageSections[1].classList.add("hide");
                if(webPageSections[2].className.includes("hide")) webPageSections[2].classList.remove("hide");
            }
        });
    });

    mobileNavLinks.forEach(mobileLinks =>{
        mobileLinks.addEventListener("click", ()=>{
            if(mobileLinks.id === "mobileLaboral"){
                if(navLinks[1].className.includes("education-selection")) navLinks[1].classList.remove("education-selection");
                if(navLinks[2].className.includes("portfolio-selection")) navLinks[2].classList.remove("portfolio-selection");
                if(mobileNavLinks[1].className.includes("mobile-selection")) mobileNavLinks[1].classList.remove("mobile-selection");
                if(mobileNavLinks[2].className.includes("mobile-selection")) mobileNavLinks[2].classList.remove("mobile-selection");

                if(!mobileLinks.className.includes("mobile-selection")) mobileLinks.classList.add("mobile-selection");
                if(!navLinks[0].className.includes("laboral-exp-selection")) navLinks[0].classList.add("laboral-exp-selection");

                if(!webPageSections[1].className.includes("hide")) webPageSections[1].classList.add("hide");
                if(!webPageSections[2].className.includes("hide")) webPageSections[2].classList.add("hide");
                if(webPageSections[0].className.includes("hide")) webPageSections[0].classList.remove("hide");
            }

            if(mobileLinks.id === "mobileEducation"){
                if(navLinks[0].className.includes("laboral-exp-selection")) navLinks[0].classList.remove("laboral-exp-selection");
                if(navLinks[2].className.includes("portfolio-selection")) navLinks[2].classList.remove("portfolio-selection");
                if(mobileNavLinks[0].className.includes("mobile-selection")) mobileNavLinks[0].classList.remove("mobile-selection");
                if(mobileNavLinks[2].className.includes("mobile-selection")) mobileNavLinks[2].classList.remove("mobile-selection");

                if(!mobileLinks.className.includes("mobile-selection")) mobileLinks.classList.add("mobile-selection");
                if(!navLinks[1].className.includes("education-selection")) navLinks[1].classList.add("education-selection");

                if(!webPageSections[0].className.includes("hide")) webPageSections[0].classList.add("hide");
                if(!webPageSections[2].className.includes("hide")) webPageSections[2].classList.add("hide");
                if(webPageSections[1].className.includes("hide")) webPageSections[1].classList.remove("hide");
            }

            if(mobileLinks.id === "mobilePortfolio"){
                if(navLinks[0].className.includes("laboral-exp-selection")) navLinks[0].classList.remove("laboral-exp-selection");
                if(navLinks[1].className.includes("education-selection")) navLinks[1].classList.remove("education-selection");
                if(mobileNavLinks[0].className.includes("mobile-selection")) mobileNavLinks[0].classList.remove("mobile-selection");
                if(mobileNavLinks[1].className.includes("mobile-selection")) mobileNavLinks[1].classList.remove("mobile-selection");

                if(!mobileLinks.className.includes("mobile-selection")) mobileLinks.classList.add("mobile-selection");
                if(!navLinks[2].className.includes("portfolio-selection")) navLinks[2].classList.add("portfolio-selection");

                if(!webPageSections[0].className.includes("hide")) webPageSections[0].classList.add("hide");
                if(!webPageSections[1].className.includes("hide")) webPageSections[1].classList.add("hide");
                if(webPageSections[2].className.includes("hide")) webPageSections[2].classList.remove("hide");
            }
        });
    });

    webPageImgs.forEach(img =>{
        img.addEventListener("click", ()=>{
            zoomImgZone.innerHTML = `<img style="max-width: ${img.naturalWidth}px; margin: auto;" src="${img.getAttribute('src')}" width="${img.naturalWidth}" height="${img.naturalHeight}"/>`;
            zoomInBackWindow.classList.remove("hide");
            zoomImgZone.classList.add("zoom-in");
        });
    });

    imageCloseBtn.addEventListener("click", ()=>{
        imageCloseBtn.classList.add("disable-img-close-btn");
        zoomImgZone.classList.remove("zoom-in");
        zoomImgZone.classList.add("zoom-exit");
        setTimeout(()=>{
            zoomImgZone.innerHTML = "";
            zoomImgZone.classList.remove("zoom-exit");
            zoomInBackWindow.classList.add("hide");
            imageCloseBtn.classList.remove("disable-img-close-btn");
        }, 200);
    });

    //----------------------eventos-------------------------------------
    
});