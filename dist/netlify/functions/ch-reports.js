!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=47)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.distributeUnevenly=e.countSpaceSequence=e.groupBySizes=e.makeBorderConfig=e.splitAnsi=e.normalizeString=void 0;const i=r(n(3)),s=r(n(1)),o=r(n(2)),a=n(14);e.normalizeString=t=>t.replace(/\r\n/g,"\n");e.splitAnsi=t=>{const e=o.default(t).split("\n").map(s.default),n=[];let r=0;return e.forEach(e=>{n.push(0===e?"":i.default(t,r,r+e)),r+=e+1}),n};e.makeBorderConfig=t=>({...a.getBorderCharacters("honeywell"),...t});e.groupBySizes=(t,e)=>{let n=0;return e.map(e=>{const r=t.slice(n,n+e);return n+=e,r})};e.countSpaceSequence=t=>{var e,n;return null!==(n=null===(e=t.match(/\s+/g))||void 0===e?void 0:e.length)&&void 0!==n?n:0};e.distributeUnevenly=(t,e)=>Array.from({length:e}).fill(Math.floor(t/e)).map((n,r)=>n+(r<t%e?1:0))},function(t,e,n){"use strict";const r=n(2),i=n(12),s=n(26),o=t=>{if("string"!=typeof t||0===t.length)return 0;if(0===(t=r(t)).length)return 0;t=t.replace(s(),"  ");let e=0;for(let n=0;n<t.length;n++){const r=t.codePointAt(n);r<=31||r>=127&&r<=159||(r>=768&&r<=879||(r>65535&&n++,e+=i(r)?2:1))}return e};t.exports=o,t.exports.default=o},function(t,e,n){"use strict";const r=n(25);t.exports=t=>"string"==typeof t?t.replace(r(),""):t},function(t,e,n){"use strict";const r=n(12),i=n(27),s=n(28),o=["",""],a=t=>`${o[0]}[${t}m`,u=(t,e,n)=>{let r=[];t=[...t];for(let n of t){const i=n;n.includes(";")&&(n=n.split(";")[0][0]+"0");const o=s.codes.get(Number.parseInt(n,10));if(o){const n=t.indexOf(o.toString());-1===n?r.push(a(e?o:i)):t.splice(n,1)}else{if(e){r.push(a(0));break}r.push(a(i))}}if(e&&(r=r.filter((t,e)=>r.indexOf(t)===e),void 0!==n)){const t=a(s.codes.get(Number.parseInt(n,10)));r=r.reduce((e,n)=>n===t?[n,...e]:[...e,n],[])}return r.join("")};t.exports=(t,e,n)=>{const s=[...t],a=[];let c,l="number"==typeof n?n:s.length,h=!1,d=0,f="";for(const[p,g]of s.entries()){let s=!1;if(o.includes(g)){const e=/\d[^m]*/.exec(t.slice(p,p+18));c=e&&e.length>0?e[0]:void 0,d<l&&(h=!0,void 0!==c&&a.push(c))}else h&&"m"===g&&(h=!1,s=!0);if(h||s||d++,!i({exact:!0}).test(g)&&r(g.codePointAt())&&(d++,"number"!=typeof n&&l++),d>e&&d<=l)f+=g;else if(d!==e||h||void 0===c){if(d>=l){f+=u(a,!0,c);break}}else f=u(a)}return f}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wrapCell=void 0;const r=n(0),i=n(33),s=n(34);e.wrapCell=(t,e,n)=>{const o=r.splitAnsi(t);for(let t=0;t<o.length;){let r;r=n?s.wrapWord(o[t],e):i.wrapString(o[t],e),o.splice(t,1,...r),t+=r.length}return o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawContent=void 0;e.drawContent=(t,e)=>{const{separatorGetter:n,drawSeparator:r}=e,i=t.length,s=[];return r(0,i)&&s.push(n(0,i)),t.forEach((t,e)=>{s.push(t),e+1<i&&r(e+1,i)&&s.push(n(e+1,i))}),r(i,i)&&s.push(n(i,i)),s.join("")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawRow=void 0;const r=n(6);e.drawRow=(t,e)=>{const{border:n,drawVerticalLine:i}=e;return r.drawContent(t,{drawSeparator:i,separatorGetter:(t,e)=>0===t?n.bodyLeft:t===e?n.bodyRight:n.bodyJoin})+"\n"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.padTableData=e.padString=void 0;e.padString=(t,e,n)=>" ".repeat(e)+t+" ".repeat(n);e.padTableData=(t,n)=>t.map(t=>t.map((t,r)=>{const{paddingLeft:i,paddingRight:s}=n.columns[r];return e.padString(t,i,s)}))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.truncateTableData=e.truncateString=void 0;const i=r(n(39));e.truncateString=(t,e)=>i.default(t,{length:e,omission:"…"});e.truncateTableData=(t,n)=>t.map(t=>t.map((t,r)=>e.truncateString(t,n.columns[r].truncate)))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.alignTableData=void 0;const r=n(11);e.alignTableData=(t,e)=>t.map(t=>t.map((t,n)=>{const{width:i,alignment:s}=e.columns[n];return r.alignString(t,i,s)}))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.alignString=void 0;const i=r(n(1)),s=n(0),o=(t,e)=>t+" ".repeat(e);e.alignString=(t,e,n)=>{const r=i.default(t);if(r===e)return t;if(r>e)throw new Error("Subject parameter value width cannot be greater than the container width.");if(0===r)return" ".repeat(e);const a=e-r;return"left"===n?o(t,a):"right"===n?((t,e)=>" ".repeat(e)+t)(t,a):"justify"===n?((t,e)=>{const n=s.countSpaceSequence(t);if(0===n)return o(t,e);const r=s.distributeUnevenly(e,n);if(Math.max(...r)>3)return o(t,e);let i=0;return t.replace(/\s+/g,t=>t+" ".repeat(r[i++]))})(t,a):((t,e)=>" ".repeat(Math.floor(e/2))+t+" ".repeat(Math.ceil(e/2)))(t,a)}},function(t,e,n){"use strict";const r=t=>!Number.isNaN(t)&&(t>=4352&&(t<=4447||9001===t||9002===t||11904<=t&&t<=12871&&12351!==t||12880<=t&&t<=19903||19968<=t&&t<=42182||43360<=t&&t<=43388||44032<=t&&t<=55203||63744<=t&&t<=64255||65040<=t&&t<=65049||65072<=t&&t<=65131||65281<=t&&t<=65376||65504<=t&&t<=65510||110592<=t&&t<=110593||127488<=t&&t<=127569||131072<=t&&t<=262141));t.exports=r,t.exports.default=r},function(t,e,n){const r=n(30),i={};for(const t of Object.keys(r))i[r[t]]=t;const s={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=s;for(const t of Object.keys(s)){if(!("channels"in s[t]))throw new Error("missing channels property: "+t);if(!("labels"in s[t]))throw new Error("missing channel labels property: "+t);if(s[t].labels.length!==s[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=s[t];delete s[t].channels,delete s[t].labels,Object.defineProperty(s[t],"channels",{value:e}),Object.defineProperty(s[t],"labels",{value:n})}s.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.min(e,n,r),s=Math.max(e,n,r),o=s-i;let a,u;s===i?a=0:e===s?a=(n-r)/o:n===s?a=2+(r-e)/o:r===s&&(a=4+(e-n)/o),a=Math.min(60*a,360),a<0&&(a+=360);const c=(i+s)/2;return u=s===i?0:c<=.5?o/(s+i):o/(2-s-i),[a,100*u,100*c]},s.rgb.hsv=function(t){let e,n,r,i,s;const o=t[0]/255,a=t[1]/255,u=t[2]/255,c=Math.max(o,a,u),l=c-Math.min(o,a,u),h=function(t){return(c-t)/6/l+.5};return 0===l?(i=0,s=0):(s=l/c,e=h(o),n=h(a),r=h(u),o===c?i=r-n:a===c?i=1/3+e-r:u===c&&(i=2/3+n-e),i<0?i+=1:i>1&&(i-=1)),[360*i,100*s,100*c]},s.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const i=s.rgb.hsl(t)[0],o=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[i,100*o,100*r]},s.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.min(1-e,1-n,1-r);return[100*((1-e-i)/(1-i)||0),100*((1-n-i)/(1-i)||0),100*((1-r-i)/(1-i)||0),100*i]},s.rgb.keyword=function(t){const e=i[t];if(e)return e;let n,s=1/0;for(const e of Object.keys(r)){const i=r[e],u=(a=i,((o=t)[0]-a[0])**2+(o[1]-a[1])**2+(o[2]-a[2])**2);u<s&&(s=u,n=e)}var o,a;return n},s.keyword.rgb=function(t){return r[t]},s.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*e+.3576*n+.1805*r),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]},s.rgb.lab=function(t){const e=s.rgb.xyz(t);let n=e[0],r=e[1],i=e[2];n/=95.047,r/=100,i/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;return[116*r-16,500*(n-r),200*(r-i)]},s.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let i,s,o;if(0===n)return o=255*r,[o,o,o];i=r<.5?r*(1+n):r+n-r*n;const a=2*r-i,u=[0,0,0];for(let t=0;t<3;t++)s=e+1/3*-(t-1),s<0&&s++,s>1&&s--,o=6*s<1?a+6*(i-a)*s:2*s<1?i:3*s<2?a+(i-a)*(2/3-s)*6:a,u[t]=255*o;return u},s.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,i=n;const s=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,i*=s<=1?s:2-s;return[e,100*(0===r?2*i/(s+i):2*n/(r+n)),100*((r+n)/2)]},s.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const i=Math.floor(e)%6,s=e-Math.floor(e),o=255*r*(1-n),a=255*r*(1-n*s),u=255*r*(1-n*(1-s));switch(r*=255,i){case 0:return[r,u,o];case 1:return[a,r,o];case 2:return[o,r,u];case 3:return[o,a,r];case 4:return[u,o,r];case 5:return[r,o,a]}},s.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,i=Math.max(r,.01);let s,o;o=(2-n)*r;const a=(2-n)*i;return s=n*i,s/=a<=1?a:2-a,s=s||0,o/=2,[e,100*s,100*o]},s.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const i=n+r;let s;i>1&&(n/=i,r/=i);const o=Math.floor(6*e),a=1-r;s=6*e-o,0!=(1&o)&&(s=1-s);const u=n+s*(a-n);let c,l,h;switch(o){default:case 6:case 0:c=a,l=u,h=n;break;case 1:c=u,l=a,h=n;break;case 2:c=n,l=a,h=u;break;case 3:c=n,l=u,h=a;break;case 4:c=u,l=n,h=a;break;case 5:c=a,l=n,h=u}return[255*c,255*l,255*h]},s.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i))]},s.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let i,s,o;return i=3.2406*e+-1.5372*n+-.4986*r,s=-.9689*e+1.8758*n+.0415*r,o=.0557*e+-.204*n+1.057*r,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,i=Math.min(Math.max(0,i),1),s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),[255*i,255*s,255*o]},s.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(e-n),200*(n-r)]},s.lab.xyz=function(t){let e,n,r;n=(t[0]+16)/116,e=t[1]/500+n,r=n-t[2]/200;const i=n**3,s=e**3,o=r**3;return n=i>.008856?i:(n-16/116)/7.787,e=s>.008856?s:(e-16/116)/7.787,r=o>.008856?o:(r-16/116)/7.787,e*=95.047,n*=100,r*=108.883,[e,n,r]},s.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let i;i=360*Math.atan2(r,n)/2/Math.PI,i<0&&(i+=360);return[e,Math.sqrt(n*n+r*r),i]},s.lch.lab=function(t){const e=t[0],n=t[1],r=t[2]/360*2*Math.PI;return[e,n*Math.cos(r),n*Math.sin(r)]},s.rgb.ansi16=function(t,e=null){const[n,r,i]=t;let o=null===e?s.rgb.hsv(t)[2]:e;if(o=Math.round(o/50),0===o)return 30;let a=30+(Math.round(i/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},s.hsv.ansi16=function(t){return s.rgb.ansi16(s.hsv.rgb(t),t[2])},s.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];if(e===n&&n===r)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},s.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},s.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},s.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},s.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map(t=>t+t).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},s.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.max(Math.max(e,n),r),s=Math.min(Math.min(e,n),r),o=i-s;let a,u;return a=o<1?s/(1-o):0,u=o<=0?0:i===e?(n-r)/o%6:i===n?2+(r-e)/o:4+(e-n)/o,u/=6,u%=1,[360*u,100*o,100*a]},s.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let i=0;return r<1&&(i=(n-.5*r)/(1-r)),[t[0],100*r,100*i]},s.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let i=0;return r<1&&(i=(n-r)/(1-r)),[t[0],100*r,100*i]},s.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(0===n)return[255*r,255*r,255*r];const i=[0,0,0],s=e%1*6,o=s%1,a=1-o;let u=0;switch(Math.floor(s)){case 0:i[0]=1,i[1]=o,i[2]=0;break;case 1:i[0]=a,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=o;break;case 3:i[0]=0,i[1]=a,i[2]=1;break;case 4:i[0]=o,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=a}return u=(1-n)*r,[255*(n*i[0]+u),255*(n*i[1]+u),255*(n*i[2]+u)]},s.hcg.hsv=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);let r=0;return n>0&&(r=e/n),[t[0],100*r,100*n]},s.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100*(1-e)+.5*e;let r=0;return n>0&&n<.5?r=e/(2*n):n>=.5&&n<1&&(r=e/(2*(1-n))),[t[0],100*r,100*n]},s.hcg.hwb=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},s.hwb.hcg=function(t){const e=t[1]/100,n=1-t[2]/100,r=n-e;let i=0;return r<1&&(i=(n-r)/(1-r)),[t[0],100*r,100*i]},s.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},s.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},s.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},s.gray.hsl=function(t){return[0,0,t[0]]},s.gray.hsv=s.gray.hsl,s.gray.hwb=function(t){return[0,100,t[0]]},s.gray.cmyk=function(t){return[0,0,0,t[0]]},s.gray.lab=function(t){return[t[0],0,0]},s.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},s.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBorderCharacters=void 0;e.getBorderCharacters=t=>{if("honeywell"===t)return{topBody:"═",topJoin:"╤",topLeft:"╔",topRight:"╗",bottomBody:"═",bottomJoin:"╧",bottomLeft:"╚",bottomRight:"╝",bodyLeft:"║",bodyRight:"║",bodyJoin:"│",headerJoin:"┬",joinBody:"─",joinLeft:"╟",joinRight:"╢",joinJoin:"┼"};if("norc"===t)return{topBody:"─",topJoin:"┬",topLeft:"┌",topRight:"┐",bottomBody:"─",bottomJoin:"┴",bottomLeft:"└",bottomRight:"┘",bodyLeft:"│",bodyRight:"│",bodyJoin:"│",headerJoin:"┬",joinBody:"─",joinLeft:"├",joinRight:"┤",joinJoin:"┼"};if("ramac"===t)return{topBody:"-",topJoin:"+",topLeft:"+",topRight:"+",bottomBody:"-",bottomJoin:"+",bottomLeft:"+",bottomRight:"+",bodyLeft:"|",bodyRight:"|",bodyJoin:"|",headerJoin:"+",joinBody:"-",joinLeft:"|",joinRight:"|",joinJoin:"|"};if("void"===t)return{topBody:"",topJoin:"",topLeft:"",topRight:"",bottomBody:"",bottomJoin:"",bottomLeft:"",bottomRight:"",bodyLeft:"",bodyRight:"",bodyJoin:"",headerJoin:"",joinBody:"",joinLeft:"",joinRight:"",joinJoin:""};throw new Error('Unknown border template "'+t+'".')}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateRowHeights=void 0;const r=n(32);e.calculateRowHeights=(t,e)=>t.map(t=>{let n=1;return t.forEach((t,i)=>{const s=r.calculateCellHeight(t,e.columns[i].width,e.columns[i].wrapWord);n=Math.max(n,s)}),n})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawBorderTop=e.drawBorderJoin=e.drawBorderBottom=e.drawBorder=e.createTableBorderGetter=void 0;const r=n(6),i=(t,e)=>{const{separator:n,drawVerticalLine:i}=e,s=t.map(t=>e.separator.body.repeat(t));return r.drawContent(s,{drawSeparator:i,separatorGetter:(t,e)=>0===t?n.left:t===e?n.right:n.join})+"\n"};e.drawBorder=i;const s=(t,e)=>{const n=i(t,{...e,separator:{body:e.border.topBody,join:e.border.topJoin,left:e.border.topLeft,right:e.border.topRight}});return"\n"===n?"":n};e.drawBorderTop=s;const o=(t,e)=>i(t,{...e,separator:{body:e.border.joinBody,join:e.border.joinJoin,left:e.border.joinLeft,right:e.border.joinRight}});e.drawBorderJoin=o;const a=(t,e)=>i(t,{...e,separator:{body:e.border.bottomBody,join:e.border.bottomJoin,left:e.border.bottomLeft,right:e.border.bottomRight}});e.drawBorderBottom=a;e.createTableBorderGetter=(t,e)=>(n,r)=>e.header?0===n?s(t,{...e,border:{...e.border,topJoin:e.border.topBody}}):1===n?o(t,{...e,border:{...e.border,joinJoin:e.border.headerJoin}}):n===r?a(t,e):o(t,e):0===n?s(t,e):n===r?a(t,e):o(t,e)},function(t,e,n){(function(t){var n="[object Arguments]",r="[object Function]",i="[object GeneratorFunction]",s="[object Map]",o="[object Set]",a=/\w*$/,u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[s]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[o]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[r]=l["[object WeakMap]"]=!1;var h="object"==typeof global&&global&&global.Object===Object&&global,d="object"==typeof self&&self&&self.Object===Object&&self,f=h||d||Function("return this")(),p=e&&!e.nodeType&&e,g=p&&"object"==typeof t&&t&&!t.nodeType&&t,D=g&&g.exports===p;function m(t,e){return t.set(e[0],e[1]),t}function y(t,e){return t.add(e),t}function v(t,e,n,r){var i=-1,s=t?t.length:0;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function b(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function E(t,e){return function(n){return t(e(n))}}function C(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var F,A=Array.prototype,T=Function.prototype,_=Object.prototype,I=f["__core-js_shared__"],S=(F=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",P=T.toString,k=_.hasOwnProperty,N=_.toString,O=RegExp("^"+P.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=D?f.Buffer:void 0,L=f.Symbol,B=f.Uint8Array,j=E(Object.getPrototypeOf,Object),x=Object.create,M=_.propertyIsEnumerable,V=A.splice,U=Object.getOwnPropertySymbols,q=R?R.isBuffer:void 0,z=E(Object.keys,Object),H=gt(f,"DataView"),$=gt(f,"Map"),K=gt(f,"Promise"),G=gt(f,"Set"),W=gt(f,"WeakMap"),J=gt(Object,"create"),Q=bt(H),X=bt($),Y=bt(K),Z=bt(G),tt=bt(W),et=L?L.prototype:void 0,nt=et?et.valueOf:void 0;function rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){this.__data__=new it(t)}function at(t,e){var r=Et(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ct(t)}(t)&&k.call(t,"callee")&&(!M.call(t,"callee")||N.call(t)==n)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],i=r.length,s=!!i;for(var o in t)!e&&!k.call(t,o)||s&&("length"==o||yt(o,i))||r.push(o);return r}function ut(t,e,n){var r=t[e];k.call(t,e)&&wt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function ct(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1}function lt(t,e,u,c,h,d,f){var p;if(c&&(p=d?c(t,h,d,f):c(t)),void 0!==p)return p;if(!Tt(t))return t;var g=Et(t);if(g){if(p=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&k.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,p)}else{var D=mt(t),E=D==r||D==i;if(Ft(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if("[object Object]"==D||D==n||E&&!d){if(b(t))return d?t:{};if(p=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=j(t),Tt(e)?x(e):{});var e}(E?{}:t),!e)return function(t,e){return ft(t,Dt(t),e)}(t,function(t,e){return t&&ft(e,_t(e),t)}(p,t))}else{if(!l[D])return d?t:{};p=function(t,e,n,r){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return dt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var n=e?dt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?dt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return v(e?n(w(t),!0):w(t),m,new t.constructor)}(t,r,n);case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case o:return function(t,e,n){return v(e?n(C(t),!0):C(t),y,new t.constructor)}(t,r,n);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,D,lt,e)}}f||(f=new ot);var F=f.get(t);if(F)return F;if(f.set(t,p),!g)var A=u?function(t){return function(t,e,n){var r=e(t);return Et(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,_t,Dt)}(t):_t(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(A||t,(function(n,r){A&&(n=t[r=n]),ut(p,r,lt(n,e,u,c,r,t,f))})),p}function ht(t){return!(!Tt(t)||(e=t,S&&S in e))&&(At(t)||b(t)?O:u).test(bt(t));var e}function dt(t){var e=new t.constructor(t.byteLength);return new B(e).set(new B(t)),e}function ft(t,e,n,r){n||(n={});for(var i=-1,s=e.length;++i<s;){var o=e[i],a=r?r(n[o],t[o],o,n,t):void 0;ut(n,o,void 0===a?t[o]:a)}return n}function pt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function gt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(n)?n:void 0}rt.prototype.clear=function(){this.__data__=J?J(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return k.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:k.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,n=ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():V.call(e,n,1),!0)},it.prototype.get=function(t){var e=this.__data__,n=ct(e,t);return n<0?void 0:e[n][1]},it.prototype.has=function(t){return ct(this.__data__,t)>-1},it.prototype.set=function(t,e){var n=this.__data__,r=ct(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new rt,map:new($||it),string:new rt}},st.prototype.delete=function(t){return pt(this,t).delete(t)},st.prototype.get=function(t){return pt(this,t).get(t)},st.prototype.has=function(t){return pt(this,t).has(t)},st.prototype.set=function(t,e){return pt(this,t).set(t,e),this},ot.prototype.clear=function(){this.__data__=new it},ot.prototype.delete=function(t){return this.__data__.delete(t)},ot.prototype.get=function(t){return this.__data__.get(t)},ot.prototype.has=function(t){return this.__data__.has(t)},ot.prototype.set=function(t,e){var n=this.__data__;if(n instanceof it){var r=n.__data__;if(!$||r.length<199)return r.push([t,e]),this;n=this.__data__=new st(r)}return n.set(t,e),this};var Dt=U?E(U,Object):function(){return[]},mt=function(t){return N.call(t)};function yt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||c.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||_)}function bt(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(H&&"[object DataView]"!=mt(new H(new ArrayBuffer(1)))||$&&mt(new $)!=s||K&&"[object Promise]"!=mt(K.resolve())||G&&mt(new G)!=o||W&&"[object WeakMap]"!=mt(new W))&&(mt=function(t){var e=N.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?bt(n):void 0;if(r)switch(r){case Q:return"[object DataView]";case X:return s;case Y:return"[object Promise]";case Z:return o;case tt:return"[object WeakMap]"}return e});var Et=Array.isArray;function Ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var Ft=q||function(){return!1};function At(t){var e=Tt(t)?N.call(t):"";return e==r||e==i}function Tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function _t(t){return Ct(t)?at(t):function(t){if(!vt(t))return z(t);var e=[];for(var n in Object(t))k.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}).call(this,n(4)(t))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.validateConfig=void 0;const i=r(n(36));e.validateConfig=(t,e)=>{const n=i.default[t];if(!n(e)&&n.errors){const t=n.errors.map(t=>({message:t.message,params:t.params,schemaPath:t.schemaPath}));throw console.log("config",e),console.log("errors",t),new Error("Invalid config.")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mapDataUsingRowHeights=void 0;const r=n(5),i=t=>new Array(t).fill("");e.mapDataUsingRowHeights=(t,e,n)=>{const s=t[0].length,o=t.map((t,o)=>{const a=e[o],u=Array.from({length:a},()=>new Array(s).fill(""));return t.forEach((t,e)=>{((t,e,n)=>{const{verticalAlignment:r}=n,s=e-t.length;return"top"===r?[...t,...i(s)]:"bottom"===r?[...i(s),...t]:[...i(Math.floor(s/2)),...t,...i(Math.ceil(s/2))]})(r.wrapCell(t,n.columns[e].width,n.columns[e].wrapWord),a,n.columns[e]).forEach((t,n)=>{u[n][e]=t})}),u});return a=o,[].concat(...a);var a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stringifyTableData=void 0;const r=n(0);e.stringifyTableData=t=>t.map(t=>t.map(t=>r.normalizeString(String(t))))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCellWidths=void 0;const i=r(n(1));e.calculateCellWidths=t=>t.map(t=>Math.max(...t.split("\n").map(i.default)))},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.getBorderCharacters=e.createStream=e.table=void 0;const s=n(24);Object.defineProperty(e,"createStream",{enumerable:!0,get:function(){return s.createStream}});const o=n(14);Object.defineProperty(e,"getBorderCharacters",{enumerable:!0,get:function(){return o.getBorderCharacters}});const a=n(40);Object.defineProperty(e,"table",{enumerable:!0,get:function(){return a.table}}),i(n(46),e)},function(t,e,n){"use strict";n.d(e,"a",(function(){return pl}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function i(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function a(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}Object.create;function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function u(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var d=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,f.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),f=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?p(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",u=new d(i,a,r);return u},t}();function p(t,e){return t.replace(g,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],u=e[o];if(m(a)&&m(u)){if(!D(a,u))return!1}else if(a!==u)return!1}for(var c=0,l=r;c<l.length;c++){o=l[c];if(!n.includes(o))return!1}return!0}function m(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"==typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],u=this.chain_[1],c=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=l^u&(c^l),o=1518500249):(s=u^c^l,o=1859775393):r<60?(s=u&c|l&(u|c),o=2400959708):(s=u^c^l,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=l,l=c,c=4294967295&(u<<30|u>>>2),u=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<e;){if(0===s)for(;r<=n;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(i[s]=t.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<e;)if(i[s]=t[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}}();!function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=y),void 0===r.error&&(r.error=y),void 0===r.complete&&(r.complete=y);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))}}();function y(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(t){return t&&t._delegate?t._delegate:t}var b=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),w=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new l;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=a(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(t){}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(u(u([],a(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),a(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t="[DEFAULT]"),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var u=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var c=o(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var h=a(l.value,2),d=h[0],f=h[1];s===this.normalizeInstanceIdentifier(d)&&f.resolve(u)}}catch(t){e={error:t}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return u},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=o(i),a=s.next();!a.done;a=s.next()){var u=a.value;try{u(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t="[DEFAULT]"),this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E,C=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new w(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function F(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A,T=[];!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(A||(A={}));var _={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},I=A.INFO,S=((E={})[A.DEBUG]="log",E[A.VERBOSE]="log",E[A.INFO]="info",E[A.WARN]="warn",E[A.ERROR]="error",E),P=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=S[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,F(["["+i+"]  "+t.name+":"],n))}},k=function(){function t(t){this.name=t,this._logLevel=I,this._logHandler=P,this._userLogHandler=null,T.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in A))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?_[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,F([this,A.DEBUG],t)),this._logHandler.apply(this,F([this,A.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,F([this,A.VERBOSE],t)),this._logHandler.apply(this,F([this,A.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,F([this,A.INFO],t)),this._logHandler.apply(this,F([this,A.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,F([this,A.WARN],t)),this._logHandler.apply(this,F([this,A.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,F([this,A.ERROR],t)),this._logHandler.apply(this,F([this,A.ERROR],t))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const O=new k("@firebase/app"),R={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},L=new Map,B=new Map;function j(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function x(t){const e=t.name;if(B.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;B.set(e,t);for(const e of L.values())j(e,t);return!0}function M(t,e){return t.container.getProvider(e)}function V(t,e,n="[DEFAULT]"){M(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new b("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){var r;let i=null!==(r=R[t])&&void 0!==r?r:t;n&&(i+="-"+n);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}x(new b(i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H;x(new b("platform-logger",t=>new N(t),"PRIVATE")),z("@firebase/app","0.7.0",H),z("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
z("firebase","9.0.2","app");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var $=function(t,e){return($=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function K(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var G,W="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},J=J||{},Q=W||self;function X(){}function Y(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Z(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var tt="closure_uid_"+(1e9*Math.random()>>>0),et=0;function nt(t,e,n){return t.call.apply(t.bind,arguments)}function rt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return(it=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?nt:rt).apply(null,arguments)}function st(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function at(){this.s=this.s,this.o=this.o}var ut={};at.prototype.s=!1,at.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,tt)&&t[tt]||(t[tt]=++et)}(this);delete ut[t]}},at.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var ct=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},lt=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ht(t){return Array.prototype.concat.apply([],arguments)}function dt(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function ft(t){return/^[\s\xa0]*$/.test(t)}var pt,gt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Dt(t,e){return-1!=t.indexOf(e)}function mt(t,e){return t<e?-1:t>e?1:0}t:{var yt=Q.navigator;if(yt){var vt=yt.userAgent;if(vt){pt=vt;break t}}pt=""}function bt(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function wt(t){var e={};for(var n in t)e[n]=t[n];return e}var Et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ct(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Et.length;s++)n=Et[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ft(t){return Ft[" "](t),t}Ft[" "]=X;var At,Tt,_t=Dt(pt,"Opera"),It=Dt(pt,"Trident")||Dt(pt,"MSIE"),St=Dt(pt,"Edge"),Pt=St||It,kt=Dt(pt,"Gecko")&&!(Dt(pt.toLowerCase(),"webkit")&&!Dt(pt,"Edge"))&&!(Dt(pt,"Trident")||Dt(pt,"MSIE"))&&!Dt(pt,"Edge"),Nt=Dt(pt.toLowerCase(),"webkit")&&!Dt(pt,"Edge");function Ot(){var t=Q.document;return t?t.documentMode:void 0}t:{var Rt="",Lt=(Tt=pt,kt?/rv:([^\);]+)(\)|;)/.exec(Tt):St?/Edge\/([\d\.]+)/.exec(Tt):It?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Tt):Nt?/WebKit\/(\S+)/.exec(Tt):_t?/(?:Version)[ \/]?(\S+)/.exec(Tt):void 0);if(Lt&&(Rt=Lt?Lt[1]:""),It){var Bt=Ot();if(null!=Bt&&Bt>parseFloat(Rt)){At=String(Bt);break t}}At=Rt}var jt,xt={};function Mt(){return function(t){var e=xt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=gt(String(At)).split("."),n=gt("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=mt(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||mt(0==s[2].length,0==o[2].length)||mt(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(Q.document&&It){var Vt=Ot();jt=Vt||(parseInt(At,10)||void 0)}else jt=void 0;var Ut=jt,qt=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",X,e),Q.removeEventListener("test",X,e)}catch(t){}return t}();function zt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ht(t,e){if(zt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kt){t:{try{Ft(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$t[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ht.Z.h.call(this)}}zt.prototype.h=function(){this.defaultPrevented=!0},ot(Ht,zt);var $t={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),Gt=0;function Wt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Gt,this.ca=this.fa=!1}function Jt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Qt(t){this.src=t,this.g={},this.h=0}function Xt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=ct(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Jt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Yt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Qt.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Yt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Wt(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var Zt="closure_lm_"+(1e6*Math.random()|0),te={};function ee(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=ue(r),e&&e[Kt]?e.O(n,r,Z(i)?!!i.capture:!!i,s):ne(e,n,r,!0,i,s)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ee(t,e[s],n,r,i);return null}return n=ue(n),t&&t[Kt]?t.N(e,n,Z(r)?!!r.capture:!!r,i):ne(t,e,n,!1,r,i)}function ne(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Z(i)?!!i.capture:!!i,a=oe(t);if(a||(t[Zt]=a=new Qt(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=se;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)qt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ie(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function re(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Kt])Xt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ie(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=oe(e))?(Xt(n,t),0==n.h&&(n.src=null,e[Zt]=null)):Jt(t)}}}function ie(t){return t in te?te[t]:te[t]="on"+t}function se(t,e){if(t.ca)t=!0;else{e=new Ht(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&re(t),t=n.call(r,e)}return t}function oe(t){return(t=t[Zt])instanceof Qt?t:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(t){return"function"==typeof t?t:(t[ae]||(t[ae]=function(e){return t.handleEvent(e)}),t[ae])}function ce(){at.call(this),this.i=new Qt(this),this.P=this,this.I=null}function le(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new zt(e,t);else if(e instanceof zt)e.target=e.target||t;else{var i=e;Ct(e=new zt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=he(o,r,!0,e)&&i}if(i=he(o=e.g=t,r,!0,e)&&i,i=he(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=he(o=e.g=n[s],r,!1,e)&&i}function he(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Xt(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}ot(ce,at),ce.prototype[Kt]=!0,ce.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else i=Z(i)?!!i.capture:!!i,r=ue(r),e&&e[Kt]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(r=Yt(o=e.g[n],r,i,s))&&(Jt(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--)))):e&&(e=oe(e))&&(n=e.g[n.toString()],e=-1,n&&(e=Yt(n,r,i,s)),(r=-1<e?n[e]:null)&&re(r))}(this,t,e,n,r)},ce.prototype.M=function(){if(ce.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Jt(n[r]);delete e.g[t],e.h--}}this.I=null},ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var de=Q.JSON.stringify;function fe(){var t=we,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var pe,ge=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=De.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),De=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new me}),(function(t){return t.reset()})),me=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function ye(t){Q.setTimeout((function(){throw t}),0)}function ve(t,e){pe||function(){var t=Q.Promise.resolve(void 0);pe=function(){t.then(Ee)}}(),be||(pe(),be=!0),we.add(t,e)}var be=!1,we=new ge;function Ee(){for(var t;t=fe();){try{t.h.call(t.g)}catch(t){ye(t)}var e=De;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}be=!1}function Ce(t,e){ce.call(this),this.h=t||1,this.g=e||Q,this.j=it(this.kb,this),this.l=Date.now()}function Fe(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ae(t,e,n){if("function"==typeof t)n&&(t=it(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=it(t.handleEvent,t)}return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Te(t){t.g=Ae((function(){t.g=null,t.i&&(t.i=!1,Te(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}ot(Ce,ce),(G=Ce.prototype).da=!1,G.S=null,G.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),le(this,"tick"),this.da&&(Fe(this),this.start()))}},G.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},G.M=function(){Ce.Z.M.call(this),Fe(this),delete this.g};var _e=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}$(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Te(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(at);function Ie(t){at.call(this),this.h=t,this.g={}}ot(Ie,at);var Se=[];function Pe(t,e,n,r){Array.isArray(n)||(n&&(Se[0]=n.toString()),n=Se);for(var i=0;i<n.length;i++){var s=ee(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ke(t){bt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&re(t)}),t),t.g={}}function Ne(){this.g=!0}function Oe(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return de(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ie.prototype.M=function(){Ie.Z.M.call(this),ke(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ne.prototype.Aa=function(){this.g=!1},Ne.prototype.info=function(){};var Re={},Le=null;function Be(){return Le=Le||new ce}function je(t){zt.call(this,Re.Ma,t)}function xe(t){var e=Be();le(e,new je(e,t))}function Me(t,e){zt.call(this,Re.STAT_EVENT,t),this.stat=e}function Ve(t){var e=Be();le(e,new Me(e,t))}function Ue(t,e){zt.call(this,Re.Na,t),this.size=e}function qe(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Q.setTimeout((function(){t()}),e)}Re.Ma="serverreachability",ot(je,zt),Re.STAT_EVENT="statevent",ot(Me,zt),Re.Na="timingevent",ot(Ue,zt);var ze={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},He={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $e(){}function Ke(t){return t.h||(t.h=t.i())}function Ge(){}$e.prototype.h=null;var We,Je={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qe(){zt.call(this,"d")}function Xe(){zt.call(this,"c")}function Ye(){}function Ze(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ie(this),this.P=en,t=Pt?125:void 0,this.W=new Ce(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new tn}function tn(){this.i=null,this.g="",this.h=!1}ot(Qe,zt),ot(Xe,zt),ot(Ye,$e),Ye.prototype.g=function(){return new XMLHttpRequest},Ye.prototype.i=function(){return{}},We=new Ye;var en=45e3,nn={},rn={};function sn(t,e,n){t.K=1,t.v=In(En(e)),t.s=n,t.U=!0,on(t,null)}function on(t,e){t.F=Date.now(),ln(t),t.A=En(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Un(n.h,"t",r),t.C=0,n=t.l.H,t.h=new tn,t.g=qr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new _e(it(t.Ia,t,t.g),t.O)),Pe(t.V,t.g,"readystatechange",t.gb),e=t.H?wt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xe(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function an(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function un(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=cn(t,n))==rn){4==e&&(t.o=4,Ve(14),i=!1),Oe(t.j,t.m,null,"[Incomplete Response]");break}if(r==nn){t.o=4,Ve(15),Oe(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Oe(t.j,t.m,r,null),gn(t,r)}an(t)&&r!=rn&&r!=nn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ve(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rr(e),e.L=!0,Ve(11))):(Oe(t.j,t.m,n,"[Invalid Chunked Response]"),pn(t),fn(t))}function cn(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?rn:(n=Number(e.substring(n,r)),isNaN(n)?nn:(r+=1)+n>e.length?rn:(e=e.substr(r,n),t.C=r+n,e))}function ln(t){t.Y=Date.now()+t.P,hn(t,t.P)}function hn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qe(it(t.eb,t),e)}function dn(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}function fn(t){0==t.l.G||t.I||jr(t.l,t)}function pn(t){dn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fe(t.W),ke(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Wn(n.i,t)))if(n.I=t.N,!t.J&&Wn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Br(n),Ar(n)}Or(n),Ve(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=qe(it(n.ab,n),6e3));if(1>=Gn(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Mr(n,11)}else if((t.J||n.g==t)&&Br(n),!ft(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var u=s[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=t.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(Dt(l,"spdy")||Dt(l,"quic")||Dt(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Jn(h,h.h),h.h=null))}if(r.D){var d=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,_n(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=Ur(r,r.H?r.la:null,r.W),f.J){Qn(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(dn(p),ln(p)),r.g=f}else Nr(r);0<n.l.length&&Ir(n)}else"stop"!=s[0]&&"close"!=s[0]||Mr(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Mr(n,7):Fr(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}xe(4)}catch(s){}}function Dn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Y(t)||"string"==typeof t)lt(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Y(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Y(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function mn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof mn)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function yn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];vn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)vn(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(G=Ze.prototype).setTimeout=function(t){this.P=t},G.gb=function(t){t=t.target;var e=this.L;e&&3==vr(t)?e.l():this.Ia(t)},G.Ia=function(t){try{if(t==this.g)t:{var e=vr(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||Pt||this.g&&(this.h.h||this.g.ga()||br(this.g)))){this.I||4!=e||7==n||xe(8==n||0>=r?3:2),dn(this);var i=this.g.ba();this.N=i;e:if(an(this)){var s=br(this.g);t="";var o=s.length,a=4==vr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){pn(this),fn(this);var u="";break e}this.h.i=new Q.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ft(c)){var h=c;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,Ve(12),pn(this),fn(this);break t}Oe(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gn(this,i)}this.U?(un(this,e,u),Pt&&this.i&&3==e&&(Pe(this.V,this.W,"tick",this.fb),this.W.start())):(Oe(this.j,this.m,u,null),gn(this,u)),4==e&&pn(this),this.i&&!this.I&&(4==e?jr(this.l,this):(this.i=!1,ln(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),pn(this),fn(this)}}}catch(e){}},G.fb=function(){if(this.g){var t=vr(this.g),e=this.g.ga();this.C<e.length&&(dn(this),un(this,t,e),this.i&&4!=t&&ln(this))}},G.cancel=function(){this.I=!0,pn(this)},G.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(xe(3),Ve(17)),pn(this),this.o=2,fn(this)):hn(this,this.Y-t)},(G=mn.prototype).R=function(){yn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},G.T=function(){return yn(this),this.g.concat()},G.get=function(t,e){return vn(this.h,t)?this.h[t]:e},G.set=function(t,e){vn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},G.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var bn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof wn){this.g=void 0!==e?e:t.g,Cn(this,t.j),this.s=t.s,Fn(this,t.i),An(this,t.m),this.l=t.l,e=t.h;var n=new jn;n.i=e.i,e.g&&(n.g=new mn(e.g),n.h=e.h),Tn(this,n),this.o=t.o}else t&&(n=String(t).match(bn))?(this.g=!!e,Cn(this,n[1]||"",!0),this.s=Sn(n[2]||""),Fn(this,n[3]||"",!0),An(this,n[4]),this.l=Sn(n[5]||"",!0),Tn(this,n[6]||"",!0),this.o=Sn(n[7]||"")):(this.g=!!e,this.h=new jn(null,this.g))}function En(t){return new wn(t)}function Cn(t,e,n){t.j=n?Sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fn(t,e,n){t.i=n?Sn(e,!0):e}function An(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tn(t,e,n){e instanceof jn?(t.h=e,function(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Mn(this,e),Un(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Pn(e,Ln)),t.h=new jn(e,t.g))}function _n(t,e,n){t.h.set(e,n)}function In(t){return _n(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,kn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Pn(e,Nn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Pn(e,Nn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Pn(n,"/"==n.charAt(0)?Rn:On,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Pn(n,Bn)),t.join("")};var Nn=/[#\/\?@]/g,On=/[#\?:]/g,Rn=/[#\?]/g,Ln=/[#\?@]/g,Bn=/#/g;function jn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new mn,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Mn(t,e){xn(t),e=qn(t,e),vn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,vn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&yn(t)))}function Vn(t,e){return xn(t),e=qn(t,e),vn(t.g.h,e)}function Un(t,e,n){Mn(t,e),0<n.length&&(t.i=null,t.g.set(qn(t,e),dt(n)),t.h+=n.length)}function qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(G=jn.prototype).add=function(t,e){xn(this),this.i=null,t=qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},G.forEach=function(t,e){xn(this),this.g.forEach((function(n,r){lt(n,(function(n){t.call(e,n,r,this)}),this)}),this)},G.T=function(){xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},G.R=function(t){xn(this);var e=[];if("string"==typeof t)Vn(this,t)&&(e=ht(e,this.g.get(qn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ht(e,t[n])}return e},G.set=function(t,e){return xn(this),this.i=null,Vn(this,t=qn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},G.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},G.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var zn=function(t,e){this.h=t,this.g=e};function Hn(t){this.l=t||$n,Q.PerformanceNavigationTiming?t=0<(t=Q.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Q.g&&Q.g.Ea&&Q.g.Ea()&&Q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $n=10;function Kn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gn(t){return t.h?1:t.g?t.g.size:0}function Wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jn(t,e){t.g?t.g.add(e):t.h=e}function Qn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Xn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=K(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return dt(t.i)}function Yn(){}function Zn(){this.g=new Yn}function tr(t,e,n){var r=n||"";try{Dn(t,(function(t,n){var i=t;Z(t)&&(i=de(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function er(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function nr(t){this.l=t.$b||null,this.j=t.ib||!1}function rr(t,e){ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ir,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Hn.prototype.cancel=function(){var t,e;if(this.i=Xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=K(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Yn.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)},Yn.prototype.parse=function(t){return Q.JSON.parse(t,void 0)},ot(nr,$e),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(t){return function(){return t}}({}),ot(rr,ce);var ir=0;function sr(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function or(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ar(t)}function ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(G=rr.prototype).open=function(t,e){if(this.readyState!=ir)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ar(this)},G.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,or(this)),this.readyState=ir},G.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Q.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sr(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},G.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?or(this):ar(this),3==this.readyState&&sr(this)}},G.Ua=function(t){this.g&&(this.response=this.responseText=t,or(this))},G.Ta=function(t){this.g&&(this.response=t,or(this))},G.ha=function(){this.g&&or(this)},G.setRequestHeader=function(t,e){this.v.append(t,e)},G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},G.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ur=Q.JSON.parse;function cr(t){ce.call(this),this.headers=new mn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lr,this.K=this.L=!1}ot(cr,ce);var lr="",hr=/^https?$/i,dr=["POST","PUT"];function fr(t){return"content-type"==t.toLowerCase()}function pr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gr(t),mr(t)}function gr(t){t.D||(t.D=!0,le(t,"complete"),le(t,"error"))}function Dr(t){if(t.h&&void 0!==J&&(!t.C[1]||4!=vr(t)||2!=t.ba()))if(t.v&&4==vr(t))Ae(t.Fa,0,t);else if(le(t,"readystatechange"),4==vr(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(bn)[1]||null;if(!s&&Q.self&&Q.self.location){var o=Q.self.location.protocol;s=o.substr(0,o.length-1)}i=!hr.test(s?s.toLowerCase():"")}e=i}if(e)le(t,"complete"),le(t,"success");else{t.m=6;try{var a=2<vr(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",gr(t)}}finally{mr(t)}}}function mr(t,e){if(t.g){yr(t);var n=t.g,r=t.C[0]?X:null;t.g=null,t.C=null,e||le(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function yr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function vr(t){return t.g?t.g.readyState:0}function br(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function wr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return bt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):_n(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cr(t){this.za=0,this.l=[],this.h=new Ne,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Er("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Er("baseRetryDelayMs",5e3,t),this.$a=Er("retryDelaySeedMs",1e4,t),this.Ya=Er("forwardChannelMaxRetries",2,t),this.ra=Er("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hn(t&&t.concurrentRequestLimit),this.Ca=new Zn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Fr(t){if(Tr(t),3==t.G){var e=t.V++,n=En(t.F);_n(n,"SID",t.J),_n(n,"RID",e),_n(n,"TYPE","terminate"),Pr(t,n),(e=new Ze(t,t.h,e,void 0)).K=2,e.v=In(En(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&((new Image).src=e.v,n=!0),n||(e.g=qr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ln(e)}Vr(t)}function Ar(t){t.g&&(Rr(t),t.g.cancel(),t.g=null)}function Tr(t){Ar(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Br(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Q.clearTimeout(t.m),t.m=null)}function _r(t,e){t.l.push(new zn(t.Za++,e)),3==t.G&&Ir(t)}function Ir(t){Kn(t.i)||t.m||(t.m=!0,ve(t.Ha,t),t.C=0)}function Sr(t,e){var n;n=e?e.m:t.V++;var r=En(t.F);_n(r,"SID",t.J),_n(r,"RID",n),_n(r,"AID",t.U),Pr(t,r),t.o&&t.s&&wr(r,t.o,t.s),n=new Ze(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=kr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Jn(t.i,n),sn(n,r,e)}function Pr(t,e){t.j&&Dn({},(function(t,n){_n(e,n,t)}))}function kr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?it(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=s))s=Math.max(0,i[u].h-100),a=!1;else try{tr(l,o,"req"+c+"_")}catch(t){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function Nr(t){t.g||t.u||(t.Y=1,ve(t.Ga,t),t.A=0)}function Or(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=qe(it(t.Ga,t),xr(t,t.A)),t.A++,!0)}function Rr(t){null!=t.B&&(Q.clearTimeout(t.B),t.B=null)}function Lr(t){t.g=new Ze(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=En(t.oa);_n(e,"RID","rpc"),_n(e,"SID",t.J),_n(e,"CI",t.N?"0":"1"),_n(e,"AID",t.U),Pr(t,e),_n(e,"TYPE","xmlhttp"),t.o&&t.s&&wr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=In(En(e)),n.s=null,n.U=!0,on(n,t)}function Br(t){null!=t.v&&(Q.clearTimeout(t.v),t.v=null)}function jr(t,e){var n=null;if(t.g==e){Br(t),Rr(t),t.g=null;var r=2}else{if(!Wn(t.i,e))return;n=e.D,Qn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;le(r=Be(),new Ue(r,n,e,i)),Ir(t)}else Nr(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Gn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=qe(it(t.Ha,t,e),xr(t,t.C)),t.C++,!0))}(t,e)||2==r&&Or(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mr(t,5);break;case 4:Mr(t,10);break;case 3:Mr(t,6);break;default:Mr(t,2)}}function xr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=it(t.jb,t);n||(n=new wn("//www.google.com/images/cleardot.gif"),Q.location&&"http"==Q.location.protocol||Cn(n,"https"),In(n)),function(t,e){var n=new Ne;if(Q.Image){var r=new Image;r.onload=st(er,n,r,"TestLoadImage: loaded",!0,e),r.onerror=st(er,n,r,"TestLoadImage: error",!1,e),r.onabort=st(er,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=st(er,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Ve(2);t.G=0,t.j&&t.j.va(e),Vr(t),Tr(t)}function Vr(t){t.G=0,t.I=-1,t.j&&(0==Xn(t.i).length&&0==t.l.length||(t.i.i.length=0,dt(t.l),t.l.length=0),t.j.ua())}function Ur(t,e,n){var r=function(t){return t instanceof wn?En(t):new wn(t,void 0)}(n);if(""!=r.i)e&&Fn(r,e+"."+r.i),An(r,r.m);else{var i=Q.location;r=function(t,e,n,r){var i=new wn(null,void 0);return t&&Cn(i,t),e&&Fn(i,e),n&&An(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&bt(t.aa,(function(t,e){_n(r,e,t)})),e=t.D,n=t.sa,e&&n&&_n(r,e,n),_n(r,"VER",t.ma),Pr(t,r),r}function qr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new cr(new nr({ib:!0})):new cr(t.qa)).L=t.H,e}function zr(){}function Hr(){if(It&&!(10<=Number(Ut)))throw Error("Environmental error: no available transport.")}function $r(t,e){ce.call(this),this.g=new Cr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ft(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ft(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wr(this)}function Kr(t){Qe.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gr(){Xe.call(this),this.status=1}function Wr(t){this.g=t}(G=cr.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():We.g(),this.C=this.u?Ke(this.u):Ke(We),this.g.onreadystatechange=it(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void pr(this,t)}t=n||"";var i=new mn(this.headers);r&&Dn(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=fr,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Q.FormData&&t instanceof Q.FormData,!(0<=ct(dr,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yr(this),0<this.B&&((this.K=function(t){return It&&Mt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.pa,this)):this.A=Ae(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){pr(this,t)}},G.pa=function(){void 0!==J&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))},G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,le(this,"complete"),le(this,"abort"),mr(this))},G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mr(this,!0)),cr.Z.M.call(this)},G.Fa=function(){this.s||(this.F||this.v||this.l?Dr(this):this.cb())},G.cb=function(){Dr(this)},G.ba=function(){try{return 2<vr(this)?this.g.status:-1}catch(t){return-1}},G.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},G.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ur(e)}},G.Da=function(){return this.m},G.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(G=Cr.prototype).ma=8,G.G=1,G.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},G.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ze(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Ct(n=wt(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=kr(this,e,r),_n(i=En(this.F),"RID",t),_n(i,"CVER",22),this.D&&_n(i,"X-HTTP-Session-Id",this.D),Pr(this,i),this.o&&n&&wr(i,this.o,n),Jn(this.i,e),this.Ra&&_n(i,"TYPE","init"),this.ja?(_n(i,"$req",r),_n(i,"SID","null"),e.$=!0,sn(e,i,null)):sn(e,i,r),this.G=2}}else 3==this.G&&(t?Sr(this,t):0==this.l.length||Kn(this.i)||Sr(this))},G.Ga=function(){if(this.u=null,Lr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=qe(it(this.bb,this),t)}},G.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),Ar(this),Lr(this))},G.ab=function(){null!=this.v&&(this.v=null,Ar(this),Or(this),Ve(19))},G.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))},(G=zr.prototype).xa=function(){},G.wa=function(){},G.va=function(){},G.ua=function(){},G.Oa=function(){},Hr.prototype.g=function(t,e){return new $r(t,e)},ot($r,ce),$r.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ve(it(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ur(t,null,t.W),Ir(t)},$r.prototype.close=function(){Fr(this.g)},$r.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,_r(this.g,e)}else this.v?((e={}).__data__=de(t),_r(this.g,e)):_r(this.g,t)},$r.prototype.M=function(){this.g.j=null,delete this.j,Fr(this.g),delete this.g,$r.Z.M.call(this)},ot(Kr,Qe),ot(Gr,Xe),ot(Wr,zr),Wr.prototype.xa=function(){le(this.g,"a")},Wr.prototype.wa=function(t){le(this.g,new Kr(t))},Wr.prototype.va=function(t){le(this.g,new Gr(t))},Wr.prototype.ua=function(){le(this.g,"b")},Hr.prototype.createWebChannel=Hr.prototype.g,$r.prototype.send=$r.prototype.u,$r.prototype.open=$r.prototype.m,$r.prototype.close=$r.prototype.close,ze.NO_ERROR=0,ze.TIMEOUT=8,ze.HTTP_ERROR=6,He.COMPLETE="complete",Ge.EventType=Je,Je.OPEN="a",Je.CLOSE="b",Je.ERROR="c",Je.MESSAGE="d",ce.prototype.listen=ce.prototype.N,cr.prototype.listenOnce=cr.prototype.O,cr.prototype.getLastError=cr.prototype.La,cr.prototype.getLastErrorCode=cr.prototype.Da,cr.prototype.getStatus=cr.prototype.ba,cr.prototype.getResponseJson=cr.prototype.Qa,cr.prototype.getResponseText=cr.prototype.ga,cr.prototype.send=cr.prototype.ea;var Jr=function(){return new Hr},Qr=function(){return Be()},Xr=ze,Yr=He,Zr=Re,ti={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ei=nr,ni=Ge,ri=cr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ii.UNAUTHENTICATED=new ii(null),ii.GOOGLE_CREDENTIALS=new ii("google-credentials-uid"),ii.FIRST_PARTY=new ii("first-party-uid"),ii.MOCK_USER=new ii("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let si="9.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new k("@firebase/firestore");function ai(){return oi.logLevel}function ui(t,...e){if(oi.logLevel<=A.DEBUG){const n=e.map(hi);oi.debug(`Firestore (${si}): ${t}`,...n)}}function ci(t,...e){if(oi.logLevel<=A.ERROR){const n=e.map(hi);oi.error(`Firestore (${si}): ${t}`,...n)}}function li(t,...e){if(oi.logLevel<=A.WARN){const n=e.map(hi);oi.warn(`Firestore (${si}): ${t}`,...n)}}function hi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+t;throw ci(e),new Error(e)}function fi(t,e){t||di()}function pi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Di extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class vi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ii.UNAUTHENTICATED))}shutdown(){}}class bi{constructor(t){this.t=t,this.currentUser=ii.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mi,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{ui("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ui("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mi)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(ui("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(fi("string"==typeof e.accessToken),new yi(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return fi(null===t||"string"==typeof t),new ii(t)}}class wi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ii.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Ei{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new wi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(ii.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci.T=-1;class Ai{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Fi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Ti(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Di(gi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Di(gi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Di(gi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Di(gi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ii.fromMillis(Date.now())}static fromDate(t){return Ii.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ii(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ti(this.nanoseconds,t.nanoseconds):Ti(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Si(t)}static min(){return new Si(new Ii(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,n){void 0===e?e=0:e>t.length&&di(),void 0===n?n=t.length-e:n>t.length-e&&di(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Oi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oi?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ri extends Oi{construct(t,e,n){return new Ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Di(gi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Ri(e)}static emptyPath(){return new Ri([])}}const Li=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bi extends Oi{construct(t,e,n){return new Bi(t,e,n)}static isValidIdentifier(t){return Li.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bi.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Bi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Di(gi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Di(gi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Di(gi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Di(gi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Bi(e)}static emptyPath(){return new Bi([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ji(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ji(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ti(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ji.EMPTY_BYTE_STRING=new ji("");const xi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(t){if(fi(!!t),"string"==typeof t){let e=0;const n=xi.exec(t);if(fi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vi(t.seconds),nanos:Vi(t.nanos)}}function Vi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ui(t){return"string"==typeof t?ji.fromBase64String(t):ji.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zi(t){const e=Mi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ii(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return null==t}function $i(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t){this.path=t}static fromPath(t){return new Ki(Ri.fromString(t))}static fromName(t){return new Ki(Ri.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ki(new Ri(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:10:di()}function Wi(t,e){const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mi(t.timestampValue),r=Mi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ui(t.bytesValue).isEqual(Ui(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vi(t.geoPointValue.latitude)===Vi(e.geoPointValue.latitude)&&Vi(t.geoPointValue.longitude)===Vi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vi(t.integerValue)===Vi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vi(t.doubleValue),r=Vi(e.doubleValue);return n===r?$i(n)===$i(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],Wi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Pi(n)!==Pi(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Wi(n[t],r[t])))return!1;return!0}(t,e);default:return di()}}function Ji(t,e){return void 0!==(t.values||[]).find(t=>Wi(t,e))}function Qi(t,e){const n=Gi(t),r=Gi(e);if(n!==r)return Ti(n,r);switch(n){case 0:return 0;case 1:return Ti(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vi(t.integerValue||t.doubleValue),r=Vi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Xi(t.timestampValue,e.timestampValue);case 4:return Xi(zi(t),zi(e));case 5:return Ti(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ui(t),r=Ui(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Ti(n[t],r[t]);if(0!==e)return e}return Ti(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ti(Vi(t.latitude),Vi(e.latitude));return 0!==n?n:Ti(Vi(t.longitude),Vi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Qi(n[t],r[t]);if(e)return e}return Ti(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Ti(r[t],s[t]);if(0!==e)return e;const o=Qi(n[r[t]],i[s[t]]);if(0!==o)return o}return Ti(r.length,s.length)}(t.mapValue,e.mapValue);default:throw di()}}function Xi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ti(t,e);const n=Mi(t),r=Mi(e),i=Ti(n.seconds,r.seconds);return 0!==i?i:Ti(n.nanos,r.nanos)}function Yi(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=Mi(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ui(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,Ki.fromName(r).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${t(e.fields[s])}`;return r+"}"}(e.mapValue):di();var n,r}(t)}function Zi(t){return!!t&&"integerValue"in t}function ts(t){return!!t&&"arrayValue"in t}function es(t){return!!t&&"nullValue"in t}function ns(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rs(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=is(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.value=t}static empty(){return new ss({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!rs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=is(e)}setAll(t){let e=Bi.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=is(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());rs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];rs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ki(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new ss(is(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new os(t,0,Si.min(),ss.empty(),0)}static newFoundDocument(t,e,n){return new os(t,1,e,n,0)}static newNoDocument(t,e){return new os(t,2,e,ss.empty(),0)}static newUnknownDocument(t,e){return new os(t,3,e,ss.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ss.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof os&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new os(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function us(t,e=null,n=[],r=[],i=null,s=null,o=null){return new as(t,e,n,r,i,s,o)}function cs(t){const e=pi(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>function(t){return t.field.canonicalString()+t.op.toString()+Yi(t.value)}(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Es(e.startAt)),e.endAt&&(t+="|ub:",t+=Es(e.endAt)),e.A=t}return e.A}function ls(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Wi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ts(t.startAt,e.startAt)&&Ts(t.endAt,e.endAt)}function hs(t){return Ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ds extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new fs(t,e,n):"array-contains"===e?new ms(t,n):"in"===e?new ys(t,n):"not-in"===e?new vs(t,n):"array-contains-any"===e?new bs(t,n):new ds(t,e,n)}static R(t,e,n){return"in"===e?new ps(t,n):new gs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Qi(e,this.value)):null!==e&&Gi(this.value)===Gi(e)&&this.P(Qi(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return di()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fs extends ds{constructor(t,e,n){super(t,e,n),this.key=Ki.fromName(n.referenceValue)}matches(t){const e=Ki.comparator(t.key,this.key);return this.P(e)}}class ps extends ds{constructor(t,e){super(t,"in",e),this.keys=Ds("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class gs extends ds{constructor(t,e){super(t,"not-in",e),this.keys=Ds("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ds(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Ki.fromName(t.referenceValue))}class ms extends ds{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ts(e)&&Ji(e.arrayValue,this.value)}}class ys extends ds{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ji(this.value.arrayValue,e)}}class vs extends ds{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ji(this.value.arrayValue,e)}}class bs extends ds{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Ji(this.value.arrayValue,t))}}class ws{constructor(t,e){this.position=t,this.before=e}}function Es(t){return`${t.before?"b":"a"}:${t.position.map(t=>Yi(t)).join(",")}`}class Cs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function As(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ki.comparator(Ki.fromName(o.referenceValue),n.key):Qi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ts(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Is(t,e,n,r,i,s,o,a){return new _s(t,e,n,r,i,s,o,a)}function Ss(t){return new _s(t)}function Ps(t){return!Hi(t.limit)&&"F"===t.limitType}function ks(t){return!Hi(t.limit)&&"L"===t.limitType}function Ns(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Os(t){for(const e of t.filters)if(e.v())return e.field;return null}function Rs(t){return null!==t.collectionGroup}function Ls(t){const e=pi(t);if(null===e.V){e.V=[];const t=Os(e),n=Ns(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Cs(t)),e.V.push(new Cs(Bi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Cs(Bi.keyField(),t))}}}return e.V}function Bs(t){const e=pi(t);if(!e.S)if("F"===e.limitType)e.S=us(e.path,e.collectionGroup,Ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ls(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Cs(n.field,e))}const n=e.endAt?new ws(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ws(e.startAt.position,!e.startAt.before):null;e.S=us(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function js(t,e,n){return new _s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xs(t,e){return ls(Bs(t),Bs(e))&&t.limitType===e.limitType}function Ms(t){return`${cs(Bs(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Yi(e.value)}`;var e}).join(", ")}]`),Hi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Es(t.startAt)),t.endAt&&(e+=", endAt: "+Es(t.endAt)),`Target(${e})`}(Bs(t))}; limitType=${t.limitType})`}function Us(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ki.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!As(t.startAt,Ls(t),e))&&(!t.endAt||!As(t.endAt,Ls(t),e))}(t,e)}function qs(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const t=zs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function zs(t,e,n){const r=t.field.isKeyField()?Ki.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Qi(r,i):di()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return di()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function $s(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this._=void 0}}function Gs(t,e,n){return t instanceof Qs?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Xs?Ys(t,e):t instanceof Zs?to(t,e):function(t,e){const n=Js(t,e),r=no(n)+no(t.C);return Zi(n)&&Zi(t.C)?$s(r):Hs(t.N,r)}(t,e)}function Ws(t,e,n){return t instanceof Xs?Ys(t,e):t instanceof Zs?to(t,e):n}function Js(t,e){return t instanceof eo?Zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Qs extends Ks{}class Xs extends Ks{constructor(t){super(),this.elements=t}}function Ys(t,e){const n=ro(e);for(const e of t.elements)n.some(t=>Wi(t,e))||n.push(e);return{arrayValue:{values:n}}}class Zs extends Ks{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const e of t.elements)n=n.filter(t=>!Wi(t,e));return{arrayValue:{values:n}}}class eo extends Ks{constructor(t,e){super(),this.N=t,this.C=e}}function no(t){return Vi(t.integerValue||t.doubleValue)}function ro(t){return ts(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class so{}function oo(t,e,n){t instanceof lo?function(t,e,n){const r=t.value.clone(),i=po(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!io(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=po(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(fo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n){t instanceof lo?function(t,e,n){if(!io(t.precondition,e))return;const r=t.value.clone(),i=go(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(co(e),r).setHasLocalMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!io(t.precondition,e))return;const r=go(t.fieldTransforms,n,e),i=e.data;i.setAll(fo(t)),i.setAll(r),e.convertToFoundDocument(co(e),i).setHasLocalMutations()}(t,e,n):function(t,e){io(t.precondition,e)&&e.convertToNoDocument(Si.min())}(t,e)}function uo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_i(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Xs&&e instanceof Xs||t instanceof Zs&&e instanceof Zs?_i(t.elements,e.elements,Wi):t instanceof eo&&e instanceof eo?Wi(t.C,e.C):t instanceof Qs&&e instanceof Qs}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function co(t){return t.isFoundDocument()?t.version:Si.min()}class lo extends so{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class ho extends so{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function fo(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function po(t,e,n){const r=new Map;fi(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ws(o,a,n[i]))}return r}function go(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Gs(t,s,e))}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mo,yo;function vo(t){if(void 0===t)return ci("GRPC error has no .code"),gi.UNKNOWN;switch(t){case mo.OK:return gi.OK;case mo.CANCELLED:return gi.CANCELLED;case mo.UNKNOWN:return gi.UNKNOWN;case mo.DEADLINE_EXCEEDED:return gi.DEADLINE_EXCEEDED;case mo.RESOURCE_EXHAUSTED:return gi.RESOURCE_EXHAUSTED;case mo.INTERNAL:return gi.INTERNAL;case mo.UNAVAILABLE:return gi.UNAVAILABLE;case mo.UNAUTHENTICATED:return gi.UNAUTHENTICATED;case mo.INVALID_ARGUMENT:return gi.INVALID_ARGUMENT;case mo.NOT_FOUND:return gi.NOT_FOUND;case mo.ALREADY_EXISTS:return gi.ALREADY_EXISTS;case mo.PERMISSION_DENIED:return gi.PERMISSION_DENIED;case mo.FAILED_PRECONDITION:return gi.FAILED_PRECONDITION;case mo.ABORTED:return gi.ABORTED;case mo.OUT_OF_RANGE:return gi.OUT_OF_RANGE;case mo.UNIMPLEMENTED:return gi.UNIMPLEMENTED;case mo.DATA_LOSS:return gi.DATA_LOSS;default:return di()}}(yo=mo||(mo={}))[yo.OK=0]="OK",yo[yo.CANCELLED=1]="CANCELLED",yo[yo.UNKNOWN=2]="UNKNOWN",yo[yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yo[yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yo[yo.NOT_FOUND=5]="NOT_FOUND",yo[yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",yo[yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",yo[yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",yo[yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yo[yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yo[yo.ABORTED=10]="ABORTED",yo[yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",yo[yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",yo[yo.INTERNAL=13]="INTERNAL",yo[yo.UNAVAILABLE=14]="UNAVAILABLE",yo[yo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(t,e){this.comparator=t,this.root=e||Eo.EMPTY}insert(t,e){return new bo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Eo.BLACK,null,null))}remove(t){return new bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Eo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wo(this.root,t,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wo(this.root,t,this.comparator,!0)}}class wo{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Eo{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Eo.RED,this.left=null!=r?r:Eo.EMPTY,this.right=null!=i?i:Eo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Eo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Eo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Eo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Eo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Eo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw di();if(this.right.isRed())throw di();const t=this.left.check();if(t!==this.right.check())throw di();return t+(this.isRed()?0:1)}}Eo.EMPTY=null,Eo.RED=!0,Eo.BLACK=!1,Eo.EMPTY=new class{constructor(){this.size=0}get key(){throw di()}get value(){throw di()}get color(){throw di()}get left(){throw di()}get right(){throw di()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Eo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(t){this.comparator=t,this.data=new bo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fo(this.data.getIterator())}getIteratorFrom(t){return new Fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Co))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Co(this.comparator);return e.data=t,e}}class Fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new bo(Ki.comparator);function To(){return Ao}const _o=new bo(Ki.comparator);function Io(){return _o}new bo(Ki.comparator);const So=new Co(Ki.comparator);function Po(...t){let e=So;for(const n of t)e=e.add(n);return e}const ko=new Co(Ti);function No(){return ko}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ro.createSynthesizedTargetChangeForCurrentChange(t,e)),new Oo(Si.min(),n,No(),To(),Po())}}class Ro{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ro(ji.EMPTY_BYTE_STRING,e,Po(),Po(),Po())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Bo{constructor(t,e){this.targetId=t,this.O=e}}class jo{constructor(t,e,n=ji.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xo{constructor(){this.F=0,this.M=Uo(),this.L=ji.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Po(),e=Po(),n=Po();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:di()}}),new Ro(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Uo()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Mo{constructor(t){this.tt=t,this.et=new Map,this.nt=To(),this.st=Vo(),this.it=new Co(Ti)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:di()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(hs(t))if(0===n){const n=new Ki(t.path);this.at(e,n,os.newNoDocument(n,Si.min()))}else fi(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&hs(i.target)){const e=new Ki(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,os.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Po();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new Oo(t,e,this.it,this.nt,n);return this.nt=To(),this.st=Vo(),this.it=new Co(Ti),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new xo,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Co(Ti),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||ui("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new xo),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Vo(){return new bo(Ki.comparator)}function Uo(){return new bo(Ki.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={asc:"ASCENDING",desc:"DESCENDING"},zo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ho{constructor(t,e){this.databaseId=t,this.D=e}}function $o(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ko(t,e){return t.D?e.toBase64():e.toUint8Array()}function Go(t){return fi(!!t),Si.fromTimestamp(function(t){const e=Mi(t);return new Ii(e.seconds,e.nanos)}(t))}function Wo(t,e){return function(t){return new Ri(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Jo(t){const e=Ri.fromString(t);return fi(da(e)),e}function Qo(t,e){const n=Jo(e);if(n.get(1)!==t.databaseId.projectId)throw new Di(gi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Di(gi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ki(ta(n))}function Xo(t,e){return Wo(t.databaseId,e)}function Yo(t){const e=Jo(t);return 4===e.length?Ri.emptyPath():ta(e)}function Zo(t){return new Ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ta(t){return fi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ea(t,e){return{documents:[Xo(t,e.path)]}}function na(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Xo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ns(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NAN"}};if(es(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ns(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NOT_NAN"}};if(es(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ua(t.field),op:aa(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:ua(t.field),direction:oa(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Hi(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=ia(e.startAt)),e.endAt&&(n.structuredQuery.endAt=ia(e.endAt)),n}function ra(t){let e=Yo(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fi(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[ha(e)]:void 0!==e.fieldFilter?[la(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):di():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Cs(ca(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Hi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=sa(n.startAt));let c=null;return n.endAt&&(c=sa(n.endAt)),Is(e,i,o,s,a,"F",u,c)}function ia(t){return{before:t.before,values:t.position}}function sa(t){const e=!!t.before,n=t.values||[];return new ws(n,e)}function oa(t){return qo[t]}function aa(t){return zo[t]}function ua(t){return{fieldPath:t.canonicalString()}}function ca(t){return Bi.fromServerFormat(t.fieldPath)}function la(t){return ds.create(ca(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return di()}}(t.fieldFilter.op),t.fieldFilter.value)}function ha(t){switch(t.unaryFilter.op){case"IS_NAN":ca(t.unaryFilter.field);return ds.create(V,"==",{doubleValue:NaN});case"IS_NULL":ca(t.unaryFilter.field);return ds.create(x,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":ca(t.unaryFilter.field);return ds.create(z,"!=",{doubleValue:NaN});case"IS_NOT_NULL":ca(t.unaryFilter.field);return ds.create("9.0.0","!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return di()}}function da(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ga(e)),e=pa(t.get(n),e);return ga(e)}function pa(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function ga(t){return t+""}class Da{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Da.store="owner",Da.key="owner";class ma{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}ma.store="mutationQueues",ma.keyPath="userId";class ya{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ya.store="mutations",ya.keyPath="batchId",ya.userMutationsIndex="userMutationsIndex",ya.userMutationsKeyPath=["userId","batchId"];class va{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,fa(e)]}static key(t,e,n){return[t,fa(e),n]}}va.store="documentMutations",va.PLACEHOLDER=new va;class ba{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}ba.store="remoteDocuments",ba.readTimeIndex="readTimeIndex",ba.readTimeIndexPath="readTime",ba.collectionReadTimeIndex="collectionReadTimeIndex",ba.collectionReadTimeIndexPath=["parentPath","readTime"];class wa{constructor(t){this.byteSize=t}}wa.store="remoteDocumentGlobal",wa.key="remoteDocumentGlobalKey";class Ea{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Ea.store="targets",Ea.keyPath="targetId",Ea.queryTargetsIndexName="queryTargetsIndex",Ea.queryTargetsKeyPath=["canonicalId","targetId"];class Ca{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Ca.store="targetDocuments",Ca.keyPath=["targetId","path"],Ca.documentTargetsIndex="documentTargetsIndex",Ca.documentTargetsKeyPath=["path","targetId"];class Fa{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Fa.key="targetGlobalKey",Fa.store="targetGlobal";class Aa{constructor(t,e){this.collectionId=t,this.parent=e}}Aa.store="collectionParents",Aa.keyPath=["collectionId","parent"];class Ta{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Ta.store="clientMetadata",Ta.keyPath="clientId";class _a{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}_a.store="bundles",_a.keyPath="bundleId";class Ia{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Ia.store="namedQueries",Ia.keyPath="name";ma.store,ya.store,va.store,ba.store,Ea.store,Da.store,Fa.store,Ca.store,Ta.store,wa.store,Aa.store,_a.store,Ia.store;const Sa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&di(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ka((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ka?e:ka.resolve(e)}catch(t){return ka.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ka.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ka.reject(e)}static resolve(t){return new ka((e,n)=>{e(t)})}static reject(t){return new ka((e,n)=>{n(t)})}static waitFor(t){return new ka((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=ka.resolve(!1);for(const n of t)e=e.next(t=>t?ka.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&oo(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ao(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ao(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Si.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Po())}isEqual(t){return this.batchId===t.batchId&&_i(this.mutations,t.mutations,(t,e)=>uo(t,e))&&_i(this.baseMutations,t.baseMutations,(t,e)=>uo(t,e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(t,e,n,r,i=Si.min(),s=Si.min(),o=ji.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ra(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.Wt=t}}function Ba(t){const e=ra({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?js(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.Gt=new xa}addToCollectionParentIndex(t,e){return this.Gt.add(e),ka.resolve()}getCollectionParents(t,e){return ka.resolve(this.Gt.getEntries(e))}}class xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Co(Ri.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Co(Ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ma(t,Ma.DEFAULT_COLLECTION_PERCENTILE,Ma.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ma.DEFAULT_COLLECTION_PERCENTILE=10,Ma.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ma.DEFAULT=new Ma(41943040,Ma.DEFAULT_COLLECTION_PERCENTILE,Ma.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ma.DISABLED=new Ma(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Va(0)}static ie(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ua(t){if(t.code!==gi.FAILED_PRECONDITION||t.message!==Sa)throw t;ui("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){ki(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return Ni(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.changes=new qa(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Si.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:os.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ka.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const t of e)t.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Rs(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Ki(e)).next(t=>{let e=Io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Io();return this.Ht.getCollectionParents(t,r).next(s=>ka.forEach(s,s=>{const o=function(t,e){return new _s(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=os.newInvalidDocument(n),r=r.insert(n,i)),ao(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Us(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Po();for(const t of e)for(const e of t.mutations)e instanceof ho&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Po(),r=Po();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new $a(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Si.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const s=this.Mn(e,i);return(Ps(e)||ks(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(ai()<=A.DEBUG&&ui("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Vs(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Co(qs(t));return e.forEach((e,r)=>{Us(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return ai()<=A.DEBUG&&ui("QueryEngine","Using full collection scan to execute query:",Vs(e)),this.On.getDocumentsMatchingQuery(t,e,Si.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new bo(Ti),this.qn=new qa(t=>cs(t),ls),this.Kn=Si.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Ha(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Wa(t,e,n,r){return new Ga(t,e,n,r)}async function Ja(t,e){const n=pi(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Ha(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Po();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Qa(t){const e=pi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Xa(t,e,n,r,i){let s=Po();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=To();return n.forEach((n,o)=>{const a=t.get(n),u=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Si.min())?(e.removeEntry(n,u),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,u),s=s.insert(n,o)):ui("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Ya(t,e){const n=pi(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,ka.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new Ra(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Za(t,e,n){const r=pi(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Na(t))throw t;ui("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function tu(t,e,n){const r=pi(t);let i=Si.min(),s=Po();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=pi(t),i=r.qn.get(n);return void 0!==i?ka.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Bs(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:Si.min(),n?s:Po())).next(t=>({documents:t,Gn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ka.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Go(n.createTime)}),ka.resolve()}getNamedQuery(t,e){return ka.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Ba(t.bundledQuery),readTime:Go(t.readTime)}}(e)),ka.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Zn=new Co(ru.ts),this.es=new Co(ru.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ru(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new ru(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Ki(new Ri([])),n=new ru(e,t),r=new ru(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Ki(new Ri([])),n=new ru(e,t),r=new ru(e,t+1);let i=Po();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new ru(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ru{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Ki.comparator(t.key,e.key)||Ti(t.ls,e.ls)}static ns(t,e){return Ti(t.ls,e.ls)||Ki.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Co(ru.ts)}checkEmpty(t){return ka.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Oa(i,e,n,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new ru(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return ka.resolve(s)}lookupMutationBatch(t,e){return ka.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return ka.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ka.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ka.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ru(e,0),r=new ru(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),ka.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Co(Ti);return e.forEach(t=>{const e=new ru(t,0),r=new ru(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),ka.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ki.isDocumentKey(i)||(i=i.child(""));const s=new ru(new Ki(i),0);let o=new Co(Ti);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),ka.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){fi(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ka.forEach(e.mutations,r=>{const i=new ru(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new ru(e,0),r=this.ds.firstAfterOrEqual(n);return ka.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,ka.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new bo(Ki.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ka.resolve(n?n.document.clone():os.newInvalidDocument(e))}getEntries(t,e){let n=To();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():os.newInvalidDocument(t))}),ka.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=To();const i=new Ki(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Us(e,i)&&(r=r.insert(i.key,i.clone()))}return ka.resolve(r)}Es(t,e){return ka.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ou(this)}getSize(t){return ka.resolve(this.size)}}class ou extends za{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ka.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this.persistence=t,this.Ts=new qa(t=>cs(t),ls),this.lastRemoteSnapshotVersion=Si.min(),this.highestTargetId=0,this.Is=0,this.As=new nu,this.targetCount=0,this.Rs=Va.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),ka.resolve()}getLastRemoteSnapshotVersion(t){return ka.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ka.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ka.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ka.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ka.resolve()}updateTargetData(t,e){return this.ae(e),ka.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ka.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),ka.waitFor(i).next(()=>r)}getTargetCount(t){return ka.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ka.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ka.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ka.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ka.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ka.resolve(n)}containsKey(t,e){return ka.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.bs={},this.Le=new Ci(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new au(this),this.Ht=new ja,this.He=function(t,e){return new su(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new La(e),this.Je=new eu(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new iu(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){ui("MemoryPersistence","Starting transaction:",t);const r=new cu(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return ka.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class cu extends Pa{constructor(t){super(),this.currentSequenceNumber=t}}class lu{constructor(t){this.persistence=t,this.Ds=new nu,this.Cs=null}static Ns(t){return new lu(t)}get xs(){if(this.Cs)return this.Cs;throw di()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ka.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ka.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ka.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ka.forEach(this.xs,n=>{const r=Ki.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return ka.or([()=>ka.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.activeTargetIds=No()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class du{constructor(){this.yi=new hu,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new hu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){ui("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){ui("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);ui("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(ui("RestConnection","Received: ",t),t),e=>{throw li("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+si,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=gu[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new ri;o.listenOnce(Yr.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Xr.NO_ERROR:const e=o.getResponseJson();ui("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Xr.TIMEOUT:ui("Connection",'RPC "'+t+'" timed out'),s(new Di(gi.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const n=o.getStatus();if(ui("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(gi).indexOf(e)>=0?e:gi.UNKNOWN}(t.status);s(new Di(e,t.message))}else s(new Di(gi.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Di(gi.UNAVAILABLE,"Connection failed."));break;default:di()}}finally{ui("Connection",'RPC "'+t+'" completed.')}});const a=JSON.stringify(r);o.send(e,"POST",a,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Jr(),i=Qr(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};var o;this.useFetchStreams&&(s.xmlHttpFactory=new ei({})),this.Ui(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())||"object"==typeof navigator&&"ReactNative"===navigator.product||h().indexOf("Electron/")>=0||function(){var t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||h().indexOf("MSAppHost/")>=0||"object"==typeof(o="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==o.id||(s.httpHeadersOverwriteParam="$httpHeaders");const a=n.join("");ui("Connection","Creating WebChannel: "+a,s);const u=r.createWebChannel(a,s);let c=!1,l=!1;const d=new Du({vi:t=>{l?ui("Connection","Not sending because WebChannel is closed:",t):(c||(ui("Connection","Opening WebChannel transport."),u.open(),c=!0),ui("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,ni.EventType.OPEN,()=>{l||ui("Connection","WebChannel transport opened.")}),f(u,ni.EventType.CLOSE,()=>{l||(l=!0,ui("Connection","WebChannel transport closed"),d.$i())}),f(u,ni.EventType.ERROR,t=>{l||(l=!0,li("Connection","WebChannel transport errored:",t),d.$i(new Di(gi.UNAVAILABLE,"The operation could not be completed")))}),f(u,ni.EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];fi(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){ui("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=mo[t];if(void 0!==e)return vo(e)}(t),n=i.message;void 0===e&&(e=gi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.$i(new Di(e,n)),u.close()}else ui("Connection","WebChannel received:",n),d.Oi(n)}}),f(i,Zr.STAT_EVENT,t=>{t.stat===ti.PROXY?ui("Connection","Detected buffering proxy"):t.stat===ti.NOPROXY&&ui("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return new Ho(t,!0)}class bu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&ui("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new bu(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===gi.RESOURCE_EXHAUSTED?(ci(e.toString()),ci("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===gi.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new Di(gi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return ui("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(ui("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Eu extends wu{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:di()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(fi(void 0===e||"string"==typeof e),ji.fromBase64String(e||"")):(fi(void 0===e||e instanceof Uint8Array),ji.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?gi.UNKNOWN:vo(t.code);return new Di(e,t.message||"")}(o);n=new jo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(t,r.document.name),s=Go(r.document.updateTime),o=new ss({mapValue:{fields:r.document.fields}}),a=os.newFoundDocument(i,s,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Lo(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qo(t,r.document),s=r.readTime?Go(r.readTime):Si.min(),o=os.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qo(t,r.document),s=r.removedTargetIds||[];n=new Lo([],s,i,null)}else{if(!("filter"in e))return di();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Do(r),s=t.targetId;n=new Bo(s,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return Si.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Si.min():e.readTime?Go(e.readTime):Si.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=Zo(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=hs(r)?{documents:ea(t,r)}:{query:na(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ko(t,e.resumeToken):e.snapshotVersion.compareTo(Si.min())>0&&(n.readTime=$o(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return di()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=Zo(this.N),e.removeTarget=t,this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new Di(gi.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===gi.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Di(gi.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===gi.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Di(gi.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class Fu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(ci(e),this.$r=!1):ui("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{Ru(this)&&(ui("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=pi(t);e.Kr.add(4),await _u(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Tu(e)}(this))})}),this.Wr=new Fu(n,r)}}async function Tu(t){if(Ru(t))for(const e of t.jr)await e(!0)}async function _u(t){for(const e of t.jr)await e(!1)}function Iu(t,e){const n=pi(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Ou(n)?Nu(n):Uu(n).cr()&&Pu(n,e))}function Su(t,e){const n=pi(t),r=Uu(n);n.qr.delete(e),r.cr()&&ku(n,e),0===n.qr.size&&(r.cr()?r.lr():Ru(n)&&n.Wr.set("Unknown"))}function Pu(t,e){t.Gr.Y(e.targetId),Uu(t).Ir(e)}function ku(t,e){t.Gr.Y(e),Uu(t).Ar(e)}function Nu(t){t.Gr=new Mo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Uu(t).start(),t.Wr.Or()}function Ou(t){return Ru(t)&&!Uu(t).ar()&&t.qr.size>0}function Ru(t){return 0===pi(t).Kr.size}function Lu(t){t.Gr=void 0}async function Bu(t){t.qr.forEach((e,n)=>{Pu(t,e)})}async function ju(t,e){Lu(t),Ou(t)?(t.Wr.Lr(e),Nu(t)):t.Wr.set("Unknown")}async function xu(t,e,n){if(t.Wr.set("Online"),e instanceof jo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){ui("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mu(t,n)}else if(e instanceof Lo?t.Gr.rt(e):e instanceof Bo?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(Si.min()))try{const e=await Qa(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(ji.EMPTY_BYTE_STRING,n.snapshotVersion)),ku(t,e);const r=new Ra(n.target,e,1,n.sequenceNumber);Pu(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ui("RemoteStore","Failed to raise snapshot:",e),await Mu(t,e)}}async function Mu(t,e,n){if(!Na(e))throw e;t.Kr.add(1),await _u(t),t.Wr.set("Offline"),n||(n=()=>Qa(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ui("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Tu(t)})}async function Vu(t,e){const n=pi(t);e?(n.Kr.delete(2),await Tu(n)):e||(n.Kr.add(2),await _u(n),n.Wr.set("Unknown"))}function Uu(t){return t.zr||(t.zr=function(t,e,n){const r=pi(t);return r.Cr(),new Eu(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Bu.bind(null,t),Ci:ju.bind(null,t),Tr:xu.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Ou(t)?Nu(t):t.Wr.set("Unknown")):(await t.zr.stop(),Lu(t))})),t.zr}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new qu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Di(gi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zu(t,e){if(ci("AsyncQueue",`${e}: ${t}`),Na(t))return new Di(gi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ki.comparator(e.key,n.key):(t,e)=>Ki.comparator(t.key,e.key),this.keyedMap=Io(),this.sortedSet=new bo(this.comparator)}static emptySet(t){return new Hu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Hu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Hu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.Jr=new bo(Ki.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):di():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ku{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ku(t,e,Hu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.Xr=void 0,this.listeners=[]}}class Wu{constructor(){this.queries=new qa(t=>Ms(t),xs),this.onlineState="Unknown",this.Zr=new Set}}async function Ju(t,e){const n=pi(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Gu),i)try{s.Xr=await n.onListen(r)}catch(t){const n=zu(t,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Zu(n)}async function Qu(t,e){const n=pi(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Xu(t,e){const n=pi(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.no(t)&&(r=!0);i.Xr=t}}r&&Zu(n)}function Yu(t,e,n){const r=pi(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Zu(t){t.Zr.forEach(t=>{t.next()})}class tc{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ku(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Ku.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(t){this.key=t}}class nc{constructor(t){this.key=t}}class rc{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Po(),this.mutatedKeys=Po(),this.po=qs(t),this.Eo=new Hu(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new $u,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ps(this.query)&&r.size===this.query.limit?r.last():null,u=ks(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const c=r.get(t),l=Us(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||u&&this.po(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Ps(this.query)||ks(this.query))for(;s.size>this.query.limit;){const t=Ps(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return di()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Ku(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new $u,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Po(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new nc(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new ec(n))}),e}So(t){this._o=t.Gn,this.yo=Po();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Ku.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class ic{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sc{constructor(t){this.key=t,this.Co=!1}}class oc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new qa(t=>Ms(t),xs),this.ko=new Map,this.$o=new Set,this.Oo=new bo(Ki.comparator),this.Fo=new Map,this.Mo=new nu,this.Lo={},this.Bo=new Map,this.Uo=Va.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function ac(t,e){const n=wc(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await Ya(n.localStore,Bs(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await uc(n,e,r,"current"===s),n.isPrimaryClient&&Iu(n.remoteStore,t)}return i}async function uc(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await tu(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return gc(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await tu(t.localStore,e,!0),s=new rc(e,i.Gn),o=s.Io(i.documents),a=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),u=s.applyChanges(o,t.isPrimaryClient,a);gc(t,n,u.vo);const c=new ic(e,n,s);return t.xo.set(e,c),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function cc(t,e){const n=pi(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!xs(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Za(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Su(n.remoteStore,r.targetId),fc(n,r.targetId)}).catch(Ua)):(fc(n,r.targetId),await Za(n.localStore,r.targetId,!0))}async function lc(t,e){const n=pi(t);try{const t=await function(t,e){const n=pi(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const u=e.resumeToken;if(u.approximateByteSize()>0){const c=a.withResumeToken(u,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,c),function(t,e,n){return fi(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,e)&&o.push(n.ze.updateTargetData(t,c))}});let a=To();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Xa(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(Si.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return ka.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(fi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?fi(r.Co):t.removedDocuments.size>0&&(fi(r.Co),r.Co=!1))}),await yc(n,t,e)}catch(t){await Ua(t)}}function hc(t,e,n){const r=pi(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=pi(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.eo(e)&&(r=!0)}),r&&Zu(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dc(t,e,n){const r=pi(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new bo(Ki.comparator);t=t.insert(s,os.newNoDocument(s,Si.min()));const n=Po().add(s),i=new Oo(Si.min(),new Map,new Co(Ti),t,n);await lc(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),mc(r)}else await Za(r.localStore,e,!1).then(()=>fc(r,e,n)).catch(Ua)}function fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||pc(t,e)})}function pc(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Su(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),mc(t))}function gc(t,e,n){for(const r of n)r instanceof ec?(t.Mo.addReference(r.key,e),Dc(t,r)):r instanceof nc?(ui("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||pc(t,r.key)):di()}function Dc(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(ui("SyncEngine","New document in limbo: "+n),t.$o.add(r),mc(t))}function mc(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Ki(Ri.fromString(e)),r=t.Uo.next();t.Fo.set(r,new sc(n)),t.Oo=t.Oo.insert(n,r),Iu(t.remoteStore,new Ra(Bs(Ss(n.path)),r,2,Ci.T))}}async function yc(t,e,n){const r=pi(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{o.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=$a.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=pi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ka.forEach(e,e=>ka.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ka.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Na(t))throw t;ui("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function vc(t,e){const n=pi(t);if(!n.currentUser.isEqual(e)){ui("SyncEngine","User change. New user:",e.toKey());const t=await Ja(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new Di(gi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Bo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await yc(n,t.Wn)}}function bc(t,e){const n=pi(t),r=n.Fo.get(e);if(r&&r.Co)return Po().add(r.key);{let t=Po();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function wc(t){const e=pi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dc.bind(null,e),e.No.Tr=Xu.bind(null,e.eventManager),e.No.jo=Yu.bind(null,e.eventManager),e}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=vu(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Wa(this.persistence,new Ka,t.initialUser,this.N)}Go(t){return new uu(lu.Ns,this.N)}Wo(t){return new du}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vc.bind(null,this.syncEngine),await Vu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wu}createDatastore(t){const e=vu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new mu(r));var r;return function(t,e,n){return new Cu(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>hc(this.syncEngine,t,0),s=pu.bt()?new pu:new fu,new Au(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new oc(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=pi(t);ui("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await _u(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=ii.UNAUTHENTICATED,this.clientId=Ai.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{ui("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Di(gi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=zu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),ui("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ja(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _c(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ic(t);ui("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=pi(t);n.asyncQueue.verifyOperationInProgress(),ui("RemoteStore","RemoteStore received new credentials");const r=Ru(n);n.Kr.add(3),await _u(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Tu(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Ic(t){return t.offlineComponents||(ui("FirestoreClient","Using default OfflineComponentProvider"),await Tc(t,new Ec)),t.offlineComponents}async function Sc(t){return t.onlineComponents||(ui("FirestoreClient","Using default OnlineComponentProvider"),await _c(t,new Cc)),t.onlineComponents}async function Pc(t){const e=await Sc(t),n=e.eventManager;return n.onListen=ac.bind(null,e.syncEngine),n.onUnlisten=cc.bind(null,e.syncEngine),n}function kc(t,e,n={}){const r=new mi;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Fc({next:n=>{e.enqueueAndForget(()=>Qu(t,o)),n.fromCache&&"server"===r.source?i.reject(new Di(gi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new tc(n,s,{includeMetadataChanges:!0,uo:!0});return Ju(t,o)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}class Nc{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Oc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Oc&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e,n){if(!n)throw new Di(gi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bc(t){if(Ki.isDocumentKey(t))throw new Di(gi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":di()}function xc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Di(gi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(t);throw new Di(gi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Di(gi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Di(gi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Di(gi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,t instanceof Oc?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Di(gi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oc(t.options.projectId)}(t))}get app(){if(!this._app)throw new Di(gi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Di(gi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new vi;switch(t.type){case"gapi":t.client;return fi(!1),new Ei(V,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Di(gi.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Rc.get(t);e&&(ui("ComponentProvider","Removing Datastore"),Rc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Uc(this.firestore,t,this._key)}}class qc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qc(this.firestore,t,this._query)}}class zc extends qc{constructor(t,e,n){super(t,e,Ss(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Uc(this.firestore,null,new Ki(t))}withConverter(t){return new zc(this.firestore,t,this._path)}}function Hc(t,e,...n){if(t=v(t),Lc("collection","path",e),t instanceof Vc){const r=Ri.fromString(e,...n);return Bc(r),new zc(t,null,r)}{if(!(t instanceof Uc||t instanceof zc))throw new Di(gi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ri.fromString(e,...n));return Bc(r),new zc(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new bu(this,"async_queue_retry"),this.Ea=()=>{const t=yu();t&&ui("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=yu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=yu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new mi;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Na(t))throw t;ui("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,ci("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=qu.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&di()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Kc extends Vc{constructor(t,e){super(t,e),this.type="firestore",this._queue=new $c,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wc(this),this._firestoreClient.terminate()}}function Gc(t){return t._firestoreClient||Wc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Nc(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ac(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Di(gi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qc(ji.fromBase64String(t))}catch(t){throw new Di(gi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Qc(ji.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Di(gi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Di(gi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ti(this._lat,t._lat)||Ti(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new RegExp("[~\\*/\\[\\]]");function Zc(t,e,n){if(e.search(Yc)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jc(...e.split("."))._internalPath}catch(r){throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=" in field "+r),o&&(u+=" in document "+i),u+=")"),new Di(gi.INVALID_ARGUMENT,a+t+u)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Uc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nl extends el{data(){return super.data()}}function rl(t,e){return"string"==typeof e?Zc(t,e):e instanceof Jc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sl extends el{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(rl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ol extends sl{data(t={}){return super.data(t)}}class al{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new il(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ol(this._firestore,this._userDataWriter,n.key,n,new il(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Di(gi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new ol(t._firestore,t._userDataWriter,n.doc.key,n.doc,new il(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ol(t._firestore,t._userDataWriter,e.doc.key,e.doc,new il(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:ul(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ul(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return di()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cl(t){if(ks(t)&&0===t.explicitOrderBy.length)throw new Di(gi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{convertValue(t,e="none"){switch(Gi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw di()}}convertObject(t,e){const n={};return ki(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Xc(Vi(t.latitude),Vi(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":(function t(e){const n=e.mapValue.fields.__previous_value__;return qi(n)?t(n):n})(t);return null==x?null:this.convertValue(x,e);case"estimate":return this.convertTimestamp(zi(t));default:return null}}convertTimestamp(t){const e=Mi(t);return new Ii(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ri.fromString(t);fi(da(n));const r=new Oc(n.get(1),n.get(3)),i=new Ki(n.popFirst(5));return r.isEqual(e)||ci(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends ll{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Uc(this.firestore,null,e)}}si="9.0.0",x(new b("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Kc(n,new bi(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),z("@firebase/firestore","3.0.2",void 0);!function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw U.create("bad-app-name",{appName:String(r)});const i=L.get(r);if(i){if(D(t,i.options)&&D(n,i.config))return i;throw U.create("duplicate-app",{appName:r})}const s=new C(r);for(const t of B.values())s.addComponent(t);const o=new q(t,n,s);L.set(r,o)}({apiKey:"AIzaSyBcYZl2J2iZg_9zbikylnsxhcq95uE5QNQ",authDomain:"ch-signin.firebaseapp.com",projectId:"ch-signin",storageBucket:"ch-signin.appspot.com",messagingSenderId:"405862922673",appId:"1:405862922673:web:b36ec1695c520057e56590"});const dl=function(t=function(t="[DEFAULT]"){const e=L.get(t);if(!e)throw U.create("no-app",{appName:t});return e}()){return M(t,"firestore").getImmediate()}();Hc(dl,"users");function fl(t){switch(t){case"red":return"○";case"orange":return"◔";default:return"●"}}async function pl(){const t=await function(t){t=xc(t,qc);const e=xc(t.firestore,Kc),n=Gc(e),r=new hl(e);return cl(t._query),kc(n,t._query).then(n=>new al(e,r,t,n))}(Hc(dl,"users")),e=[["Name","CH","Fb Onboarding","Fb Ads","Fb Groups","Recallers","H360","AN","HSTD","Wag Nation","ICP"]];return t.forEach(t=>{let n=t.data(),r=n.signin_status;e.push([n.name,fl(r.ch),fl(r["fb-onboarding"]),fl(r["fb-ads"]),fl(r["fb-groups"]),fl(r.recallers),fl(r.h360),fl(r.an),fl(r.hstd),fl(r["wag-nation"]),fl(r.icp)])}),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createStream=void 0;const r=n(10),i=n(15),s=n(16),o=n(7),a=n(35),u=n(19),c=n(8),l=n(20),h=n(9),d=(t,e)=>{let n=l.stringifyTableData(t);n=h.truncateTableData(n,e);const s=i.calculateRowHeights(n,e);return n=u.mapDataUsingRowHeights(n,s,e),n=r.alignTableData(n,e),n=c.padTableData(n,e),n};e.createStream=t=>{const e=a.makeStreamConfig(t),n=Object.values(e.columns).map(t=>t.width+t.paddingLeft+t.paddingRight);let r=!0;return{write:t=>{if(t.length!==e.columnCount)throw new Error("Row cell count does not match the config.columnCount.");r?(r=!1,((t,e,n)=>{const r=d([t],n).map(t=>o.drawRow(t,n)).join("");let i;i="",i+=s.drawBorderTop(e,n),i+=r,i+=s.drawBorderBottom(e,n),i=i.trimEnd(),process.stdout.write(i)})(t,n,e)):((t,e,n)=>{const r=d([t],n).map(t=>o.drawRow(t,n)).join("");let i="";const a=s.drawBorderBottom(e,n);"\n"!==a&&(i="\r[K"),i+=s.drawBorderJoin(e,n),i+=r,i+=a,i=i.trimEnd(),process.stdout.write(i)})(t,n,e)}}}},function(t,e,n){"use strict";t.exports=({onlyFirst:t=!1}={})=>{const e=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(e,t?void 0:"g")}},function(t,e,n){"use strict";t.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}},function(t,e,n){"use strict";t.exports=t=>t&&t.exact?new RegExp("^[\ud800-\udbff][\udc00-\udfff]$"):new RegExp("[\ud800-\udbff][\udc00-\udfff]","g")},function(t,e,n){"use strict";(function(t){const e=(t,e)=>(...n)=>`[${t(...n)+e}m`,r=(t,e)=>(...n)=>{const r=t(...n);return`[${38+e};5;${r}m`},i=(t,e)=>(...n)=>{const r=t(...n);return`[${38+e};2;${r[0]};${r[1]};${r[2]}m`},s=t=>t,o=(t,e,n)=>[t,e,n],a=(t,e,n)=>{Object.defineProperty(t,e,{get:()=>{const r=n();return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})};let u;const c=(t,e,r,i)=>{void 0===u&&(u=n(29));const s=i?10:0,o={};for(const[n,i]of Object.entries(u)){const a="ansi16"===n?"ansi":n;n===e?o[a]=t(r,s):"object"==typeof i&&(o[a]=t(i[e],s))}return o};Object.defineProperty(t,"exports",{enumerable:!0,get:function(){const t=new Map,n={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};n.color.gray=n.color.blackBright,n.bgColor.bgGray=n.bgColor.bgBlackBright,n.color.grey=n.color.blackBright,n.bgColor.bgGrey=n.bgColor.bgBlackBright;for(const[e,r]of Object.entries(n)){for(const[e,i]of Object.entries(r))n[e]={open:`[${i[0]}m`,close:`[${i[1]}m`},r[e]=n[e],t.set(i[0],i[1]);Object.defineProperty(n,e,{value:r,enumerable:!1})}return Object.defineProperty(n,"codes",{value:t,enumerable:!1}),n.color.close="[39m",n.bgColor.close="[49m",a(n.color,"ansi",()=>c(e,"ansi16",s,!1)),a(n.color,"ansi256",()=>c(r,"ansi256",s,!1)),a(n.color,"ansi16m",()=>c(i,"rgb",o,!1)),a(n.bgColor,"ansi",()=>c(e,"ansi16",s,!0)),a(n.bgColor,"ansi256",()=>c(r,"ansi256",s,!0)),a(n.bgColor,"ansi16m",()=>c(i,"rgb",o,!0)),n}})}).call(this,n(4)(t))},function(t,e,n){const r=n(13),i=n(31),s={};Object.keys(r).forEach(t=>{s[t]={},Object.defineProperty(s[t],"channels",{value:r[t].channels}),Object.defineProperty(s[t],"labels",{value:r[t].labels});const e=i(t);Object.keys(e).forEach(n=>{const r=e[n];s[t][n]=function(t){const e=function(...e){const n=e[0];if(null==n)return n;n.length>1&&(e=n);const r=t(e);if("object"==typeof r)for(let t=r.length,e=0;e<t;e++)r[e]=Math.round(r[e]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(r),s[t][n].raw=function(t){const e=function(...e){const n=e[0];return null==n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(r)})}),t.exports=s},function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(t,e,n){const r=n(13);function i(t){const e=function(){const t={},e=Object.keys(r);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}(),n=[t];for(e[t].distance=0;n.length;){const t=n.pop(),i=Object.keys(r[t]);for(let r=i.length,s=0;s<r;s++){const r=i[s],o=e[r];-1===o.distance&&(o.distance=e[t].distance+1,o.parent=t,n.unshift(r))}}return e}function s(t,e){return function(n){return e(t(n))}}function o(t,e){const n=[e[t].parent,t];let i=r[e[t].parent][t],o=e[t].parent;for(;e[o].parent;)n.unshift(e[o].parent),i=s(r[e[o].parent][o],i),o=e[o].parent;return i.conversion=n,i}t.exports=function(t){const e=i(t),n={},r=Object.keys(e);for(let t=r.length,i=0;i<t;i++){const t=r[i];null!==e[t].parent&&(n[t]=o(t,e))}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCellHeight=void 0;const r=n(5);e.calculateCellHeight=(t,e,n=!1)=>r.wrapCell(t,e,n).length},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.wrapString=void 0;const i=r(n(3)),s=r(n(1));e.wrapString=(t,e)=>{let n=t;const r=[];do{r.push(i.default(n,0,e)),n=i.default(n,e).trim()}while(s.default(n));return r}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.wrapWord=void 0;const i=r(n(3)),s=r(n(2));e.wrapWord=(t,e)=>{const n=[];let r=0;return((t,e)=>{let n=s.default(t);const r=[],i=new RegExp("(^.{1,"+String(e)+"}(\\s+|$))|(^.{1,"+String(e-1)+"}(\\\\|/|_|\\.|,|;|-))");do{let t;const s=i.exec(n);if(s){t=s[0],n=n.slice(t.length);const e=t.trim().length,i=t.length-e;r.push([e,i])}else t=n.slice(0,e),n=n.slice(e),r.push([t.length,0])}while(n.length);return r})(t,e).forEach(([e,s])=>{n.push(i.default(t,r,r+e)),r+=e+s}),n}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.makeStreamConfig=void 0;const i=r(n(17)),s=n(0),o=n(18),a=(t,e={},n)=>Array.from({length:t}).map((t,r)=>({alignment:"left",paddingLeft:1,paddingRight:1,truncate:Number.POSITIVE_INFINITY,verticalAlignment:"top",wrapWord:!1,...n,...e[r]}));e.makeStreamConfig=t=>{o.validateConfig("streamConfig.json",t);const e=i.default(t);if(void 0===e.columnDefault.width)throw new Error("Must provide config.columnDefault.width when creating a stream.");return{drawVerticalLine:()=>!0,...e,border:s.makeBorderConfig(e.border),columns:a(e.columnCount,e.columns,e.columnDefault)}}},function(t,e,n){"use strict";e["config.json"]=function t(e,{instancePath:n="",parentData:r,parentDataProperty:i,rootData:s=e}={}){let a=null,c=0;if(e&&"object"==typeof e&&!Array.isArray(e)){for(const t in e)if("border"!==t&&"header"!==t&&"columns"!==t&&"columnDefault"!==t&&"drawVerticalLine"!==t&&"drawHorizontalLine"!==t&&"singleLine"!==t){const e={instancePath:n,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:t},message:"must NOT have additional properties"};null===a?a=[e]:a.push(e),c++}if(void 0!==e.border&&(o(e.border,{instancePath:n+"/border",parentData:e,parentDataProperty:"border",rootData:s})||(a=null===a?o.errors:a.concat(o.errors),c=a.length)),void 0!==e.header){let t=e.header;if(t&&"object"==typeof t&&!Array.isArray(t)){if(void 0===t.content){const t={instancePath:n+"/header",schemaPath:"#/properties/header/required",keyword:"required",params:{missingProperty:"content"},message:"must have required property 'content'"};null===a?a=[t]:a.push(t),c++}for(const e in t)if("content"!==e&&"alignment"!==e&&"wrapWord"!==e&&"truncate"!==e&&"paddingLeft"!==e&&"paddingRight"!==e){const t={instancePath:n+"/header",schemaPath:"#/properties/header/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:e},message:"must NOT have additional properties"};null===a?a=[t]:a.push(t),c++}if(void 0!==t.content&&"string"!=typeof t.content){const t={instancePath:n+"/header/content",schemaPath:"#/properties/header/properties/content/type",keyword:"type",params:{type:"string"},message:"must be string"};null===a?a=[t]:a.push(t),c++}if(void 0!==t.alignment&&(u(t.alignment,{instancePath:n+"/header/alignment",parentData:t,parentDataProperty:"alignment",rootData:s})||(a=null===a?u.errors:a.concat(u.errors),c=a.length)),void 0!==t.wrapWord&&"boolean"!=typeof t.wrapWord){const t={instancePath:n+"/header/wrapWord",schemaPath:"#/properties/header/properties/wrapWord/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===a?a=[t]:a.push(t),c++}if(void 0!==t.truncate){let e=t.truncate;if("number"!=typeof e||e%1||isNaN(e)||!isFinite(e)){const t={instancePath:n+"/header/truncate",schemaPath:"#/properties/header/properties/truncate/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===a?a=[t]:a.push(t),c++}}if(void 0!==t.paddingLeft){let e=t.paddingLeft;if("number"!=typeof e||e%1||isNaN(e)||!isFinite(e)){const t={instancePath:n+"/header/paddingLeft",schemaPath:"#/properties/header/properties/paddingLeft/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===a?a=[t]:a.push(t),c++}}if(void 0!==t.paddingRight){let e=t.paddingRight;if("number"!=typeof e||e%1||isNaN(e)||!isFinite(e)){const t={instancePath:n+"/header/paddingRight",schemaPath:"#/properties/header/properties/paddingRight/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===a?a=[t]:a.push(t),c++}}}else{const t={instancePath:n+"/header",schemaPath:"#/properties/header/type",keyword:"type",params:{type:"object"},message:"must be object"};null===a?a=[t]:a.push(t),c++}}if(void 0!==e.columns&&(f(e.columns,{instancePath:n+"/columns",parentData:e,parentDataProperty:"columns",rootData:s})||(a=null===a?f.errors:a.concat(f.errors),c=a.length)),void 0!==e.columnDefault&&(p(e.columnDefault,{instancePath:n+"/columnDefault",parentData:e,parentDataProperty:"columnDefault",rootData:s})||(a=null===a?p.errors:a.concat(p.errors),c=a.length)),void 0!==e.drawVerticalLine&&"function"!=typeof e.drawVerticalLine){const t={instancePath:n+"/drawVerticalLine",schemaPath:"#/properties/drawVerticalLine/typeof",keyword:"typeof",params:{},message:'should pass "typeof" keyword validation'};null===a?a=[t]:a.push(t),c++}if(void 0!==e.drawHorizontalLine&&"function"!=typeof e.drawHorizontalLine){const t={instancePath:n+"/drawHorizontalLine",schemaPath:"#/properties/drawHorizontalLine/typeof",keyword:"typeof",params:{},message:'should pass "typeof" keyword validation'};null===a?a=[t]:a.push(t),c++}if(void 0!==e.singleLine&&"boolean"!=typeof e.singleLine){const t={instancePath:n+"/singleLine",schemaPath:"#/properties/singleLine/typeof",keyword:"typeof",params:{},message:'should pass "typeof" keyword validation'};null===a?a=[t]:a.push(t),c++}}else{const t={instancePath:n,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===a?a=[t]:a.push(t),c++}return t.errors=a,0===c};const r={topBody:{$ref:"#/definitions/border"},topJoin:{$ref:"#/definitions/border"},topLeft:{$ref:"#/definitions/border"},topRight:{$ref:"#/definitions/border"},bottomBody:{$ref:"#/definitions/border"},bottomJoin:{$ref:"#/definitions/border"},bottomLeft:{$ref:"#/definitions/border"},bottomRight:{$ref:"#/definitions/border"},bodyLeft:{$ref:"#/definitions/border"},bodyRight:{$ref:"#/definitions/border"},bodyJoin:{$ref:"#/definitions/border"},headerJoin:{$ref:"#/definitions/border"},joinBody:{$ref:"#/definitions/border"},joinLeft:{$ref:"#/definitions/border"},joinRight:{$ref:"#/definitions/border"},joinJoin:{$ref:"#/definitions/border"}},i=Object.prototype.hasOwnProperty;function s(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let o=null,a=0;if("string"!=typeof t){const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"string"},message:"must be string"};null===o?o=[t]:o.push(t),a++}return s.errors=o,0===a}function o(t,{instancePath:e="",parentData:n,parentDataProperty:a,rootData:u=t}={}){let c=null,l=0;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if(!i.call(r,n)){const t={instancePath:e,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===c?c=[t]:c.push(t),l++}void 0!==t.topBody&&(s(t.topBody,{instancePath:e+"/topBody",parentData:t,parentDataProperty:"topBody",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.topJoin&&(s(t.topJoin,{instancePath:e+"/topJoin",parentData:t,parentDataProperty:"topJoin",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.topLeft&&(s(t.topLeft,{instancePath:e+"/topLeft",parentData:t,parentDataProperty:"topLeft",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.topRight&&(s(t.topRight,{instancePath:e+"/topRight",parentData:t,parentDataProperty:"topRight",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bottomBody&&(s(t.bottomBody,{instancePath:e+"/bottomBody",parentData:t,parentDataProperty:"bottomBody",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bottomJoin&&(s(t.bottomJoin,{instancePath:e+"/bottomJoin",parentData:t,parentDataProperty:"bottomJoin",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bottomLeft&&(s(t.bottomLeft,{instancePath:e+"/bottomLeft",parentData:t,parentDataProperty:"bottomLeft",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bottomRight&&(s(t.bottomRight,{instancePath:e+"/bottomRight",parentData:t,parentDataProperty:"bottomRight",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bodyLeft&&(s(t.bodyLeft,{instancePath:e+"/bodyLeft",parentData:t,parentDataProperty:"bodyLeft",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bodyRight&&(s(t.bodyRight,{instancePath:e+"/bodyRight",parentData:t,parentDataProperty:"bodyRight",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.bodyJoin&&(s(t.bodyJoin,{instancePath:e+"/bodyJoin",parentData:t,parentDataProperty:"bodyJoin",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.headerJoin&&(s(t.headerJoin,{instancePath:e+"/headerJoin",parentData:t,parentDataProperty:"headerJoin",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.joinBody&&(s(t.joinBody,{instancePath:e+"/joinBody",parentData:t,parentDataProperty:"joinBody",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.joinLeft&&(s(t.joinLeft,{instancePath:e+"/joinLeft",parentData:t,parentDataProperty:"joinLeft",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.joinRight&&(s(t.joinRight,{instancePath:e+"/joinRight",parentData:t,parentDataProperty:"joinRight",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length)),void 0!==t.joinJoin&&(s(t.joinJoin,{instancePath:e+"/joinJoin",parentData:t,parentDataProperty:"joinJoin",rootData:u})||(c=null===c?s.errors:c.concat(s.errors),l=c.length))}else{const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===c?c=[t]:c.push(t),l++}return o.errors=c,0===l}const a={type:"string",enum:["left","right","center","justify"]};n(37).default;function u(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;if("string"!=typeof t){const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[t]:s.push(t),o++}if("left"!==t&&"right"!==t&&"center"!==t&&"justify"!==t){const t={instancePath:e,schemaPath:"#/enum",keyword:"enum",params:{allowedValues:a.enum},message:"must be equal to one of the allowed values"};null===s?s=[t]:s.push(t),o++}return u.errors=s,0===o}const c=new RegExp("^[0-9]+$","u"),l={type:"object",properties:{alignment:{$ref:"#/definitions/alignment"},verticalAlignment:{type:"string",enum:["top","middle","bottom"]},width:{type:"integer",minimum:1},wrapWord:{type:"boolean"},truncate:{type:"integer"},paddingLeft:{type:"integer"},paddingRight:{type:"integer"}},additionalProperties:!1};function h(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;if("string"!=typeof t){const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[t]:s.push(t),o++}if("left"!==t&&"right"!==t&&"center"!==t&&"justify"!==t){const t={instancePath:e,schemaPath:"#/enum",keyword:"enum",params:{allowedValues:a.enum},message:"must be equal to one of the allowed values"};null===s?s=[t]:s.push(t),o++}return h.errors=s,0===o}function d(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if("alignment"!==n&&"verticalAlignment"!==n&&"width"!==n&&"wrapWord"!==n&&"truncate"!==n&&"paddingLeft"!==n&&"paddingRight"!==n){const t={instancePath:e,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.alignment&&(h(t.alignment,{instancePath:e+"/alignment",parentData:t,parentDataProperty:"alignment",rootData:i})||(s=null===s?h.errors:s.concat(h.errors),o=s.length)),void 0!==t.verticalAlignment){let n=t.verticalAlignment;if("string"!=typeof n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[t]:s.push(t),o++}if("top"!==n&&"middle"!==n&&"bottom"!==n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/enum",keyword:"enum",params:{allowedValues:l.properties.verticalAlignment.enum},message:"must be equal to one of the allowed values"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.width){let n=t.width;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/width",schemaPath:"#/properties/width/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}if("number"==typeof n&&isFinite(n)&&(n<1||isNaN(n))){const t={instancePath:e+"/width",schemaPath:"#/properties/width/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.wrapWord&&"boolean"!=typeof t.wrapWord){const t={instancePath:e+"/wrapWord",schemaPath:"#/properties/wrapWord/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.truncate){let n=t.truncate;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/truncate",schemaPath:"#/properties/truncate/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingLeft){let n=t.paddingLeft;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingLeft",schemaPath:"#/properties/paddingLeft/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingRight){let n=t.paddingRight;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingRight",schemaPath:"#/properties/paddingRight/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}}else{const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===s?s=[t]:s.push(t),o++}return d.errors=s,0===o}function f(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;const a=o;let u=!1,l=null;const h=o;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if(!c.test(n)){const t={instancePath:e,schemaPath:"#/oneOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===s?s=[t]:s.push(t),o++}for(const n in t)c.test(n)&&(d(t[n],{instancePath:e+"/"+n.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:t,parentDataProperty:n,rootData:i})||(s=null===s?d.errors:s.concat(d.errors),o=s.length))}else{const t={instancePath:e,schemaPath:"#/oneOf/0/type",keyword:"type",params:{type:"object"},message:"must be object"};null===s?s=[t]:s.push(t),o++}(g=h===o)&&(u=!0,l=0);const p=o;if(Array.isArray(t)){const n=t.length;for(let r=0;r<n;r++)d(t[r],{instancePath:e+"/"+r,parentData:t,parentDataProperty:r,rootData:i})||(s=null===s?d.errors:s.concat(d.errors),o=s.length)}else{const t={instancePath:e,schemaPath:"#/oneOf/1/type",keyword:"type",params:{type:"array"},message:"must be array"};null===s?s=[t]:s.push(t),o++}var g;if((g=p===o)&&u?(u=!1,l=[l,1]):g&&(u=!0,l=1),u)o=a,null!==s&&(a?s.length=a:s=null);else{const t={instancePath:e,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas:l},message:"must match exactly one schema in oneOf"};null===s?s=[t]:s.push(t),o++}return f.errors=s,0===o}function p(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if("alignment"!==n&&"verticalAlignment"!==n&&"width"!==n&&"wrapWord"!==n&&"truncate"!==n&&"paddingLeft"!==n&&"paddingRight"!==n){const t={instancePath:e,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.alignment&&(h(t.alignment,{instancePath:e+"/alignment",parentData:t,parentDataProperty:"alignment",rootData:i})||(s=null===s?h.errors:s.concat(h.errors),o=s.length)),void 0!==t.verticalAlignment){let n=t.verticalAlignment;if("string"!=typeof n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[t]:s.push(t),o++}if("top"!==n&&"middle"!==n&&"bottom"!==n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/enum",keyword:"enum",params:{allowedValues:l.properties.verticalAlignment.enum},message:"must be equal to one of the allowed values"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.width){let n=t.width;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/width",schemaPath:"#/properties/width/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}if("number"==typeof n&&isFinite(n)&&(n<1||isNaN(n))){const t={instancePath:e+"/width",schemaPath:"#/properties/width/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.wrapWord&&"boolean"!=typeof t.wrapWord){const t={instancePath:e+"/wrapWord",schemaPath:"#/properties/wrapWord/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.truncate){let n=t.truncate;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/truncate",schemaPath:"#/properties/truncate/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingLeft){let n=t.paddingLeft;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingLeft",schemaPath:"#/properties/paddingLeft/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingRight){let n=t.paddingRight;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingRight",schemaPath:"#/properties/paddingRight/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}}else{const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===s?s=[t]:s.push(t),o++}return p.errors=s,0===o}e["streamConfig.json"]=function t(e,{instancePath:n="",parentData:r,parentDataProperty:i,rootData:s=e}={}){let o=null,a=0;if(e&&"object"==typeof e&&!Array.isArray(e)){if(void 0===e.columnDefault){const t={instancePath:n,schemaPath:"#/required",keyword:"required",params:{missingProperty:"columnDefault"},message:"must have required property 'columnDefault'"};null===o?o=[t]:o.push(t),a++}if(void 0===e.columnCount){const t={instancePath:n,schemaPath:"#/required",keyword:"required",params:{missingProperty:"columnCount"},message:"must have required property 'columnCount'"};null===o?o=[t]:o.push(t),a++}for(const t in e)if("border"!==t&&"columns"!==t&&"columnDefault"!==t&&"columnCount"!==t&&"drawVerticalLine"!==t){const e={instancePath:n,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:t},message:"must NOT have additional properties"};null===o?o=[e]:o.push(e),a++}if(void 0!==e.border&&(g(e.border,{instancePath:n+"/border",parentData:e,parentDataProperty:"border",rootData:s})||(o=null===o?g.errors:o.concat(g.errors),a=o.length)),void 0!==e.columns&&(D(e.columns,{instancePath:n+"/columns",parentData:e,parentDataProperty:"columns",rootData:s})||(o=null===o?D.errors:o.concat(D.errors),a=o.length)),void 0!==e.columnDefault&&(m(e.columnDefault,{instancePath:n+"/columnDefault",parentData:e,parentDataProperty:"columnDefault",rootData:s})||(o=null===o?m.errors:o.concat(m.errors),a=o.length)),void 0!==e.columnCount){let t=e.columnCount;if("number"!=typeof t||t%1||isNaN(t)||!isFinite(t)){const t={instancePath:n+"/columnCount",schemaPath:"#/properties/columnCount/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===o?o=[t]:o.push(t),a++}if("number"==typeof t&&isFinite(t)&&(t<1||isNaN(t))){const t={instancePath:n+"/columnCount",schemaPath:"#/properties/columnCount/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"};null===o?o=[t]:o.push(t),a++}}if(void 0!==e.drawVerticalLine&&"function"!=typeof e.drawVerticalLine){const t={instancePath:n+"/drawVerticalLine",schemaPath:"#/properties/drawVerticalLine/typeof",keyword:"typeof",params:{},message:'should pass "typeof" keyword validation'};null===o?o=[t]:o.push(t),a++}}else{const t={instancePath:n,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===o?o=[t]:o.push(t),a++}return t.errors=o,0===a};function g(t,{instancePath:e="",parentData:n,parentDataProperty:o,rootData:a=t}={}){let u=null,c=0;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if(!i.call(r,n)){const t={instancePath:e,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===u?u=[t]:u.push(t),c++}void 0!==t.topBody&&(s(t.topBody,{instancePath:e+"/topBody",parentData:t,parentDataProperty:"topBody",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.topJoin&&(s(t.topJoin,{instancePath:e+"/topJoin",parentData:t,parentDataProperty:"topJoin",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.topLeft&&(s(t.topLeft,{instancePath:e+"/topLeft",parentData:t,parentDataProperty:"topLeft",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.topRight&&(s(t.topRight,{instancePath:e+"/topRight",parentData:t,parentDataProperty:"topRight",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bottomBody&&(s(t.bottomBody,{instancePath:e+"/bottomBody",parentData:t,parentDataProperty:"bottomBody",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bottomJoin&&(s(t.bottomJoin,{instancePath:e+"/bottomJoin",parentData:t,parentDataProperty:"bottomJoin",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bottomLeft&&(s(t.bottomLeft,{instancePath:e+"/bottomLeft",parentData:t,parentDataProperty:"bottomLeft",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bottomRight&&(s(t.bottomRight,{instancePath:e+"/bottomRight",parentData:t,parentDataProperty:"bottomRight",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bodyLeft&&(s(t.bodyLeft,{instancePath:e+"/bodyLeft",parentData:t,parentDataProperty:"bodyLeft",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bodyRight&&(s(t.bodyRight,{instancePath:e+"/bodyRight",parentData:t,parentDataProperty:"bodyRight",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.bodyJoin&&(s(t.bodyJoin,{instancePath:e+"/bodyJoin",parentData:t,parentDataProperty:"bodyJoin",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.headerJoin&&(s(t.headerJoin,{instancePath:e+"/headerJoin",parentData:t,parentDataProperty:"headerJoin",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.joinBody&&(s(t.joinBody,{instancePath:e+"/joinBody",parentData:t,parentDataProperty:"joinBody",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.joinLeft&&(s(t.joinLeft,{instancePath:e+"/joinLeft",parentData:t,parentDataProperty:"joinLeft",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.joinRight&&(s(t.joinRight,{instancePath:e+"/joinRight",parentData:t,parentDataProperty:"joinRight",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length)),void 0!==t.joinJoin&&(s(t.joinJoin,{instancePath:e+"/joinJoin",parentData:t,parentDataProperty:"joinJoin",rootData:a})||(u=null===u?s.errors:u.concat(s.errors),c=u.length))}else{const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===u?u=[t]:u.push(t),c++}return g.errors=u,0===c}function D(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;const a=o;let u=!1,l=null;const h=o;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if(!c.test(n)){const t={instancePath:e,schemaPath:"#/oneOf/0/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===s?s=[t]:s.push(t),o++}for(const n in t)c.test(n)&&(d(t[n],{instancePath:e+"/"+n.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:t,parentDataProperty:n,rootData:i})||(s=null===s?d.errors:s.concat(d.errors),o=s.length))}else{const t={instancePath:e,schemaPath:"#/oneOf/0/type",keyword:"type",params:{type:"object"},message:"must be object"};null===s?s=[t]:s.push(t),o++}(p=h===o)&&(u=!0,l=0);const f=o;if(Array.isArray(t)){const n=t.length;for(let r=0;r<n;r++)d(t[r],{instancePath:e+"/"+r,parentData:t,parentDataProperty:r,rootData:i})||(s=null===s?d.errors:s.concat(d.errors),o=s.length)}else{const t={instancePath:e,schemaPath:"#/oneOf/1/type",keyword:"type",params:{type:"array"},message:"must be array"};null===s?s=[t]:s.push(t),o++}var p;if((p=f===o)&&u?(u=!1,l=[l,1]):p&&(u=!0,l=1),u)o=a,null!==s&&(a?s.length=a:s=null);else{const t={instancePath:e,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas:l},message:"must match exactly one schema in oneOf"};null===s?s=[t]:s.push(t),o++}return D.errors=s,0===o}function m(t,{instancePath:e="",parentData:n,parentDataProperty:r,rootData:i=t}={}){let s=null,o=0;if(t&&"object"==typeof t&&!Array.isArray(t)){for(const n in t)if("alignment"!==n&&"verticalAlignment"!==n&&"width"!==n&&"wrapWord"!==n&&"truncate"!==n&&"paddingLeft"!==n&&"paddingRight"!==n){const t={instancePath:e,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:n},message:"must NOT have additional properties"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.alignment&&(h(t.alignment,{instancePath:e+"/alignment",parentData:t,parentDataProperty:"alignment",rootData:i})||(s=null===s?h.errors:s.concat(h.errors),o=s.length)),void 0!==t.verticalAlignment){let n=t.verticalAlignment;if("string"!=typeof n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[t]:s.push(t),o++}if("top"!==n&&"middle"!==n&&"bottom"!==n){const t={instancePath:e+"/verticalAlignment",schemaPath:"#/properties/verticalAlignment/enum",keyword:"enum",params:{allowedValues:l.properties.verticalAlignment.enum},message:"must be equal to one of the allowed values"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.width){let n=t.width;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/width",schemaPath:"#/properties/width/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}if("number"==typeof n&&isFinite(n)&&(n<1||isNaN(n))){const t={instancePath:e+"/width",schemaPath:"#/properties/width/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.wrapWord&&"boolean"!=typeof t.wrapWord){const t={instancePath:e+"/wrapWord",schemaPath:"#/properties/wrapWord/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[t]:s.push(t),o++}if(void 0!==t.truncate){let n=t.truncate;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/truncate",schemaPath:"#/properties/truncate/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingLeft){let n=t.paddingLeft;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingLeft",schemaPath:"#/properties/paddingLeft/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}if(void 0!==t.paddingRight){let n=t.paddingRight;if("number"!=typeof n||n%1||isNaN(n)||!isFinite(n)){const t={instancePath:e+"/paddingRight",schemaPath:"#/properties/paddingRight/type",keyword:"type",params:{type:"integer"},message:"must be integer"};null===s?s=[t]:s.push(t),o++}}}else{const t={instancePath:e,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"};null===s?s=[t]:s.push(t),o++}return m.errors=s,0===o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(38);r.code='require("ajv/dist/runtime/equal").default',e.default=r},function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(i=r;0!=i--;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;0!=i--;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!=e&&n!=n}},function(t,e,n){(function(t){var n,r=/^\s+|\s+$/g,i=/\w*$/,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u="[\\ud800-\\udfff]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\ud83c[\\udffb-\\udfff]",h="[^\\ud800-\\udfff]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="(?:"+c+"|"+l+")"+"?",g="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+[h,d,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),D="(?:"+[h+c+"?",c,d,f,u].join("|")+")",m=RegExp(l+"(?="+l+")|"+D+g,"g"),y=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),v=parseInt,b="object"==typeof global&&global&&global.Object===Object&&global,w="object"==typeof self&&self&&self.Object===Object&&self,E=b||w||Function("return this")(),C=e&&!e.nodeType&&e,F=C&&"object"==typeof t&&t&&!t.nodeType&&t,A=F&&F.exports===C&&b.process,T=function(){try{return A&&A.binding("util")}catch(t){}}(),_=T&&T.isRegExp,I=(n="length",function(t){return null==t?void 0:t[n]});function S(t){return y.test(t)}function P(t){return S(t)?function(t){var e=m.lastIndex=0;for(;m.test(t);)e++;return e}(t):I(t)}function k(t){return S(t)?function(t){return t.match(m)||[]}(t):function(t){return t.split("")}(t)}var N=Object.prototype.toString,O=E.Symbol,R=O?O.prototype:void 0,L=R?R.toString:void 0;function B(t){if("string"==typeof t)return t;if(U(t))return L?L.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function j(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}(t,e,n)}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var M,V=_?(M=_,function(t){return M(t)}):function(t){return x(t)&&"[object RegExp]"==N.call(t)};function U(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==N.call(t)}function q(t){return t?(t=function(t){if("number"==typeof t)return t;if(U(t))return NaN;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||a.test(t)?v(t.slice(2),n?2:8):s.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function z(t){return null==t?"":B(t)}t.exports=function(t,e){var n=30,r="...";if(x(e)){var s="separator"in e?e.separator:s;n="length"in e?function(t){var e=q(t),n=e%1;return e==e?n?e-n:e:0}(e.length):n,r="omission"in e?B(e.omission):r}var o=(t=z(t)).length;if(S(t)){var a=k(t);o=a.length}if(n>=o)return t;var u=n-P(r);if(u<1)return r;var c=a?j(a,0,u).join(""):t.slice(0,u);if(void 0===s)return c+r;if(a&&(u+=c.length-u),V(s)){if(t.slice(u).search(s)){var l,h=c;for(s.global||(s=RegExp(s.source,z(i.exec(s))+"g")),s.lastIndex=0;l=s.exec(h);)var d=l.index;c=c.slice(0,void 0===d?u:d)}}else if(t.indexOf(B(s),u)!=u){var f=c.lastIndexOf(s);f>-1&&(c=c.slice(0,f))}return c+r}}).call(this,n(4)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.table=void 0;const r=n(10),i=n(21),s=n(15),o=n(41),a=n(43),u=n(19),c=n(8),l=n(20),h=n(9),d=n(45);e.table=(t,e={})=>{d.validateTableData(t);let n=l.stringifyTableData(t);const f=a.makeTableConfig(n,e);n=h.truncateTableData(n,f);const p=s.calculateRowHeights(n,f);n=u.mapDataUsingRowHeights(n,p,f),n=r.alignTableData(n,f),n=c.padTableData(n,f);const g=i.calculateCellWidths(n[0]);return o.drawTable(n,g,p,f)}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.drawTable=void 0;const i=r(n(1)),s=n(16),o=n(6),a=n(42),u=n(7),c=n(0);e.drawTable=(t,e,n,r)=>{const{drawHorizontalLine:l,singleLine:h}=r,d=c.groupBySizes(t,n).map(t=>t.map(t=>u.drawRow(t,r)).join(""));if(r.header){const e=i.default(u.drawRow(t[0],r))-2-r.header.paddingLeft-r.header.paddingRight,n=a.drawHeader(e,r);d.unshift(n)}return o.drawContent(d,{drawSeparator:(t,e)=>(0===t||t===e||!h)&&l(t,e),separatorGetter:s.createTableBorderGetter(e,r)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawHeader=void 0;const r=n(11),i=n(7),s=n(8),o=n(9),a=n(5);e.drawHeader=(t,e)=>{if(!e.header)throw new Error("Can not draw header without header configuration");const{alignment:n,paddingRight:u,paddingLeft:c,wrapWord:l}=e.header;let h=e.header.content;h=o.truncateString(h,e.header.truncate);return a.wrapCell(h,t,l).map(o=>{let a=r.alignString(o,t,n);return a=s.padString(a,c,u),i.drawRow([a],{...e,drawVerticalLine:t=>{const n=e.columns.length;return e.drawVerticalLine(0===t?0:n,n)}})}).join("")}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.makeTableConfig=void 0;const i=r(n(17)),s=r(n(44)),o=n(0),a=n(18),u=(t,e,n)=>{const r=s.default(t);return t[0].map((t,i)=>({alignment:"left",paddingLeft:1,paddingRight:1,truncate:Number.POSITIVE_INFINITY,verticalAlignment:"top",width:r[i],wrapWord:!1,...n,...null==e?void 0:e[i]}))},c=t=>{if(t.header)return{alignment:"center",paddingLeft:1,paddingRight:1,truncate:Number.POSITIVE_INFINITY,wrapWord:!1,...t.header}};e.makeTableConfig=(t,e={})=>{var n,r,s;a.validateConfig("config.json",e);const l=i.default(e);return{...l,border:o.makeBorderConfig(l.border),columns:u(t,l.columns,l.columnDefault),drawHorizontalLine:null!==(n=l.drawHorizontalLine)&&void 0!==n?n:()=>!0,drawVerticalLine:null!==(r=l.drawVerticalLine)&&void 0!==r?r:()=>!0,header:c(l),singleLine:null!==(s=l.singleLine)&&void 0!==s&&s}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(21);e.default=t=>{const e=new Array(t[0].length).fill(0);return t.forEach(t=>{r.calculateCellWidths(t).forEach((t,n)=>{e[n]=Math.max(e[n],t)})}),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateTableData=void 0;const r=n(0);e.validateTableData=t=>{if(!Array.isArray(t))throw new TypeError("Table data must be an array.");if(0===t.length)throw new Error("Table must define at least one row.");if(0===t[0].length)throw new Error("Table must define at least one column.");const e=t[0].length;for(const n of t){if(!Array.isArray(n))throw new TypeError("Table row data must be an array.");if(n.length!==e)throw new Error("Table must have a consistent number of cells.");for(const t of n)if(/[\u0001-\u0006\u0008\u0009\u000B-\u001A]/.test(r.normalizeString(String(t))))throw new Error("Table data must not contain control characters.")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},function(t,e,n){"use strict";n.r(e);n(22),n(23);exports.handler=async function(t,e){return{statusCode:200,body:JSON.stringify({message:"Hello World!"})}}}]));