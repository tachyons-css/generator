module.exports = `/*

   FLOATS
   http://tachyons.io/docs/layout/floats/

   1. Floated elements are automatically rendered as block level elements.
      Setting floats to display inline will fix the double margin bug in
      ie6. You know... just in case.

   2. Don't forget to clearfix your floats with .cf

   Base:
     f = float

   Modifiers:
     l = left
     r = right
     n = none

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/



.fl { float: left;  _display: inline; }
.fr { float: right; _display: inline; }
.fn { float: none; }`
