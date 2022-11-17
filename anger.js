
/**
 * New Goals
 * Extension Idea: Angry professors show up whenever you switch tabs to make sure you're still focused on becoming SWE.

(lunch 1hour)
 * [done] Iterate through instructor faces
 * [done] changing the text on the bubble (in the am)
 * 
 * Stretch
 * [done] Only show up when not on productive sites ~ 1hr
 * [] Every time tabs are switched make a sound?
 * [] Optimize image movement (currently real laggy)
 * [] Currently the curser is gone and we just have the img follow the position of the invisible cursor
 * [] Fix scroll bug
 * [] add Readme.md
 *    -> would like to have the cursor BE the img. 
 */

// get the current tabs title element. check to see if it it includes Coding, GitHub, LeetCode, MDN, Calendar, 

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

const allAngryTeachers = [
  'https://i.imgur.com/xiG22Yw.png',
  'https://i.imgur.com/vFVfddo.png',
  'https://i.imgur.com/xB7QEbs.png',
  'https://i.imgur.com/ut5Z65t.png',
  'https://i.imgur.com/5QOVBK2.png',
  'https://i.imgur.com/GsXFUkf.png',
  'https://i.imgur.com/68lSEC3.png',
  'https://i.imgur.com/fzLtKY3.png',
];

const body = document.querySelector('body');
const cursorSrc = allAngryTeachers[Math.floor(Math.random() * 7)];
const cursor = document.createElement('img');

// Setting cursor CSS styling and image source
cursor.setAttribute('src', cursorSrc);
cursor.style.height = '200px';
cursor.style.width = 'auto';
cursor.style.zIndex = '7';
cursor.style.position = 'absolute';
body.style.cursor = 'none';

// adding the cursor to the body of the html doc
body.appendChild(cursor);

// track positions of the mouse, and make the image move with the mouse. 
const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
    
  cursor.style.top = `${mouseY}px`;
  cursor.style.left = `${mouseX}px`;
}

window.addEventListener('mousemove', moveCursor);
