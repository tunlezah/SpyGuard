(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d175fb6"],{"192d":function(e,s,t){"use strict";t("fd7d")},9152:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"wrapper"},[e.save_usb&&e.init?s("div",{staticClass:"center"},[s("div",{staticClass:"canvas-anim",class:{"anim-connect":!e.saved&&!e.usb},on:{click:function(s){return e.new_capture()}}},[!e.saved&&e.usb?s("div",{staticClass:"icon-spinner"}):e._e(),e.saved?s("div",{staticClass:"icon-success"}):e._e(),s("div",{staticClass:"icon-usb"}),s("div",{staticClass:"icon-usb-plug"})]),e.saved||e.usb?e._e():s("p",{staticClass:"legend"},[s("br"),e._v(e._s(e.$t("save-capture.please_connect")))]),!e.saved&&e.usb?s("p",{staticClass:"legend"},[s("br"),e._v(e._s(e.$t("save-capture.we_are_saving")))]):e._e(),e.saved?s("p",{staticClass:"legend"},[s("br"),e._v(e._s(e.$t("save-capture.tap_msg")))]):e._e()]):!e.save_usb&&e.init?s("div",{staticClass:"center"},[s("div",[s("p",{staticClass:"legend"},[e._v(e._s(e.$t("save-capture.capture_download"))),s("br"),s("br"),s("br")]),s("button",{staticClass:"btn btn-primary",on:{click:function(s){return e.new_capture()}}},[e._v(e._s(e.$t("save-capture.start_capture_btn")))]),s("iframe",{staticClass:"frame-download",attrs:{src:e.download_url}})])]):e._e()])},n=[],c=(t("14d9"),t("bc3a")),i=t.n(c),u=t("a18c"),o={name:"save-capture",components:{},data(){return{usb:!1,saved:!1,save_usb:!1,init:!1}},props:{capture_token:String},methods:{check_usb:function(){console.log("[save-capture.vue] Checking connected USB device..."),i.a.get("/api/save/usb-check",{timeout:3e4}).then(e=>{e.data.status&&(this.usb=!0,clearInterval(this.interval),this.save_capture())})},save_capture:function(){var e=this.capture_token;console.log("[save-capture.vue] Saving the capture on USB"),i.a.get(`/api/save/save-capture/${e}/usb`,{timeout:3e4}).then(e=>{e.data.status&&(this.saved=!0,console.log("[save-capture.vue] Capture saved, going back to main view"),this.timeout=setTimeout(()=>u["a"].push("/"),6e4))})},new_capture:function(){console.log("[save-capture.vue] Capture saved, generating a new access point"),clearTimeout(this.timeout),u["a"].push({name:"generate-ap"})}},created:function(){console.log("[save-capture.vue] Showing save-capture.vue"),window.config.download_links?(console.log("[save-capture.vue] Using download links instead of USB key"),this.init=!0,this.save_usb=!1,this.download_url=`/api/save/save-capture/${this.capture_token}/url`):(console.log("[save-capture.vue] Using USB key to save the capture"),this.init=!0,this.save_usb=!0,this.interval=setInterval(()=>{this.check_usb()},500))}},r=o,v=(t("192d"),t("2877")),l=Object(v["a"])(r,a,n,!1,null,null,null);s["default"]=l.exports},fd7d:function(e,s,t){}}]);
//# sourceMappingURL=chunk-0d175fb6.abef9fad.js.map