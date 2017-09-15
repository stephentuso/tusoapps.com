webpackJsonp([0,1,2],[,,,,,,,,,,,,,,,,,function(t,e,o){o(27);var a=o(7)(o(22),o(29),"data-v-e58759b4",null);t.exports=a.exports},function(t,e,o){o(26);var a=o(7)(o(23),o(28),null,null);t.exports=a.exports},,,function(t,e,o){o(37);var a=o(7)(o(32),o(42),null,null);t.exports=a.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(1);e.default={components:{QBtn:a.b},props:{imageUrl:String,title:String,description:String,links:Array,backgroundColor:{type:String,default:"#666"}},data:function(){return{backgroundDim:.2}},computed:{backgroundStyle:function(){return{"background-image":"url("+this.imageUrl+")","background-size":"cover","background-position":"center"}}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(1);e.default={components:{QIcon:a.f,QItem:a.g,QItemSide:a.h,QItemMain:a.i,QItemTile:a.j},props:{icon:String,title:String,description:String}}},function(t,e,o){e=t.exports=o(15)(),e.push([t.i,".feature-card{position:relative;padding-top:48px}.feature-card-title{margin-bottom:16px}.feature-card-icon{position:absolute;top:0;right:20px;height:100%;font-size:128px;opacity:.08;z-index:-100}",""])},function(t,e,o){e=t.exports=o(15)(),e.push([t.i,'.base[data-v-e58759b4]{height:400px;color:#fff;position:relative;padding:24px}.background-color[data-v-e58759b4]{z-index:-101}.background-img[data-v-e58759b4]{z-index:-100}.background-dimmer[data-v-e58759b4]{background-color:#000;opacity:.3;z-index:-99;transition:opacity .5s ease}.base:hover .background-dimmer[data-v-e58759b4]{opacity:.8}.title[data-v-e58759b4]{display:inline-block}.title[data-v-e58759b4]:after{display:block;content:"";border-bottom:3px solid #fff;-webkit-transform:scaleX(0);transform:scaleX(0);transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;-webkit-transform-origin:0 50%;transform-origin:0 50%}.base:hover .title[data-v-e58759b4]:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.description[data-v-e58759b4],.links[data-v-e58759b4]{opacity:0;transition:opacity .5s ease}.base:hover .description[data-v-e58759b4],.base:hover .links[data-v-e58759b4]{opacity:1}a[data-v-e58759b4]{color:#fff;margin-right:20px}',""])},function(t,e,o){var a=o(24);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(16)("19c1599c",a,!0)},function(t,e,o){var a=o(25);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(16)("21d6095e",a,!0)},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"feature-card"},[o("q-icon",{staticClass:"feature-card-icon text-black",attrs:{name:t.icon}}),t._v(" "),o("h6",{staticClass:"feature-card-title"},[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.description))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"base"},[o("div",{staticClass:"background-color absolute-top-left fit",style:{"background-color":t.backgroundColor}}),t._v(" "),o("div",{staticClass:"background-img absolute-top-left fit",style:t.backgroundStyle}),t._v(" "),o("div",{staticClass:"background-dimmer absolute-top-left fit"}),t._v(" "),o("div",{staticClass:"content"},[o("h2",{staticClass:"title responsive"},[t._v(t._s(t.title))]),t._v(" "),o("br"),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"links flex wrap"},t._l(t.links,function(e){return o("a",{key:e.url,attrs:{href:e.url}},[o("q-btn",{staticClass:"light outline",attrs:{color:"light",outline:""}},[t._v("\n          "+t._s(e.label)+"\n        ")])],1)}))])])},staticRenderFns:[]}},,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(1),s=o(18),n=o.n(s),i=o(17),r=o.n(i);e.default={components:{FeatureCard:n.a,FeatureBlock:r.a,QBtn:a.b,QLayout:a.c,QToolbar:a.d,QToolbarTitle:a.e},data:function(){return{features:o(40),clients:o(39)}}}},,function(t,e,o){e=t.exports=o(15)(),e.push([t.i,".contact{background:#2b84ac;padding:30px;color:#fff}.contact h5{font-family:Montserrat,sans-serif;font-weight:700}",""])},,,function(t,e,o){var a=o(34);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(16)("88be69c2",a,!0)},,function(t,e){t.exports=[["statics/nelson_android_frame.jpg","Nelson County Schools","Android and iPhone apps keep Nelson County up to date with news, sports schedule and scores, events, and more.",[{label:"Google Play",url:"https://play.google.com/store/apps/details?id=com.tusoapps.nelsoncountyps"},{label:"App Store",url:"https://geo.itunes.apple.com/us/app/nelson-county-public-schools/id1035172103?mt=8"}]],["statics/nbs_ios_frame1.jpg","North Branch School","Android and iPhone apps with news, events, customizable notifications, and more. News is automatically pulled from the North Branch Website.",[{label:"Google Play",url:"https://play.google.com/store/apps/details?id=com.tusoapps.northbranchschool"},{label:"App Store",url:"https://itunes.apple.com/us/app/north-branch-school/id1135309244?mt=8"}]]]},function(t,e){t.exports=[["notifications","Notifications","Keep the community informed with instant notifications. Schools can send messages about closings, delays, event cancelations, and more."],["event","Calendar","Give people a place to view all of your events. Users can receive notifications about events and categories by subscribing to them."],["directions_run","Sports","Schools - provide a single stop for all your district athletic info. Show rosters, schedules, scores, and notices. Users can subscribe to a team to be notified about upcoming games and schedule changes."],["chrome_reader_mode","News Feed","Show all the latest news and photos in a single stream. Stories can be automatically pulled from your Facebook page or website, or be added directly to the app."],["edit","Simple Content Management","All app content is managed through an easy to use dashboard. Administrators can add new users and control what they have access to."],["settings","Custom Features","Any additional resources or features you need can be included in the app."]]},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",[o("q-toolbar",{attrs:{slot:"header",inverted:"",color:"primary"},slot:"header"},[o("q-toolbar-title",{staticClass:"font-primary",staticStyle:{color:"black"},attrs:{padding:0}},[t._v("\n      TUSO APPS\n    ")])],1),t._v(" "),o("div",{staticClass:"layout-view"},[o("div",{staticClass:"header text-center"},[o("h2",{staticClass:"responsive"},[t._v("Apps for schools, businesses, and organizations")])]),t._v(" "),o("div",[o("div",{staticClass:"row"},t._l(t.clients,function(t){return o("feature-block",{key:t[0],staticClass:"col-md-6 col-sm-12",attrs:{"image-url":t[0],title:t[1],description:t[2],links:t[3]}})}))]),t._v(" "),o("div",{staticClass:"container padded-top padded-bottom"},[o("div",{staticClass:"row lg-gutter"},[t._l(t.features,function(t){return[o("feature-card",{staticClass:"col-md-6 col-sm-12",attrs:{icon:t[0],title:t[1],description:t[2]}})]})],2)]),t._v(" "),o("div",{staticClass:"contact text-center"},[o("h5",[t._v("Connect to your community.")]),t._v(" "),o("p",[t._v("For pricing and details:")]),t._v(" "),o("p",[o("a",{attrs:{href:"mailto:contact@tusoapps.com"}},[o("q-btn",{staticClass:"text-blue",attrs:{color:"white"}},[t._v("Contact")])],1)]),t._v(" "),o("p",[t._v("contact@tusoapps.com")])]),t._v(" "),o("footer",{staticClass:"text-center"},[o("p",[t._v("© 2017 Tuso Apps")])])])],1)},staticRenderFns:[]}}]);