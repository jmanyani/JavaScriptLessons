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

##Project 2
```javascript
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)

const result=document.querySelector('#results')
const category=document.querySelector('#category_result')

if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid weight ${weight}`;
} else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
  if(bmi<18.6){
    category.innerHTML='<span>Under Weight !</span>';
  }else if (bmi>=18.6 && bmi<=24.9){
    category.innerHTML='<span>Normal Range !</span>';
  }else{
    category.innerHTML='<span>Over Weight !</span>';
  }
}

});

```
##Project 3
```javascript
const clock=document.getElementById('clock');
setInterval(function(){

let date=new Date();
clock.innerHTML=`${date.toLocaleTimeString()}`;
},1000);

```

##project 4
```javascript



```