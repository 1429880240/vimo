webpackJsonp([20],{1038:function(t,s,o){var n=o(1039);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(592)("31042ecf",n,!0)},1039:function(t,s,o){s=t.exports=o(591)(),s.push([t.i,"",""])},1040:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},watch:{},computed:{},methods:{toastBottomOnlyString:function(){var t=this.$toast("Toast Bottom Only String",4e3);setTimeout(function(){t.dismiss()},3e3)},toastBottomWithStringAndDuration:function(){this.$toast("Toast Bottom With String And Druation",1e3)},toastTop:function(t){this.$toast({message:"Top was added successfully",duration:3e3,position:"top",dismissOnPageChange:!0,onDismiss:function(){console.debug("1 onDismiss in promise success!")}})},toastButtom:function(){this.$toast({message:"Bottom was added successfully",duration:3e3,position:"bottom",dismissOnPageChange:!0,onDismiss:function(){console.debug("2 onDismiss in promise success!")}})},toastMiddle:function(){this.$toast({message:"Middle was added successfully",duration:3e3,position:"middle",dismissOnPageChange:!0,onDismiss:function(){console.debug("3 onDismiss in promise success!")}})},toastMiddleWithBtn:function(){this.$toast({message:"Middle with Button was added successfully",duration:3e3,showCloseButton:!0,closeButtonText:"OK",position:"middle",dismissOnPageChange:!1,onDismiss:function(){console.debug("4 onDismiss in promise success!")}})},showCloseBtnToast:function(){this.$toast({message:"Top with Button was added successfully",duration:3e3,position:"top",showCloseButton:!0,closeButtonText:"好的",cssClass:"showCloseBtnToastCssClass",dismissOnPageChange:!0,onDismiss:function(){console.debug("5 onDismiss in promise success!")}})}},mounted:function(){console.log("toast.vue"),console.log(this)}}},1041:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("Page",[o("Header",[o("Navbar",[o("Title",[t._v("Toast")])],1)],1),t._v(" "),o("Content",{attrs:{padding:""}},[o("h5",[t._v("简介")]),t._v(" "),o("p",[t._v("Toast用于将应用状态传递给用户, 提示一般自动关闭.")]),t._v(" "),o("p",[t._v("传参指纹: this.$toast('显示Toast提示')")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.toastBottomOnlyString()}}},[t._v("只传入String")]),t._v(" "),o("p",[t._v("传参指纹: this.$toast('显示Toast提示',1000)")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.toastBottomWithStringAndDuration()}}},[t._v("String + Duration(1000)")]),t._v(" "),o("p",[t._v("传参指纹: this.$toast({...})")]),t._v(" "),o("Button",{attrs:{id:"top",block:""},on:{click:function(s){t.toastTop(s)}}},[t._v("顶部出现")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.toastButtom()}}},[t._v("底部出现")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.toastMiddle()}}},[t._v("显示在中间")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.toastMiddleWithBtn()}}},[t._v("显示在中间 + 按钮")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:function(s){t.showCloseBtnToast()}}},[t._v("显示在顶部 + 按钮")])],1)],1)},staticRenderFns:[]}},668:function(t,s,o){o(1038);var n=o(0)(o(1040),o(1041),null,null);t.exports=n.exports}});