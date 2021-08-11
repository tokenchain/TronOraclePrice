(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{332:function(e,t,f){"use strict";var r=f(29),d=f(146),n=d.getNAF,o=d.getJSF,h=d.assert;function c(e,t){this.type=e,this.p=new r(t.p,16),this.red=t.prime?r.red(t.prime):r.mont(this.p),this.zero=new r(0).toRed(this.red),this.one=new r(1).toRed(this.red),this.two=new r(2).toRed(this.red),this.n=t.n&&new r(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var f=this.n&&this.p.div(this.n);!f||f.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function l(e,t){this.curve=e,this.type=t,this.precomputed=null}e.exports=c,c.prototype.point=function(){throw new Error("Not implemented")},c.prototype.validate=function(){throw new Error("Not implemented")},c.prototype._fixedNafMul=function(p,e){h(p.precomputed);var t=p._getDoubles(),f=n(e,1,this._bitLength),r=(1<<t.step+1)-(t.step%2==0?2:1);r/=3;var d,o,c=[];for(d=0;d<f.length;d+=t.step){o=0;for(var l=d+t.step-1;l>=d;l--)o=(o<<1)+f[l];c.push(o)}for(var a=this.jpoint(null,null,null),b=this.jpoint(null,null,null),i=r;i>0;i--){for(d=0;d<c.length;d++)(o=c[d])===i?b=b.mixedAdd(t.points[d]):o===-i&&(b=b.mixedAdd(t.points[d].neg()));a=a.add(b)}return a.toP()},c.prototype._wnafMul=function(p,e){var t=4,f=p._getNAFPoints(t);t=f.wnd;for(var r=f.points,d=n(e,t,this._bitLength),o=this.jpoint(null,null,null),i=d.length-1;i>=0;i--){for(var c=0;i>=0&&0===d[i];i--)c++;if(i>=0&&c++,o=o.dblp(c),i<0)break;var l=d[i];h(0!==l),o="affine"===p.type?l>0?o.mixedAdd(r[l-1>>1]):o.mixedAdd(r[-l-1>>1].neg()):l>0?o.add(r[l-1>>1]):o.add(r[-l-1>>1].neg())}return"affine"===p.type?o.toP():o},c.prototype._wnafMulAdd=function(e,t,f,r,d){var i,h,p,c=this._wnafT1,l=this._wnafT2,v=this._wnafT3,y=0;for(i=0;i<r;i++){var m=(p=t[i])._getNAFPoints(e);c[i]=m.wnd,l[i]=m.points}for(i=r-1;i>=1;i-=2){var a=i-1,b=i;if(1===c[a]&&1===c[b]){var S=[t[a],null,null,t[b]];0===t[a].y.cmp(t[b].y)?(S[1]=t[a].add(t[b]),S[2]=t[a].toJ().mixedAdd(t[b].neg())):0===t[a].y.cmp(t[b].y.redNeg())?(S[1]=t[a].toJ().mixedAdd(t[b]),S[2]=t[a].add(t[b].neg())):(S[1]=t[a].toJ().mixedAdd(t[b]),S[2]=t[a].toJ().mixedAdd(t[b].neg()));var A=[-3,-1,-5,-7,0,7,5,1,3],I=o(f[a],f[b]);for(y=Math.max(I[0].length,y),v[a]=new Array(y),v[b]=new Array(y),h=0;h<y;h++){var M=0|I[0][h],x=0|I[1][h];v[a][h]=A[3*(M+1)+(x+1)],v[b][h]=0,l[a]=S}}else v[a]=n(f[a],c[a],this._bitLength),v[b]=n(f[b],c[b],this._bitLength),y=Math.max(v[a].length,y),y=Math.max(v[b].length,y)}var w=this.jpoint(null,null,null),z=this._wnafT4;for(i=y;i>=0;i--){for(var _=0;i>=0;){var R=!0;for(h=0;h<r;h++)z[h]=0|v[h][i],0!==z[h]&&(R=!1);if(!R)break;_++,i--}if(i>=0&&_++,w=w.dblp(_),i<0)break;for(h=0;h<r;h++){var N=z[h];0!==N&&(N>0?p=l[h][N-1>>1]:N<0&&(p=l[h][-N-1>>1].neg()),w="affine"===p.type?w.mixedAdd(p):w.add(p))}}for(i=0;i<r;i++)l[i]=null;return d?w:w.toP()},c.BasePoint=l,l.prototype.eq=function(){throw new Error("Not implemented")},l.prototype.validate=function(){return this.curve.validate(this)},c.prototype.decodePoint=function(e,t){e=d.toArray(e,t);var f=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*f)return 6===e[0]?h(e[e.length-1]%2==0):7===e[0]&&h(e[e.length-1]%2==1),this.point(e.slice(1,1+f),e.slice(1+f,1+2*f));if((2===e[0]||3===e[0])&&e.length-1===f)return this.pointFromX(e.slice(1,1+f),3===e[0]);throw new Error("Unknown point format")},l.prototype.encodeCompressed=function(e){return this.encode(e,!0)},l.prototype._encode=function(e){var t=this.curve.p.byteLength(),f=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(f):[4].concat(f,this.getY().toArray("be",t))},l.prototype.encode=function(e,t){return d.encode(this._encode(t),e)},l.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},l.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},l.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var f=[this],r=this,i=0;i<t;i+=e){for(var d=0;d<e;d++)r=r.dbl();f.push(r)}return{step:e,points:f}},l.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],f=(1<<e)-1,r=1===f?null:this.dbl(),i=1;i<f;i++)t[i]=t[i-1].add(r);return{wnd:e,points:t}},l.prototype._getBeta=function(){return null},l.prototype.dblp=function(e){for(var t=this,i=0;i<e;i++)t=t.dbl();return t}},446:function(e,t,f){"use strict";var pre,r=t,d=f(88),n=f(612),o=f(146).assert;function h(e){"short"===e.type?this.curve=new n.short(e):"edwards"===e.type?this.curve=new n.edwards(e):this.curve=new n.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,o(this.g.validate(),"Invalid curve"),o(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function c(e,t){Object.defineProperty(r,e,{configurable:!0,enumerable:!0,get:function(){var f=new h(t);return Object.defineProperty(r,e,{configurable:!0,enumerable:!0,value:f}),f}})}r.PresetCurve=h,c("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:d.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),c("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:d.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),c("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:d.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),c("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:d.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),c("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:d.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),c("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:d.sha256,gRed:!1,g:["9"]}),c("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:d.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{pre=f(973)}catch(e){pre=void 0}c("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:d.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",pre]})},609:function(e,t,f){"use strict";var r=t;r.version=f(968).version,r.utils=f(146),r.rand=f(611),r.curve=f(612),r.curves=f(446),r.ec=f(974),r.eddsa=f(978)},612:function(e,t,f){"use strict";var r=t;r.base=f(332),r.short=f(970),r.mont=f(971),r.edwards=f(972)},970:function(e,t,f){"use strict";var r=f(146),d=f(29),n=f(330),o=f(332),h=r.assert;function c(e){o.call(this,"short",e),this.a=new d(e.a,16).toRed(this.red),this.b=new d(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function l(e,t,f,r){o.BasePoint.call(this,e,"affine"),null===t&&null===f?(this.x=null,this.y=null,this.inf=!0):(this.x=new d(t,16),this.y=new d(f,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function v(e,t,f,r){o.BasePoint.call(this,e,"jacobian"),null===t&&null===f&&null===r?(this.x=this.curve.one,this.y=this.curve.one,this.z=new d(0)):(this.x=new d(t,16),this.y=new d(f,16),this.z=new d(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}n(c,o),e.exports=c,c.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,f;if(e.beta)t=new d(e.beta,16).toRed(this.red);else{var r=this._getEndoRoots(this.p);t=(t=r[0].cmp(r[1])<0?r[0]:r[1]).toRed(this.red)}if(e.lambda)f=new d(e.lambda,16);else{var n=this._getEndoRoots(this.n);0===this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))?f=n[0]:(f=n[1],h(0===this.g.mul(f).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:f,basis:e.basis?e.basis.map((function(e){return{a:new d(e.a,16),b:new d(e.b,16)}})):this._getEndoBasis(f)}}},c.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:d.mont(e),f=new d(2).toRed(t).redInvm(),r=f.redNeg(),s=new d(3).toRed(t).redNeg().redSqrt().redMul(f);return[r.redAdd(s).fromRed(),r.redSub(s).fromRed()]},c.prototype._getEndoBasis=function(e){for(var t,f,r,n,o,h,c,l,v,y=this.n.ushrn(Math.floor(this.n.bitLength()/2)),u=e,m=this.n.clone(),S=new d(1),A=new d(0),I=new d(0),M=new d(1),i=0;0!==u.cmpn(0);){var q=m.div(u);l=m.sub(q.mul(u)),v=I.sub(q.mul(S));var x=M.sub(q.mul(A));if(!r&&l.cmp(y)<0)t=c.neg(),f=S,r=l.neg(),n=v;else if(r&&2==++i)break;c=l,m=u,u=l,I=S,S=v,M=A,A=x}o=l.neg(),h=v;var w=r.sqr().add(n.sqr());return o.sqr().add(h.sqr()).cmp(w)>=0&&(o=t,h=f),r.negative&&(r=r.neg(),n=n.neg()),o.negative&&(o=o.neg(),h=h.neg()),[{a:r,b:n},{a:o,b:h}]},c.prototype._endoSplit=function(e){var t=this.endo.basis,f=t[0],r=t[1],d=r.b.mul(e).divRound(this.n),n=f.b.neg().mul(e).divRound(this.n),o=d.mul(f.a),h=n.mul(r.a),c=d.mul(f.b),l=n.mul(r.b);return{k1:e.sub(o).sub(h),k2:c.add(l).neg()}},c.prototype.pointFromX=function(e,t){(e=new d(e,16)).red||(e=e.toRed(this.red));var f=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),r=f.redSqrt();if(0!==r.redSqr().redSub(f).cmp(this.zero))throw new Error("invalid point");var n=r.fromRed().isOdd();return(t&&!n||!t&&n)&&(r=r.redNeg()),this.point(e,r)},c.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,f=e.y,r=this.a.redMul(t),d=t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);return 0===f.redSqr().redISub(d).cmpn(0)},c.prototype._endoWnafMulAdd=function(e,t,f){for(var r=this._endoWnafT1,d=this._endoWnafT2,i=0;i<e.length;i++){var n=this._endoSplit(t[i]),p=e[i],o=p._getBeta();n.k1.negative&&(n.k1.ineg(),p=p.neg(!0)),n.k2.negative&&(n.k2.ineg(),o=o.neg(!0)),r[2*i]=p,r[2*i+1]=o,d[2*i]=n.k1,d[2*i+1]=n.k2}for(var h=this._wnafMulAdd(1,r,d,2*i,f),c=0;c<2*i;c++)r[c]=null,d[c]=null;return h},n(l,o.BasePoint),c.prototype.point=function(e,t,f){return new l(this,e,t,f)},c.prototype.pointFromJSON=function(e,t){return l.fromJSON(this,e,t)},l.prototype._getBeta=function(){if(this.curve.endo){var pre=this.precomputed;if(pre&&pre.beta)return pre.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(pre){var t=this.curve,f=function(p){return t.point(p.x.redMul(t.endo.beta),p.y)};pre.beta=e,e.precomputed={beta:null,naf:pre.naf&&{wnd:pre.naf.wnd,points:pre.naf.points.map(f)},doubles:pre.doubles&&{step:pre.doubles.step,points:pre.doubles.points.map(f)}}}return e}},l.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},l.fromJSON=function(e,t,f){"string"==typeof t&&(t=JSON.parse(t));var r=e.point(t[0],t[1],f);if(!t[2])return r;function d(t){return e.point(t[0],t[1],f)}var pre=t[2];return r.precomputed={beta:null,doubles:pre.doubles&&{step:pre.doubles.step,points:[r].concat(pre.doubles.points.map(d))},naf:pre.naf&&{wnd:pre.naf.wnd,points:[r].concat(pre.naf.points.map(d))}},r},l.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},l.prototype.isInfinity=function(){return this.inf},l.prototype.add=function(p){if(this.inf)return p;if(p.inf)return this;if(this.eq(p))return this.dbl();if(this.neg().eq(p))return this.curve.point(null,null);if(0===this.x.cmp(p.x))return this.curve.point(null,null);var e=this.y.redSub(p.y);0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(p.x).redInvm()));var t=e.redSqr().redISub(this.x).redISub(p.x),f=e.redMul(this.x.redSub(t)).redISub(this.y);return this.curve.point(t,f)},l.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var a=this.curve.a,t=this.x.redSqr(),f=e.redInvm(),r=t.redAdd(t).redIAdd(t).redIAdd(a).redMul(f),d=r.redSqr().redISub(this.x.redAdd(this.x)),n=r.redMul(this.x.redSub(d)).redISub(this.y);return this.curve.point(d,n)},l.prototype.getX=function(){return this.x.fromRed()},l.prototype.getY=function(){return this.y.fromRed()},l.prototype.mul=function(e){return e=new d(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},l.prototype.mulAdd=function(e,t,f){var r=[this,t],d=[e,f];return this.curve.endo?this.curve._endoWnafMulAdd(r,d):this.curve._wnafMulAdd(1,r,d,2)},l.prototype.jmulAdd=function(e,t,f){var r=[this,t],d=[e,f];return this.curve.endo?this.curve._endoWnafMulAdd(r,d,!0):this.curve._wnafMulAdd(1,r,d,2,!0)},l.prototype.eq=function(p){return this===p||this.inf===p.inf&&(this.inf||0===this.x.cmp(p.x)&&0===this.y.cmp(p.y))},l.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var pre=this.precomputed,f=function(p){return p.neg()};t.precomputed={naf:pre.naf&&{wnd:pre.naf.wnd,points:pre.naf.points.map(f)},doubles:pre.doubles&&{step:pre.doubles.step,points:pre.doubles.points.map(f)}}}return t},l.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},n(v,o.BasePoint),c.prototype.jpoint=function(e,t,f){return new v(this,e,t,f)},v.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),f=this.x.redMul(t),r=this.y.redMul(t).redMul(e);return this.curve.point(f,r)},v.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},v.prototype.add=function(p){if(this.isInfinity())return p;if(p.isInfinity())return this;var e=p.z.redSqr(),t=this.z.redSqr(),f=this.x.redMul(e),r=p.x.redMul(t),d=this.y.redMul(e.redMul(p.z)),n=p.y.redMul(t.redMul(this.z)),o=f.redSub(r),h=d.redSub(n);if(0===o.cmpn(0))return 0!==h.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var h2=o.redSqr(),h3=h2.redMul(o),c=f.redMul(h2),l=h.redSqr().redIAdd(h3).redISub(c).redISub(c),v=h.redMul(c.redISub(l)).redISub(d.redMul(h3)),y=this.z.redMul(p.z).redMul(o);return this.curve.jpoint(l,v,y)},v.prototype.mixedAdd=function(p){if(this.isInfinity())return p.toJ();if(p.isInfinity())return this;var e=this.z.redSqr(),t=this.x,f=p.x.redMul(e),r=this.y,d=p.y.redMul(e).redMul(this.z),n=t.redSub(f),o=r.redSub(d);if(0===n.cmpn(0))return 0!==o.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var h2=n.redSqr(),h3=h2.redMul(n),h=t.redMul(h2),c=o.redSqr().redIAdd(h3).redISub(h).redISub(h),l=o.redMul(h.redISub(c)).redISub(r.redMul(h3)),v=this.z.redMul(n);return this.curve.jpoint(c,l,v)},v.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var i;if(this.curve.zeroA||this.curve.threeA){var t=this;for(i=0;i<e;i++)t=t.dbl();return t}var a=this.curve.a,f=this.curve.tinv,r=this.x,d=this.y,n=this.z,o=n.redSqr().redSqr(),h=d.redAdd(d);for(i=0;i<e;i++){var c=r.redSqr(),l=h.redSqr(),v=l.redSqr(),y=c.redAdd(c).redIAdd(c).redIAdd(a.redMul(o)),m=r.redMul(l),S=y.redSqr().redISub(m.redAdd(m)),A=m.redISub(S),I=y.redMul(A);I=I.redIAdd(I).redISub(v);var M=h.redMul(n);i+1<e&&(o=o.redMul(v)),r=S,n=M,h=I}return this.curve.jpoint(r,h.redMul(f),n)},v.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},v.prototype._zeroDbl=function(){var e,t,f;if(this.zOne){var r=this.x.redSqr(),d=this.y.redSqr(),n=d.redSqr(),s=this.x.redAdd(d).redSqr().redISub(r).redISub(n);s=s.redIAdd(s);var o=r.redAdd(r).redIAdd(r),h=o.redSqr().redISub(s).redISub(s),c=n.redIAdd(n);c=(c=c.redIAdd(c)).redIAdd(c),e=h,t=o.redMul(s.redISub(h)).redISub(c),f=this.y.redAdd(this.y)}else{var a=this.x.redSqr(),b=this.y.redSqr(),l=b.redSqr(),v=this.x.redAdd(b).redSqr().redISub(a).redISub(l);v=v.redIAdd(v);var y=a.redAdd(a).redIAdd(a),m=y.redSqr(),S=l.redIAdd(l);S=(S=S.redIAdd(S)).redIAdd(S),e=m.redISub(v).redISub(v),t=y.redMul(v.redISub(e)).redISub(S),f=(f=this.y.redMul(this.z)).redIAdd(f)}return this.curve.jpoint(e,t,f)},v.prototype._threeDbl=function(){var e,t,f;if(this.zOne){var r=this.x.redSqr(),d=this.y.redSqr(),n=d.redSqr(),s=this.x.redAdd(d).redSqr().redISub(r).redISub(n);s=s.redIAdd(s);var o=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),h=o.redSqr().redISub(s).redISub(s);e=h;var c=n.redIAdd(n);c=(c=c.redIAdd(c)).redIAdd(c),t=o.redMul(s.redISub(h)).redISub(c),f=this.y.redAdd(this.y)}else{var l=this.z.redSqr(),v=this.y.redSqr(),y=this.x.redMul(v),m=this.x.redSub(l).redMul(this.x.redAdd(l));m=m.redAdd(m).redIAdd(m);var S=y.redIAdd(y),A=(S=S.redIAdd(S)).redAdd(S);e=m.redSqr().redISub(A),f=this.y.redAdd(this.z).redSqr().redISub(v).redISub(l);var I=v.redSqr();I=(I=(I=I.redIAdd(I)).redIAdd(I)).redIAdd(I),t=m.redMul(S.redISub(e)).redISub(I)}return this.curve.jpoint(e,t,f)},v.prototype._dbl=function(){var a=this.curve.a,e=this.x,t=this.y,f=this.z,r=f.redSqr().redSqr(),d=e.redSqr(),n=t.redSqr(),o=d.redAdd(d).redIAdd(d).redIAdd(a.redMul(r)),h=e.redAdd(e),c=(h=h.redIAdd(h)).redMul(n),l=o.redSqr().redISub(c.redAdd(c)),v=c.redISub(l),y=n.redSqr();y=(y=(y=y.redIAdd(y)).redIAdd(y)).redIAdd(y);var m=o.redMul(v).redISub(y),S=t.redAdd(t).redMul(f);return this.curve.jpoint(l,m,S)},v.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),f=this.z.redSqr(),r=t.redSqr(),d=e.redAdd(e).redIAdd(e),n=d.redSqr(),o=this.x.redAdd(t).redSqr().redISub(e).redISub(r),h=(o=(o=(o=o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(n)).redSqr(),c=r.redIAdd(r);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var u=d.redIAdd(o).redSqr().redISub(n).redISub(h).redISub(c),l=t.redMul(u);l=(l=l.redIAdd(l)).redIAdd(l);var v=this.x.redMul(h).redISub(l);v=(v=v.redIAdd(v)).redIAdd(v);var y=this.y.redMul(u.redMul(c.redISub(u)).redISub(o.redMul(h)));y=(y=(y=y.redIAdd(y)).redIAdd(y)).redIAdd(y);var m=this.z.redAdd(o).redSqr().redISub(f).redISub(h);return this.curve.jpoint(v,y,m)},v.prototype.mul=function(e,t){return e=new d(e,t),this.curve._wnafMul(this,e)},v.prototype.eq=function(p){if("affine"===p.type)return this.eq(p.toJ());if(this===p)return!0;var e=this.z.redSqr(),t=p.z.redSqr();if(0!==this.x.redMul(t).redISub(p.x.redMul(e)).cmpn(0))return!1;var f=e.redMul(this.z),r=t.redMul(p.z);return 0===this.y.redMul(r).redISub(p.y.redMul(f)).cmpn(0)},v.prototype.eqXToP=function(e){var t=this.z.redSqr(),f=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(f))return!0;for(var r=e.clone(),d=this.curve.redN.redMul(t);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(f.redIAdd(d),0===this.x.cmp(f))return!0}},v.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},v.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},971:function(e,t,f){"use strict";var r=f(29),d=f(330),n=f(332),o=f(146);function h(e){n.call(this,"mont",e),this.a=new r(e.a,16).toRed(this.red),this.b=new r(e.b,16).toRed(this.red),this.i4=new r(4).toRed(this.red).redInvm(),this.two=new r(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function c(e,t,f){n.BasePoint.call(this,e,"projective"),null===t&&null===f?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new r(t,16),this.z=new r(f,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}d(h,n),e.exports=h,h.prototype.validate=function(e){var t=e.normalize().x,f=t.redSqr(),r=f.redMul(t).redAdd(f.redMul(this.a)).redAdd(t);return 0===r.redSqrt().redSqr().cmp(r)},d(c,n.BasePoint),h.prototype.decodePoint=function(e,t){return this.point(o.toArray(e,t),1)},h.prototype.point=function(e,t){return new c(this,e,t)},h.prototype.pointFromJSON=function(e){return c.fromJSON(this,e)},c.prototype.precompute=function(){},c.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},c.fromJSON=function(e,t){return new c(e,t[0],t[1]||e.one)},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},c.prototype.dbl=function(){var e=this.x.redAdd(this.z).redSqr(),t=this.x.redSub(this.z).redSqr(),f=e.redSub(t),r=e.redMul(t),d=f.redMul(t.redAdd(this.curve.a24.redMul(f)));return this.curve.point(r,d)},c.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.diffAdd=function(p,e){var a=this.x.redAdd(this.z),b=this.x.redSub(this.z),t=p.x.redAdd(p.z),f=p.x.redSub(p.z).redMul(a),r=t.redMul(b),d=e.z.redMul(f.redAdd(r).redSqr()),n=e.x.redMul(f.redISub(r).redSqr());return this.curve.point(d,n)},c.prototype.mul=function(e){for(var t=e.clone(),a=this,b=this.curve.point(null,null),f=[];0!==t.cmpn(0);t.iushrn(1))f.push(t.andln(1));for(var i=f.length-1;i>=0;i--)0===f[i]?(a=a.diffAdd(b,this),b=b.dbl()):(b=a.diffAdd(b,this),a=a.dbl());return b},c.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},c.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},c.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},972:function(e,t,f){"use strict";var r=f(146),d=f(29),n=f(330),o=f(332),h=r.assert;function c(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,o.call(this,"edwards",e),this.a=new d(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new d(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new d(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),h(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function l(e,t,f,r,n){o.BasePoint.call(this,e,"projective"),null===t&&null===f&&null===r?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new d(t,16),this.y=new d(f,16),this.z=r?new d(r,16):this.curve.one,this.t=n&&new d(n,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}n(c,o),e.exports=c,c.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},c.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},c.prototype.jpoint=function(e,t,f,r){return this.point(e,t,f,r)},c.prototype.pointFromX=function(e,t){(e=new d(e,16)).red||(e=e.toRed(this.red));var f=e.redSqr(),r=this.c2.redSub(this.a.redMul(f)),n=this.one.redSub(this.c2.redMul(this.d).redMul(f)),o=r.redMul(n.redInvm()),h=o.redSqrt();if(0!==h.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");var c=h.fromRed().isOdd();return(t&&!c||!t&&c)&&(h=h.redNeg()),this.point(e,h)},c.prototype.pointFromY=function(e,t){(e=new d(e,16)).red||(e=e.toRed(this.red));var f=e.redSqr(),r=f.redSub(this.c2),n=f.redMul(this.d).redMul(this.c2).redSub(this.a),o=r.redMul(n.redInvm());if(0===o.cmp(this.zero)){if(t)throw new Error("invalid point");return this.point(this.zero,e)}var h=o.redSqrt();if(0!==h.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");return h.fromRed().isOdd()!==t&&(h=h.redNeg()),this.point(h,e)},c.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),f=e.y.redSqr(),r=t.redMul(this.a).redAdd(f),d=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(f)));return 0===r.cmp(d)},n(l,o.BasePoint),c.prototype.pointFromJSON=function(e){return l.fromJSON(this,e)},c.prototype.point=function(e,t,f,r){return new l(this,e,t,f,r)},l.fromJSON=function(e,t){return new l(e,t[0],t[1],t[2])},l.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},l.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},l.prototype._extDbl=function(){var a=this.x.redSqr(),b=this.y.redSqr(),e=this.z.redSqr();e=e.redIAdd(e);var t=this.curve._mulA(a),f=this.x.redAdd(this.y).redSqr().redISub(a).redISub(b),g=t.redAdd(b),r=g.redSub(e),d=t.redSub(b),n=f.redMul(r),o=g.redMul(d),h=f.redMul(d),c=r.redMul(g);return this.curve.point(n,o,c,h)},l.prototype._projDbl=function(){var e,t,f,r,d,n,b=this.x.redAdd(this.y).redSqr(),o=this.x.redSqr(),h=this.y.redSqr();if(this.curve.twisted){var c=(r=this.curve._mulA(o)).redAdd(h);this.zOne?(e=b.redSub(o).redSub(h).redMul(c.redSub(this.curve.two)),t=c.redMul(r.redSub(h)),f=c.redSqr().redSub(c).redSub(c)):(d=this.z.redSqr(),n=c.redSub(d).redISub(d),e=b.redSub(o).redISub(h).redMul(n),t=c.redMul(r.redSub(h)),f=c.redMul(n))}else r=o.redAdd(h),d=this.curve._mulC(this.z).redSqr(),n=r.redSub(d).redSub(d),e=this.curve._mulC(b.redISub(r)).redMul(n),t=this.curve._mulC(r).redMul(o.redISub(h)),f=r.redMul(n);return this.curve.point(e,t,f)},l.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},l.prototype._extAdd=function(p){var a=this.y.redSub(this.x).redMul(p.y.redSub(p.x)),b=this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)),e=this.t.redMul(this.curve.dd).redMul(p.t),t=this.z.redMul(p.z.redAdd(p.z)),f=b.redSub(a),r=t.redSub(e),g=t.redAdd(e),d=b.redAdd(a),n=f.redMul(r),o=g.redMul(d),h=f.redMul(d),c=r.redMul(g);return this.curve.point(n,o,c,h)},l.prototype._projAdd=function(p){var e,t,a=this.z.redMul(p.z),b=a.redSqr(),f=this.x.redMul(p.x),r=this.y.redMul(p.y),d=this.curve.d.redMul(f).redMul(r),n=b.redSub(d),g=b.redAdd(d),o=this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(f).redISub(r),h=a.redMul(n).redMul(o);return this.curve.twisted?(e=a.redMul(g).redMul(r.redSub(this.curve._mulA(f))),t=n.redMul(g)):(e=a.redMul(g).redMul(r.redSub(f)),t=this.curve._mulC(n).redMul(g)),this.curve.point(h,e,t)},l.prototype.add=function(p){return this.isInfinity()?p:p.isInfinity()?this:this.curve.extended?this._extAdd(p):this._projAdd(p)},l.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},l.prototype.mulAdd=function(e,p,t){return this.curve._wnafMulAdd(1,[this,p],[e,t],2,!1)},l.prototype.jmulAdd=function(e,p,t){return this.curve._wnafMulAdd(1,[this,p],[e,t],2,!0)},l.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},l.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},l.prototype.getX=function(){return this.normalize(),this.x.fromRed()},l.prototype.getY=function(){return this.normalize(),this.y.fromRed()},l.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},l.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var f=e.clone(),r=this.curve.redN.redMul(this.z);;){if(f.iadd(this.curve.n),f.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(r),0===this.x.cmp(t))return!0}},l.prototype.toP=l.prototype.normalize,l.prototype.mixedAdd=l.prototype.add}}]);