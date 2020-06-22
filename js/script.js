const btnPrimary = $('.btn-primary'); 
const btnSecondary = $('.btn-secondary'); 
const btnThird = $('.btn-third'); 
let currentProgress = 0;

const width = 0;

btnPrimary.click(function() {
    let width=$(".progress-bar").attr("width");
    currentProgress = currentProgress + 1;
    $(".progress-bar").attr("style", "width: " + currentProgress + "%");
    console.log('currentProgress = ', currentProgress);
})

btnSecondary.click(function() {
    console.log('currentProgress = ', currentProgress); 
    currentProgress = currentProgress + 3;
    
    $(".progress-bar").attr("style", "width: " + currentProgress + "%");
})

btnThird.click(function() {
    console.log('currentProgress = ', currentProgress);
    currentProgress = currentProgress + 7;
    
    $(".progress-bar").attr("style", "width: " + currentProgress + "%");
})


$('.progress-bar').width(currentProgress + "%");


// let elem = document.getElementById("myBar"); // не разобрался как сделать изменения в самой панели
//     elem.style.width = currentProgress + '%';
// document.getElementById("label").innerHTML = width*1 +'%';

// console.log('btnPrimary', btnPrimary); 
// console.log('btnSecondary', btnSecondary); 
// console.log('btnThird', btnThird); 
// console.log(label);

// $('.progress-bar').width((Math.random() * 100) + '%')
