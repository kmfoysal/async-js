// Import stylesheets
import './style.css';

console.log('Hello')


const syncWithCallBack = () =>{
  for(let i=0; i<10; i++){
    console.log('looping: \t', i, '\t', new Date() )
  }
}

syncWithCallBack();

console.log('Done')

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Async Js</h1>`;