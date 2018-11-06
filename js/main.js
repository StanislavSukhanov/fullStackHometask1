window.addEventListener('load', function() {

  //----- Секция исходных данных ---------------------------

  var burger = document.querySelector(".burger");
  var clos = document.querySelector(".form-close");
  var bur = document.getElementById('br');
  var successMessageShow = document.querySelector(".burger-success");
  var closeSuccessMessage = document.querySelector(".close-success");

  // geting a value from the burger form

  var submitButton = document.getElementById("submit-button");  



  //------ Секция логики ---------------------------

  function checkFormValue(){
    // get element
    var burgerData = document.getElementById("burger-form-value");

    // check if input field contain any data
    if (burgerData.elements[0].value.length != 0){

      // contain => we get a burger element, and remove CSS class 
      var elementToRemove = document.getElementsByClassName("burger");
      elementToRemove[0].classList.remove("burger-show");

      successMessageShow.classList.add('burger-show');

    } else {
      // change border-color of input field to red and adding new Span element with error errorMessage 
      // if form containg "no-value class, we simply return"
      if (burgerData.elements[0].classList.contains("no-value")){
        return; 
      }
      // main logic 
      burgerData.elements[0].classList.add("no-value");
      var errorMessage = document.createElement("span");
      errorMessage.innerHTML = "Oops! this value can't be blank :(";
      errorMessage.classList.add("no-value");
      // appendChild adds the end of a node list  / prepend adds node to top 
      burgerData.prepend(errorMessage); 
    }
  }

  function openForm() {

    burger.classList.add('burger-show');

  }

  function closeForm() {

    burger.classList.remove('burger-show');
    

  }

  function closeSuccess(){
    successMessageShow.classList.remove("burger-show");
    console.log('action');
  }



  function toggleForm() {

    if (burger.classList.contains('burger-show')) {

      closeForm();

    } else {

      openForm();

    }

  }


  //------- Секция событий ----------------------------

  bur.addEventListener('click', toggleForm);

  clos.addEventListener('click', closeForm);

  submitButton.addEventListener('click', checkFormValue);

  closeSuccessMessage.addEventListener('click', closeSuccess);


});