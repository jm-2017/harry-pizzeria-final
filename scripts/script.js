$(()=> {
// Create this to Speak to the console
 console.log( "ready!" );
 
 $('#btnSubmit').on('click', (event)=> {
   event.preventDefault(); 
  
   console.log("Customer Full Name:", $('#fname').val());  
   console.log("Customer address:", $('#address').val());  
   
   console.log("Selected Pizza Size:",
    $(`#pizzaSize`).find(":selected").text()); 
   console.log("Selected Pizza Style:",
    $(`#pizzaStyle`).find(":selected").text()); 
   
   if($('#checkPep').is(':checked')){
     console.log("Checkbox Pep Value:", $('#checkPep').val()); 
   }
    if($('#checkOnion').is(':checked')){
     console.log("Checkbox Onion Value:", $('#checkOnion').val()); 
   }
    if($('#checkJal').is(':checked')){
     console.log("Checkbox Jalapeno Value:", $('#checkJal').val()); 
   }
    if($('#checkPine').is(':checked')){
     console.log("Checkbox Pineapple Value:", $('#checkPine').val()); 
   }
    if($('#checkShrooms').is(':checked')){
     console.log("Checkbox Mushrooms Value:", $('#checkShrooms').val()); 
   }
    if($('#checkOlives').is(':checked')){
     console.log("Checkbox Olives Value:", $('#checkOlives').val()); 
   }
    if($('#checkSix').is(':checked')){
     console.log("Checkbox Six pc wings Value:", $('#checkSix').val()); 
   }
    if($('#checkTwelve').is(':checked')){
     console.log("Checkbox Twelve pc wings Value:", $('#checkTwelve').val()); 
   }
   
    console.log("Selected Bone-in flavor:",  $('#boneInFlavor').find(":selected").text());
    console.log("Selected Boneless flavor:",  $('#bonelessFlavor').find(":selected").text());
    console.log("Selected Drink choice:",  $('#inputDrink').find(":selected").text());
  })
});

$(function () {
  //what radio value did they select?

  $("#formSubmit").on("click", (e) => {
    e.preventDefault();
    });
      
  
  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "Pizza") {
      $("#pizzaOption")
      $("#pizzaSize")
        .empty()
        .append(`<option value="Choose size"> Choose Size </option>`)
        .append(`<option value="Large"> Large </option>`)
        .append(`<option value="Medium"> Medium </option>`)
        .append(`<option value="Small"> Small </option>`);
      
      $("#pizzaStyle")
        .empty()
        .append(`<option value="Choose Style"> Choose Style </option>`)
        .append(`<option value="Classic"> Classic </option>`)
        .append(`<option value="Hawaiian"> Hawaiian </option>`)
        .append(`<option value="Chicago deep dish"> Chicago deep dish </option>`)
        .append(`<option value="Cheese"> Cheese </option>`)
        .append(`<option value="Buffalo"> Buffalo </option>`)
        .append(`<option value="Magherita"> Magherita </option>`)
        .append(`<option value="Roman"> Roman  </option>`);
     
    } 
    else {
      $("#foodOption")
        .empty()
        .append(`<option value=""> Pick your food choice </option>`);
    }
  });
});
