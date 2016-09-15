module.exports = `/*

   WIDTHS
   Docs: http://tachyons.io/docs/layout/widths/

   Base:
     w = width

   Modifiers
     1 = 1st step in width scale
     2 = 2nd step in width scale
     3 = 3rd step in width scale
     4 = 4th step in width scale
     5 = 5th step in width scale

     -10  = literal value 10%
     -20  = literal value 20%
     -25  = literal value 25%
     -33  = literal value 33%
     -34  = literal value 34%
     -40  = literal value 40%
     -50  = literal value 50%
     -60  = literal value 60%
     -75  = literal value 75%
     -80  = literal value 80%
     -100 = literal value 100%

     -third = 100% / 3 (Not supported in opera mini or IE8)
     -auto  = string value auto


   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/

/* Width Scale */

.w1 {    width: 1rem; }
.w2 {    width: 2rem; }
.w3 {    width: 4rem; }
.w4 {    width: 8rem; }
.w5 {    width: 16rem; }

.w-10 {  width:  10%; }
.w-20 {  width:  20%; }
.w-25 {  width:  25%; }
.w-33 {  width:  33%; }
.w-34 {  width:  34%; }
.w-40 {  width:  40%; }
.w-50 {  width:  50%; }
.w-60 {  width:  60%; }
.w-75 {  width:  75%; }
.w-80 {  width:  80%; }
.w-100 { width: 100%; }

.w-third { width: calc(100% / 3); }
.w-auto { width: auto; }`
