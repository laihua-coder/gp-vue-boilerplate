(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{298:function(n,e,t){var map={"./de/index.json":[302,26],"./de/kontakt.json":[303,27],"./de/nutzungsbedingungen.json":[304,28],"./de/projekte.json":[307,29],"./de/projekte/projekt-1.json":[305,30],"./de/projekte/projekt-2.json":[306,31],"./de/rechtliche-hinweise.json":[308,32],"./de/ueber-uns.json":[309,33],"./en/about.json":[310,34],"./en/contact.json":[311,35],"./en/index.json":[312,36],"./en/legals.json":[313,37],"./en/projects.json":[316,38],"./en/projects/project-1.json":[314,39],"./en/projects/project-2.json":[315,40],"./en/terms.json":[317,41]};function o(n){if(!t.o(map,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[n],o=e[0];return t.e(e[1]).then((function(){return t.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=298,n.exports=o},299:function(n,e,t){"use strict";t(86),t(67);var o=t(146),r={scrollToTop:!0,asyncData:function(n){var e=n.store,o=n.app,r=n.error,path=n.route.path.replace(RegExp("^/".concat(o.i18n.locale)),"").replace(/^\/([^?.#]*)[\\/?#]{0,1}[^\\/]*$/,"$1").replace(/\/index|\/$/,"")||"index";return t(298)("./"+o.i18n.locale+"/"+path+".json").then((function(data){return"routeParams"in data&&e.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components}})).catch((function(){r({statusCode:404,message:"local json file not found"})}))},data:function(){return{title:"title of page",components:[]}},created:function(){this.components=Object(o.a)(this.components)},head:function(){return{title:this.title}}},c=t(16),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},n._l(n.components,(function(e,o){return t(e.asyncComponent,n._b({key:o,tag:"component"},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},391:function(n,e,t){"use strict";t.r(e);var o={extends:t(299).a,nuxtI18n:{paths:{en:"/contact",de:"/kontakt"}}},r=t(16),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);