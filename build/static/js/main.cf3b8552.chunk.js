(this.webpackJsonpreact_gallery=this.webpackJsonpreact_gallery||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(10),s=a(11),i=a(13),u=a(12),h=a(14),m=a(7),f=function(e){return r.a.createElement(m.a,null,r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/pink",onClick:function(){return e.onSearch("pink")}},"Pink")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/cars",onClick:function(){return e.onSearch("cars")}},"Cars")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/dancing",onClick:function(){return e.onSearch("dancing")}},"Dancing")))))},p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.searchText);var t=a.state.searchText,n="/search/".concat(t);a.props.history.push(n),e.currentTarget.reset()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.searchText),r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",onChange:this.onSearchChange,ref:function(t){return e.query=t},required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(r.a.Component),E=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:"",title:e.title}))},g=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"Your search did not return any results. Please try again."))},d=function(e){var t,a=e.data;return t=a.length>0?a.map((function(e){return r.a.createElement(E,{url:(t=e.farm,a=e.server,n=e.id,c=e.secret,"https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(n,"_").concat(c,".jpg")),key:e.id,title:e.title});var t,a,n,c})):r.a.createElement(g,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,'Results for "',e.query,'"'),r.a.createElement("ul",null,t))},v=function(){return r.a.createElement("div",null,r.a.createElement("i",null,"error_outline"),r.a.createElement("h2",null,"This is  error 404. Page Not Found"))},b=a(31),y=a.n(b),S="4ac51826a5ca43338f966f96ea7739f7",k=a(6),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={photos:[],loading:!0,query:""},a.performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pink";a.setState({loading:!0}),y.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(S,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(t){a.setState({photos:t.data.photos.photo,loading:!1,query:e})})).catch((function(e){console.log("Error parsing and fetching data",e)}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){var e=this;return console.log(this.state.loading),r.a.createElement(m.a,null,r.a.createElement(k.d,null,r.a.createElement(k.b,{exact:!0,path:"/"}," ",r.a.createElement(k.a,{to:"/search"})),r.a.createElement(k.b,{path:"/search",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,Object.assign({},t,{onSearch:e.performSearch})),r.a.createElement(f,Object.assign({},t,{onSearch:e.performSearch})),e.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(d,{data:e.state.photos,query:e.state.query}))}}),r.a.createElement(k.b,{component:v})))}}]),t}(n.Component);a(59);l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cf3b8552.chunk.js.map