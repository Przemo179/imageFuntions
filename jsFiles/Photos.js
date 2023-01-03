const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
//let lastScrollTop = 0;

// moving menu bar
function fixNav()   {
//    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if(window.scrollY >= topOfNav)  {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        // if(currentScroll<lastScrollTop){
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        // document.body.classList.add('fixed-nav');
        // } else {
        //     document.body.classList.remove('fixed-nav');
        // }
        // lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    } else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

// popup Text

const textOverImages = document.querySelectorAll('.HorizontalScrollingImgMeasurements div');
textOverImages.forEach(textOverImage => textOverImage.addEventListener('click', popupText));

function popupText()    {
    this.classList.toggle("show");
}



// horizontal click and drag

const slider = document.querySelector('.ScrollingImages');

let isDown = false; // checking if keymouse is down or not
let startX;
let ScrollLeft;

slider.addEventListener('mousedown', (e)=>{
    isDown = true;
    console.log(e.pageX);
    console.log(slider.offsetLeft);
    startX =  e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseup', () => isDown = false);

slider.addEventListener('mouseleave', () => isDown = false);

slider.addEventListener('mousemove', (e)=> {
    if(!isDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x-startX)/5;

    slider.scrollLeft = slider.scrollLeft - walk;
})


// editing img

const image_input = document.querySelector("#image_input");
let uploaded_image = "";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

// choose img

const cat_img= document.getElementById('chooseImg_checkbox1');
const weirdFox_img= document.getElementById('chooseImg_checkbox2');
const lizard_img= document.getElementById('chooseImg_checkbox3');

const cat_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/800px-Red_Kitten_01.jpg";
const weirdFox_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Stoned_Fox_.jpg/599px-Stoned_Fox_.jpg";
const lizard_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gold_Dust_Day_Gecko_closeup_hawaii_edit_1.jpg/600px-Gold_Dust_Day_Gecko_closeup_hawaii_edit_1.jpg";


cat_img.addEventListener('change', function() {
    if(cat_img.checked == true) {
        console.log('hej');
        document.querySelector('.display_image').style.backgroundImage = `url(${cat_url})`;
    } else {
        document.querySelector('.display_image').style.backgroundImage = 'none';
    }
});

weirdFox_img.addEventListener('change', function() {
    if(weirdFox_img.checked == true) {
        document.querySelector('.display_image').style.backgroundImage = `url(${weirdFox_url})`;
    } else {
        document.querySelector('.display_image').style.backgroundImage = 'none';
    }
});

lizard_img.addEventListener('change', function() {
    if(lizard_img.checked == true) {
        document.querySelector('.display_image').style.backgroundImage = `url(${lizard_url})`;
    } else {
        document.querySelector('.display_image').style.backgroundImage = 'none';
    }
});

// changing 
