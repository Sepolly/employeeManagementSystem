const sideBarLinks = document.querySelectorAll('.sidebar__links');

document.addEventListener('DOMContentLoaded',()=>{
    sideBarLinks.forEach(element => {
        if(element.textContent.toLowerCase() == pathName(window.location.pathname)){
            element.classList.add('active__link');
        }
    });
})


function pathName(path){
    let part1 = path.split('/');
    let part2 = part1[1].split('.');

    return part2[0];
}