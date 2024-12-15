#Projects related to DOM

##Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

##Project1
 
```javascript
const buttons=document.querySelectorAll('.button')
// console.log(buttons)
const body=document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === "yellow") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "grey") {
      document.body.style.backgroundColor = "grey";
    } else if (e.target.id === "white") {
      document.body.style.backgroundColor = "white";
    } else if (e.target.id === "blue") {
      document.body.style.backgroundColor = "blue";
    }
  });
});


```