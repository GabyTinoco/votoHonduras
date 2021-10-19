import './src/css/tailwind.css';
const $ = require("jquery")

export const onInitialClientRender = () => {
 
   // I want to make this work 
   $(document).ready(function () {

    /*Papeleta */

      $('#presidente').on("click", function() {
          $('.presidente').toggle();
          $('.alcaldes').hide();
          $('.diputados').hide();
      });
      $('#alcaldes').on("click", function() {
          $('.presidente').hide();
          $('.alcaldes').toggle();
          $('.diputados').hide();
      });
      $('#diputados').on("click", function() {
          $('.presidente').hide();
          $('.alcaldes').hide();
          $('.diputados').toggle();
      });
   
  });
}