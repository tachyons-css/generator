module.exports = `
.cf:before,
.cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf {       *zoom: 1; }

.cl { clear: left; }
.cr { clear: right; }
.cb { clear: both; }
.cn { clear: none; }
`