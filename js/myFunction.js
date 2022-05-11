const pText1 = document.querySelector('.first-para');
const pText2 = document.querySelector('.second-para');

const textArr1 = 'Yummy Delicious Useful Coding Yummy Yummmy Yummmmmmmmmy yum'.split(' ');
const textArr2 = 'Chicken Hamburger Pizza Salad Sushi Bibimbab Gimbab JJajangmyeon'.split(' ');

function initTexts(element, textArray){
    textArray.push(...textArray);
    for(let i=0; i<textArray.length; i++){
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
}
initTexts(pText1, textArr1);
initTexts(pText2, textArr2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction){
    if(count > element.scrollWidth / 2){
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate(){
    count1++;
    count2++;

    marqueeText(count1, pText1, -1);
    marqueeText(count2, pText2, 1);

    window.requestAnimationFrame(animate);
}
animate();

window.addEventListener('scroll',()=>{
    count1 += 15;
    count2 += 15;
})