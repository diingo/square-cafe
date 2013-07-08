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

    $('form').append('<select>' + menu + '</select>');

  });
});