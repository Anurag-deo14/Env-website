body{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    align-items: center;
    background-color: black;
    background-size: 100 vw;
    background-repeat:none;
    background-size: cover;
}
.small{
    display: none;
}

.topnav {
  background-color: #333;
  overflow: hidden;
  width: 100%;
}


.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 18px 23px;
  text-decoration: none;
  font-size: 17px;
}


.topnav a:hover {
  background-color: #ddd;
  color: black;
}


.topnav a.active {
  background-color: #eb2f06;
  color: white;
}


.topnav .icon {
  display: none;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
    
  }
}


@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    color: white;
    padding-top: 5vh;
    padding-bottom: 5vh;
    top: 0;
  }
  .topnav.responsive a.active {
    float: none;
    display: block;
    text-align: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
    color: white;
  }
  .topnav.responsive a.native {
    float: none;
    display: block;
    text-align: center;
    padding-top: 9vh;
    padding-bottom: 9.5vh;
    color: white;
  }
}

.input-city{
    display: flex;
   align-items: center;
   justify-content: center;
    height: 100vh;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-size: 100 vw;
    background-repeat:none;
    background-size: cover;
  font-size: x-large;
}
hr{
    width: 97vw;
    border-top: 3px solid rgba(255, 255, 255, 0.233);
    border-bottom:none ;
}

  button {
    margin: 0.5em;
    border-radius: 50%;
    border: none;
    height: 40px;
    width: 40px;
    outline: none;
    background:  #0000008c;
    color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  .slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
  input.search-bar {
    border: none;
    outline: none;
    padding: 0.4em 1em;
    border-radius: 24px;
    background: #0000008c;
    color: white;
    font-family: inherit;
    font-size: 105%;
    width: calc(100% - 100px);
  }
  
  button:hover {
    background:  #000000;
  }
  .card{
    background: rgba(255, 255, 255, 0.103);
    color: white;
    padding: 2em;
    border-radius: 30px;
    width: 100%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    background-image: url('https://source.unsplash.com/1600x900/?landscape');
    background-size: cover;
    height: 65%;
    align-items: center;
    justify-content: center;
    margin: 1em;
    padding: 1.5em;
    border-radius: 20px;
    font-size: large;
  }
  
  .card h1{
    background: #0000008c;
    box-sizing: border-box;
    border-radius: 32px;
    padding: 10px;
    

  }
  @media (max-width:600px){
    .card{
      max-width: 350px;
      height: 50%;
     font-size: medium;
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
    }
    .card h1{
      font-size: medium;
      box-sizing: border-box;
      border-radius: 25px;
      padding: 10px;
    }
    button{
      height: 40px;
      width: 40px;
    }
  }
  @media (min-width:880px) {
    .card{
      max-width: 100%;
      height: 85%;
     font-size: larger;
    }
    .card h1{
      font-size: 40px;
      box-sizing: border-box;
      border-radius: 25px;
      
      padding: 20px;
    }
    button{
      height: 60px;
      width: 60px;
    }
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    text-decoration: none;
  }
  footer{
    width: 100%;
   
    bottom: 0;
    left: 0;
    background: #111;
  }
  footer .content{
    max-width: 1350px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  footer .content p,a{
    color: #fff;
  }
  footer .content .box{
    width: 33%;
    transition: all 0.4s ease;
  }
  footer .content .topic{
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
  
  }
  footer .content p{
    text-align: justify;
  }
  footer .content .lower .topic{
    margin: 24px 0 5px 0;
  }
  footer .content .lower i{
    padding-right: 16px;
  }
  footer .content .middle{
    padding-left: 80px;
  }
  footer .content .middle a{
    line-height: 32px;
  }
  footer .content .right input[type="text"]{
    height: 45px;
    width: 100%;
    outline: none;
    color: #d9d9d9;
    background: #000;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 17px;
    border: 2px solid #222222;
  }
  footer .content .right input[type="submit"]{
    height: 42px;
    width: 100%;
    font-size: 18px;
    color: #d9d9d9;
    background: #eb2f06;
    outline: none;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 12px;
    border: 2px solid #eb2f06;
    transition: all 0.3s ease-in-out;
  }
  .content .right input[type="submit"]:hover{
    background: none;
    color:  #eb2f06;
  }
  footer .content .media-icons a{
    font-size: 16px;
    height: 45px;
    width: 45px;
    display: inline-block;
    text-align: center;
    line-height: 43px;
    border-radius: 5px;
    border: 2px solid #222222;
    margin: 30px 5px 0 0;
    transition: all 0.3s ease;
  }
  .content .media-icons a:hover{
    border-color: #eb2f06;
  }
  footer .bottom{
    width: 100%;
    text-align: right;
    color: #d9d9d9;
    padding: 0 40px 5px 0;
  }
  footer .bottom a{
    color: #eb2f06;
  }
  footer a{
    transition: all 0.3s ease;
  }
  footer a:hover{
    color: #eb2f06;
  }
  @media (max-width:1100px) {
    footer .content .middle{
      padding-left: 50px;
    }
  }
  @media (max-width:950px){
    footer .content .box{
      width: 50%;
    }
    .content .right{
      margin-top: 40px;
    }
  }
  @media (max-width:560px){
    footer{
      position: relative;
    }
    footer .content .box{
      width: 100%;
      margin-top: 30px;
    }
    footer .content .middle{
      padding-left: 0;
    }
  }

  .search {
    display: flex;
    align-items: center;
    background-color: rgba(15, 15, 15, 0.692);
    padding: 5px;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    margin: 10px;
    position: relative;
    transition: width 1.5s;
  }
  
  .magnifier {
    width: 45px;
    cursor: pointer;
    position: absolute;
    border-radius: 20px;
    
    left: 8px;
  }
  
  .mic-icon {
    width: 30px;
    position: absolute;
    right: 10px;
    transition: width 0.4s;
    transition-delay: 1s;
  }
  
  .input {
    background-color: transparent;
    border: none;
    margin: 10px 50px;
    width: 100%;
    outline: none;
    color: rgb(100, 100, 100);
    transition: width 1s;
    transition-delay: 0.5s;
  }
  
  .active.search{
    width: 60px;
    border-radius: 600px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  
  .active .input {
    width: 0;
  }
  
  .active .mic-icon {
    width: 0;
  }
