let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.reset');

let turn0=true;//player X

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];