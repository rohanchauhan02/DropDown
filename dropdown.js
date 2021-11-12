$(".menu").append(`
<select id="city">
  <option value="mumbai">Mumbai</option>
  <option value="delhi">Delhi</option>
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
  if(window.localStorage.getItem("location")=="mumbai"){
            $(".product-grid-item").hide();
            $(".Mumbai").show();

      }else{
        $(".product-grid-item").hide();
        $(".Delhi").show();                    
   }
    
  $('#city').on('change', function() {
    window.localStorage.setItem("location",this.value);
    console.log(window.localStorage.getItem("location"));
    if(window.localStorage.getItem("location")=="mumbai"){
            $(".product-grid-item").hide();
            $(".Mumbai").show();

      }else{
        $(".product-grid-item").hide();
        $(".Delhi").show();                    
     }
});
