(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("NavTabs"),e("h1",{staticClass:"mt-5"},[t._v(" 美食達人 ")]),e("hr"),e("div",{staticClass:"row text-center"},t._l(t.users,(function(t){return e("UsersTopCard",{key:t.id,attrs:{initialUser:t}})})),1)],1)},a=[],o=s("8bb1"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-3"},[e("router-link",{attrs:{to:{name:"users-profile",params:{id:t.user.id}}}},[e("img",{attrs:{src:t.user.image,width:"140px",height:"140px"}})]),e("h2",[t._v(t._s(t.user.name))]),e("span",{staticClass:"badge badge-secondary"},[t._v("追蹤人數: "+t._s(t.user.FollowerCount))]),e("p",{staticClass:"mt-3"},[t.user.isFollowed?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 取消追蹤 ")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 追蹤 ")])])],1)},n=[],l=(s("d9e2"),s("4cce")),u=s("2fa3"),c={props:{initialUser:{type:Object,required:!0}},data(){return{user:this.initialUser}},methods:{async addFollowing(t){try{const{data:e}=await l["a"].addFollowing({userId:t});if("error"===e.status)throw new Error(e.message);this.user={...this.user,isFollowed:!0}}catch(e){u["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"})}},async deleteFollowing(t){try{const{data:e}=await l["a"].deleteFollowing({userId:t});if("error"===e.status)throw new Error(e.message);this.user={...this.user,isFollowed:!1}}catch(e){u["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"})}}}},d=c,p=s("2877"),w=Object(p["a"])(d,i,n,!1,null,null,null),h=w.exports,g={name:"UsersTop",components:{NavTabs:o["a"],UsersTopCard:h},data(){return{users:[]}},methods:{async fetchTopUsers(){try{const{data:t}=await l["a"].getTopUsers();this.users=t.users.map(t=>({id:t.id,name:t.name,image:t.image||"https://i.imgur.com/58ImzMM.png",followerCount:t.FollowerCount,isFollowed:t.isFollowed}))}catch(t){console.log(t),u["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"})}}},created(){this.fetchTopUsers()}},m=g,b=Object(p["a"])(m,r,a,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.75491d15.js.map