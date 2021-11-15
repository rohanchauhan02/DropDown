$(".menu").append(`
<select id="city">
  <option value="mumbai">MUMBAI</option>
  <option value="delhi">DELHI</option>
</select>`);
  
  
  
  if(window.localStorage.getItem("location")!=undefined){
     $("#city option").each(function(i){
        if(window.localStorage.getItem("location")==$(this).val()){
            $("#city").prop("selectedIndex",i);
          
        }
    });
  }else{
    window.localStorage.setItem("location", $('#city').val());
  }
  
  $('.product-grid-item').each(function(i,j){
    var city_class=$(j).attr("class").split(" ").filter(city=>city.toLowerCase()==window.localStorage.getItem("location"));
    if(city_class.length==0){$(j).hide()}else {$(j).show();}
  })


  $('#city').on('change', function() {

    window.localStorage.setItem("location",this.value);

    $('.product-grid-item').each(function(i,j){
      var city_class=$(j).attr("class").split(" ").filter(city=>city.toLowerCase()==window.localStorage.getItem("location"));
      if(city_class.length==0){$(j).hide()}else {$(j).show();}
    })

  });
  
  
  var foo = {{ product.metafields.my_fields.locations | json }};
  var val=foo.split(" ");
  var result = val.filter(word => word.toLowerCase()==window.localStorage.getItem("location"));

  console.log(result,"r");
  if(result.length==0) {
    $("#cart-form").hide()
    $(".additional-info").hide()
    $("#callBackVariant").append(`
      <p class="unavailable-product"
      style="font-size: 29px;font-family: cursive;">
      Unavailable at this location
      </p>`

                                );
  }else{
    $("#cart-form").show()
    $(".additional-info").show()
    $(".unavailable-product").hide();
  }
  	
  
  $('#city').on('change', function() {

    var foo = {{ product.metafields.my_fields.locations | json }};
    var val=foo.split(" ");
    var result = val.filter(word => word.toLowerCase()==window.localStorage.getItem("location"));

    console.log(result,"r");
    if(result.length==0) {
      $("#cart-form").hide()
      $(".additional-info").hide()
      $("#callBackVariant").append(`
        <p class="unavailable-product"
        style="font-size: 29px;font-family: cursive;">
        Unavailable at this location
          </p>`

                                  );
    }else{
      $("#cart-form").show()
      $(".additional-info").show()
      $(".unavailable-product").hide();
    }
  });
  	
  
