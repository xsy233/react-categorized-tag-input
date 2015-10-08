!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.CategorizedTagInput=t(require("react")):e.CategorizedTagInput=t(e.React)}(this,function(e){return function(e){function t(n){if(s[n])return s[n].exports;var a=s[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=n(a);t["default"]=i["default"],e.exports=t["default"]},function(t,s){t.exports=e},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),i=n(a),r=i["default"].PropTypes,o=i["default"].createClass({displayName:"Tag",propTypes:{selected:r.bool,input:r.string.isRequired,text:r.string.isRequired,addable:r.bool,deletable:r.bool,onAdd:r.func,onDelete:r.func},tagContent:function(){var e=[],t=this.props.text.trim().toLowerCase().indexOf(this.props.input.trim().toLowerCase()),s=t+this.props.input.length;return t>0&&e.push(i["default"].createElement("span",{key:1,className:"cti__tag__content--regular"},this.props.text.substring(0,t))),e.push(i["default"].createElement("span",{key:2,className:"cti__tag__content--match"},this.props.text.substring(t,s))),s<this.props.text.length&&e.push(i["default"].createElement("span",{key:3,className:"cti__tag__content--regular"},this.props.text.substring(s))),e},onClick:function(e){e.preventDefault(),this.props.addable&&this.props.onAdd(e)},onDelete:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDelete(e)},render:function(){var e=null;this.props.deletable&&(e=i["default"].createElement("button",{className:"cti__tag__delete",onClick:this.onDelete,dangerouslySetInnerHTML:{__html:"&times;"}}));var t="cti__tag"+(this.props.selected?" cti-selected":"");return i["default"].createElement("div",{className:t,onClick:this.onClick},i["default"].createElement("div",{className:"cti__tag__content"},this.tagContent()),e)}});t["default"]=o,e.exports=t["default"]},function(e,t,s){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),r=a(i),o=s(5),l=a(o),u=s(6),c=a(u),p=s(7),d=n(p),f=r["default"].PropTypes,h=r["default"].createClass({displayName:"CategorizedTagInput",propTypes:{addNew:f.bool,categories:f.arrayOf(f.object).isRequired,transformTag:f.func,value:f.arrayOf(f.string),onBlur:f.func,onChange:f.func},getInitialState:function(){return{value:"",selection:{item:0,category:0},panelOpened:!1,tags:this.props.value||[],categories:[],addNew:void 0===this.props.addNew?!0:this.props.addNew}},filterCategories:function(e){var t=this,s=this.props.categories.map(function(s){return s=Object.assign({},s,{items:s.items.filter(t.filterItems(e))}),0!==s.items.length||t.state.addNew&&!s.single?s:null}).filter(function(e){return null!==e}),n=this.state.selection;this.state.selection.category>=s.length?n={category:0,item:0}:n.item>=s[n.category].items.length&&(n.item=0),this.setState({categories:s,selection:n})},filterItems:function(e){return function(t){return t.toLowerCase().indexOf(e.trim().toLowerCase())>=0}},openPanel:function(){this.setState({panelOpened:!0})},closePanel:function(){var e=this;setTimeout(function(){e.setState({panelOpened:!1})},150)},onValueChange:function(e){var t=e.target.value;this.setState({value:t,panelOpened:t.trim().length>0}),this.filterCategories(t)},onTagDeleted:function(e){var t=this.state.tags.slice(0,e).concat(this.state.tags.slice(e+1));this.setState({tags:t}),this.props.onChange(t)},onAdd:function(e){var t=e.category,s=e.item;"function"==typeof this.props.transformTag&&(s=this.props.transformTag(t,s));var n=this.state.tags.concat([s]);this.setState({tags:n,value:"",panelOpened:!0}),this.refs.input.focusInput(),this.props.onChange(n)},addSelectedTag:function(){var e=this.state.categories[this.state.selection.category],t=e.items[this.state.selection.item];this.onAdd({category:e.id,item:t||this.state.value})},onKeyDown:function(e){var t=void 0;switch(e.keyCode){case d.TAB:case d.ENTER:case d.COMMA:e.preventDefault(),this.addSelectedTag();break;case d.BACKSPACE:0===this.state.value.trim().length&&(e.preventDefault(),this.onTagDeleted(this.state.tags.length-1));break;case d.LEFT:t=this.state.selection.item-1,this.setState({selection:{category:this.state.selection.category,item:t>=0?t:0}});break;case d.UP:t=this.state.selection.category-1,this.setState({selection:{category:t>=0?t:0,item:0}});break;case d.RIGHT:t=this.state.selection.item+1;var s=this.state.categories[this.state.selection.category];this.setState({selection:{category:this.state.selection.category,item:t<=s.items.length?t:s.items.length}});break;case d.DOWN:t=this.state.selection.category+1;var n=this.state.categories;this.setState({selection:{category:t<n.length?t:n.length-1,item:0}})}},value:function(){return this.state.tags},render:function(){return r["default"].createElement("div",{className:"cti__root"},r["default"].createElement(l["default"],{openPanel:this.openPanel,closePanel:this.closePanel,onValueChange:this.onValueChange,onTagDeleted:this.onTagDeleted,onKeyDown:this.onKeyDown,value:this.state.value,tags:this.state.tags,onBlur:this.props.onBlur,ref:"input"}),this.state.panelOpened&&this.state.value.length>0?r["default"].createElement(c["default"],{categories:this.state.categories,selection:this.state.selection,onAdd:this.onAdd,input:this.state.value,addNew:void 0===this.props.addNew?!0:this.props.addNew}):"")}});t["default"]=h,e.exports=t["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),i=n(a),r=s(2),o=n(r),l=i["default"].PropTypes,u=i["default"].createClass({displayName:"Category",propTypes:{items:l.array.isRequired,category:l.oneOfType([l.string,l.number]).isRequired,title:l.string.isRequired,selected:l.bool.isRequired,selectedItem:l.number.isRequired,input:l.string.isRequired,addNew:l.bool,type:l.string,onAdd:l.func.isRequired,single:l.bool},onAdd:function(e){var t=this;return function(){t.props.onAdd({category:t.props.category,item:e})}},onCreateNew:function(e){e.preventDefault(),this.onAdd(this.props.input)()},getItems:function(){for(var e=this,t=!1,s=0,n=this.props.items.length;n>s;s++)if(this.props.items[s]===this.props.input){t=!0;break}var a=this.props.items.map(function(t,s){return i["default"].createElement(o["default"],{selected:e.isSelected(s),input:e.props.input,text:t,addable:!0,deletable:!1,onAdd:e.onAdd(t),key:t+"_"+s})});return{items:a,fullMatch:t}},isSelected:function(e){return this.props.selected&&(e===this.props.selectedItem||this.props.single)},getAddBtn:function(e,t){return!this.props.addNew||e||this.props.single?null:[this.props.items.length>0?i["default"].createElement("span",{key:"cat_or",className:"cti__category__or"},"or"):null,i["default"].createElement("button",{key:"add_btn",className:"cti__category__add-item"+(t?" cti-selected":""),onClick:this.onCreateNew},"Create new "+(this.props.type||this.props.title)+(' "'+this.props.input+'"'))]},render:function(){var e=this.getItems(),t=e.items,s=e.fullMatch,n=this.getAddBtn(s,(0===t.length||this.props.selectedItem>=t.length)&&this.props.selected);return i["default"].createElement("div",{className:"cti__category"},i["default"].createElement("h5",{className:"cti__category__title"},this.props.title),i["default"].createElement("div",{className:"cti__category__tags"},t,n))}});t["default"]=u,e.exports=t["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),i=n(a),r=s(2),o=n(r),l=i["default"].PropTypes,u=i["default"].createClass({displayName:"Input",propTypes:{openPanel:l.func.isRequired,closePanel:l.func.isRequired,onValueChange:l.func.isRequired,onTagDeleted:l.func.isRequired,onKeyDown:l.func.isRequired,value:l.string.isRequired,tags:l.arrayOf(l.string).isRequired,onBlur:l.func},focusInput:function(){this.refs.input.getDOMNode().focus()},resizeInput:function(){var e=this.refs.input.getDOMNode();e.style.width=e.scrollWidth+8+"px"},getTags:function(){var e=this;return this.props.tags.map(function(t,s){return i["default"].createElement(o["default"],{selected:!1,input:"",text:t,addable:!1,deletable:!0,key:t+"_"+s,onDelete:function(){return e.props.onTagDeleted(s)}})})},onBlur:function(e){this.props.closePanel(),"function"==typeof this.props.onBlur&&this.props.onBlur(e)},render:function(){return i["default"].createElement("div",{className:"cti__input",onClick:this.focusInput},this.getTags(),i["default"].createElement("input",{type:"text",ref:"input",value:this.props.value,size:this.props.value.length+2,onFocus:this.props.openPanel,onBlur:this.onBlur,onChange:this.props.onValueChange,onKeyDown:this.props.onKeyDown,className:"cti__input__input"}),i["default"].createElement("div",{className:"cti__input__arrow"}))}});t["default"]=u,e.exports=t["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),i=n(a),r=s(4),o=n(r),l=i["default"].PropTypes,u=i["default"].createClass({displayName:"Panel",propTypes:{categories:l.arrayOf(l.object).isRequired,selection:l.object.isRequired,onAdd:l.func.isRequired,input:l.string.isRequired,addNew:l.bool},getCategories:function(){var e=this;return this.props.categories.map(function(t,s){return i["default"].createElement(o["default"],{key:t.id,items:t.items,category:t.id,title:t.title,selected:e.props.selection.category===s,selectedItem:e.props.selection.item,input:e.props.input,addNew:e.props.addNew,type:t.type,onAdd:e.props.onAdd,single:t.single})})},render:function(){return i["default"].createElement("div",{className:"cti__panel"},this.getCategories())}});t["default"]=u,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=9;t.TAB=s;var n=13;t.ENTER=n;var a=8;t.BACKSPACE=a;var i=37;t.LEFT=i;var r=38;t.UP=r;var o=39;t.RIGHT=o;var l=40;t.DOWN=l;var u=188;t.COMMA=u}])});
//# sourceMappingURL=categorized-tag-input.js.map