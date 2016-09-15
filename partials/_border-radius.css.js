module.exports = `/*

   BORDER RADIUS
   Docs: http://tachyons.io/docs/themes/border-radius/

   Base:
     br   = border-radius

   Modifiers:
     0    = 0/none
     1    = 1st step in scale
     2    = 2nd step in scale
     3    = 3rd step in scale
     4    = 4th step in scale

   Literal values:
     -100 = 100%
     -pill = 9999px

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/

  .br0 {        border-radius: 0; }
  .br1 {        border-radius: .125rem; }
  .br2 {        border-radius: .25rem; }
  .br3 {        border-radius: .5rem; }
  .br4 {        border-radius: 1rem; }
  .br-100 {     border-radius: 100%; }
  .br-pill {    border-radius: 9999px; }
  .br--bottom {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
  }
  .br--top {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
  }
  .br--right {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  }
  .br--left {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
  }`
