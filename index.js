fetch('http://localhost:3000/menu')
.then (resp => resp.json())
.then (data => {
    renderTheMenu(data);
    renderDetails(data[0]);
    hookUpTheCartAction();
    //create a function for default that passes data[0]
})


function renderTheMenu(data) {
    // target the holder 
    let holder = document.querySelector('#menu-items');
    // create a for each 
    data.forEach(item => {
        let individual = document.createElement('span');
        individual.innerText = item.name;
        individual.addEventListener('click', (event)=> {
            renderDetails(item)
            // question for BRANDON how does render
            // the details know to work with the item that 
            // was click info. I know how to do it but want to talk it over
        })

        // create a span 
        // make the span content say item.name
        // append
        holder.appendChild(individual);
        
    });
}

function renderDetails (item) {
    // image , name , description, price 
    let image = document.querySelector('#dish-image')
    image.src = item.image;

    let name = document.querySelector('#dish-name')
    name.innerText = item.name;

    let description = document.querySelector('#dish-description')
    description.innerText = item.description;

    let price = document.querySelector('#dish-price')
    price.innerText = item.price;

    let numberInCart = document.querySelector('#number-in-cart');
    numberInCart.innerText = item.number_in_bag;
    Number.parseInt(numberInCart.innerHTML);
    // gotta be a simple solution 

    console.log(typeof numberInCart.innerHTML);
}

function hookUpTheCartAction () {
    
    let submitForm = document.querySelector('#cart-form')
    let numberInCart = document.querySelector('#number-in-cart');
    let adder = document.querySelector('#cart-amount');

   


    submitForm.addEventListener('submit',(event) => {
        event.preventDefault();
        // console.log(numberInCart);
        // parseInt(adder.value);
         let parsedInputNumber = parseInt(adder.value);
         let parsedCurrentNumber = parseInt(numberInCart)
       
    
        console.log(typeof parsedInputNumber);
        console.log(typeof parsedCurrentNumber);
        console.log(parsedInputNumber);

        // console.log(typeof adder.value);
        
        
        // numberInCart.innerText = numberInCart
        parsedCurrentNumber += parsedInputNumber;

    })
  // event listener to form
    // execute update value of input to the 0
}

// var text = '42px';
// var integer = parseInt(text, 10);
// returns 42




// ## Challenge #4
// The user should be able to add the menu items to their cart.
//  When the user presses the 'Add to Cart' button, that number should be
//   added to however many are currently in the cart.