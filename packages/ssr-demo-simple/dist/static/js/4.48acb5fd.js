(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{46:function(t,e,n){"use strict";var r=n(48),f=n.n(r),a=n(44),h=n.n(a),i=n(45),d=n.n(i),s=n(8),w=n.n(s),c=n(9),v=n.n(c),o=n(10),b=n.n(o),u=n(11),k=n.n(u),p=n(12),y=n.n(p),l=n(0),_=n.n(l);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var m=null,I=function I(){m&&m.getInitialProps&&m.getInitialProps()};e.a=function(l){return function(t){function n(t){var e;return w()(this,n),(e=b()(this,k()(n).call(this,t))).state={initialData:{},canClientFetch:!1},e}var e,r,a;return y()(n,t),v()(n,[{key:"getInitialProps",value:(a=d()(h.a.mark(function s(){var e,n,r,a,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,n=e.match,r=e.location,l.getInitialProps)return t.next=4,l.getInitialProps({match:n,location:r});t.next=7;break;case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:a=t.t0,this.setState({initialData:a,canClientFetch:!0}),(i=a.page.tdk)&&(document.title=i.title);case 13:case"end":return t.stop()}},s,this)})),function i(){return a.apply(this,arguments)})},{key:"componentDidMount",value:(r=d()(h.a.mark(function c(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(window.__IS__SSR__&&(m=this,window.addEventListener("popstate",I)),this.props.history&&"PUSH"===this.props.history.action||!window.__IS__SSR__)return t.next=6,this.getInitialProps();t.next=6;break;case 6:case"end":return t.stop()}},c,this)})),function o(){return r.apply(this,arguments)})},{key:"render",value:function(){var t=function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){f()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({initialData:{}},this.props);return this.state.canClientFetch?t.initialData=this.state.initialData||{}:(t.initialData=window.__INITIAL_DATA__,window.__INITIAL_DATA__=null),_.a.createElement(l,t)}}],[{key:"getInitialProps",value:(e=d()(h.a.mark(function u(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l.getInitialProps)return t.next=3,l.getInitialProps(e);t.next=6;break;case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}},u)})),function p(t){return e.apply(this,arguments)})}]),n}(_.a.Component)}},47:function(t,e,n){"use strict";e.a={apiHost:"http://mockssr.bigerfe.com"}},78:function(t,e,n){"use strict";n.r(e);var r=n(44),i=n.n(r),a=n(45),s=n.n(a),c=n(8),o=n.n(c),u=n(9),p=n.n(u),l=n(10),f=n.n(l),h=n(11),d=n.n(h),w=n(12),v=n.n(w),b=n(0),k=n.n(b),y=n(49),_=n.n(y),g=n(47),m=n(46),I=(n(41),function(t){function e(t){return o()(this,e),f()(this,d()(e).call(this,t))}var n;return v()(e,t),p()(e,[{key:"render",value:function(){var t=(this.props.initialData||{}).fetchData,e=((void 0===t?{}:t)||null).html;return e?k.a.createElement("div",{className:"detail-box",dangerouslySetInnerHTML:{__html:e}}):null}}],[{key:"getInitialProps",value:(n=s()(i.a.mark(function a(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=n.match.params.id,_.a.get("".concat(g.a.apiHost,"/detail/").concat(e)).then(function(t){return t.data})["catch"](function(t){});case 2:return r=t.sent,t.abrupt("return",{fetchData:r.data||{},page:{tdk:{title:"小册详情 - koa-react-ssr",keywords:"koa-react-ssr",description:"koa-react-ssr"}}});case 4:case"end":return t.stop()}var e},a)})),function r(t){return n.apply(this,arguments)})}]),e}(k.a.Component));e["default"]=Object(m.a)(I)}}]);