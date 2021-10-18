import './src/css/tailwind.css';
const $ = require("jquery")

export const onInitialClientRender = () => {
 
   // I want to make this work 
   $(document).ready(function () {

    /*Papeleta */
      $('.presidente').hide();
      $('.alcaldes').hide();
      $('.diputados').hide();
      $('.cortes').hide();
      $('.fm').hide();
      $('.atlantida').hide();
      $('.choluteca').hide();

      $('#presidente').on("click", function() {
          $('.presidente').show();
          $('.alcaldes').hide();
          $('.diputados').hide();
      });
      $('#alcaldes').on("click", function() {
          $('.presidente').hide();
          $('.alcaldes').show();
          $('.diputados').hide();
      });
      $('#diputados').on("click", function() {
          $('.presidente').hide();
          $('.alcaldes').hide();
          $('.diputados').show();
      });

    /**Diputados*/
    $('#cortes').on("click", function() {
        $('.cortes').show();
        $('.fm').hide();
        $('.atlantida').hide();
        $('.choluteca').hide();
    });

    $('#fm').on("click", function() {
        $('.cortes').hide();
        $('.fm').show();
        $('.atlantida').hide();
        $('.choluteca').hide();
    });

    $('#atlantida').on("click", function() {
        $('.cortes').hide();
        $('.fm').hide();
        $('.atlantida').show();
        $('.choluteca').hide();
    });

    $('#choluteca').on("click", function() {
        $('.cortes').hide();
        $('.fm').hide();
        $('.atlantida').hide();
        $('.choluteca').show();
    });

   
  });
}