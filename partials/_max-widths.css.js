module.exports = `/*

   MAX WIDTHS
   Docs: http://tachyons.io/docs/layout/max-widths/

   Base:
     mw = max-width

   Modifiers
     1 = 1st step in width scale
     2 = 2nd step in width scale
     3 = 3rd step in width scale
     4 = 4th step in width scale
     5 = 5th step in width scale
     6 = 6st step in width scale
     7 = 7nd step in width scale
     8 = 8rd step in width scale
     9 = 9th step in width scale

     -100 = literal value 100%

     -none  = string value none


   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/

/* Max Width Percentages */

.mw-100  { max-width: 100%; }

/* Max Width Scale */

.mw1  {  max-width: 1rem; }
.mw2  {  max-width: 2rem; }
.mw3  {  max-width: 4rem; }
.mw4  {  max-width: 8rem; }
.mw5  {  max-width: 16rem; }
.mw6  {  max-width: 32rem; }
.mw7  {  max-width: 48rem; }
.mw8  {  max-width: 64rem; }
.mw9  {  max-width: 96rem; }

/* Max Width String Properties */

.mw-none { max-width: none; }`
