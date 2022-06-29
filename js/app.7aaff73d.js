(function(){"use strict";var a={9427:function(a,n,t){var e=t(9242),i=t(3396);const o=a=>((0,i.dD)("data-v-a149dc96"),a=a(),(0,i.Cn)(),a),r=o((()=>(0,i._)("header",null,[(0,i._)("h1",null,"Food Rating Card")],-1))),l={class:"row"},d={class:"col-50"},s=o((()=>(0,i._)("h2",null,"Edit",-1))),c={class:"col-50"},u=o((()=>(0,i._)("h2",null,"Preview",-1))),p={class:"row"},m=o((()=>(0,i._)("h2",null,"Download or Share",-1))),g=o((()=>(0,i._)("span",{class:"mdi mdi-download"},null,-1))),f=(0,i.Uk)(" Download "),k=[g,f],h=o((()=>(0,i._)("span",{class:"mdi mdi-share-variant"},null,-1))),_=(0,i.Uk)(" Share "),v=[h,_],y={key:0},b=o((()=>(0,i._)("p",{class:"success-text"},"Upload success!",-1))),w=o((()=>(0,i._)("label",{for:"generated-link-input"},"Link: ",-1))),D=["src"];function R(a,n,t,o,g,f){const h=(0,i.up)("FoodRatingForm"),_=(0,i.up)("FoodRatingCard");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("main",null,[(0,i._)("div",l,[(0,i._)("section",d,[s,(0,i.Wm)(h,{modelValue:g.foodRating,"onUpdate:modelValue":n[0]||(n[0]=a=>g.foodRating=a)},null,8,["modelValue"])]),(0,i._)("section",c,[u,(0,i.Wm)(_,{ref:"new-rating-card","food-rating":g.foodRating},null,8,["food-rating"])])]),(0,i._)("section",p,[m,(0,i._)("button",{onClick:n[1]||(n[1]=(...a)=>f.downloadRatingCard&&f.downloadRatingCard(...a))},k),(0,i._)("button",{onClick:n[2]||(n[2]=(...a)=>f.uploadRatingCard&&f.uploadRatingCard(...a))},v),g.generatedLink?((0,i.wg)(),(0,i.iD)("div",y,[b,(0,i._)("div",null,[w,(0,i.wy)((0,i._)("input",{id:"generated-link-input",type:"url","onUpdate:modelValue":n[3]||(n[3]=a=>g.generatedLink=a)},null,512),[[e.nr,g.generatedLink]]),(0,i._)("button",{onClick:n[4]||(n[4]=(...a)=>f.copyLinkToClipboard&&f.copyLinkToClipboard(...a))},"Copy")]),(0,i._)("img",{src:g.generatedLink,alt:"generated-image"},null,8,D)])):(0,i.kq)("",!0)])])],64)}var C=t(2613),x=t.n(C),L=t(6154),V=t(6265),U=t.n(V);const $="https://api.imgur.com",F="a2c97b4c7bf5a46";async function O(a){const n=await U().postForm(`${$}/3/image`,{image:a},{headers:{Authorization:`Client-ID ${F}`}});return n.data.data.link}var I=t(7139);const j=a=>((0,i.dD)("data-v-329d6ca3"),a=a(),(0,i.Cn)(),a),q=j((()=>(0,i._)("label",{for:"image-link-input"},"Image",-1))),E=j((()=>(0,i._)("label",{class:"file-label",for:"upload-image-input"},"Upload",-1))),T=j((()=>(0,i._)("label",{for:"name-input"},"Name",-1))),P=j((()=>(0,i._)("label",null,"Rating",-1))),S=["onClick"],z=j((()=>(0,i._)("label",{for:"price-input"},"Price",-1))),A=j((()=>(0,i._)("label",{for:"spicy-checkbox"},[(0,i._)("span",{class:"mdi mdi-chili-mild"}),(0,i.Uk)(" Spicy ")],-1))),H=j((()=>(0,i._)("label",{for:"vegetarian-checkbox"},[(0,i._)("span",{class:"mdi mdi-leaf"}),(0,i.Uk)(" Vegetarian ")],-1))),Y=j((()=>(0,i._)("button",{type:"reset"},"Reset",-1)));function Z(a,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("form",{class:"food-rating-form",onInput:n[10]||(n[10]=n=>a.$emit("update:modelValue",r.formData)),onReset:n[11]||(n[11]=(...a)=>l.reset&&l.reset(...a))},[(0,i._)("div",null,[q,(0,i.wy)((0,i._)("input",{id:"image-link-input",type:"url","onUpdate:modelValue":n[0]||(n[0]=a=>r.formData.imageLink=a)},null,512),[[e.nr,r.formData.imageLink]]),(0,i._)("span",{class:"mdi mdi-close clear-button",onClick:n[1]||(n[1]=n=>a.clearField("imageLink"))}),E,(0,i._)("input",{id:"upload-image-input",class:"file-input",type:"file",accept:"image/*",onInput:n[2]||(n[2]=(...a)=>l.uploadImage&&l.uploadImage(...a))},null,32),(0,i.wy)((0,i._)("input",{id:"image-link-input",type:"url","onUpdate:modelValue":n[3]||(n[3]=a=>r.formData.imageLink=a)},null,512),[[e.nr,r.formData.imageLink]])]),(0,i._)("div",null,[T,(0,i.wy)((0,i._)("input",{id:"name-input",type:"text","onUpdate:modelValue":n[4]||(n[4]=a=>r.formData.name=a),required:""},null,512),[[e.nr,r.formData.name,void 0,{trim:!0}]])]),(0,i._)("div",null,[P,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(5,(a=>(0,i._)("span",{key:`rating-star-${a}`,class:"mdi mdi-star rating-star",style:(0,I.j5)({color:r.formData.rating>=a?"darkorange":"black"}),onClick:n=>r.formData.rating=a},null,12,S))),64))]),(0,i._)("div",null,[z,(0,i.wy)((0,i._)("input",{id:"price-input",type:"number","onUpdate:modelValue":n[5]||(n[5]=a=>r.formData.price=a),min:"0"},null,512),[[e.nr,r.formData.price,void 0,{number:!0}]])]),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{id:"spicy-checkbox",type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=a=>r.formData.spicy=a)},null,512),[[e.e8,r.formData.spicy]]),A,(0,i.wy)((0,i._)("input",{id:"vegetarian-checkbox",type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=a=>r.formData.vegetarian=a)},null,512),[[e.e8,r.formData.vegetarian]]),H]),(0,i._)("div",null,[Y,(0,i._)("button",{onClick:[n[8]||(n[8]=(...a)=>l.setExample&&l.setExample(...a)),n[9]||(n[9]=(0,e.iM)((()=>{}),["prevent"]))]},"Example")])],32)}class B{constructor(a,n,t="star",e,i=!1,o=!1,r){this.name=a,this.rating=n,this.ratingStyle=t,this.price=e,this.spicy=i,this.vegetarian=o,this.imageLink=r}}function K(){return new B("Cheeseburger",3,"star",100,!1,!1,"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop")}var M={name:"FoodRatingForm",props:{modelValue:B},data(){return{formData:this.modelValue}},methods:{async uploadImage(a){const n=a.target.files[0];this.formData.imageLink=await O(n),this.$emit("update:modelValue",this.formData)},reset(){this.formData=new B,this.$emit("update:modelValue",this.formData)},setExample(){this.formData=K(),this.$emit("update:modelValue",this.formData)}}},W=t(89);const N=(0,W.Z)(M,[["render",Z],["__scopeId","data-v-329d6ca3"]]);var G=N;const J={class:"food-rating-card"},Q=["src","alt"],X={key:0,class:"food-info"},aa={key:0,class:"mdi mdi-chili-mild"},na={key:1,class:"mdi mdi-leaf"},ta={key:2},ea={key:0};function ia(a,n,e,o,r,l){return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("img",{src:e.foodRating.imageLink||t(5873),alt:`${e.foodRating.name}`},null,8,Q),e.foodRating.name||e.foodRating.rating?((0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("h4",null,[e.foodRating.spicy?((0,i.wg)(),(0,i.iD)("span",aa)):(0,i.kq)("",!0),e.foodRating.vegetarian?((0,i.wg)(),(0,i.iD)("span",na)):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,I.zw)(e.foodRating.name)+" ",1),void 0!==e.foodRating.price?((0,i.wg)(),(0,i.iD)("span",ta," - $"+(0,I.zw)(e.foodRating.price),1)):(0,i.kq)("",!0)]),void 0!==e.foodRating.rating?((0,i.wg)(),(0,i.iD)("div",ea,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(5,(a=>(0,i._)("span",{key:`rating-star-${a}`,class:"mdi mdi-star",style:(0,I.j5)({color:e.foodRating.rating>=a?"darkorange":"black"})},null,4))),64))])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])}var oa={name:"FoodRatingCard",props:{foodRating:B}};const ra=(0,W.Z)(oa,[["render",ia],["__scopeId","data-v-1f44bd48"]]);var la=ra,da={name:"App",components:{FoodRatingCard:la,FoodRatingForm:G},data(){return{foodRating:new B,generatedLink:""}},methods:{async downloadRatingCard(){const a=this.$refs["new-rating-card"].$el,n=await x().toBlob(a);(0,L.saveAs)(n,`${this.foodRating.name}.png`)},async uploadRatingCard(){const a=this.$refs["new-rating-card"].$el,n=await x().toBlob(a);this.generatedLink=await O(n)},copyLinkToClipboard(){navigator.clipboard.writeText(this.generatedLink)}}};const sa=(0,W.Z)(da,[["render",R],["__scopeId","data-v-a149dc96"]]);var ca=sa;(0,e.ri)(ca).mount("#app")},5873:function(a,n,t){a.exports=t.p+"img/food-placeholder.3880c781.png"}},n={};function t(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return a[e].call(o.exports,o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(n,e,i,o){if(!e){var r=1/0;for(c=0;c<a.length;c++){e=a[c][0],i=a[c][1],o=a[c][2];for(var l=!0,d=0;d<e.length;d++)(!1&o||r>=o)&&Object.keys(t.O).every((function(a){return t.O[a](e[d])}))?e.splice(d--,1):(l=!1,o<r&&(r=o));if(l){a.splice(c--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[e,i,o]}}(),function(){t.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(n,{a:n}),n}}(),function(){t.d=function(a,n){for(var e in n)t.o(n,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){t.p="/food-rating-card/"}(),function(){var a={143:0};t.O.j=function(n){return 0===a[n]};var n=function(n,e){var i,o,r=e[0],l=e[1],d=e[2],s=0;if(r.some((function(n){return 0!==a[n]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(d)var c=d(t)}for(n&&n(e);s<r.length;s++)o=r[s],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(c)},e=self["webpackChunkfood_rating_card"]=self["webpackChunkfood_rating_card"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(9427)}));e=t.O(e)})();
//# sourceMappingURL=app.7aaff73d.js.map