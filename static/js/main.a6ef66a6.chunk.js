(this.webpackJsonpface=this.webpackJsonpface||[]).push([[0],{263:function(n,e,t){},269:function(n,e){},270:function(n,e){},278:function(n,e){},281:function(n,e){},282:function(n,e){},283:function(n,e,t){},286:function(n,e,t){"use strict";t.r(e);var c=t(77),r=t.n(c),a=t(234),o=t.n(a),s=(t(263),t(4)),i=t.n(s),u=t(11),l=t(5),f=t(235),d=t(255),h=t(196),b=t(256),j=(t(285),t.p+"static/media/hey_sondn.8c2f8e9b.mp3"),p=(t(283),t(55)),m=new b.Howl({src:[j]}),g="touched";var v=function(){var n=Object(c.useRef)(),e=Object(c.useRef)(),t=Object(c.useRef)(!0),r=Object(c.useRef)(),a=Object(c.useState)(!1),o=Object(l.a)(a,2),s=o[0],b=o[1],j=function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("init..."),n.next=3,v();case 3:return console.log("success"),e.current=d.a(),n.next=7,f.a();case 7:r.current=n.sent,console.log("setup success"),console.log("khong bo tay len mat va bam train1"),Object(h.a)({cooldown:3e3});case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){return new Promise((function(e,t){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia?navigator.getUserMedia({video:!0},(function(t){n.current.srcObject=t,n.current.addEventListener("loadeddata",e)}),(function(n){return t(n)})):t()}))},O=function(){var n=Object(u.a)(i.a.mark((function n(e){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("".concat(e," \u0111ang train cho m\xe1y")),t=0;case 2:if(!(t<50)){n.next=9;break}return console.log("Progress ".concat(parseInt((t+1)/50*100),"%")),n.next=6,x(e);case 6:++t,n.next=2;break;case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(t){return new Promise(function(){var c=Object(u.a)(i.a.mark((function c(a){var o;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=r.current.infer(n.current,!0),e.current.addExample(o,t),c.next=4,y(100);case 4:a();case 5:case"end":return c.stop()}}),c)})));return function(n){return c.apply(this,arguments)}}())},k=function(){var c=Object(u.a)(i.a.mark((function c(){var a,o;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=r.current.infer(n.current,!0),c.next=3,e.current.predictClass(a);case 3:return o=c.sent,console.log("label:",o.label),console.log("Confidences:",o.confidences),o.label===g&&o.confidences[o.label]>.8?(t.current&&(t.current=!1,m.play()),console.log("Touched"),m.play(),Object(h.b)("B\u1ecf tay ra!",{body:"Your message."}),b(!0)):(console.log("No touched"),b(!1)),c.next=9,y(200);case 9:k();case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(e){return setTimeout(e,n)}))};return Object(c.useEffect)((function(){return j(),m.on("end",(function(){t.current=!0})),function(){}}),[]),Object(p.jsxs)("div",{className:"App ".concat(s?"touched":""),children:[Object(p.jsx)("video",{ref:n,className:"video",autoPlay:!0}),Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("button",{className:"btn",onClick:function(){O("not_touch")},children:" Train1 "}),"  ",Object(p.jsx)("button",{className:"btn",onClick:function(){O(g)},children:" Train2 "}),"  ",Object(p.jsx)("button",{className:"btn",onClick:function(){k()},children:" Run "}),"   "]}),"  ",Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{children:" H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng: "}),"  ",Object(p.jsx)("p",{children:" B\u01b0\u1edbc 1: nh\u1ea5n train1 \u0111\u1ec1 m\xe1y t\xednh train khu\xf4n m\u1eb7t kh\xf4ng ch\u1ea1m tay l\xean khu\xf4n m\u1eb7t "}),"  ",Object(p.jsx)("p",{children:" B\u01b0\u1edbc 2: nh\u1ea5n train2 \u0111\u1ec1 m\xe1y t\xednh train khu\xf4n m\u1eb7t c\xf3 ch\u1ea1m tay l\xean khu\xf4n m\u1eb7t "})," ",Object(p.jsx)("p",{children:" B\u01b0\u1edbc 3: L\u1ea5y h\xecnh hi\u1ec7n t\u1ea1i trong video, ph\xe2n t\xedch v\xe0 so s\xe1nh "}),"  ",Object(p.jsx)("p",{children:" n\u1ebfu m\xe0 matching v\u1edbi data kh\xf4n m\u1eb7t ch\u1ea1m tay th\xec c\u1ea3nh b\xe1o "}),"  "]})," "]})},O=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,287)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),O()}},[[286,1,2]]]);
//# sourceMappingURL=main.a6ef66a6.chunk.js.map