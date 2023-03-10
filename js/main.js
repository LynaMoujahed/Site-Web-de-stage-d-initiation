/* loading */
function loading() {
    document.querySelector(".depart").classList.add('hidden');
 }

 function onloading(){
    setInterval(loading,3000);
 }

 window.onload=onloading();
/*******/

 /* initialisation library aos */
   function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  
  window.addEventListener('load', () => {
     aos_init();
  });
