webpackJsonp([0],{"9Fja":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("rc0N"),i=n("Eryh"),r=n("MHeG");o.default={name:"taskForOpenIp",components:{commonList:e.a,commonButton:i.a},props:["dataList"],data:function(){return{test:1,logColumns:[{title:"名称",key:"name",tooltip:!0,width:"170px",align:"center"},{title:"描述",key:"description",tooltip:!0,align:"center"},{title:"天数",key:"limit",tooltip:!0,align:"center"},{title:"状态",key:"open",tooltip:!0,align:"center",render:function(t,o){return t("i-switch",{props:{value:"1"===o.row.open},on:{"on-change":function(){var t="/taskConfig/change/"+o.row.id;r.a.post(t,null,function(t){o.row.open=t.data})}}},[t("span",{slot:"open"},"开"),t("span",{slot:"close"},"关")])}}]}},render:function(t){return t("div",{},[t("commonList",{props:{url:"/taskConfig/list",logColumns:this.logColumns,showPage:!0,showDrawer:!1}})])}}}});
//# sourceMappingURL=0.99c28618b0195819da4b.js.map