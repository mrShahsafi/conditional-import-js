(async () => {
  if ("condition1") {
       console.log("switch to persian")
      //import styles as const
    const persian = import(
      "./sass/style..css"
    );
       //this is for handling the (Unhandled Rejection (TypeError): "" is not a function) error \
      //    after switching the language
       if (typeof persian === 'function') {
         persian();
}
        //getting the <body></body> Tag from the HTML,
       var body = document.querySelector("body");
       //--------------------------------------
       //Set direction Attribute to rtl
      body.setAttribute("direction", "rtl");
      //Set dir Attribute to rtl
      body.setAttribute("dir", "rtl");
      //set style Attribute to direction:rtl
      body.setAttribute("style", "direction: rtl");
      //------------------------------------
            //= <body id="kt_body" direction="rtl" dir="rtl" style="direction: rtl">
  }
  else{
      console.log("switch to english")
      //import styles as const
   const english = import(
      "./index.scss"
    );
      //this is for handling the (Unhandled Rejection (TypeError): "" is not a function) error \
      //    after switching the language
       if (typeof english === 'function') {
        english();
}
  }

})();
