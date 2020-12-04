(()=>{"use strict";function e(e){var t=e.slice(0,4),a=e.slice(5,7),n=e.slice(8,10);return"".concat({"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"November",12:"December"}[a]," ").concat(n,", ").concat(t)}function t(e){return 0===e?React.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/455/455582.svg",className:"flag",alt:""}):React.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/455/455885.svg",className:"flag",alt:""})}const a=function(a){var n=a.list,c=a.avatar,r=n.map((function(n){var r=e(n.question_date),l=t(n.question_flag),s=e(n.answer_date),o=t(n.answer_flag);return React.createElement("div",{key:n.id},React.createElement("div",{className:"question-box"},React.createElement("span",{className:"avatar-box"},c),React.createElement("div",{className:"heading"},"Question",React.createElement("div",{className:"line"}," | "),React.createElement("div",{className:"date"},r," ","from"," "),n.author,React.createElement("div",{className:"question"},n.question,React.createElement("div",{onClick:a.handleFlag},l))),React.createElement("div",{className:"answer-box"},React.createElement("span",{className:"avatar-box"},c),React.createElement("div",{className:"heading"},"Answer",React.createElement("div",{className:"line"}," | "),React.createElement("div",{className:"date"},s," ","from"," "),n.seller," ",React.createElement("div",{className:"date"},"(TpT Seller)")),React.createElement("div",{className:"question"},n.answer,React.createElement("div",{className:"helpful"},React.createElement("a",{value:n.answer_id,onClick:a.handleHelpful},a.thumbs,"Helpful (",n.answer_helpful,")"),React.createElement("div",{onClick:a.handleFlag},o))))))}));return React.createElement("div",{className:"list"},r)};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(m,React.Component);var t,n,i,u,f=(i=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=o(i);if(u){var a=o(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return l(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=f.call(this,e)).state={productId:4,list:[],avatar:React.createElement("img",{src:"https://static-assets.teacherspayteachers.com/images/avatars/default.jpg",className:"avatar-img",alt:""}),thumbs:React.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/633/633759.svg",className:"thumbs",alt:""})},t.handleHelpful=t.handleHelpful.bind(s(t)),t.handleFlag=t.handleFlag.bind(s(t)),t}return t=m,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.state.productId;fetch("http://localhost:3004/product/".concat(t,"/q-and-a")).then((function(e){return e.json()})).then((function(t){e.setState({list:t})})).catch((function(e){throw e}))}},{key:"handleHelpful",value:function(e){for(var t=Number(e.target.attributes[0].nodeValue),a=this.state.list,n=0;n<a.length;n+=1)a[n].answer_id===t&&(a[n].answer_helpful+=1);this.setState({list:a}),e.preventDefault();var c=this.state.productId;fetch("http://localhost:3004/product/".concat(c,"/helpful"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answerId:t})}).catch((function(e){throw e}))}},{key:"handleFlag",value:function(){alert("Log in to mark inappropriate")}},{key:"render",value:function(){return React.createElement("div",{className:"q-and-a-section"},React.createElement("h3",null,"Questions & Answers"),React.createElement("p",{className:"login"},"Please"," ",React.createElement("a",{className:"login-link",href:""},"log in")," ","to post a question."),React.createElement("div",{className:"list-box"},React.createElement(a,{list:this.state.list,avatar:this.state.avatar,thumbs:this.state.thumbs,handleHelpful:this.handleHelpful,handleFlag:this.handleFlag})))}}])&&c(t.prototype,n),m}();ReactDOM.render(React.createElement(i,null),document.getElementById("QandA"))})();