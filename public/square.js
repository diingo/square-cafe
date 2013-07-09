// $(document).ready(function() {
//   how_many_forms = $('form').length;
//   console.log(how_many_forms);
// });

drink_number = 0;
selection = 0;
total_cost = 0;

$(document).ready(function() {
  $('form').on('change', 'select', function(){

    menu = $('select').first().html();
    
    drink_number += 1;
    // console.log(drink_number);

    $('dd#drinks').text(drink_number);

    total_cost = 0;


    $('select').each(function() {
      selection = $(this).find(":selected");

      total_cost = total_cost + Number($(selection).attr('data-price'));
      
      my_price = Number($(selection).attr('data-price'));

      console.log('Selection:' + my_price);

      console.log('Total_Cost:' + total_cost);
      console.log(total_cost);

    });

    total_cost = total_cost/100;
    total_cost= (total_cost).toFixed(2);
    // $('#cost').text('$'+ (total_cost/100).toFixed(2));

    $('form').append('<select>' + menu + '</select>');
    $('dd#cost').text(total_cost);

  });


    $('.button').click(function(event){

      event.preventDefault();
      alert("Yo!");

      // $.ajax({
      //   type: "POST",
      //   url: "/shop",
      //   data: "diingo",
      //   success: function(responseText){
      //     alert("You made an order!");
      //   },
        // error: function(responseText){
        //   alert("error!!");
        // }
      // });

      // need replace cost_data with .serialize() method
      cost_data = { cost: total_cost };
        $.post('/shop', cost_data, function(responseText){ $('.response').append(responseText);
        });

      $('.button').attr("disabled", "disabled");

    });
    
});