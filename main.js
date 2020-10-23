"use strict";

var app = new Vue({
  el: "#app",
  data: {
    message: "ogyu",
    isActive: false,
    notActive: true
  },
  methods: {
    change: function () {
      this.isActive = !this.isActive
      this.notActive = !this.notActive
    },
      // change2: function(){
      //   this.isNerf = !this.isNerf
      //   this.isActive = !this.isActive
      //   this.isHidden = !this.isHidden
      // },
    },
  })