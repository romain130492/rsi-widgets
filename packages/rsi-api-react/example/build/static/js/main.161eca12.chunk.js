(this["webpackJsonp@akkadu/rsi-api-react-example"]=this["webpackJsonp@akkadu/rsi-api-react-example"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),s={languages:[],container:null},c=function(e){function t(t){var n=e.call(this)||this,o=t.apiKey,r=t.roomName,i=t.container,a=t.positionMenu,c=t.isBoxShadow,l=t.isPlayerControlled;if(n.apiKey=o,n.roomName=r,n.positionMenu=a,n.isBoxShadow=c,n.isPlayerControlled=l,n.consumerConfig=s,n.consumerConfig.container=i,n.gatewayResponse=null,!document)return console.error("InterpretationPlayer: document is undefined"),n;if(n.consumerConfig.domContainer=document.querySelector("#"+n.consumerConfig.container),!n.apiKey)throw Error("InterpretationPlayer: apiKey is undefined");if(!n.roomName)throw Error("InterpretationPlayer: roomName is undefined");if(!n.consumerConfig.domContainer)throw new Error("Unable to detect stream container "+n.consumerConfig.container+" on the DOM");return n}return o(t,e),t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return this.gatewayResponse=this.gatewayRequest(this.apiKey,this.roomName),this.initListeners(),this.addInterpretationPlayer(),[2]}))}))},t.prototype.isInterpretedLanguage=function(e){var t;return(null===(t=this.gatewayResponse)||void 0===t?void 0:t.floorLang)!==(null===e||void 0===e?void 0:e.code)},t.prototype.switchAudioVideoPlayerVP=function(e){if(void 0===e&&(e=!1),this.isPlayerControlled){var t=this.getVideoPlayerVP();console.info(t,"videoPlayerVP"),t?Array.from(t).forEach((function(t){t.muted=e})):console.warn("switchAudioVideoPlayerVP(): videoPlayerVP is not defined.")}},t.prototype.getVideoPlayerVP=function(){if(document)return document.getElementsByTagName("video");console.warn("getVideoPlayerVP(), document is not defined")},t.prototype.initListeners=function(){},t.prototype.addInterpretationPlayer=function(){this.emitter.emit("interpretation-player:on-ready",{isReady:!0});var e=n(16).default;this.consumerConfig.domContainer.insertAdjacentHTML("beforeend",e.html);var t=document.createElement("style");t.textContent=e.css,document.head.appendChild(t);var o=this.updateStylesWithProps();if(o){var r=document.createElement("style");r.textContent=o,document.head.appendChild(r)}for(var i=[{name:{en:"English",zh:"\u82f1\u8bed"},code:"en-US"},{name:{en:"Chinese",zh:"\u4e2d\u6587"},code:"zh-CN"}],a=document.createDocumentFragment(),s=0;s<i.length;s++){var c=void 0,l=void 0,p=void 0;(c=document.createElement("div")).className="selectCustom-option",c.id=s,(p=document.createElement("h3")).textContent=i[s].name.en,p.id=s,(l=document.createElement("img")).src=this.getFlagUrl(i[s].code),c.appendChild(l),c.appendChild(p),a.appendChild(c)}document.getElementById("interpretation-player-options").appendChild(a);var u=document.createElement("script");u.textContent=e.js,document.body.appendChild(u);var d=document.getElementsByClassName("js-selectCustom")[0],f=document.getElementById("interpretation-player-custom-value"),y=document.getElementById("interpretation-player-options");f.getElementsByTagName("h3")[0].textContent=i[0].name.en,f.getElementsByTagName("img")[0].src=this.getFlagUrl(i[0].code);var m=this;Array.from(y.children).forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.id,n=i[t];f.getElementsByTagName("h3")[0].textContent=n.name.en,f.getElementsByTagName("img")[0].src=m.getFlagUrl(n.code),m.emitter.emit("interpretation-player:on-language-selected",{languageSelected:n}),m.switchAudioVideoPlayerVP(m.isInterpretedLanguage(n)),d.classList.remove("isActive")}))})),f.addEventListener("click",(function(e){d.classList.toggle("isActive")})),document.addEventListener("click",(function(e){!d.contains(e.target)&&d.classList.remove("isActive")}))},t.prototype.updateStylesWithProps=function(){var e=[];if("top"===this.positionMenu){var t=".selectCustom-options{\n        box-shadow:6px -1px 8px 1px #e3e3e3 !important;\n        top: -130px !important;\n      }";e.push(t)}if(!1===this.isBoxShadow){t="\n      #akkadu-interpretation-player .selectCustom-options{\n        box-shadow:none !important;\n      }";e.push(t)}return e.join(" ")},t.prototype.getFlagUrl=function(e){return"https://www.countryflags.io/"+e.slice(-2)+"/flat/64.png"},t}(a.default);t.default=c},function(e,t,n){e.exports=n(18)},function(e,t,n){},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),r=function(){function e(){this.emitter=new o.EventEmitter}return e.prototype.gatewayRequest=function(e,t){if(!e)throw Error("base akadu-rsi: apiKey is undefined.");if(!t)throw Error("base akkadu-rsi: roomname is undefined.");return{auth:{uid:0,channel:"string",appId:"string",token:"string",rtmToken:"string"},publishers:[{id:0,userId:0,eventId:0,pairId:"string",interpreterId:0,language:"string",sourceLanguage:!0,sourceLanguageId:0,interpreterLevel:0,interpreterNeeded:!0,createdAt:"2021-05-25T07:49:48.840Z",updatedAt:"2021-05-25T07:49:48.840Z"}],floorLang:"en-US",userType:"string"}},e.prototype.on=function(e,t){this.emitter.on(e,t)},e}();t.default=r},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={html:'\n  <body>\n      <div class="select">\n        <div class="selectWrapper" >\n          <div class="selectCustom js-selectCustom">\n            <div id="interpretation-player-custom-value" class="selectCustom-trigger">  <img src=\'\'/> <h3> </h3> </div>\n            <div id="interpretation-player-options" class="selectCustom-options">\n            </div>\n          </div>\n        </div>\n  </body>\n  ',css:'\n\n  #akkadu-interpretation-player {\n    display: inline-table;\n    position: relative;\n    font-family: "Helvetica Neue", Arial, sans-serif;\n  }\n  #akkadu-interpretation-player .select {\n    position: relative;\n  }\n  #akkadu-interpretation-player .selectLabel {\n    display: block;\n    margin-bottom: 10px;\n  }\n  #akkadu-interpretation-player .selectWrapper {\n    position: relative;\n  }\n  #akkadu-interpretation-player  .selectCustom {\n    position: relative;\n    height: 100%;\n  }\n  #akkadu-interpretation-player .selectCustom-trigger {\n    display: flex;\n    position: relative;\n    min-width: 150px;\n    background-color: white;\n    border: 1px solid #dbdbdb;\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 10px 15px;\n    width: 100%;\n    height: 100%;\n  }\n  #akkadu-interpretation-player h3{\n    margin:0px;\n    padding:0px;\n  }\n  #akkadu-interpretation-player img{\n    margin:0px;\n    padding:0px;\n    max-width: 20px;\n    margin-right:10px;\n  }\n  #akkadu-interpretation-player  h3, #akkadu-interpretation-player .selectCustom-trigger{\n    font-size: 16px;\n    color: #2C3D4F;\n    font-weight: 400;\n    text-transform: capitalize;\n  }\n  #akkadu-interpretation-player .selectCustom-trigger::after {\n    content: "\u25be";\n    color:#908f8f;\n    position: absolute;\n    top: 7px;\n    line-height: 20px;\n    right: 10px;\n  }\n  \n  #akkadu-interpretation-player .selectCustom-trigger:hover {\n    box-shadow: 0 0 4px #e9e1f8;\n  }\n  #akkadu-interpretation-player .selectCustom-options {\n    position: absolute;\n    top: 45px;\n    left: 0;\n    width: 100%;\n    border: 1px solid #dbdbdb;\n    border-radius: 5px;\n    background-color: #fff;\n    box-shadow: 0 0 4px #e9e1f8;\n    z-index: 1;\n    padding:0px;\n    display: none;\n    cursor: pointer;\n    box-shadow: 3px 6px 7px 4px #e3e3e3;\n  }\n  \n  #akkadu-interpretation-player .selectCustom.isActive .selectCustom-options {\n    display: block;\n    min-width: 260px;\n  }\n  \n  #akkadu-interpretation-player .selectCustom-option {\n    position: relative;\n    padding: 10px 15px;\n    display: flex;\n  }\n  \n  #akkadu-interpretation-player  .selectCustom-option:hover {\n    background-color: #F2F2F2;\n  }\n  \n  #akkadu-interpretation-player  .selectCustom-option:not(:last-of-type)::after {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 5px;\n    width: 95%;\n    border-bottom: 1px solid #e0e7ef;\n  }\n  \n\n \n  '}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(9);var o=n(0),r=n.n(o),i=n(6),a=n.n(i),s=n(1),c=n(2),l=n(4),p=n(3),u=n(7),d=n.n(u),f=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var o,r=e.apiKey,i=e.positionMenu,a=e.onReady,c=e.onLanguageSelected,l=e.onConnectionStatusUpdated,p=e.isBoxShadow,u=e.isPlayerControlled;return Object(s.a)(this,n),(o=t.call(this)).state={apiKey:r,positionMenu:i,onLanguageSelected:c,onConnectionStatusUpdated:l,onReady:a,isBoxShadow:p,isPlayerControlled:u},o}return Object(c.a)(n,[{key:"getRoomname",value:function(){return"test"}},{key:"componentDidMount",value:function(){this.init()}},{key:"initListeners",value:function(e){var t=this;e.on("interpretation-player:on-ready",(function(e){var n=e.isReady;console.info("emit interpretation-player:on-ready",n),t.state.onReady({isReady:n})})),e.on("interpretation-player:on-language-selected",(function(e){var n=e.languageSelected;console.info("emit interpretation-player:on-language-selected",n),t.state.onLanguageSelected({languageSelected:n})})),e.on("interpretation-player:on-connection-status-updated",(function(e){var n=e.connection;console.info("emit interpretation-player:on-connection-status-updated",n),t.state.onConnectionStatusUpdated({connection:n})}))}},{key:"init",value:function(){var e=this.getRoomname();if(!e)throw Error("interpretation-player: roomname is not defined");if(!this.state.apiKey)throw Error("interpretation-player: apiKey is not defined");var t={apiKey:this.state.apiKey,roomName:e,container:"akkadu-interpretation-player",positionMenu:this.state.positionMenu,isBoxShadow:this.state.isBoxShadow,isPlayerControlled:this.state.isPlayerControlled},n=new d.a(t);this.initListeners(n),n.init()}},{key:"render",value:function(){return r.a.createElement("div",{id:"akkadu-interpretation-player",className:""})}}]),n}(o.Component);function y(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"===typeof Symbol&&Symbol.for,h=m?Symbol.for("react.element"):60103,g=m?Symbol.for("react.portal"):60106,v=m?Symbol.for("react.fragment"):60107,b=m?Symbol.for("react.strict_mode"):60108,x=m?Symbol.for("react.profiler"):60114,k=m?Symbol.for("react.provider"):60109,w=m?Symbol.for("react.context"):60110,C=m?Symbol.for("react.async_mode"):60111,S=m?Symbol.for("react.concurrent_mode"):60111,P=m?Symbol.for("react.forward_ref"):60112,E=m?Symbol.for("react.suspense"):60113,O=m?Symbol.for("react.suspense_list"):60120,_=m?Symbol.for("react.memo"):60115,j=m?Symbol.for("react.lazy"):60116,L=m?Symbol.for("react.block"):60121,T=m?Symbol.for("react.fundamental"):60117,$=m?Symbol.for("react.responder"):60118,I=m?Symbol.for("react.scope"):60119;function R(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case C:case S:case v:case x:case b:case E:return e;default:switch(e=e&&e.$$typeof){case w:case P:case j:case _:case k:return e;default:return t}}case g:return t}}}function B(e){return R(e)===S}var M={AsyncMode:C,ConcurrentMode:S,ContextConsumer:w,ContextProvider:k,Element:h,ForwardRef:P,Fragment:v,Lazy:j,Memo:_,Portal:g,Profiler:x,StrictMode:b,Suspense:E,isAsyncMode:function(e){return B(e)||R(e)===C},isConcurrentMode:B,isContextConsumer:function(e){return R(e)===w},isContextProvider:function(e){return R(e)===k},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return R(e)===P},isFragment:function(e){return R(e)===v},isLazy:function(e){return R(e)===j},isMemo:function(e){return R(e)===_},isPortal:function(e){return R(e)===g},isProfiler:function(e){return R(e)===x},isStrictMode:function(e){return R(e)===b},isSuspense:function(e){return R(e)===E},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===v||e===S||e===x||e===b||e===E||e===O||"object"===typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===_||e.$$typeof===k||e.$$typeof===w||e.$$typeof===P||e.$$typeof===T||e.$$typeof===$||e.$$typeof===I||e.$$typeof===L)},typeOf:R},N=(y((function(e,t){0})),y((function(e){e.exports=M})),Object.getOwnPropertySymbols),A=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;function F(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}})()&&Object.assign;var U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function K(e,t,n,o,r){}K.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function z(){}function W(){}W.resetWarningCache=z;var q=y((function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==U){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:z};return n.PropTypes=n,n}()})),D="_styles__foo__3TUTh";(function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.text;return r.a.createElement("div",{className:D},"RsiApiInterpretationManager: ",e)}}]),n}(o.Component)).propTypes={text:q.string};n(17);var H=function(e){console.info("receive onReady event:",e)},J=function(e){console.info("receive onLanguageSelected event:",e)},Z=function(e){console.info("receive onConnectionStatusUpdated event:",e)},G=function(){return r.a.createElement("div",null,r.a.createElement("video",{loop:"",controls:!0,width:"640",height:"480"},r.a.createElement("source",{type:"video/mp4",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})),r.a.createElement(f,{apiKey:"api_key_test1",onReady:H,onLanguageSelected:J,onConnectionStatusUpdated:Z,isBoxShadow:!1,isPlayerControlled:!0}))};a.a.render(r.a.createElement(G,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.161eca12.chunk.js.map