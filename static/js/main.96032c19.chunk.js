(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(t,e,a){t.exports={Options:"Options_Options__31027",Legend:"Options_Legend__2VjLf"}},14:function(t,e,a){t.exports={Container:"App_Container__3ms13"}},20:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a.n(r),s=a(13),i=a.n(s),o=(a(20),a(7)),c=a(15),u=a(3),l=a(4),p=a(6),d=a(5),h=a(1),b=a.n(h),j=a(8),f=a(11),v=a.n(f),O=48;function x(t){return new Promise((function(e){return setTimeout(e,t)}))}function m(t){for(var e={},a=0;a<t.length;a++)for(var r=0;r<t[a].length;r++){var n=a*O+r;e[n]=[],t[a][r]<3&&(0<=a-1&&(t[a-1][r]&&2!=t[a-1][r]||e[n].push((a-1)*O+r)),0<=r-1&&(t[a][r-1]&&2!=t[a][r-1]||e[n].push(a*O+(r-1))),r+1<O&&(t[a][r+1]&&2!=t[a][r+1]||e[n].push(a*O+(r+1))),a+1<32&&(t[a+1][r]&&2!=t[a+1][r]||e[n].push((a+1)*O+r)))}return e}function g(t,e){var a=t/O,r=t%O,n=e/O,s=e%O;return Math.ceil(Math.sqrt(Math.pow(n-a,2)+Math.pow(s-r,2)))}function w(t,e){var a=t/O,r=t%O,n=e/O,s=e%O;return Math.abs(n-a)+Math.abs(s-r)}function y(){return(y=Object(j.a)(b.a.mark((function t(e,a,r){var n,s,i,c,u,l,p,d,h,j,f,v;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=m(e.matrix),s=[],i=new Set,c=e.start.row*O+e.start.col,u=e.goal.row*O+e.goal.col,l=(new Date).getTime(),s.push([c]);case 7:if(!s.length){t.next=22;break}if(p=JSON.parse(JSON.stringify(s.shift())),d=p[p.length-1],!(r.iterate&&0!=r.count&&r.count<p.length-1)){t.next=12;break}return t.abrupt("break",22);case 12:if(d!=u){t.next=14;break}return t.abrupt("return",{path:p,visited:i,duration:((new Date).getTime()-l)/1e3});case 14:if(!i.has(d)){h=Object(o.a)(n[d]||[]);try{for(h.s();!(j=h.n()).done;)f=j.value,i.has(f)||((v=JSON.parse(JSON.stringify(p))).push(f),s.push(v))}catch(b){h.e(b)}finally{h.f()}}if(i.add(d),!r.iterate){t.next=20;break}return t.next=19,x(1);case 19:a({path:p,visited:i,duration:((new Date).getTime()-l)/1e3});case 20:t.next=7;break;case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(b.a.mark((function t(e,a,r){var n,s,i,c,u,l,p,d,h,j,f,v;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=m(e.matrix),s=[],i=new Set,c=e.start.row*O+e.start.col,u=e.goal.row*O+e.goal.col,l=(new Date).getTime(),s.push([c]);case 7:if(!s.length){t.next=22;break}if(p=JSON.parse(JSON.stringify(s.pop())),d=p[p.length-1],!(r.iterate&&0!=r.count&&r.count<p.length-1)){t.next=12;break}return t.abrupt("break",22);case 12:if(d!=u){t.next=14;break}return t.abrupt("return",{path:p,visited:i,duration:((new Date).getTime()-l)/1e3});case 14:if(!i.has(d)){h=Object(o.a)(n[d]||[]);try{for(h.s();!(j=h.n()).done;)f=j.value,i.has(f)||((v=JSON.parse(JSON.stringify(p))).push(f),s.push(v))}catch(b){h.e(b)}finally{h.f()}}if(i.add(d),!r.iterate){t.next=20;break}return t.next=19,x(1);case 19:a({path:p,visited:i,duration:((new Date).getTime()-l)/1e3});case 20:t.next=7;break;case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(b.a.mark((function t(e,a,r){var n,s,i,c,u,l,p,d,h,j,f,w;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new v.a({comparator:function(t,e){return-(e.remaining-t.remaining)}}),s=new Set,i=m(e.matrix),c=e.start.row*O+e.start.col,u=e.goal.row*O+e.goal.col,l=(new Date).getTime(),n.queue({path:[c],remaining:g(c,u)});case 7:if(!n.length){t.next=22;break}if(p=n.dequeue(),d=p.path[p.path.length-1],!(r.iterate&&0!=r.count&&r.count<p.path.length-1)){t.next=12;break}return t.abrupt("break",22);case 12:if(d!=u){t.next=14;break}return t.abrupt("return",{path:p.path,visited:s,duration:((new Date).getTime()-l)/1e3});case 14:if(!s.has(d)){h=Object(o.a)(i[d]||[]);try{for(h.s();!(j=h.n()).done;)f=j.value,s.has(f)||((w=JSON.parse(JSON.stringify(p.path))).push(f),n.queue({path:w,remaining:g(f,u)}))}catch(b){h.e(b)}finally{h.f()}}if(s.add(d),!r.iterate){t.next=20;break}return t.next=19,x();case 19:a({path:p.path,visited:s,duration:((new Date).getTime()-l)/1e3});case 20:t.next=7;break;case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t,e,a,r){return M.apply(this,arguments)}function M(){return(M=Object(j.a)(b.a.mark((function t(e,a,r,n){var s,i,c,u,l,p,d,h,j,f,y,S,k;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=new v.a({comparator:function(t,e){return-(e.g+e.h-(t.g+t.h))}}),i=m(e.matrix),c=e.start.row*O+e.start.col,u=e.goal.row*O+e.goal.col,l=new Set,p=(new Date).getTime(),d=n?w:g,s.queue({path:[c],g:1,h:d(c,u)});case 8:if(!s.length){t.next=23;break}if(h=s.dequeue(),j=h.path[h.path.length-1],!(r.iterate&&0!=r.count&&r.count<h.path.length-1)){t.next=13;break}return t.abrupt("break",23);case 13:if(j!=u){t.next=15;break}return t.abrupt("return",{path:h.path,visited:l,duration:((new Date).getTime()-p)/1e3});case 15:if(!l.has(j)){f=Object(o.a)(i[j]||[]);try{for(f.s();!(y=f.n()).done;)S=y.value,l.has(S)||((k=JSON.parse(JSON.stringify(h.path))).push(S),s.queue({path:k,g:k.length,h:d(S,u)}))}catch(b){f.e(b)}finally{f.f()}}if(l.add(j),!r.iterate){t.next=21;break}return t.next=20,x();case 20:a({path:h.path,visited:l,duration:((new Date).getTime()-p)/1e3});case 21:t.next=8;break;case 23:return t.abrupt("return",!1);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(j.a)(b.a.mark((function t(e,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",C(e,a,r,!1));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=Object(j.a)(b.a.mark((function t(e,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",C(e,a,r,!0));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=function(t,e,a){return y.apply(this,arguments)},_=function(t,e,a){return S.apply(this,arguments)},D=function(t,e,a){return k.apply(this,arguments)},I=function(t,e,a){return N.apply(this,arguments)},R=function(t,e,a){return J.apply(this,arguments)},q=a(9),A=a.n(q),G=a(0),L=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(G.jsx)("div",{className:A.a.Col,children:Object(G.jsx)("div",{style:{backgroundColor:["white","green","red","black","orange","cyan"][this.props.data],borderRadius:1==this.props.data||2==this.props.data?"50%":void 0},onClick:function(){t.props.edit(t.props.rid,t.props.cid,!1)},onMouseEnter:function(e){e.ctrlKey&&t.props.edit(t.props.rid,t.props.cid,!0)}})})}}]),a}(n.a.Component),E=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(G.jsx)("div",{className:A.a.Row,children:this.props.data&&Array.isArray(this.props.data)?this.props.data.map((function(e,a){return Object(G.jsx)(L,{edit:t.props.edit,rid:t.props.rid,cid:a,data:e},a)})):null})}}]),a}(n.a.Component),F=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(G.jsx)("div",{className:A.a.Map,children:(this.props.data.matrix||[[]]).map((function(e,a){return Object(G.jsx)(E,{edit:t.props.edit,rid:a,data:e},a)}))})}}]),a}(n.a.Component),V=a(12),z=a.n(V),B=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(u.a)(this,a),(r=e.call(this,t)).state={count:0},r.alertStyle={borderColor:"crimson",backgroundColor:"red",color:"white"},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(G.jsx)("div",{className:z.a.Options,children:Object(G.jsxs)("form",{onSubmit:function(t){return t.preventDefault()},children:[Object(G.jsxs)("fieldset",{children:[Object(G.jsx)("legend",{children:"Edit"}),Object(G.jsx)("div",{children:Object(G.jsxs)("select",{name:"edit",value:this.props.type,onChange:this.props.editChange,children:[Object(G.jsx)("option",{value:"1",children:"Select Start"}),Object(G.jsx)("option",{value:"2",children:"Select Goal"}),Object(G.jsx)("option",{value:"3",children:"Add Obstacle"}),Object(G.jsx)("option",{value:"0",children:"Remove"})]})}),Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:(this.props.functions||{}).generate,children:"Generate"}),Object(G.jsx)("button",{onClick:(this.props.functions||{}).clear,disabled:this.props.solved,children:"Clear"})]}),Object(G.jsx)("div",{children:Object(G.jsxs)("small",{children:[Object(G.jsx)("b",{children:"Tip:"})," hold ",Object(G.jsx)("code",{children:Object(G.jsx)("b",{children:"CTRL"})})," while moving the mouse for continuous paint"]})})]}),Object(G.jsxs)("fieldset",{children:[Object(G.jsx)("legend",{children:"Solve"}),Object(G.jsx)("div",{children:Object(G.jsxs)("select",{name:"method",onChange:this.props.methodChange,children:[Object(G.jsx)("option",{value:"0",children:"BFS"}),Object(G.jsx)("option",{value:"1",children:"DFS"}),Object(G.jsx)("option",{value:"2",children:"Greedy Best First"}),Object(G.jsx)("option",{value:"3",children:"A* Euclidean"}),Object(G.jsx)("option",{value:"4",children:"A* Manhattan"})]})}),Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:(this.props.functions||{}).solve,disabled:this.props.solved,children:"Solve"}),Object(G.jsx)("button",{onClick:(this.props.functions||{}).reset,style:this.props.iterator?this.alertStyle:void 0,children:"Reset"})]}),Object(G.jsx)("div",{hidden:!this.props.iterator,children:Object(G.jsxs)("small",{children:[Object(G.jsx)("b",{children:"Caution:"})," the ",Object(G.jsx)("code",{children:Object(G.jsx)("b",{children:"Reset"})})," button will resfresh the page while iterating"]})}),Object(G.jsx)("div",{children:Object(G.jsx)("input",{type:"number",min:"0",value:this.state.count,onChange:function(e){return t.setState({count:e.target.value||0})}})}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{onClick:function(){t.props.iterator?(t.props.functions||{}).stop():(t.props.functions||{}).iterate(t.state.count)},disabled:this.props.solved,children:"Iterate"})}),Object(G.jsx)("div",{children:Object(G.jsxs)("small",{children:[Object(G.jsx)("b",{children:"Tip:"})," This parameter limits the depth. ",Object(G.jsx)("code",{children:Object(G.jsx)("b",{children:"0"})})," is unlimited."]})})]}),Object(G.jsxs)("fieldset",{children:[Object(G.jsx)("legend",{children:"Stats"}),Object(G.jsxs)("div",{children:["Cost: ",this.props.stats.cost]}),Object(G.jsxs)("div",{children:["Visited: ",this.props.stats.visited]}),Object(G.jsxs)("div",{children:["Duration: ",this.props.stats.duration]})]}),Object(G.jsxs)("fieldset",{className:z.a.Legend,children:[Object(G.jsx)("legend",{children:"Legend"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{borderRadius:"50%",backgroundColor:"green"}})," Start"]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{borderRadius:"50%",backgroundColor:"red"}})," Goal"]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{backgroundColor:"black"}})," Obstacle"]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{backgroundColor:"cyan"}})," Path"]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{backgroundColor:"orange"}})," Visited"]})]})]})})}}]),a}(n.a.Component),P=a(14),H=a.n(P),K=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(u.a)(this,a),(r=e.call(this,t)).state={map:{matrix:[[]],start:{row:-1,col:-1},goal:{row:-1,col:-1}},stats:{cost:0,visited:0,duration:0},rows:32,cols:48,method:0,edit:1,iterate:!1,stop:!1,solved:!1},r.generate=function(){for(var t=r.state.rows,e=r.state.cols,a=[],n={row:-1,col:-1},s={row:-1,col:-1},i=0;i<t;i++){for(var o=[],c=0;c<e;c++)parseInt(100*Math.random())<20?o.push(3):o.push(0);a.push(o)}for(;-1==n.row||-1==n.col;){var u=parseInt(Math.random()*t),l=parseInt(Math.random()*e);0==a[u][l]&&(n={row:u,col:l},a[u][l]=1)}for(;-1==s.row||-1==s.col;){var p=parseInt(Math.random()*t),d=parseInt(Math.random()*e);0==a[p][d]&&(s={row:p,col:d},a[p][d]=2)}return{start:n,goal:s,matrix:a}},r.edit=function(t,e){var a=Object(c.a)({},r.state.map),n=r.state.map.start,s=r.state.map.goal;if(a.matrix=JSON.parse(JSON.stringify(r.state.map.matrix)),1==r.state.edit){var i=r.state.map.start.row,o=r.state.map.start.col;-1==i&&-1==o||(a.matrix[i][o]=0),a.start={row:t,col:e}}else if(2==r.state.edit){var u=r.state.map.goal.row,l=r.state.map.goal.col;-1==u&&-1==l||(a.matrix[u][l]=0),a.goal={row:t,col:e}}n[0]==t&&n[1]==e&&1!=r.state.edit?a.start={row:-1,col:-1}:s[0]==t&&s[1]==e&&2!=r.state.edit&&(a.goal={row:-1,col:-1}),a.matrix[t][e]=parseInt(r.state.edit),r.setState({map:a})},r.editChange=function(t){r.setState({edit:t.target.value})},r.methodChange=function(t){r.setState({method:t.target.value})},r.updateMap=function(t){if(t){var e=JSON.parse(JSON.stringify(r.state.map));if(t.visited.size){var a,n=Object(o.a)(t.visited);try{for(n.s();!(a=n.n()).done;){var s=a.value;e.matrix[parseInt(s/48)][s%48]=4}}catch(l){n.e(l)}finally{n.f()}}var i,c=Object(o.a)(t.path);try{for(c.s();!(i=c.n()).done;){var u=i.value;e.matrix[parseInt(u/48)][u%48]=5}}catch(l){c.e(l)}finally{c.f()}e.matrix[e.start.row][e.start.col]=1,e.matrix[e.goal.row][e.goal.col]=2,r.setState({map:e})}else alert("No solution found")},r.selectMethod=function(){switch(parseInt(r.state.method)){case 0:return T;case 1:return _;case 2:return D;case 3:return I;case 4:return R}},r.actions={reset:function(){if(r.state.iterator)window.location.reload();else{for(var t=JSON.parse(JSON.stringify(r.state.map)),e=0;e<t.matrix.length;e++)for(var a=0;a<t.matrix[e].length;a++)3<t.matrix[e][a]&&(t.matrix[e][a]=0);r.setState({map:t,iterator:!1,solved:!1},(function(){r.updateMap({path:[],visited:new Set,duration:0})}))}},iterate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=r.state.map.start.row<0||r.state.map.start.col<0||r.state.map.goal.row<0||r.state.map.goal.col<0;if(e)alert("Invalid Start/Goal");else{var a=r.selectMethod();r.setState({iterator:!0,solved:!0},(function(){a(r.state.map,r.updateMap,{iterate:!0,count:t}).then((function(t){r.updateMap(t),r.setState({iterator:!1,stats:{cost:t.path&&t.path.length-1,visited:t.visited&&t.visited.size,duration:t.duration}})}))}))}},solve:function(){if(r.state.map.start.row<0||r.state.map.start.col<0||r.state.map.goal.row<0||r.state.map.goal.col<0)alert("Invalid Start/Goal");else{var t=r.selectMethod(),e=JSON.parse(JSON.stringify(r.state.map));r.setState({solved:!0},(function(){t(e,(function(){}),{iterate:!1}).then((function(t){r.updateMap(t),t.path&&t.visited&&r.setState({stats:{cost:t.path&&t.path.length-1,visited:t.visited&&t.visited.size,duration:t.duration}})}))}))}},stop:function(){r.setState({stop:!0})},clear:function(){for(var t=[],e=0;e<r.state.rows;e++){for(var a=[],n=0;n<r.state.cols;n++)a.push(0);t.push(a)}r.setState({map:{matrix:t,start:{row:-1,col:-1},goal:{row:-1,col:-1}}})},generate:function(){r.state.iterator?window.location.reload():r.setState({map:r.generate()})}},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({map:this.generate()})}},{key:"render",value:function(){return Object(G.jsxs)("div",{className:H.a.Container,children:[Object(G.jsx)(F,{data:this.state.map,edit:this.edit}),Object(G.jsx)(B,{editChange:this.editChange,methodChange:this.methodChange,functions:this.actions,add:3==this.state.edit,iterator:this.state.iterator,solved:this.state.solved,stats:this.state.stats})]})}}]),a}(n.a.Component);i.a.render(Object(G.jsx)(n.a.StrictMode,{children:Object(G.jsx)(K,{})}),document.getElementById("root"))},9:function(t,e,a){t.exports={Map:"Map_Map__ww6Hp",Row:"Map_Row__3nmIF",Col:"Map_Col__1Tc1V"}}},[[23,1,2]]]);
//# sourceMappingURL=main.96032c19.chunk.js.map