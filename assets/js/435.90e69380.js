(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{2089:function(t,e,i){"use strict";i.r(e);var n={name:"DocImage",props:["src","alt","width","height"],data:function(){return{imageLoaded:!1,parentWidth:null}},mounted:function(){this.hasDimensions&&(this.determineParentWidth(),window.addEventListener("resize",this.determineParentWidth))},destroyed:function(){window.removeEventListener("resize",this.determineParentWidth)},computed:{hasDimensions:function(){return Boolean(this.width&&this.height)},forcedDimensions:function(){if(!this.hasDimensions||this.imageLoaded||!this.parentWidth)return null;var t=Math.min(this.parentWidth,this.width),e=Math.min(this.height,this.height*(this.parentWidth/this.width));return{width:"".concat(t.toFixed(2),"px"),height:"".concat(e.toFixed(2),"px")}}},methods:{handleImageLoad:function(){this.imageLoaded=!0,window.removeEventListener("resize",this.determineParentWidth)},determineParentWidth:function(){this.parentWidth=this.$el.parentElement.getBoundingClientRect().width}}},h=i(0),s=Object(h.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("img",{style:this.forcedDimensions,attrs:{src:this.src,alt:this.alt},on:{load:this.handleImageLoad}})}),[],!1,null,null,null);e.default=s.exports}}]);