<template>
    <!-- JJ -->
<header>
  <h1>Coming Soon</h1>
</header>
<p>Our new site is almost ready! If you need help in the meantime, please gives us a call at 1(800)555-5555.</p>
<!-- SDG -->
</template>

<style lang="scss" scoped>
//ref: https://codepen.io/cliffpyles/pen/GJggVv
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,400italic";
// Cool
$aqua:  #7FDBFF;
$blue:  #0074D9;
$navy:  #001F3F;
$teal:  #39CCCC;
$green: #2ECC40;
$olive: #3D9970;
$lime:  #01FF70;
// Warm
$yellow:  #FFDC00;
$orange:  #FF851B;
$red:     #FF4136;
$fuchsia: #F012BE;
$purple:  #B10DC9;
$maroon:  #85144B;
// Gray Scale
$white:  #fff;
$silver: #ddd;
$gray:   #aaa;
$black:  #111;

.aqua-bg {background-color: $aqua}
.blue-bg {background-color: $blue}
.navy-bg {background-color: $navy}
.teal-bg {background-color: $teal}
.green-bg {background-color: $green}
.olive-bg {background-color: $olive}
.lime-bg {background-color: $lime}
.yellow-bg {background-color: $yellow}
.orange-bg {background-color: $orange}
.red-bg {background-color: $red}
.fuchsia-bg {background-color: $fuchsia}
.purple-bg {background-color: $purple}
.maroon-bg {background-color: $maroon}
.white-bg {background-color: $white}
.silver-bg {background-color: $silver}
.gray-bg {background-color: $gray}
.black-bg {background-color: $black}

body, input, option, select, button {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.container {margin: 0 auto; width: 1280px; max-width: 100%;}

body { background: lighten($black, 5%); height: 100vh; }
header {
  position: relative;
  display: block; 
  background: lighten($black, 2.5%);
  margin-top: 15%;
  border-top: 2px solid darken(#111,50%);
  //border-top: 2px solid $blue;
  border-bottom: 1px solid lighten(#111,10%);
  box-shadow: 0px -1rem 0px 0px desaturate($blue, 45%);
  
  
  &:before,&:after {
    content: ''; 
    position: absolute;
    width: 150%; 
    height: 100%; 
    margin: 0px -25%;
  }
  &:before {
    z-index: 0;
    box-shadow: 
      inset 0px 0px 20px 10px #111,
      inset 0px 0px 2px 3px #111;
  }
  &:after {
    z-index: 1;
    height: 60px;
    bottom: -61px;
    background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0));
  }
  
}
h1 {
  position: relative;
  z-index: 2;
  font-size: 4rem;
  //line-height: 7.5rem;
  line-height: 4rem;
  margin: 3.5rem 0px;
  text-align: center;
  text-transform: uppercase;
  color: transparentize($white,0.25);
  text-shadow: 1px 3px 1px #000;
}
p {
  font-size: 1.25rem;
  letter-spacing: 0.07rem;
  padding: 1.2rem 4rem;
  margin: 0rem;
  line-height: 1.8rem;
  color: #fff;
  text-align: center;
  opacity: 0.5;
}

</style>