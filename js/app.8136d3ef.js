(function(t){function e(e){for(var n,s,c=e[0],u=e[1],o=e[2],m=0,d=[];m<c.length;m++)s=c[m],a[s]&&d.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var u=i[c];0!==a[u]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/<test-strato>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},"2f62":function(t,e,i){"use strict";var n=i("f0be"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Panel")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel"},[i("div",{staticClass:"input-block"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"quantity",attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"price",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),i("button",{staticClass:"addItem",on:{click:t.handler}},[t._v("ADD ITEM\n    ")])]),i("div",{staticClass:"result-block"},[t._m(0),t._l(t.items,function(e,n){return i("div",{key:n},[i("div",{staticClass:"item-block"},[i("div",[i("span",{staticClass:"item-name"},[t._v(t._s(e.name))])]),i("div",{staticClass:"item-wrapper"},[e.editing?i("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"editInput",attrs:{type:"number"},domProps:{value:e.quantity},on:{input:function(i){i.target.composing||t.$set(e,"quantity",i.target.value)}}}):i("span",{staticClass:"item-quantity"},[t._v("\n        "+t._s(e.quantity)+"\n        ")])]),i("div",{staticClass:"item-wrapper"},[e.editing?i("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],staticClass:"editInput",attrs:{type:"number"},domProps:{value:e.price},on:{input:function(i){i.target.composing||t.$set(e,"price",i.target.value)}}}):i("span",{staticClass:"item-price"},[t._v("\n        $"+t._s(e.price)+"\n        ")])]),i("div",[i("div",{staticClass:"garbage"},[e.editing?t._e():i("div",[i("font-awesome-icon",{staticClass:"trash-icon",attrs:{icon:"trash"},on:{click:function(i){return t.secondHandler(e,n)}}})],1),e.editing?t._e():i("div",[i("font-awesome-icon",{attrs:{icon:"pencil-ruler"},on:{click:function(i){return t.editItem(e)}}})],1),e.editing?i("div",[i("font-awesome-icon",{attrs:{icon:"save"},on:{click:function(i){return t.thirdHandler(e)}}})],1):t._e(),e.editing?i("div",[i("font-awesome-icon",{attrs:{icon:"window-close"},on:{click:function(i){return t.cancelEdit(e,n)}}})],1):t._e()])])])])})],2),i("div",{staticClass:"summary"},[i("h2",[t._v("Summary: $"+t._s(t.summary))])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"heading-block"},[i("h5",[t._v("Name")]),i("h5",[t._v("Quantity")]),i("h5",[t._v("Price")])])])}],u=(i("7514"),i("75fc")),o=i("f499"),l=i.n(o),m=(i("7f7f"),{name:"Panel",data:function(){return{priceSummary:0,quantitySummary:0,summary:0,localName:null,localQuantity:null,localPrice:null,counter:0,name:"",quantity:null,price:null,visible:!1,items:[],localItems:[]}},methods:{createItem:function(){this.items.push({name:this.name,quantity:this.quantity,price:this.price,id:this.counter,editing:!1}),localStorage.setItem("items",l()(this.items));var t=JSON.parse(localStorage["items"]);this.localItems=t,this.counter++,this.visible=!0,this.name="",this.quantity=null,this.price=null},removeItem:function(t,e){this.items.splice(e,1),this.localItems.splice(e,1),this.counter--,localStorage.setItem("items",l()(this.localItems))},editItem:function(t){var e=Object(u["a"])(this.items);localStorage.setItem("items",l()(e)),t.editing=!0},doneEdit:function(t){t.editing=!1},cancelEdit:function(t){var e=JSON.parse(localStorage["items"]),i=e.find(function(e){return e.id===t.id});t.quantity=i.quantity,t.price=i.price,t.editing=!1},getSummary:function(){var t=0;this.priceSummary=this.items.reduce(function(t,e){return+t+ +e.price},t),this.quantitySummary=this.items.reduce(function(t,e){return+t+ +e.quantity},t),this.summary=this.priceSummary*this.quantitySummary},decreaseSummary:function(t){this.priceSummary=this.priceSummary-t.price,this.quantitySummary=this.quantitySummary-t.quantity;var e=this.priceSummary*this.quantitySummary;this.summary=e,0===this.items.length&&(this.summary=0)},handler:function(){""!=this.name&&null!==this.quantity&&null!==this.price&&(this.createItem(),this.getSummary())},secondHandler:function(t,e){this.removeItem(t,e),this.decreaseSummary(t)},thirdHandler:function(t){""!==t.quantity&&""!==t.price&&(this.doneEdit(t),this.getSummary())}}}),d=m,p=(i("2f62"),i("2877")),f=Object(p["a"])(d,s,c,!1,null,"b151af6e",null),v=f.exports,h={name:"app",components:{Panel:v}},y=h,g=(i("034f"),Object(p["a"])(y,a,r,!1,null,null,null)),b=g.exports,S=i("ecee"),_=i("c074"),q=i("ad3d");S["c"].add(_["c"]),S["c"].add(_["a"]),S["c"].add(_["b"]),S["c"].add(_["d"]),n["a"].component("font-awesome-icon",q["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,i){},f0be:function(t,e,i){}});
//# sourceMappingURL=app.8136d3ef.js.map