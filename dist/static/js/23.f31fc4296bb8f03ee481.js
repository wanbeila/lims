webpackJsonp([23],{"DWT/":function(t,e){},kD1x:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},data:function(){return{tableHeight:window.innerHeight-300,pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},data_value:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",tableData:[{Time:"test",Message:"test",Area:"test",Unit:"test",Order:"test",Batch:"test",PI:"test",Priority:"test",Comments:"test"},{Time:"test",Message:"test",Area:"test",Unit:"test",Order:"test",Batch:"test",PI:"test",Priority:"test",Comments:"test"},{Time:"test",Message:"test",Area:"test",Unit:"test",Order:"test",Batch:"test",PI:"test",Priority:"test",Comments:"test"},{Time:"test",Message:"test",Area:"test",Unit:"test",Order:"test",Batch:"test",PI:"test",Priority:"test",Comments:"test"},{Time:"test",Message:"test",Area:"test",Unit:"test",Order:"test",Batch:"test",PI:"test",Priority:"test",Comments:"test"}]}},methods:{}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",{staticClass:"container"},[a("el-header",{attrs:{height:"128px"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"head-left"},[a("span",{staticClass:"head-title"},[t._v("Message Report")]),t._v(" "),a("el-row",{staticClass:"head-selecter",attrs:{type:"flex"}},[a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-date-picker",{attrs:{span:6,type:"date",placeholder:"选择日期"},model:{value:t.data_value,callback:function(e){t.data_value=e},expression:"data_value"}}),t._v(" "),a("el-button",{attrs:{span:6,icon:"el-icon-search",circle:""}})],1)],1),t._v(" "),a("div",{staticClass:"head-right"},[a("div",{staticClass:"right-buttons"},[a("el-row",{staticClass:"row-bg",staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[a("el-col",{attrs:{span:4}},[a("button",{staticClass:"excel-button"},[t._v("Excel")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("button",{staticClass:"process-button"},[t._v("Import")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("button",{staticClass:"process-button"},[t._v("Export")])])],1)],1)])])]),t._v(" "),a("el-main",[a("el-card",{staticClass:"card-right"},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:t.tableHeight,data:t.tableData,"header-cell-style":{background:"rgb(20, 210, 136,0.2)"}}},[a("el-table-column",{attrs:{prop:"Time",label:"Time",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Message",label:"Message",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Area",label:"Area",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Unit",label:"Unit",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Order",label:"Order",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Batch",label:"Batch",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PI",label:"PI",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Priority",label:"Priority",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Comments",label:"Comments",width:"180"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var r=a("C7Lr")(s,l,!1,function(t){a("DWT/")},"data-v-55c1dfcb",null);e.default=r.exports}});
//# sourceMappingURL=23.f31fc4296bb8f03ee481.js.map