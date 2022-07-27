// Make a div
const bodyElement = document.body;
const newElement = document.createElement('div')

// add a class of wrapper to it
newElement.classList.add('wrapper')
console.log(newElement)


// put it into the body
bodyElement.insertAdjacentElement('afterbegin',newElement ) 

// make an unordered list
const ourList = document.createElement('ul');
console.log(ourList)

// add three list items with the words "one, two, three" in them
    const liArr =['one', 'two', 'three']
    liArr.forEach((element)=>{
        const  ourLi=document.createElement('li');

        ourList.append(ourLi);
        ourLi.innerHTML = element;  
    })

    



// put that list into the above wrapper
newElement.insertAdjacentElement('afterbegin', ourList);


// create an image
const ourImg = document.createElement('img');

// set the source to an image
ourImg.src  = 'https://picsum.photos/id/1005/367/267'
// set the width to 250
ourImg.width = 250
// add a class of cute
ourImg.classList.add('cute')
// add an alt of Cute Puppy
ourImg.alt = ('Cute Puppy')
// Append that image to the wrapper
newElement.insertAdjacentElement('beforeend', ourImg)

// with HTML string, make a div, with two paragraphs inside of it
const newDiv = `
<div>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>
`
// put this div before the unordered list from above
ourList.insertAdjacentHTML('beforebegin', newDiv)


// add a class to the second paragraph called warning
const ourP =document.querySelectorAll('p')
ourP[1].classList.add('warning')
// remove the first paragraph
ourP[0].remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height)=>{
    return `<div class="playerCard">
      <h2>${name} — ${age}</h2>
       <p>They are ${height} and  ${age} years old. In Dog years this person would be  ${age*7}. That would be a tall dog!</p>
       <button type= 'button' class= 'btn'>Delete card</button>
    </div>`
}
console.log(generatePlayerCard)
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardD = document.createElement('div');
cardD.classList.add('cards');

// make 4 player cards using generatePlayerCard
const playCard = [
    {name: 'Marta', age: 7, height:50 },
    {name: 'Marpha', age: 13, height:25},
    {name: 'Bonya', age: 2, height:20},
    {name: 'Roky', age: 1, height:15}
]
const ourCard = playCard.map((item)=>{
    return generatePlayerCard(item.name, item.age, item.height)
}).join('')
console.log(ourCard)

// append those cards to the div
cardD.insertAdjacentHTML('afterbegin', ourCard);


// put the div into the DOM just before the wrapper element
newElement.insertAdjacentElement('beforebegin', cardD);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.btn');
// make out delete function
function handClick(event){
    const currentButton = event.currentTarget;
    
    currentButton.closest('.playerCard').remove();

}
// loop over them and attach a listener
buttons.forEach(button=>{
    button.addEventListener('click', handClick)
})