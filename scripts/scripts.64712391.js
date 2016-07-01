"use strict";function colorBar(){function a(a){a.each(function(){function a(a,b,c,d,e){var f,g=l(b,c),h=e/2,i=[b[0]+g[0]*h,b[1]+g[1]*h],j=[c[0]+g[0]*h,c[1]+g[1]*h],m=[c[0]-g[0]*h,c[1]-g[1]*h],n=[b[0]-g[0]*h,b[1]-g[1]*h];if(a){var o=l(a,b);f=[b[0]+o[0]+g[0],b[1]+o[1]+g[1]],i=k(b,f,i,j),n=k(b,f,n,m)}if(d){var p=l(c,d);f=[c[0]+p[0]+g[0],c[1]+p[1]+g[1]],j=k(c,f,i,j),m=k(c,f,n,m)}return"M"+i+"L"+j+" "+m+" "+n+"Z"}function k(a,b,c,d){var e=c[0],f=a[0],g=d[0]-e,h=b[0]-f,i=c[1],j=a[1],k=d[1]-i,l=b[1]-j,m=(h*(i-j)-l*(e-f))/(l*g-h*k);return[e+m*g,i+m*k]}function l(a,b){var c=a[1]-b[1],d=b[0]-a[0],e=Math.sqrt(c*c+d*d);return[c/e,d/e]}function m(a,b){var c=document.createElementNS(d3.ns.prefix.svg,"path");c.setAttribute("d",a),o=c.getTotalLength();for(var d=[0],e=0;(e+=b)<o;)d.push(e);return d.push(o),d.map(function(a){var b=c.getPointAtLength(a),d=[b.x,b.y];return d.t=a/o,d})}function n(a){return d3.range(a.length-1).map(function(b){var c=[a[b-1],a[b],a[b+1],a[b+2]];return c.t=(a[b].t+a[b+1].t)/2,c})}var o,p=d3.select(this),q=c||e,r=b||("left"===d||"right"===d?[[0,f],[0,0]]:[[f,0],[0,0]]),s=n(m(i(r),j)),t=r?o:f,u=h.copy().interpolate(d3.interpolate).domain(h.domain()).range([t,0]),v=h.domain(),w=h.copy().domain(h.domain().map(function(a){return(a-v[0])/(v[1]-v[0])})),x=this.__lineWidth__||e,y=this.__quads__||s;this.__quads__=s,this.__lineWidth__=e;var z=p.selectAll("path.c").data(d3.range(s.length),function(a){return a}),A=z.enter().insert("path","g.axis").classed("c",!0),B=d3.transition(z.exit()).remove(),C=d3.transition(z),D=function(b,c,d){b.style("fill",function(a){return w(c(a).t)}).style("stroke",function(a){return w(c(a).t)}).attr("d",function(b){var e=c(b);return a(e[0],e[1],e[2],e[3],d)})};A.call(D,function(a){return y[y.length-1]},x),B.call(D,function(a){return s[s.length-1]},e),C.call(D,function(a){return s[a]},e);var E=d3.svg.axis().scale(u).orient(d).tickSize(q).tickFormat(g),F=p.selectAll("g.axis").data(function(a){return u?[1]:[]}),G=F.enter().append("g").classed("axis",!0),H=d3.transition(F.exit()).remove(),I=d3.transition(F).call(E),J=function(a,b){a.attr("transform","translate("+("right"===d||"left"===d?-b/2:0)+","+("right"===d||"left"===d?0:b/2)+")")};G.call(J,x),H.call(J,e),I.call(J,e)})}var b,c,d="right",e=40,f=300,g=d3.format("3e"),h=d3.scale.linear().domain([0,.5,1]).range(["blue","green","red"]),i=d3.svg.line().interpolate("basis"),j=8;return a.orient=function(b){return arguments.length?(d=b,a):d},a.lineWidth=function(b){return arguments.length?(e=b,a):e},a.size=function(b){return arguments.length?(f=b,a):f},a.tickFormat=function(b){return arguments.length?(g=b,a):g},a.tickSize=function(b){return arguments.length?(c=b,a):c},a.color=function(b){return arguments.length?(h=b,a):h},a.precision=function(b){return arguments.length?(j=b,a):j},a.points=function(c){return arguments.length?(b=c,a):b},a.line=function(b){return arguments.length?(i=b,a):i},a}angular.module("frontendApp",["oitozero.ngSweetAlert","angular.filter","colorpicker.module","picardy.fontawesome","mm.foundation","angulartics","angulartics.google.analytics","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/:dataset",{templateUrl:"views/tree.html",controller:"TreeController"}).otherwise({redirectTo:"/affinity"})}]),angular.module("frontendApp").controller("NavController",["$scope","$modal","dataService","SweetAlert",function(a,b,c,d){a.dataService=c,a.currentSearch="",a.getInfo=function(a,b){a.stopPropagation(),d.swal({title:b,html:c.metadata[b],allowOutsideClick:!0})},a.select=function(a){c.model.selected=a,console.log(c.model.selected)},a.openSettings=function(){b.open({templateUrl:"views/settings.html",controller:"SettingsCtrl"})},a.openInfo=function(){b.open({templateUrl:"views/info.html",controller:"InfoCtrl"})}}]),angular.module("frontendApp").directive("chemTree",function(){function a(a,b){function c(a){function b(a){return a.children&&(a.size=a.children.reduce(function(a,c){return a+b(c)},0)),c.push(a),a.size}var c=[];return a.size=b(a),c}function d(){r.attr("x1",function(a){return g(a.source.x)}).attr("y1",function(a){return h(a.source.y)}).attr("x2",function(a){return g(a.target.x)}).attr("y2",function(a){return h(a.target.y)}),s.attr("cx",function(a){return g(a.x)}).attr("cy",function(a){return h(a.y)})}function e(b){var c,d;"SLogP"===a.circleBorderType?(m=k,d=colorBar().color(m).size(350).lineWidth(20).precision(4).tickFormat(d3.format("g"))):"Lig_Eff"===a.circleBorderType?(m=l,d=colorBar().color(m).size(350).lineWidth(20).precision(4).tickFormat(d3.format("g"))):(c=d3.extent(b,function(a){return"B"===a.name[0]?a.stroke:void 0}),m=d3.scale.linear().domain([c[0],d3.mean(c),c[1]]).range(["#008000","#FFFF00","#FF0000"])),"None"===a.circleBorderType?(d3.select(".barB").style("visibility","hidden"),d3.select(".colorbarB").style("visibility","hidden")):(d3.select(".barB").style("visibility","visible"),d3.select(".colorbarB").style("visibility","visible"),d3.select(".barBtext").text(a.circleBorderType),d3.select(".colorbarB").call(d))}function f(a){var b=d3.scale.linear().domain([0,.5]).range([5,100]);p=d3.layout.force().charge(function(a){return a._children?100*-a.size:-50}).linkDistance(function(a){return b(Number(a.target.dist))}).size([.7*window.innerWidth/2,window.innerHeight/2]);var c=d3.layout.tree().links(a);p.nodes(a).links(c),p.on("tick",d),p.start()}var g,h,i,j,k,l,m,n,o,p,q,r,s,t=b[0],u=d3.select(t).append("svg").attr({"class":"viz"});u.on("click",function(){d3.event.defaultPrevented||(a.selected=null,a.$apply())});var v=u.append("g");d3.selectAll(".viz").append("g").append("svg").attr("x","80").attr("y","100").append("g").attr("transform","translate(0, 11)").classed("colorbarA",!0);var w=d3.selectAll(".viz").append("g").append("svg").attr("x","20").attr("y","100").append("g").attr("transform","translate(0, 11)").classed("barB",!0);w.append("text").classed("barBtext",!0),w.append("g").attr("transform","translate(0, 10)").classed("colorbarB",!0),i=d3.scale.linear().domain([4,9]).clamp(!0).range(["hsl(300,80%,50%)","hsl(0,80%,50%)"]).interpolate(d3.interpolateString),k=d3.scale.linear().domain([5,-5]).clamp(!0).range(["hsl(300,80%,50%)","hsl(0,80%,50%)"]).interpolate(d3.interpolateString),l=d3.scale.linear().domain([0,.5]).clamp(!0).range(["hsl(300,80%,50%)","hsl(0,80%,50%)"]).interpolate(d3.interpolateString);var x=colorBar().color(i).size(350).lineWidth(20).precision(4).tickFormat(d3.format("g"));d3.select(".colorbarA").insert("text",":first-child").text("Activity"),d3.select(".colorbarA").append("g").attr("transform","translate(0, 10)").call(x),a.$watch("forceAct.value",function(a){console.log("new force act"),console.log(a),void 0!==a&&(a?f(q):p&&(p.stop(),p=null))}),a.$watch("treeType",function(b){function k(){d3.event.sourceEvent.stopPropagation(),d3.select(this).classed("dragged",!0)}function l(a){var b=d3.mouse(v.node());a.x=g.invert(b[0]),a.y=h.invert(b[1]),d()}function t(){d3.select(this).classed("dragging",!1)}function w(){var a=d3.layout.tree().links(q);s=v.selectAll("circle").data(q,function(a){return a.name}),s.enter().append("svg:circle").attr("class","node").attr("cx",function(a){return g(a.x)}).attr("cy",function(a){return h(a.y)}).attr("r",function(a){return a.children?2:o(a.r)}).style("fill",j).style("stroke",n).style("stroke-width",function(a){return a.strokeWidth}).call(z).append("svg:title").text(function(a){return a.name}),s.filter(function(a){return"B"===a.name[0]?this:null}).attr("cx",function(a){return g(a.x)}).attr("cy",function(a){return h(a.y)}),s.filter(function(a){return"B"===a.name[0]?null:this}).attr("cx",function(a){return g(a.x)}).attr("cy",function(a){return h(a.y)}),s.exit().remove(),r=v.selectAll("line").data(a,function(a){return a.target.name}),r.attr("x1",function(a){return g(a.source.x)}).attr("y1",function(a){return h(a.source.y)}).attr("x2",function(a){return g(a.target.x)}).attr("y2",function(a){return h(a.target.y)}),r.enter().insert("svg:line",".node").attr("class","link").attr("x1",function(a){return g(a.source.x)}).attr("y1",function(a){return h(a.source.y)}).attr("x2",function(a){return g(a.target.x)}).attr("y2",function(a){return h(a.target.y)}).style("stroke","#D3D3D3").style("stroke-width","5px"),r.exit().remove()}function x(){d()}if(void 0!==b&&void 0!==a.data){var y=a.data.trees[b];q=c(y),g=d3.scale.linear().domain(d3.extent(q,function(a){return a.x})).range([.1*window.innerWidth,.9*window.innerWidth]),h=d3.scale.linear().domain(d3.extent(q,function(a){return a.y})).range([.1*window.innerHeight,.9*window.innerHeight]),o=d3.scale.linear().domain(d3.extent(q,function(a){return a.r})).range([4,10]),e(q),j=function(a){return a._children?"#3182bd":a.children?"#D3D3D3":i(a.fill)},n=function(a){return a._children?"#CCC":a.children?"#D3D3D3":m(a.stroke)};var z=d3.behavior.drag().origin(function(a){return a}).on("dragstart",k).on("drag",l).on("dragend",t);w(),s.on("click",function(b){d3.event.defaultPrevented||(d3.event.preventDefault(),b===a.selected?a.selected=null:a.selected=a.data.compounds[parseInt(b.name.substring(1))],a.$apply())});var A=d3.behavior.zoom().scaleExtent([.1,10]).on("zoom",x);A.x(g).y(h),u.call(A),a.forceAct.value?f(q):p&&(p.stop(),p=null)}}),a.$watch("circleSizeType",function(b){if(void 0!==b&&void 0!==a.data){var c=d3.extent(q,function(a){return"B"===a.name[0]?a.r:void 0}),d=4,e=d3.scale.linear().domain(c).range([d,10]);s&&s.filter(function(a){return"B"===a.name[0]?this:null}).transition().delay(100).duration(750).attr("r",function(a){return c[0]===c[1]?d:e(a.r)})}}),a.$watch("circleBorderType",function(b){void 0!==b&&void 0!==a.data&&(e(q),s&&s.filter(function(a){return"B"===a.name[0]?this:null}).transition().delay(100).duration(750).style("stroke",function(a){return m(a.stroke)}).style("stroke-width",function(a){return a.strokeWidth}))}),a.$watch("activityType",function(b){void 0!==b&&void 0!==a.data&&s&&s.filter(function(a){return"B"===a.name[0]?this:null}).transition().delay(100).duration(750).style("fill",function(a){return i(a.fill)})}),a.$watch("gravityValue",function(b){void 0!==b&&void 0!==a.data&&(p.resume(),p.gravity(b))}),a.$watch("linkStrengthValue",function(b){void 0!==b&&void 0!==a.data&&(console.log("new linkStrength:"+b),p.linkStrength(b),p.resume(),a.$apply(),console.log("tree type is: ",a.treeType),console.log("setted linkStrength:"+p.linkStrength()))}),a.$watch("selected",function(b){void 0!==b&&void 0!==a.data&&(null===b?s.filter(function(a){return"B"===a.name[0]?this:null}).style("fill",function(a){return i(a.fill)}):s.filter(function(a){return"B"===a.name[0]?this:null}).style("fill",function(a){return a.name===b.id?"black":i(a.fill)}))})}return{restrict:"E",link:a,scope:{data:"=",current:"=",gravityValue:"=",linkStrengthValue:"=",treeType:"=",circleSizeType:"=",circleBorderType:"=",activityType:"=",selected:"=",forceAct:"="}}}),angular.module("frontendApp").factory("dataService",["$http","$q",function(a,b){var c={};return c.model={selected:null},c.data=null,c.available={treeTypes:[],circleSizeTypes:["None"],circleBorderTypes:["None"],activityTypes:[]},c.current={treeType:null,circleSizeType:null,circleBorderType:null,activityType:null},c.flatten=function(a){function b(a){return a.children&&(a.r=a.children.reduce(function(a,c){return a+b(c)},0)),c.push(a),a.size}var c=[];return a.size=b(a),c},c.setTreeType=function(a){console.log("Set Tree to "+a),c.current.treeType=a,this.setActivityType(this.current.activityType)},c.setCircleSizeType=function(a){console.log("Set circle size:"+a),this.current.circleSizeType=a;var b=this.data.trees[this.current.treeType],d=c.flatten(b);"None"===a?d.forEach(function(a){a.r=2}):d.forEach(function(b){b.name.lastIndexOf("B")===0&&(b.r=c.data.compounds[parseInt(b.name.substring(1))].properties[a])})},c.setCircleBorderType=function(a){console.log("Set circleBorderType:",a),c.current.circleBorderType=a;var b=this.data.trees[this.current.treeType],d=c.flatten(b);"None"===a?d.forEach(function(a){a.stroke=0,a.strokeWidth=0}):d.forEach(function(b){b.name.lastIndexOf("B")===0&&(b.stroke=c.data.compounds[parseInt(b.name.substring(1))].properties[a],b.strokeWidth=3)})},c.setActivityType=function(a){console.log("Set activity type:",a),c.current.activityType=a;var b=this.data.trees[this.current.treeType],d=c.flatten(b);d.forEach(function(b){b.name.lastIndexOf("B")===0&&(b.fill=c.data.compounds[parseInt(b.name.substring(1))].activities[a])})},c.empty=function(){return this.available.treeTypes.length=0,this.available.circleSizeTypes=["None"],this.available.circleBorderTypes=["None"],this.available.activityTypes.length=0,this.current.treeType=null,this.current.circleSizeType=null,this.current.circleBorderType=null,this.current.activityType=null,this},c.initializeData=function(){return this.empty(),this.metadata={},this.data.metadata.treeTypes.forEach(function(a){c.metadata[a.name]=a.metadata,c.available.treeTypes.push(a.name)}),this.setTreeType(this.available.treeTypes[0]),this.data.metadata.circleSizeTypes.forEach(function(a){c.metadata[a.name]=a.metadata,c.available.circleSizeTypes.push(a.name)}),this.setCircleSizeType(this.available.circleSizeTypes[0]),this.data.metadata.circleBorderTypes.forEach(function(a){c.metadata[a.name]=a.metadata,c.available.circleBorderTypes.push(a.name)}),this.setCircleBorderType(this.available.circleBorderTypes[0]),this.data.metadata.activityTypes.forEach(function(a){c.metadata[a.name]=a.metadata,c.available.activityTypes.push(a.name)}),this.setActivityType(this.available.activityTypes[0]),this},c.loadExample=function(d,e){var f=b.defer();return a.get("data/"+d+".json").then(function(a){return c.datasetName=d,c.data=a.data,c.initializeData(),f.resolve(a)}).then(e),f.promise},c}]),angular.module("frontendApp").controller("TreeController",["$scope","$routeParams","dataService","settings",function(a,b,c,d){a.datasetName=b.dataset,a.model=c.model,a.current=c.current,a.flatten=c.flatten,a.tooltip={visibility:!1},a.settings=d,a.$watch("model.selected",function(b){null===b?a.tooltip.visibility=!1:(a.tooltip.visibility=!0,a.tooltip.data={compound:!0,object:b,external:c.data.metadata.external})}),a.$watch("tooltip.visibility",function(b){b===!1&&(a.model.selected=null)}),a.select=function(b){a.model.selected=b},a.gravitySlider={min:0,max:.2,value:.1,id:"gravity",name:"Radius of Display",leftName:"Lager",rightName:"Smaller"},a.linkStrengthSlider={min:0,max:10,value:1,id:"linkstrength",name:"Compactness",leftName:"Looser",rightName:"Tight"},c.loadExample(b.dataset,function(){a.data=c.data})}]),angular.module("frontendApp").controller("SettingsCtrl",["$scope","$modalInstance","settings",function(a,b,c){a.forceAct=c.forceAct,a.reset=function(){a.forceAct.value=c.defaultForce.value},a.dismiss=function(){b.dismiss("cancel")}}]),angular.module("frontendApp").service("settings",function(){this.defaultForce={value:!1},this.forceAct={value:!1}}),angular.module("frontendApp").directive("tooltips",["dataService",function(a){return{scope:{visibility:"=",data:"=",height:"@",click:"="},templateUrl:"views/tooltip.html",restrict:"E",link:function(b,c){var d=$(c[0]);b.dataService=a,b.close=function(){b.visibility=!1},b.$watch("visibility",function(a){a?d.show(400):d.hide(400)})}}}]),angular.module("frontendApp").directive("treeSlider",function(){return{scope:{min:"=",max:"=",value:"=",leftName:"=",rightName:"=",name:"=",id:"="},templateUrl:"views/tree-slider.html",restrict:"E",link:function(a,b){var c=$('<div class="name section"></div>'),d=$('<div class="left section"></div>'),e=$('<span class="sm-label">left</span>'),f=$('<div class="right section"></div>'),g=$('<span class="sm-label">right</span>'),h=$('<div class="slider"  title="Please activate the force directed graph first."></div>'),i=b.find("div");$(i).append([c,h]),h.append([d,f]),g.appendTo(f),e.appendTo(d),c.text(a.name),g.text(a.rightName),e.text(a.leftName),h.slider({min:a.min,max:a.max,step:.01,value:a.value,slide:function(b,c){a.value=c.value,a.$apply()}})}}}),angular.module("frontendApp").controller("InfoCtrl",["$scope","$modalInstance",function(a,b){a.dismiss=function(){b.dismiss("cancel")}}]);