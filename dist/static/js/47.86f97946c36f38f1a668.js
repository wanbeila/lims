webpackJsonp([47],{E33T:function(t,e){},VOhu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("wtEF");var a={name:"ManageButton",props:{label:{type:String,default:"Button"},size:{type:String,default:"mini"},type:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},perms:{type:String,default:null},icon:{type:String,default:null}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{})},hasPerms:function(t){return null==t||function(t){for(var e=!1,n=i.a.state.sys.perms,a=0,l=n.length;a<l;a++)if(n[a]===t){e=!0;break}return e}(t)}},mounted:function(){}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{circle:"",size:this.size,type:this.type,icon:this.icon,loading:this.loading,disabled:!this.hasPerms(this.perms)},on:{click:this.handleClick}})},staticRenderFns:[]};var r=n("C7Lr")(a,l,!1,function(t){n("E33T")},"data-v-872f92ba",null);e.default=r.exports}});
//# sourceMappingURL=47.86f97946c36f38f1a668.js.map