(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{38:function(n,t,e){"use strict";e.d(t,"i",(function(){return y})),e.d(t,"h",(function(){return v})),e.d(t,"g",(function(){return C})),e.d(t,"e",(function(){return B})),e.d(t,"f",(function(){return S})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return _})),e.d(t,"d",(function(){return N})),e.d(t,"p",(function(){return I})),e.d(t,"a",(function(){return P})),e.d(t,"q",(function(){return w})),e.d(t,"r",(function(){return E})),e.d(t,"n",(function(){return A})),e.d(t,"s",(function(){return R})),e.d(t,"t",(function(){return D})),e.d(t,"m",(function(){return L})),e.d(t,"k",(function(){return F})),e.d(t,"j",(function(){return M})),e.d(t,"l",(function(){return O})),e.d(t,"o",(function(){return T}));var r=e(52),o=(e(54),e(94),e(44),e(82),e(329),e(102),e(70),e(90),e(21),e(55),e(175),e(50),e(30)),c=e.n(o),f=/[-.]/,m=/(\d)(?=(\d{3})+$)/g;function l(n){try{if(c.a.utils.isBigNumber(n)){var t=n.toNumber();return parseFloat(c.a.fromSun(t))}if(d(n)&&n._isBigNumber&&n.hasOwnProperty("_hex")){var e=new o.BigNumber(n._hex);return parseFloat(c.a.fromSun(e))}if("string"==typeof n){var r=c.a.toBigNumber(n).toNumber();return parseFloat(c.a.fromSun(r))}return"number"==typeof n?parseFloat(c.a.fromSun(n)):0}catch(n){return console.error(n),0}}function d(n){return!!c.a.utils.isBigNumber(n)||!("object"!==Object(r.a)(n)||!n.hasOwnProperty("_isBigNumber"))&&n._isBigNumber}function _(n){try{var t=l(n);return Math.floor(t)}catch(n){return console.error(n),0}}function N(n){try{if("string"==typeof n)return c.a.toBigNumber(n).multipliedBy(1e6).toNumber();if("number"==typeof n)return c.a.toBigNumber(n).multipliedBy(1e6).toNumber();if(c.a.utils.isBigNumber(n))return n.multipliedBy(1e6).toNumber();if("object"===Object(r.a)(n)&&n.hasOwnProperty("_isBigNumber")){if(n._isBigNumber&&n.hasOwnProperty("_hex"))return new o.BigNumber(n._hex).multipliedBy(1e6).toNumber();console.log("failed to create big number")}throw"Not ready for ___fromTrxToSun..."}catch(n){return console.error(n),0}}function h(n){try{if("string"==typeof n)return c.a.toBigNumber(n);if("number"==typeof n)return c.a.toBigNumber(n);if(c.a.utils.isBigNumber(n))return n;if(d(n)){if(n._isBigNumber&&n.hasOwnProperty("_hex"))return new o.BigNumber(n._hex);console.log("failed to create big number")}return c.a.toBigNumber(n)}catch(n){return console.error(n),0}}function I(n){try{var t=c.a.toBigNumber(0);return c.a.utils.isBigNumber(n)?t=n:d(n)?n._isBigNumber&&n.hasOwnProperty("_hex")?t=new o.BigNumber(n._hex):console.log("failed to create big number"):("string"==typeof n||"number"==typeof n)&&(t=c.a.toBigNumber(n)),t.toNumber()}catch(n){return n.toString().includes("Error: overflow")?-1:(console.info(n),0)}}function y(n,t){var e=Math.pow(10,t),g=parseFloat(n)/parseFloat(e);return parseFloat(g)}function v(n){return y(n,6).formatCurrency(",",".","")}function B(n,t){return y(n,t).formatScience(",",".","",2)}function S(n,t){return y(n,t).formatScience(",",".","",6)}function C(n,t){return y(n,t).formatCurrency(",",".","")}function T(n){var t=0;return n.forEach((function(n,i){var e=0;e=d(n)?I(n):parseInt(n),t+=e})),t}function w(n){var t=h(1e6);if(d(n))return function(n){try{var t=c.a.fromSun("0");if(c.a.utils.isBigNumber(n)){var e=n.toNumber();t=c.a.fromSun(e)}if(d(n)&&n._isBigNumber&&n.hasOwnProperty("_hex")){var r=new o.BigNumber(n._hex);t=c.a.fromSun(r)}return t.formatCurrency(",",".","")}catch(n){return console.error(n),0}}(n);var e=h(n).div(t);return e.isGreaterThan(0)?e.formatCurrency(",",".",""):"-"}function E(n){var t=h(1e6);if(isNaN(n))return"-";if(d(n)){var e=n.div(t);return e.isGreaterThan(0)?e.unitMoney(",",".",""):"-"}var r=h(n).div(t);return r.isGreaterThan(0)?r.unitMoney(",",".",""):"-"}function A(n){return isNaN(n)?0:d(n)?l(n):parseFloat(n)}function R(n){return isNaN(n)?"-":d(n)?I(n):parseInt(n)}function O(n){return 0===parseInt(n)?"--":function(n){var t=new Date(1e3*parseInt(n)),e=t.getHours(),r=t.getMinutes(),o=t.getSeconds(),c=t.getFullYear(),f=t.getDate(),m=t.getMonth()+1;return"".concat(c,"/").concat(m,"/").concat(f,", ").concat(e,":").concat(r,":").concat(o)}(n)}function M(n){var t=new Date(1e3*parseInt(n)),e=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return"".concat(e,":").concat(r,":").concat(o)}function F(n){var t=new Date(1e3*parseInt(n)),e=t.getHours(),r=t.getMinutes(),o=t.getSeconds(),dd=t.getDate(),c=t.getMonth(),f=t.getFullYear();return"".concat(f,"/").concat(c,"/").concat(dd," ").concat(e,":").concat(r,":").concat(o)}function L(n){if(!(n>0))return"0";var t=parseInt(n),e=t%3600,r=e%60,o={h:Math.floor(t/3600),m:Math.floor(e/60),s:Math.ceil(r)};return o.h>0?"".concat(o.h,":").concat(o.m,":").concat(o.s):o.m>0?"".concat(o.m,":").concat(o.s):void 0}function P(p,n){return new Array(n-String(p).length+1).join("0")+String(p)}function k(n){if(!+n)return!1;for(var t=String(+n).split(""),e=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],r="",i=3;i--;)r=(e[+t.pop()+10*i]||"")+r;return Array(+t.join("")+1).join("M")+r}function D(n){return isNaN(n)?"-":d(n)?k(I(n)):k(parseInt(n))}o.BigNumber.prototype.formatCurrency=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"$";return this.toFixed(2).toString().split(f).reverse().reduceRight((function(e,r,i){return 2===i?"-"+e:1===i?e+r.replace(m,"$1"+n):e+t+r}),e)},o.BigNumber.prototype.formatSun=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"$";return this.toFixed(6).toString().split(f).reverse().reduceRight((function(e,r,i){return 2===i?"-"+e:1===i?e+r.replace(m,"$1"+n):e+t+r}),e)},o.BigNumber.prototype.unitMoney=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"$";return this.toFixed(1).toString().split(f).reverse().reduceRight((function(e,r,i){return 2===i?"-"+e:1===i?e+r.replace(m,"$1"+n):e+t+r}),e)}},810:function(n,t,e){"use strict";e(21),e(57);var r=e(249),o=e.n(r),c=(e(30),{PASTE_BIN_INIT:function(n,t){n.isPasteBinInit=!0},USER_ACCOUNT_INIT:function(n,t){n.user_account=t,n.islogin=!0},USER_BASIC:function(n,t){var e=t.founder;n.founder_account=e},IS_FOUNDER:function(n,b){n.isfounder=b},PERMISSION:function(n,b){n.isPermissioned=b},FAM_BAL_STORE:function(n,t){n.fam_balance=t.bySun(n.user_account),n.fam_dec=t.decimal},TRX_BAL_STORE:function(n,t){n.network_balance=t},CONTRACT_DECIMAL:function(n,t){n.decimals=t},CONTRACT_ADDRESS:function(n,t){n.contract_address=t},CONTRACT_BALANCE:function(n,t){n.contract_balance=t},PUSH_ITEM:function(n,t){n.console_items.unshift({message:t.msg,type:t.whatsort,data:t.dat,time:(new Date).getTime()})},CLEAR_ITEM:function(n){n.console_items=[]},TOKEN_LIST:function(n,t){n.tokenFlatList=[],n.tokenFlatList.push({name:"TRON",sym:"TRX",add:"0x0",deci:6,network_balance:n.network_balance}),o.a.forEach(t,(function(t){var e={name:t.name,sym:t.symbol,add:t.contractAddress,network_balance:t.balance,deci:parseInt(t.decimals)};n.tokenlist[t.symbol]=e,n.tokenFlatList.push(e)}))}}),f={save_balance:function(n,t){(0,n.commit)("TRX_BAL_STORE",t)},syncdata:function(n,t){n.commit;var e=n.state;e.sync_count=e.sync_count+1,e.health=t},basicInfo:function(n,t){(0,n.commit)("USER_BASIC",t)},save_address:function(n,t){(0,n.commit)("USER_ACCOUNT_INIT",t)},save_balance_fam:function(n,t){(0,n.commit)("FAM_BAL_STORE",t)},basicInfoIsFounder:function(n,t){(0,n.commit)("IS_FOUNDER",t)},getContractBalance:function(n,t){(0,n.commit)("CONTRACT_BALANCE",t)},clearEvents:function(n){(0,n.commit)("CLEAR_ITEM")},newEventTransaction:function(n,t){(0,n.commit)("PUSH_ITEM",t)},storePasteBin:function(n,t){var e=n.commit;n.state;e("PASTE_BIN_INIT",t)},keepTokenList:function(n,t){var e=n.commit;n.state;e("TOKEN_LIST",t)},getName:function(n){n.commit,n.state;console.log("test now")},setPermisssion:function(n,b){(0,n.commit)("PERMISSION",b)},updateDecimal:function(n,t){(0,n.commit)("CONTRACT_DECIMAL",parseInt(t.deci))},storeContract:function(n,t){(0,n.commit)("CONTRACT_ADDRESS",t)}};t.a={namespaced:!0,state:{user_account:"",founder_account:"",network_name:"",contract_address:"",contract_balance:0,network_balance:0,fam_balance:0,fam_dec:0,install_state:0,isPermissioned:!1,isfounder:!1,islogin:!1,isPasteBinInit:!1,health:!1,sync_count:0,decimals:0,w3instance:"",tokenlist:{},tokenFlatList:[],console_items:[]},getters:{isLoginWeb3:function(n){return n.islogin},fam_get:function(n){return n.fam_balance},fam_dec:function(n){return n.fam_dec},wallet_setup:function(n){return n.install_state},addressContract:function(n){return n.contract_address},user_account:function(n){return n.user_account},QueryNowSymbol:function(n){return"TRX"},QueryNowBalance:function(n){return n.network_balance},QueryContractBalance:function(n){return n.contract_balance},network:function(n){return n.network_name},get_dec:function(n){return n.decimals},isFounder:function(n){return""===n.founder_account?n.isfounder:n.user_account===n.founder_account},isPermissioned:function(n){return n.isPermissioned},isPasteBinInit:function(n){return n.isPasteBinInit},inSyncs:function(n){return n.sync_count},sync_health:function(n){return n.health},list_events:function(n){return n.console_items},user_tokens:function(n){return n.tokenFlatList}},actions:f,mutations:c}}}]);