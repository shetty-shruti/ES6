!function(o){var e={};function n(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return o[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=o,n.c=e,n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:t})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var l in o)n.d(t,l,function(e){return o[e]}.bind(null,l));return t},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=0)}([function(o,e,n){"use strict";var t,l=n(1),r=(t=l)&&t.__esModule?t:{default:t};console.log(300);console.log(100);var c=["shr@emails.com","she@emails.com"];console.log(c),c.push("uti@gmail.com"),console.log(c);console.log("backstage limit",10),console.log("Overall limit",200);console.log("backstage limit with const",10),console.log("Overall limit with const",200);console.log("backstage limit with var",200),console.log("Overall limit with var",200),console.log("Hello!"),console.log("How are you?");console.log("good morning");var u=[10].concat([20,30,40],[50]);console.log(u),function(){for(var o=arguments.length,e=Array(o),n=0;n<o;n++)e[n]=arguments[n];console.log(e)}(3,4,5,6,10,12);console.log("Woohoo!"),setTimeout(function(){console.log("Arrow Functions")},3e3);var i=[20,30,40],a=i.map(function(o){return 2*o});console.log(a);var s=i.map(function(o){return 2*o});console.log(s);var f=[7,16,21,4,5,36,22,7],g=f.filter(function(o){return o>15});console.log(g);var d=f.filter(function(o){return o>20});console.log(d),console.log((0,r.default)(5,10)),console.log((0,l.add)(5,10))},function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.add=function(o,e){return o+e},e.subtract=function(o,e){return o-e},e.default=function(o,e){return o*e}}]);