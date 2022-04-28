
function winFinder(element){
    return element.result === 'W'
}

// function superbowlWin(array){
//     let result = array.find(winFinder);
//     if (result){
//         //console.log(result);
//         return result.year;
//     }
// }

// const superbowlWin = (array) => {
//     const win = array.find( ({result}) => result === 'W');
//     return !!win ? win.year : undefined;
// }

const superbowlWin = (array) => {
    const win = array.find(() => array.result === 'W');
    return !!win ? win.year : undefined;
}


// const superbowlWin = array => {
//     let result = array.find(winFinder);
//     if (result){
//         //console.log(result);
//         return result.year;
//     }
// }

//what is being called into the function? what portion
//of the callback function is being pulled in?
//if i wanted to write the function within the superbowlwin function
//what would that look like?

//if i wanted to console.log the result values from the array, how would i do that

// function superbowlWin(array){
//     let result = function(element){
//         return element.result === 'W'
//     }
//     if (result){
//         // console.log(result);
//         return result.year;
//     }
// }

//******************************************************************//

// function superbowlWin(element){
//     return (element === 'W');
// }

// console.log(record.find(superbowlWin));