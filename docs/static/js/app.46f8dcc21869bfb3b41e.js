webpackJsonp([1],{"3rdn":function(t,e){},"8KhH":function(t,e,a){"use strict";var r=a("Ien3"),n=a.n(r),i=a("BnaJ"),s=a("VU/8")(n.a,i.a,!1,null,null,null);e.default=s.exports},BnaJ:function(t,e,a){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]};e.a=r},Ien3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("cvLr")),i=a("q7+u");e.default={props:{options:{type:Object,default:function(){return{}}}},data:function(){var t=this;return{events:n.EVENTS.reduce(function(e,a){return r({},e,(s=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];t.emitEvent(a,r)},(i=a)in(n={})?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,n));var n,i,s},{})}},watch:{options:{deep:!0,handler:function(){var t=$(".fp-section.active").index(),e=$(".fp-section.active").find(".slide.active").index();this.destroy("all"),$(".section").eq(t).addClass("active"),e>-1&&$(".section.active").find(".slide").eq(e).addClass("active"),this.init()}}},mounted:function(){this.init()},methods:{init:function(){$(this.$el).fullpage(r({},this.options,this.events))},destroy:function(){$.fn.fullpage.destroy("all")},emitEvent:function(t,e){this.$emit.apply(this,[(0,i.camelToKebab)(t)].concat(function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}(e))),this.options.hasOwnProperty(t)&&this.options[t].apply(this,e)}}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),n=a("8KhH"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"nav"}},[e("div",{staticClass:"nav"},[e("p",[this._v("Main")]),this._v(" "),e("p",[this._v("About")]),this._v(" "),e("p",[this._v("Work")]),this._v(" "),e("p",[this._v("Contact")])])])}]};var s=a("VU/8")({name:"NavSection",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){a("3rdn")},"data-v-3270271a",null).exports,o=a("AYPi"),l=a.n(o),c=a("Ubyc"),v=a("U0v6"),h=a.n(v),f={name:"MainSection",data:function(){return{msg:"Main Front First Business Card"}},components:{VueTyper:c.VueTyper,FontAwesomeIcon:h.a},methods:{track:function(){Object(o.page)("/")}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mainComponent"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"left-col"},[a("p",{staticClass:"name"},[t._v("Andrew Inhwan Kim")]),t._v(" "),a("vue-typer",{staticClass:"jobtitle",attrs:{text:["Frontend Engineer","Web Developer","UX Designer"],repeat:1/0,"erase-delay":70,"pre-erase-delay":1e3,"erase-style":"backspace","caret-animation":"phase"}}),t._v(" "),a("div",{staticClass:"resume"},[a("a",{attrs:{id:"aikresume",href:"../assets/resume.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("View my Resume")]),t._v(" "),a("font-awesome-icon",{staticClass:"far",attrs:{icon:["far","file-pdf"],size:"2x",color:"white"}})],1)],1),t._v(" "),a("div",{staticClass:"right-col profile"})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wave-bottom-container"},[e("div",{staticClass:"wave"}),this._v(" "),e("div",{staticClass:"wave wave2"})])}]};var u=a("VU/8")(f,d,!1,function(t){a("pQfQ")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"about"},[a("h1",{staticClass:"header"},[t._v("About")]),t._v(" "),a("p",{staticClass:"col-one"},[t._v("\n        I was born in 1991, an only child in Annandale Virginia. I grew up with an obsession with LEGO and claimed I'd become a concert violinist. In middle school I thought I'd end up in the NBA or the PGA. In high school I discovered The Beatles and knew our band \"Kung Food\" was going to make it 😜. At New York University I began as an Economic Policy major, but transferred midway to "),a("a",{attrs:{href:"http://tisch.nyu.edu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tisch School of the Arts")]),t._v(" for Film and Television. I'm currently a Full Stack Developer at "),a("a",{attrs:{href:"https://agencychief.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CHIEF")]),t._v(" (recently acquired by "),a("a",{attrs:{href:"http://bytecubed.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bytecubed")]),t._v(") working on "),a("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/labs/pubmed/",target:"_blank",rel:"noopener noreferrer",Pub:"",Med:"",Labs:""}},[t._v("Pub Med Labs")]),t._v(" connecting people to the world's leading sources of biomedical information.\n      ")]),t._v(" "),a("p",{staticClass:"col-two"},[t._v("\n        People are often surprised to find out that I don't subscribe to Netflix 😨, but I am a huge fan of "),a("a",{attrs:{href:"https://medium.com/@akinhwan/my-favorite-podcasts-4b39a3de637c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Podcasts")]),t._v(". I'll probably enjoy golf till old age, my handicap is ~15. I love music, here is some hard hitting jazz for your soul "),a("a",{attrs:{href:"https://youtu.be/CsxtKQW9ggg",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Love Supreme Part 2, Resolution by John Coltrane ")]),t._v(", "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=pDga7tJL2UU",target:"_blank",rel:"noopener noreferrer"}},[t._v("I Love Music by Ahmad Jamal")]),t._v(", and "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=U8pZZ5D3dVc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yusef Lateef's Love Theme from Spartacus")]),t._v(". Also... "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=WKWFr9upIuU&t=882s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brazilian Samba?")]),t._v(". Otherwise I enjoy listening to "),a("a",{attrs:{href:"https://worldwidefm.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Worldwide FM radio")]),t._v(" while I work. I grew up eating "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gamja-tang",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gamja-tang")]),t._v(", and will drink most anything in smoothie form. \n        My favorite book is "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Meditations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Meditations")]),t._v(" by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Marcus_Aurelius",target:"_blank",rel:"noopener noreferrer"}},[t._v("Marcus Aurelius")]),t._v(". A movie I could watch over and over again is "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=BnFjSHQFVkA",target:"_blank",rel:"noopener noreferrer"}},[t._v("In the Mood for Love")]),t._v(" by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Wong_Kar-wai_filmography",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wong Kar-wai")]),t._v(". \n        My "),a("a",{attrs:{href:"https://www.effectivealtruism.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mission")]),t._v(" in life is to make the biggest impact on the most amount of people on this planet 🌎 \n      ")])])])}]};var _=a("VU/8")({name:"AboutSection",data:function(){return{msg:"About Me"}}},p,!1,function(t){a("jgVY")},"data-v-4c99c17b",null).exports,m={name:"work",data:function(){return{msg:"Work Work Work",trying1:!1,trying2:!1,trying3:!1,trying4:!1,trying5:!1,trying6:!1,trying7:!1,trying8:!1}},components:{FontAwesomeIcon:h.a},methods:{validatePass:function(t,e){"akinto"==document.getElementById("workpass"+e).value?(console.log("validated!"),this.openWindow(t),this.trying1=!1,this.trying2=!1,this.trying3=!1,this.trying4=!1,this.trying5=!1,this.trying6=!1,this.trying7=!1,this.trying8=!1,document.getElementById("workpass"+e).value=""):(alert("Contact me to view this work"),console.log("unvalidated...."))},openWindow:function(t){window.open(t)}}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"work"}},[a("div",{staticClass:"work"},[a("h1",{staticClass:"header"},[t._v("Work")]),t._v(" "),a("div",{staticClass:"pubmed card"},[a("a",{attrs:{href:"http://bit.ly/2qdmSQ9",target:"_blank",rel:"noopener noreferrer"}},[t._v("PubMed")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Search Engine for Biomedical Literature")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'18")])]),t._v(" "),a("div",{staticClass:"odpcec card"},[a("a",{attrs:{href:"http://bit.ly/2qfy12Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("ODPC")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Open Door Presbyterian English Congregation")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'18")])]),t._v(" "),a("div",{staticClass:"kas card"},[a("a",{attrs:{href:"http://bit.ly/2RhS10j",target:"_blank",rel:"noopener noreferrer"}},[t._v("KAS")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Korean American Story Organization")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'18")])]),t._v(" "),a("div",{staticClass:"spaces card"},[a("a",{attrs:{href:"http://bit.ly/2H4NYE8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spaces")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'18")])]),t._v(" "),a("div",{staticClass:"slack card"},[a("a",{attrs:{href:"http://bit.ly/2HzxsZv",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'17")])]),t._v(" "),a("div",{staticClass:"rides card"},[a("a",{attrs:{href:"http://bit.ly/2HBd8XU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rides")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'17")])]),t._v(" "),a("div",{staticClass:"graphicdesign card"},[a("a",{attrs:{href:"http://bit.ly/2IW4Ysq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Design")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'11-'12")])]),t._v(" "),a("div",{staticClass:"threed card"},[a("a",{attrs:{href:"http://bit.ly/2HBdeyK",target:"_blank",rel:"noopener noreferrer"}},[t._v("3D")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'16")])]),t._v(" "),a("div",{staticClass:"processing card"},[a("a",{attrs:{href:"http://bit.ly/2HrWXyu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Processing")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'14-'15")])]),t._v(" "),a("div",{staticClass:"loginpage card"},[a("a",{attrs:{href:"http://bit.ly/2JM0hTq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xhibit")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'17")])]),t._v(" "),a("div",{staticClass:"transit card"},[a("a",{attrs:{href:"http://bit.ly/2vh6pjf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transit")]),t._v(" "),a("div",{staticClass:"year-made"},[t._v("'18")])])])])}]};var b=a("VU/8")(m,g,!1,function(t){a("r8/M")},"data-v-665454a5",null).exports,w={name:"ContactSection",data:function(){return{msg:"Contact Contact Contact",email:[]}},methods:{onSubmit:function(t){this.email.push(this.$refs.emailInput.value),console.log(t),this.$refs.emailInput.value=""}},components:{FontAwesomeIcon:h.a}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("h1",{staticClass:"header"},[t._v("Contact")]),t._v(" "),a("div",{staticClass:"grid"},[a("div",{staticClass:"information"},[a("div",{staticClass:"my-email"},[a("font-awesome-icon",{staticClass:"information-fai",attrs:{icon:["far","envelope-open"],size:"1x"}}),t._v(" "),a("p",{staticClass:"dropaline"},[t._v("Drop a line")]),t._v(" "),a("a",{attrs:{href:"mailto:akinhwan@gmail.com?subject=Your #1 Fan&body=Oh my gosh I can't believe I finally got a hold of you"}},[t._v("akinhwan@gmail.com")])],1),t._v(" "),a("div",{staticClass:"my-phone"},[a("font-awesome-icon",{staticClass:"information-fai",attrs:{icon:["fas","phone"],color:"white",size:"1x"}}),t._v(" "),t._m(0)],1)]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"credits"},[a("p",[t._v("This site was built by me "),a("font-awesome-icon",{staticClass:"fas",attrs:{icon:["fas","hand-holding-heart"],color:"white",size:"1x"}}),t._v("  With an assist from ...")],1),t._v(" "),a("ul",{staticClass:"credits-list"},[t._m(2),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js")]),a("font-awesome-icon",{staticClass:"credits-fai",attrs:{icon:["fab","vuejs"],color:"white",size:"1x"}})],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fort Awesome")]),a("font-awesome-icon",{staticClass:"credits-fai",attrs:{icon:["fab","fort-awesome"],color:"white",size:"1x"}})],1),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"footer"},[a("a",{attrs:{href:"https://github.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","github"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/users/6286223/akin-hwan?tab=profile",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","stack-overflow"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://medium.com/@akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","medium-m"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://twitter.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","twitter"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/akinhwan/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","linkedin-in"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://soundcloud.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","soundcloud"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/channel/UCduQGCaFUTOq1LMOP9zOUNA",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","youtube"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://codepen.io/akinhwan/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","codepen"],size:"4x"}})],1)]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"copyright"},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["far","copyright"],size:"1x"}}),t._v(" "),a("p",{staticClass:"copyright-text"},[t._v("2018 Andrew Inhwan Kim. All rights reserved. ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"sayhello"},[this._v("Say Hello")]),this._v(" "),e("a",{staticClass:"phonenumber",attrs:{href:"tel:+1-703-851-5514"}},[this._v("+1 (703) 851-5514")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq"},[e("p",[this._v("Q:What's your greatest strength/weakness?")]),this._v(" "),e("p",[this._v("Q:Where do you see yourself in ten years?")]),this._v(" "),e("p",[this._v("Q:How have you overcome a challenge?")]),this._v(" "),e("p",[this._v("Q:What are your hobbies?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Product_Sans",target:"_blank",rel:"noopener noreferrer"}},[this._v("Product Sans ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://alvarotrigo.com/fullPage/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Fullpage.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://cngu.github.io/vue-typer/",target:"_blank",rel:"noopener noreferrer"}},[this._v("vueTyper")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subscription"},[e("h2",[this._v("Sign up for updates. No spam included.")]),this._v(" "),e("div",{staticClass:"form-right"},[e("form",{staticStyle:{padding:"3px","text-align":"center"},attrs:{action:"https://tinyletter.com/akinhwan",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/akinhwan', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[e("p",[e("input",{attrs:{type:"email",placeholder:"heyHEYhey@gmail.com",name:"email",id:"tlemail",required:""}})]),this._v(" "),e("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),this._v(" "),e("input",{attrs:{type:"submit",id:"tlbutton",value:"Subscribe"}})])])])}]};var k=a("VU/8")(w,y,!1,function(t){a("g5Py")},"data-v-4a974ba0",null).exports,C={name:"App",data:function(){return{options:{navigation:!0,navigationPosition:"right",navigationTooltips:["main","about","work","contact"],showActiveTooltip:!0,anchors:["1","2","3","4"],normalScrollElements:"#work"}}},components:{FullPage:n.default,Nav:s,Main:u,About:_,Work:b,Contact:k}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("full-page",{ref:"fullpage",attrs:{options:this.options}},[e("Main",{staticClass:"section"}),this._v(" "),e("About",{staticClass:"section"}),this._v(" "),e("Work",{staticClass:"section"}),this._v(" "),e("Contact",{staticClass:"section"})],1)],1)},staticRenderFns:[]};var I=a("VU/8")(C,A,!1,function(t){a("yjYX")},null,null).exports,x=a("QxPg");a("h17U"),a("KREn"),a("1P+R");r.a.use(l.a,{id:"UA-74378318-3"}),x.default.config.familyPrefix,r.a.config.productionTip=!1,new r.a({el:"#app",render:function(t){return t(I)}})},g5Py:function(t,e){},jgVY:function(t,e){},pQfQ:function(t,e){},"r8/M":function(t,e){},yjYX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.46f8dcc21869bfb3b41e.js.map