(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,n,t){var map={"./de/index.json":[151,26],"./de/kontakt.json":[152,27],"./de/nutzungsbedingungen.json":[153,28],"./de/projekte.json":[156,29],"./de/projekte/projekt-1.json":[154,30],"./de/projekte/projekt-2.json":[155,31],"./de/rechtliche-hinweise.json":[157,32],"./de/ueber-uns.json":[158,33],"./en/about.json":[159,34],"./en/contact.json":[160,35],"./en/index.json":[161,36],"./en/legals.json":[162,37],"./en/projects.json":[165,38],"./en/projects/project-1.json":[163,39],"./en/projects/project-2.json":[164,40],"./en/terms.json":[166,41]};function o(e){if(!t.o(map,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=147,e.exports=o},148:function(e,n,t){"use strict";var o=t(62),r={scrollToTop:!0,asyncData(e){var{store:n,app:o,error:r,route:c}=e,path=c.path.replace(RegExp("^/".concat(o.i18n.locale)),"").replace(/^\/([^?.#]*)[\\/?#]{0,1}[^\\/]*$/,"$1").replace(/\/index|\/$/,"")||"index";return t(147)("./"+o.i18n.locale+"/"+path+".json").then(data=>("routeParams"in data&&n.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components})).catch(()=>{r({statusCode:404,message:"local json file not found"})})},data:()=>({title:"title of page",components:[]}),created(){this.components=Object(o.a)(this.components)},head(){return{title:this.title}}},c=t(7),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},e._l(e.components,(function(n,o){return t(n.asyncComponent,e._b({key:o,tag:"component"},"component",n.data,!1))})),1)}),[],!1,null,null,null);n.a=component.exports},244:function(e,n,t){"use strict";t.r(n);var o={name:"About",extends:t(148).a,nuxtI18n:{paths:{en:"/about",de:"/ueber-uns"}}},r=t(7),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);