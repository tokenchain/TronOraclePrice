(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1331:function(t,e,r){var n=r(75),o=r(704),l=n.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:o(n.prototype.brush),buildPath:function(t,e){var r=e.cx,n=e.cy,o=Math.max(e.r0||0,0),l=Math.max(e.r,0),h=e.startAngle,c=e.endAngle,f=e.clockwise,d=Math.cos(h),x=Math.sin(h);t.moveTo(d*o+r,x*o+n),t.lineTo(d*l+r,x*l+n),t.arc(r,n,l,h,c,!f),t.lineTo(Math.cos(c)*o+r,Math.sin(c)*o+n),0!==o&&t.arc(r,n,o,c,h,f),t.closePath()}});t.exports=l},1332:function(t,e,r){var n=r(75).extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var r=e.cx,n=e.cy,o=2*Math.PI;t.moveTo(r+e.r,n),t.arc(r,n,e.r,0,o,!1),t.moveTo(r+e.r0,n),t.arc(r,n,e.r0,0,o,!0)}});t.exports=n},1333:function(t,e,r){var n=r(69).distance;function o(t,e,r,n,o,l,h){var c=.5*(r-t),f=.5*(n-e);return(2*(e-r)+c+f)*h+(-3*(e-r)-2*c-f)*l+c*o+e}t.exports=function(t,e){for(var r=t.length,l=[],h=0,i=1;i<r;i++)h+=n(t[i-1],t[i]);var c=h/2;for(c=c<r?r:c,i=0;i<c;i++){var f,d,x,y=i/(c-1)*(e?r:r-1),v=Math.floor(y),_=y-v,m=t[v%r];e?(f=t[(v-1+r)%r],d=t[(v+1)%r],x=t[(v+2)%r]):(f=t[0===v?v:v-1],d=t[v>r-2?r-1:v+1],x=t[v>r-3?r-1:v+2]);var w=_*_,S=_*w;l.push([o(f[0],m[0],d[0],x[0],_,w,S),o(f[1],m[1],d[1],x[1],_,w,S)])}return l}},1334:function(t,e,r){var n=r(69),o=n.min,l=n.max,h=n.scale,c=n.distance,f=n.add,d=n.clone,x=n.sub;t.exports=function(t,e,r,n){var y,v,_,m,w=[],S=[],P=[],T=[];if(n){_=[1/0,1/0],m=[-1/0,-1/0];for(var i=0,B=t.length;i<B;i++)o(_,_,t[i]),l(m,m,t[i]);o(_,_,n[0]),l(m,m,n[1])}for(i=0,B=t.length;i<B;i++){var O=t[i];if(r)y=t[i?i-1:B-1],v=t[(i+1)%B];else{if(0===i||i===B-1){w.push(d(t[i]));continue}y=t[i-1],v=t[i+1]}x(S,v,y),h(S,S,e);var k=c(O,y),C=c(O,v),A=k+C;0!==A&&(k/=A,C/=A),h(P,S,-k),h(T,S,C);var D=f([],O,P),R=f([],O,T);n&&(l(D,D,_),o(D,D,m),l(R,R,_),o(R,R,m)),w.push(D),w.push(R)}return r&&w.push(w.shift()),w}},1335:function(t,e,r){var n=r(75),o=r(69),l=r(192),h=l.quadraticSubdivide,c=l.cubicSubdivide,f=l.quadraticAt,d=l.cubicAt,x=l.quadraticDerivativeAt,y=l.cubicDerivativeAt,v=[];function _(t,e,r){var n=t.cpx2,o=t.cpy2;return null===n||null===o?[(r?y:d)(t.x1,t.cpx1,t.cpx2,t.x2,e),(r?y:d)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(r?x:f)(t.x1,t.cpx1,t.x2,e),(r?x:f)(t.y1,t.cpy1,t.y2,e)]}var m=n.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var r=e.x1,n=e.y1,o=e.x2,l=e.y2,f=e.cpx1,d=e.cpy1,x=e.cpx2,y=e.cpy2,_=e.percent;0!==_&&(t.moveTo(r,n),null==x||null==y?(_<1&&(h(r,f,o,_,v),f=v[1],o=v[2],h(n,d,l,_,v),d=v[1],l=v[2]),t.quadraticCurveTo(f,d,o,l)):(_<1&&(c(r,f,x,o,_,v),f=v[1],x=v[2],o=v[3],c(n,d,y,l,_,v),d=v[1],y=v[2],l=v[3]),t.bezierCurveTo(f,d,x,y,o,l)))},pointAt:function(t){return _(this.shape,t,!1)},tangentAt:function(t){var p=_(this.shape,t,!0);return o.normalize(p,p)}});t.exports=m},1336:function(t,e,r){var n=r(75).extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var r=e.cx,n=e.cy,o=Math.max(e.r,0),l=e.startAngle,h=e.endAngle,c=e.clockwise,f=Math.cos(l),d=Math.sin(l);t.moveTo(f*o+r,d*o+n),t.arc(r,n,o,l,h,!c)}});t.exports=n},1337:function(t,e,r){var n=r(75),o=n.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e.length;i++)t=t||e[i].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t.length;i++)t[i].path||t[i].createPathProxy(),t[i].path.setScale(e[0],e[1],t[i].segmentIgnoreThreshold)},buildPath:function(t,e){for(var r=e.paths||[],i=0;i<r.length;i++)r[i].buildPath(t,r[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],i=0;i<t.length;i++)t[i].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),n.prototype.getBoundingRect.call(this)}});t.exports=o},1338:function(t,e,r){var n=r(1),o=r(345),l=function(t,e,r,n,l){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==r?.5:r,this.type="radial",this.global=l||!1,o.call(this,n)};l.prototype={constructor:l},n.inherits(l,o);var h=l;t.exports=h},1352:function(t,e,r){var n=r(75).extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var r=.5522848,n=e.cx,o=e.cy,a=e.rx,b=e.ry,l=a*r,h=b*r;t.moveTo(n-a,o),t.bezierCurveTo(n-a,o-h,n-l,o-b,n,o-b),t.bezierCurveTo(n+l,o-b,n+a,o-h,n+a,o),t.bezierCurveTo(n+a,o+h,n+l,o+b,n,o+b),t.bezierCurveTo(n-l,o+b,n-a,o+h,n-a,o),t.closePath()}});t.exports=n},218:function(t,e,r){var n=r(281),o=r(1),l=r(138),h=r(344),c=r(343).ContextCachedBy,f=function(t){n.call(this,t)};f.prototype={constructor:f,type:"text",brush:function(t,e){var style=this.style;this.__dirty&&h.normalizeTextStyle(style,!0),style.fill=style.stroke=style.shadowBlur=style.shadowColor=style.shadowOffsetX=style.shadowOffsetY=null;var text=style.text;null!=text&&(text+=""),h.needDrawText(text,style)?(this.setTransform(t),h.renderText(this,t,text,style,null,e),this.restoreTransform(t)):t.__attrCachedBy=c.NONE},getBoundingRect:function(){var style=this.style;if(this.__dirty&&h.normalizeTextStyle(style,!0),!this._rect){var text=style.text;null!=text?text+="":text="";var rect=l.getBoundingRect(style.text+"",style.font,style.textAlign,style.textVerticalAlign,style.textPadding,style.textLineHeight,style.rich);if(rect.x+=style.x||0,rect.y+=style.y||0,h.getStroke(style.textStroke,style.textStrokeWidth)){var t=style.textStrokeWidth;rect.x-=t/2,rect.y-=t/2,rect.width+=t,rect.height+=t}this._rect=rect}return this._rect}},o.inherits(f,n);var d=f;t.exports=d},237:function(t,e,r){var n=r(281),o=r(71),l=r(1),h=r(478);function c(t){n.call(this,t)}c.prototype={constructor:c,type:"image",brush:function(t,e){var style=this.style,r=style.image;style.bind(t,this,e);var image=this._image=h.createOrUpdateImage(r,this._image,this,this.onload);if(image&&h.isImageReady(image)){var n=style.x||0,o=style.y||0,l=style.width,c=style.height,f=image.width/image.height;if(null==l&&null!=c?l=c*f:null==c&&null!=l?c=l/f:null==l&&null==c&&(l=image.width,c=image.height),this.setTransform(t),style.sWidth&&style.sHeight){var d=style.sx||0,x=style.sy||0;t.drawImage(image,d,x,style.sWidth,style.sHeight,n,o,l,c)}else if(style.sx&&style.sy){var y=l-(d=style.sx),v=c-(x=style.sy);t.drawImage(image,d,x,y,v,n,o,l,c)}else t.drawImage(image,n,o,l,c);null!=style.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var style=this.style;return this._rect||(this._rect=new o(style.x||0,style.y||0,style.width||0,style.height||0)),this._rect}},l.inherits(c,n);var f=c;t.exports=f},281:function(t,e,r){var n=r(1),o=r(477),l=r(689),h=r(695);function c(t){for(var e in t=t||{},l.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new o(t.style,this),this._rect=null,this.__clipPaths=null}c.prototype={constructor:c,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var r=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(r[0],r[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?l.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new o(t,this),this.dirty(!1),this},calculateTextPosition:null},n.inherits(c,l),n.mixin(c,h);var f=c;t.exports=f},343:function(t,e){e.ContextCachedBy={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},e.WILL_BE_RESTORED=9},344:function(t,e,r){var n=r(1),o=n.retrieve2,l=n.retrieve3,h=n.each,c=n.normalizeCssArray,f=n.isString,d=n.isObject,x=r(138),y=r(696),v=r(478),_=r(692),m=r(343),w=m.ContextCachedBy,S=m.WILL_BE_RESTORED,P=x.DEFAULT_FONT,T={left:1,right:1,center:1},B={top:1,bottom:1,middle:1},O=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],k={},C={};function A(style){if(style){style.font=x.makeFont(style);var t=style.textAlign;"middle"===t&&(t="center"),style.textAlign=null==t||T[t]?t:"left";var e=style.textVerticalAlign||style.textBaseline;"center"===e&&(e="middle"),style.textVerticalAlign=null==e||B[e]?e:"top",style.textPadding&&(style.textPadding=c(style.textPadding))}}function D(t,style,rect,e,r){if(rect&&style.textRotation){var n=style.textOrigin;"center"===n?(e=rect.width/2+rect.x,r=rect.height/2+rect.y):n&&(e=n[0]+rect.x,r=n[1]+rect.y),t.translate(e,r),t.rotate(-style.textRotation),t.translate(-e,-r)}}function R(t,e,r,style,n,h,c,f){var d=style.rich[r.styleName]||{};d.text=r.text;var x=r.textVerticalAlign,y=h+n/2;"top"===x?y=h+r.height/2:"bottom"===x&&(y=h+n-r.height/2),!r.isLineHolder&&I(d)&&L(t,e,d,"right"===f?c-r.width:"center"===f?c-r.width/2:c,y-r.height/2,r.width,r.height);var v=r.textPadding;v&&(c=X(c,f,v),y-=r.height/2-v[2]-r.textHeight/2),N(e,"shadowBlur",l(d.textShadowBlur,style.textShadowBlur,0)),N(e,"shadowColor",d.textShadowColor||style.textShadowColor||"transparent"),N(e,"shadowOffsetX",l(d.textShadowOffsetX,style.textShadowOffsetX,0)),N(e,"shadowOffsetY",l(d.textShadowOffsetY,style.textShadowOffsetY,0)),N(e,"textAlign",f),N(e,"textBaseline","middle"),N(e,"font",r.font||P);var _=F(d.textStroke||style.textStroke,w),m=M(d.textFill||style.textFill),w=o(d.textStrokeWidth,style.textStrokeWidth);_&&(N(e,"lineWidth",w),N(e,"strokeStyle",_),e.strokeText(r.text,c,y)),m&&(N(e,"fillStyle",m),e.fillText(r.text,c,y))}function I(style){return!!(style.textBackgroundColor||style.textBorderWidth&&style.textBorderColor)}function L(t,e,style,r,n,o,l){var h=style.textBackgroundColor,c=style.textBorderWidth,x=style.textBorderColor,_=f(h);if(N(e,"shadowBlur",style.textBoxShadowBlur||0),N(e,"shadowColor",style.textBoxShadowColor||"transparent"),N(e,"shadowOffsetX",style.textBoxShadowOffsetX||0),N(e,"shadowOffsetY",style.textBoxShadowOffsetY||0),_||c&&x){e.beginPath();var m=style.textBorderRadius;m?y.buildPath(e,{x:r,y:n,width:o,height:l,r:m}):e.rect(r,n,o,l),e.closePath()}if(_)if(N(e,"fillStyle",h),null!=style.fillOpacity){var w=e.globalAlpha;e.globalAlpha=style.fillOpacity*style.opacity,e.fill(),e.globalAlpha=w}else e.fill();else if(d(h)){var image=h.image;(image=v.createOrUpdateImage(image,null,t,W,h))&&v.isImageReady(image)&&e.drawImage(image,r,n,o,l)}if(c&&x)if(N(e,"lineWidth",c),N(e,"strokeStyle",x),null!=style.strokeOpacity){w=e.globalAlpha;e.globalAlpha=style.strokeOpacity*style.opacity,e.stroke(),e.globalAlpha=w}else e.stroke()}function W(image,t){t.image=image}function z(t,e,style,rect){var r=style.x||0,n=style.y||0,o=style.textAlign,l=style.textVerticalAlign;if(rect){var h=style.textPosition;if(h instanceof Array)r=rect.x+E(h[0],rect.width),n=rect.y+E(h[1],rect.height);else{var c=e&&e.calculateTextPosition?e.calculateTextPosition(k,style,rect):x.calculateTextPosition(k,style,rect);r=c.x,n=c.y,o=o||c.textAlign,l=l||c.textVerticalAlign}var f=style.textOffset;f&&(r+=f[0],n+=f[1])}return(t=t||{}).baseX=r,t.baseY=n,t.textAlign=o,t.textVerticalAlign=l,t}function N(t,e,r){return t[e]=_(t,e,r),t[e]}function F(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function M(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function E(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function X(t,e,r){return"right"===e?t-r[1]:"center"===e?t+r[3]/2-r[1]/2:t+r[3]}e.normalizeTextStyle=function(style){return A(style),h(style.rich,A),style},e.renderText=function(t,e,text,style,rect,r){style.rich?function(t,e,text,style,rect,r){r!==S&&(e.__attrCachedBy=w.NONE);var n=t.__textCotentBlock;n&&!t.__dirtyText||(n=t.__textCotentBlock=x.parseRichText(text,style));!function(t,e,r,style,rect){var n=r.width,o=r.outerWidth,l=r.outerHeight,h=style.textPadding,c=z(C,t,style,rect),f=c.baseX,d=c.baseY,y=c.textAlign,v=c.textVerticalAlign;D(e,style,rect,f,d);var _=x.adjustTextX(f,o,y),m=x.adjustTextY(d,l,v),w=_,S=m;h&&(w+=h[3],S+=h[0]);var P=w+n;I(style)&&L(t,e,style,_,m,o,l);for(var i=0;i<r.lines.length;i++){for(var T,line=r.lines[i],B=line.tokens,O=B.length,k=line.lineHeight,A=line.width,W=0,N=w,F=P,M=O-1;W<O&&(!(T=B[W]).textAlign||"left"===T.textAlign);)R(t,e,T,style,k,S,N,"left"),A-=T.width,N+=T.width,W++;for(;M>=0&&"right"===(T=B[M]).textAlign;)R(t,e,T,style,k,S,F,"right"),A-=T.width,F-=T.width,M--;for(N+=(n-(N-w)-(P-F)-A)/2;W<=M;)R(t,e,T=B[W],style,k,S,N+T.width/2,"center"),N+=T.width,W++;S+=k}}(t,e,n,style,rect)}(t,e,text,style,rect,r):function(t,e,text,style,rect,r){"use strict";var n,o=I(style),l=!1,h=e.__attrCachedBy===w.PLAIN_TEXT;r!==S?(r&&(n=r.style,l=!o&&h&&n),e.__attrCachedBy=o?w.NONE:w.PLAIN_TEXT):h&&(e.__attrCachedBy=w.NONE);var c=style.font||P;l&&c===(n.font||P)||(e.font=c);var f=t.__computedFont;t.__styleFont!==c&&(t.__styleFont=c,f=t.__computedFont=e.font);var d=style.textPadding,y=style.textLineHeight,v=t.__textCotentBlock;v&&!t.__dirtyText||(v=t.__textCotentBlock=x.parsePlainText(text,f,d,y,style.truncate));var m=v.outerHeight,T=v.lines,B=v.lineHeight,k=z(C,t,style,rect),A=k.baseX,R=k.baseY,W=k.textAlign||"left",N=k.textVerticalAlign;D(e,style,rect,A,R);var E=x.adjustTextY(R,m,N),Y=A,V=E;if(o||d){var G=x.getWidth(text,f);d&&(G+=d[1]+d[3]);var H=x.adjustTextX(A,G,W);o&&L(t,e,style,H,E,G,m),d&&(Y=X(A,W,d),V+=d[0])}e.textAlign=W,e.textBaseline="middle",e.globalAlpha=style.opacity||1;for(var i=0;i<O.length;i++){var j=O[i],K=j[0],U=j[1],J=style[K];l&&J===n[K]||(e[U]=_(e,U,J||j[2]))}V+=B/2;var Q=style.textStrokeWidth,Z=l?n.textStrokeWidth:null,$=!l||Q!==Z,tt=!l||$||style.textStroke!==n.textStroke,et=F(style.textStroke,Q),it=M(style.textFill);et&&($&&(e.lineWidth=Q),tt&&(e.strokeStyle=et));it&&(l&&style.textFill===n.textFill||(e.fillStyle=it));if(1===T.length)et&&e.strokeText(T[0],Y,V),it&&e.fillText(T[0],Y,V);else for(i=0;i<T.length;i++)et&&e.strokeText(T[i],Y,V),it&&e.fillText(T[i],Y,V),V+=B}(t,e,text,style,rect,r)},e.getBoxPosition=z,e.getStroke=F,e.getFill=M,e.parsePercent=E,e.needDrawText=function(text,style){return null!=text&&(text||style.textBackgroundColor||style.textBorderWidth&&style.textBorderColor||style.textPadding)}},345:function(t,e){var r=function(t){this.colorStops=t||[]};r.prototype={constructor:r,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var n=r;t.exports=n},477:function(t,e,r){var n=r(692),o=r(343).ContextCachedBy,l=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],h=function(t){this.extendFrom(t,!1)};function c(t,e,rect){var r=null==e.x?0:e.x,n=null==e.x2?1:e.x2,o=null==e.y?0:e.y,l=null==e.y2?0:e.y2;return e.global||(r=r*rect.width+rect.x,n=n*rect.width+rect.x,o=o*rect.height+rect.y,l=l*rect.height+rect.y),r=isNaN(r)?0:r,n=isNaN(n)?1:n,o=isNaN(o)?0:o,l=isNaN(l)?0:l,t.createLinearGradient(r,o,n,l)}function f(t,e,rect){var r=rect.width,n=rect.height,o=Math.min(r,n),l=null==e.x?.5:e.x,h=null==e.y?.5:e.y,c=null==e.r?.5:e.r;return e.global||(l=l*r+rect.x,h=h*n+rect.y,c*=o),t.createRadialGradient(l,h,0,l,h,c)}for(var d=h.prototype={constructor:h,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,r){var style=this,h=r&&r.style,c=!h||t.__attrCachedBy!==o.STYLE_BIND;t.__attrCachedBy=o.STYLE_BIND;for(var i=0;i<l.length;i++){var f=l[i],d=f[0];(c||style[d]!==h[d])&&(t[d]=n(t,d,style[d]||f[1]))}if((c||style.fill!==h.fill)&&(t.fillStyle=style.fill),(c||style.stroke!==h.stroke)&&(t.strokeStyle=style.stroke),(c||style.opacity!==h.opacity)&&(t.globalAlpha=null==style.opacity?1:style.opacity),(c||style.blend!==h.blend)&&(t.globalCompositeOperation=style.blend||"source-over"),this.hasStroke()){var x=style.lineWidth;t.lineWidth=x/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var r in t)!t.hasOwnProperty(r)||!0!==e&&(!1===e?this.hasOwnProperty(r):null==t[r])||(this[r]=t[r])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,rect){for(var r=("radial"===e.type?f:c)(t,e,rect),n=e.colorStops,i=0;i<n.length;i++)r.addColorStop(n[i].offset,n[i].color);return r}},i=0;i<l.length;i++){var x=l[i];x[0]in d||(d[x[0]]=x[1])}h.getGradient=d.getGradient;var y=h;t.exports=y},478:function(t,e,r){var n=new(r(691))(50);function o(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var i=0;i<t.pending.length;i++){var e=t.pending[i],r=e.cb;r&&r(this,e.cbPayload),e.hostEl.dirty()}t.pending.length=0}function l(image){return image&&image.width&&image.height}e.findExistImage=function(t){if("string"==typeof t){var e=n.get(t);return e&&e.image}return t},e.createOrUpdateImage=function(t,image,e,r,h){if(t){if("string"==typeof t){if(image&&image.__zrImageSrc===t||!e)return image;var c=n.get(t),f={hostEl:e,cb:r,cbPayload:h};return c?!l(image=c.image)&&c.pending.push(f):((image=new Image).onload=image.onerror=o,n.put(t,image.__cachedImgObj={image:image,pending:[f]}),image.src=image.__zrImageSrc=t),image}return t}return image},e.isImageReady=l},479:function(t,e,r){var n=r(75),o=r(696),l=r(480).subPixelOptimizeRect,h={},c=n.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var r,n,c,f;this.subPixelOptimize?(l(h,e,this.style),r=h.x,n=h.y,c=h.width,f=h.height,h.r=e.r,e=h):(r=e.x,n=e.y,c=e.width,f=e.height),e.r?o.buildPath(t,e):t.rect(r,n,c,f),t.closePath()}});t.exports=c},480:function(t,e){var r=Math.round;function n(t,e,n){if(!e)return t;var o=r(2*t);return(o+r(e))%2==0?o/2:(o+(n?1:-1))/2}e.subPixelOptimizeLine=function(t,e,style){if(e){var o=e.x1,l=e.x2,h=e.y1,c=e.y2;t.x1=o,t.x2=l,t.y1=h,t.y2=c;var f=style&&style.lineWidth;f&&(r(2*o)===r(2*l)&&(t.x1=t.x2=n(o,f,!0)),r(2*h)===r(2*c)&&(t.y1=t.y2=n(h,f,!0)))}},e.subPixelOptimizeRect=function(t,e,style){if(e){var r=e.x,o=e.y,l=e.width,h=e.height;t.x=r,t.y=o,t.width=l,t.height=h;var c=style&&style.lineWidth;c&&(t.x=n(r,c,!0),t.y=n(o,c,!0),t.width=Math.max(n(r+l,c,!1)-t.x,0===l?0:1),t.height=Math.max(n(o+h,c,!1)-t.y,0===h?0:1))}},e.subPixelOptimize=n},481:function(t,e,r){var n=r(1),o=r(345),l=function(t,e,r,n,l,h){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==r?1:r,this.y2=null==n?0:n,this.type="linear",this.global=h||!1,o.call(this,l)};l.prototype={constructor:l},n.inherits(l,o);var h=l;t.exports=h},482:function(t,e,r){var n=r(1).inherits,o=r(281),l=r(71);function h(t){o.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}h.prototype.incremental=!0,h.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},h.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},h.prototype.addDisplayables=function(t,e){e=e||!1;for(var i=0;i<t.length;i++)this.addDisplayable(t[i],e)},h.prototype.eachPendingDisplayable=function(t){for(var i=this._cursor;i<this._displayables.length;i++)t&&t(this._displayables[i]);for(i=0;i<this._temporaryDisplayables.length;i++)t&&t(this._temporaryDisplayables[i])},h.prototype.update=function(){this.updateTransform();for(var i=this._cursor;i<this._displayables.length;i++){(t=this._displayables[i]).parent=this,t.update(),t.parent=null}for(i=0;i<this._temporaryDisplayables.length;i++){var t;(t=this._temporaryDisplayables[i]).parent=this,t.update(),t.parent=null}},h.prototype.brush=function(t,e){for(var i=this._cursor;i<this._displayables.length;i++){(r=this._displayables[i]).beforeBrush&&r.beforeBrush(t),r.brush(t,i===this._cursor?null:this._displayables[i-1]),r.afterBrush&&r.afterBrush(t)}this._cursor=i;for(i=0;i<this._temporaryDisplayables.length;i++){var r;(r=this._temporaryDisplayables[i]).beforeBrush&&r.beforeBrush(t),r.brush(t,0===i?null:this._temporaryDisplayables[i-1]),r.afterBrush&&r.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var c=[];h.prototype.getBoundingRect=function(){if(!this._rect){for(var rect=new l(1/0,1/0,-1/0,-1/0),i=0;i<this._displayables.length;i++){var t=this._displayables[i],e=t.getBoundingRect().clone();t.needLocalTransform()&&e.applyTransform(t.getLocalTransform(c)),rect.union(e)}this._rect=rect}return this._rect},h.prototype.contain=function(t,e){var r=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(r[0],r[1]))for(var i=0;i<this._displayables.length;i++){if(this._displayables[i].contain(t,e))return!0}return!1},n(h,o);var f=h;t.exports=f},692:function(t,e){var r={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1};t.exports=function(t,e,n){return r.hasOwnProperty(e)?n*t.dpr:n}},693:function(t,e){var r=function(image,t){this.image=image,this.repeat=t,this.type="pattern"};r.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var n=r;t.exports=n},695:function(t,e,r){var n=r(344),o=r(71),l=r(343).WILL_BE_RESTORED,h=new o,c=function(){};c.prototype={constructor:c,drawRectText:function(t,rect){var style=this.style;rect=style.textRect||rect,this.__dirty&&n.normalizeTextStyle(style,!0);var text=style.text;if(null!=text&&(text+=""),n.needDrawText(text,style)){t.save();var e=this.transform;style.transformText?this.setTransform(t):e&&(h.copy(rect),h.applyTransform(e),rect=h),n.renderText(this,t,text,style,rect,l),t.restore()}}};var f=c;t.exports=f},696:function(t,e){e.buildPath=function(t,e){var r,n,o,l,h,c=e.x,f=e.y,d=e.width,x=e.height,y=e.r;d<0&&(c+=d,d=-d),x<0&&(f+=x,x=-x),"number"==typeof y?r=n=o=l=y:y instanceof Array?1===y.length?r=n=o=l=y[0]:2===y.length?(r=o=y[0],n=l=y[1]):3===y.length?(r=y[0],n=l=y[1],o=y[2]):(r=y[0],n=y[1],o=y[2],l=y[3]):r=n=o=l=0,r+n>d&&(r*=d/(h=r+n),n*=d/h),o+l>d&&(o*=d/(h=o+l),l*=d/h),n+o>x&&(n*=x/(h=n+o),o*=x/h),r+l>x&&(r*=x/(h=r+l),l*=x/h),t.moveTo(c+r,f),t.lineTo(c+d-n,f),0!==n&&t.arc(c+d-n,f+n,n,-Math.PI/2,0),t.lineTo(c+d,f+x-o),0!==o&&t.arc(c+d-o,f+x-o,o,0,Math.PI/2),t.lineTo(c+l,f+x),0!==l&&t.arc(c+l,f+x-l,l,Math.PI/2,Math.PI),t.lineTo(c,f+r),0!==r&&t.arc(c+r,f+r,r,Math.PI,1.5*Math.PI)}},703:function(t,e,r){var n=r(75).extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,r){r&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}});t.exports=n},704:function(t,e,r){var n=r(80),o=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]];t.exports=function(t){return n.browser.ie&&n.browser.version>=11?function(){var e,r=this.__clipPaths,style=this.style;if(r)for(var i=0;i<r.length;i++){var n=r[i],l=n&&n.shape,h=n&&n.type;if(l&&("sector"===h&&l.startAngle===l.endAngle||"rect"===h&&(!l.width||!l.height))){for(var c=0;c<o.length;c++)o[c][2]=style[o[c][0]],style[o[c][0]]=o[c][1];e=!0;break}}if(t.apply(this,arguments),e)for(c=0;c<o.length;c++)style[o[c][0]]=o[c][2]}:t}},705:function(t,e,r){var n=r(75),o=r(706),l=n.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){o.buildPath(t,e,!0)}});t.exports=l},706:function(t,e,r){var n=r(1333),o=r(1334);e.buildPath=function(t,e,r){var l=e.points,h=e.smooth;if(l&&l.length>=2){if(h&&"spline"!==h){var c=o(l,h,r,e.smoothConstraint);t.moveTo(l[0][0],l[0][1]);for(var f=l.length,i=0;i<(r?f:f-1);i++){var d=c[2*i],x=c[2*i+1],p=l[(i+1)%f];t.bezierCurveTo(d[0],d[1],x[0],x[1],p[0],p[1])}}else{"spline"===h&&(l=n(l,r)),t.moveTo(l[0][0],l[0][1]);i=1;for(var y=l.length;i<y;i++)t.lineTo(l[i][0],l[i][1])}r&&t.closePath()}}},707:function(t,e,r){var n=r(75),o=r(706),l=n.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){o.buildPath(t,e,!1)}});t.exports=l},708:function(t,e,r){var n=r(75),o=r(480).subPixelOptimizeLine,l={},h=n.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var r,n,h,c;this.subPixelOptimize?(o(l,e,this.style),r=l.x1,n=l.y1,h=l.x2,c=l.y2):(r=e.x1,n=e.y1,h=e.x2,c=e.y2);var f=e.percent;0!==f&&(t.moveTo(r,n),f<1&&(h=r*(1-f)+h*f,c=n*(1-f)+c*f),t.lineTo(h,c))},pointAt:function(p){var t=this.shape;return[t.x1*(1-p)+t.x2*p,t.y1*(1-p)+t.y2*p]}});t.exports=h},75:function(t,e,r){var n=r(281),o=r(1),l=r(239),h=r(1327),c=r(693).prototype.getCanvasPattern,f=Math.abs,d=new l(!0);function x(t){n.call(this,t),this.path=null}x.prototype={constructor:x,type:"path",__dirtyPath:!0,strokeContainThreshold:5,segmentIgnoreThreshold:0,subPixelOptimize:!1,brush:function(t,e){var rect,style=this.style,path=this.path||d,r=style.hasStroke(),n=style.hasFill(),o=style.fill,l=style.stroke,h=n&&!!o.colorStops,f=r&&!!l.colorStops,x=n&&!!o.image,y=r&&!!l.image;(style.bind(t,this,e),this.setTransform(t),this.__dirty)&&(h&&(rect=rect||this.getBoundingRect(),this._fillGradient=style.getGradient(t,o,rect)),f&&(rect=rect||this.getBoundingRect(),this._strokeGradient=style.getGradient(t,l,rect)));h?t.fillStyle=this._fillGradient:x&&(t.fillStyle=c.call(o,t)),f?t.strokeStyle=this._strokeGradient:y&&(t.strokeStyle=c.call(l,t));var v=style.lineDash,_=style.lineDashOffset,m=!!t.setLineDash,w=this.getGlobalScale();if(path.setScale(w[0],w[1],this.segmentIgnoreThreshold),this.__dirtyPath||v&&!m&&r?(path.beginPath(t),v&&!m&&(path.setLineDash(v),path.setLineDashOffset(_)),this.buildPath(path,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),n)if(null!=style.fillOpacity){var S=t.globalAlpha;t.globalAlpha=style.fillOpacity*style.opacity,path.fill(t),t.globalAlpha=S}else path.fill(t);if(v&&m&&(t.setLineDash(v),t.lineDashOffset=_),r)if(null!=style.strokeOpacity){S=t.globalAlpha;t.globalAlpha=style.strokeOpacity*style.opacity,path.stroke(t),t.globalAlpha=S}else path.stroke(t);v&&m&&t.setLineDash([]),null!=style.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,r){},createPathProxy:function(){this.path=new l},getBoundingRect:function(){var rect=this._rect,style=this.style,t=!rect;if(t){var path=this.path;path||(path=this.path=new l),this.__dirtyPath&&(path.beginPath(),this.buildPath(path,this.shape,!1)),rect=path.getBoundingRect()}if(this._rect=rect,style.hasStroke()){var e=this._rectWithStroke||(this._rectWithStroke=rect.clone());if(this.__dirty||t){e.copy(rect);var r=style.lineWidth,n=style.strokeNoScale?this.getLineScale():1;style.hasFill()||(r=Math.max(r,this.strokeContainThreshold||4)),n>1e-10&&(e.width+=r/n,e.height+=r/n,e.x-=r/n/2,e.y-=r/n/2)}return e}return rect},contain:function(t,e){var r=this.transformCoordToLocal(t,e),rect=this.getBoundingRect(),style=this.style;if(t=r[0],e=r[1],rect.contain(t,e)){var n=this.path.data;if(style.hasStroke()){var o=style.lineWidth,l=style.strokeNoScale?this.getLineScale():1;if(l>1e-10&&(style.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),h.containStroke(n,o/l,t,e)))return!0}if(style.hasFill())return h.contain(n,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):n.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var r=this.shape;if(r){if(o.isObject(t))for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);else r[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&f(t[0]-1)>1e-10&&f(t[3]-1)>1e-10?Math.sqrt(f(t[0]*t[3]-t[2]*t[1])):1}},x.extend=function(t){var e=function(e){x.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var r=t.shape;if(r){this.shape=this.shape||{};var n=this.shape;for(var o in r)!n.hasOwnProperty(o)&&r.hasOwnProperty(o)&&(n[o]=r[o])}t.init&&t.init.call(this,e)};for(var r in o.inherits(e,x),t)"style"!==r&&"shape"!==r&&(e.prototype[r]=t[r]);return e},o.inherits(x,n);var y=x;t.exports=y}}]);