
/**
 * New Goals
 * Extension Idea: Angry professors show up whenever you switch tabs to make sure you're still focused on becoming SWE.

(lunch 1hour)
 * [] Iterate through instructor faces
 * [] changing the text on the bubble (in the am)
 * [] Fix scroll bug
 * [] add pseudo code 
 * 
 * Stretch
 * [] Only show up when not on productive sites ~ 1hr
 * [] Every time tabs are switched make a sound?
 * [] Optimize image movement (currently real laggy)
 * [] Currently the curser is gone and we just have the img follow the position of the invisible cursor
 *    -> would like to have the cursor BE the img. 
 */

// Setting up the cursor
const body = document.querySelector('body');
const cursorSrc = 'https://i.imgur.com/hlOtvGY.png';
const cursor = document.createElement('img');
cursor.setAttribute('src', cursorSrc);
cursor.style.height = '100px';
cursor.style.width = 'auto';
cursor.style.zIndex = '7';
cursor.style.position = 'absolute';
body.style.cursor = 'none';
body.appendChild(cursor);

// track positions of the mouse, and make the image move with the mouse. 
const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.top = `${mouseY}px`;
  cursor.style.left = `${mouseX}px`;
 
}

window.addEventListener('mousemove', moveCursor);

// document.querySelector('body').style.cursor = 'url(https://i.imgur.com/hlOtvGY.png)';

// const cursor = chrome.runtime.getURL('/faces/angry_ben.jpg');
// const elems = document.body.getElementsByTagName("*");
//   for(const i of elems){
//     i.style.cursor = "url(" + cursor + "), default";
// }


// const angryProfessors = ['https://i.imgur.com/hlOtvGY.png', 'https://i.imgur.com/gg1XNbo.png', 'https://i.imgur.com/Qs3x9xk.png ' ]
// let currentProf = angryProfessors[0];
// for (let i = 0; i < )
// iterate through the images 
// and change the cursor 


// https://i.imgur.com/hlOtvGY.png -- Angry Ben
// https://i.imgur.com/gg1XNbo.png -- Angry Matt
// https://i.imgur.com/Qs3x9xk.png -- Angry Stanley 
// declare a variable storing all the acceptable websites 
//   const accepted = [
//     'developer.mozilla',
//     'github',
//     'calendar.google',
//     'w3schools'
//   ];
//   if ((document.URL).includes(accepted)) {
//     alert('Hello World!');
//     const body = document.querySelector('body');
//     body.style.cursor = 'no-drop';
//   }
// });

/* within this file
[] identify when someone leaves any of the "acceptable" websites
[] randomly select instructor 
*/
