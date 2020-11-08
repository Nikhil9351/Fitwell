function navres() {
    var x = document.getElementById("mybar");
    if (x.className === "logobar-center") {
      x.className += " res";
    } else {
      x.className = "logobar-center";
    }
  }
  var mybtn = document.getElementById("myBtn");
  window.onscroll = function() {scrolltop()};
  function scrolltop() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybtn.style.display = "block";
      } 
      else {
          mybtn.style.display = "none";
      }
  }
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  function signclk() {
    document.getElementById('reglog').style.display='none';
    document.getElementById('signlog').style.display='block';
  }
  var mo = document.getElementById('reglog');
  window.onclick = function(event) {
    if (event.target == mo) {
      mo.style.display = "none";
    }
  }
  function form0(){
    if( document.loginf.name.value == "" ) {
        alert( " name is required for login." );
        document.loginf.name.focus() ;
        return false;
    }
    if( document.loginf.pass.value == "" ) {
      alert( " password is required for login." );
      document.loginf.pass.focus() ;
      return false;
    }
  }
  function form1(){
    if( document.signinf.name.value == "" ) {
        alert( " Name is required for registration." );
        document.signinf.name.focus() ;
        return false;
    }
    if( document.signinf.email.value == "" ) {
      alert( " Email is required for registration." );
      document.signinf.email.focus() ;
      return false;
    }
    if( document.signinf.passl.value == "" ) {
      alert( " Password is required for registration." );
      document.signinf.passl.focus() ;
      return false;
    }
    if( document.signinf.passr.value != document.signinf.passl.value ) {
      alert( " password must be same." );
      document.signinf.passr.focus() ;
      return false;
  }

  }
  function form2(){
    if( document.conta.name.value == "" ) {
        alert( " name is required for contact." );
        document.conta.name.focus() ;
        return false;
    }
    if( document.conta.email.value == "" ) {
      alert( " Email is required for contact." );
      document.conta.email.focus() ;
      return false;
    }
    if( document.conta.message.value == "" ) {
      alert( " message is required for contact." );
      document.conta.message.focus() ;
      return false;
    }
  }
  function form3(){
    if( document.newsl.email.value == "" ) {
        alert( " Email is required for newsletter." );
        document.newsl.email.focus() ;
        return false;
    }
  }




  image1 = "img/slide0.jpg";
  image2 = "img/slide1.jpg";
  image3 = "img/slide2.jpg";
  image4 = "img/slide3.jpg";
  image5 = "img/slide4.jpg";
  image6 = "img/slide5.jpg";
  image7 = "img/slide6.jpg";
  var i=1;

  function slideshow() {
    document.images.slide.src = eval("image"+i)
    if(i<7){
      i++
    }
    else i=1
    setTimeout("slideshow()",4000)
  }
  slideshow()
  