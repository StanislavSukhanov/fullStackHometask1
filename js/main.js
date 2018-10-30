window.addEventListener('load', function() {

  //----- Секция исходных данных ---------------------------

  var burger = document.querySelector(".burger");
  var clos = document.querySelector(".form-close");
  var bur = document.getElementById('br');

  // geting a value from the burger form

  var submitButton = document.getElementById("submit-button");  



  //------ Секция логики ---------------------------

  function checkFormValue(){
    var burgerData = document.getElementById("burger-form-value");
    if (burgerData.elements[0].value.length != 0){
      alert("good");
      console.log(burgerData, burgerData.elements);
      document.getElementByClassName("burger").classList.remove("burger-show"); // stopped here
    } else {
      alert("bad");
      burgerData.elements[0].classList.add("no-value");
    }
  }

  function openForm() {

    burger.classList.add('burger-show');

  }

  function closeForm() {

    burger.classList.remove('burger-show');

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


});