"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{526:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(433),i=n(439),o=n(791),r="movies_movies__6mFDm",s="movies_form__3yC8H",c="movies_input__I0YNc",u="movies_button__-PwtX",l="movies_moviesList__moZIJ",m="movies_moviesItem__OaL3e",h=n(87),f=n(689),d=n(184),v=function(){var e,t=(0,o.useState)([]),n=(0,i.Z)(t,2),v=n[0],_=n[1],j=(0,o.useState)(""),p=(0,i.Z)(j,2),I=p[0],y=p[1],N=(0,h.lr)({}),g=(0,i.Z)(N,2),x=g[0],b=g[1],J=null!==(e=x.get("query"))&&void 0!==e?e:"",k=(0,f.TH)();(0,o.useEffect)((function(){""!==J&&O()}),[]);var O=function(){fetch("https://api.themoviedb.org/3/search/movie?query=".concat(J,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzU0Y2I3MjliYTc5OWE4NGNiOGRhOWYzYjNjMmVkYiIsInN1YiI6IjY0NzRhNGQ5OTQwOGVjMDBlMTRkODI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jM0pFTGW4Ag5RFeZbbYFfkH78J8eInez-TSfyWolnBg"}}).then((function(e){return e.json()})).then((function(e){var t=e.results;if(!t.length)return y("Sorry, there are no movies matching your search query. Please try again."),void _([]);_((0,a.Z)(t))})).catch((function(e){return console.error(e)}))};return(0,d.jsxs)("div",{className:r,children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(),e.currentTarget.reset()},className:s,children:[(0,d.jsx)("input",{className:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:x.query,onChange:function(e){var t=e.target.value;b(""!==t?{query:t.toLowerCase()}:{})}}),(0,d.jsx)("button",{tipe:"submit",className:u,children:"Search"})]}),I&&(0,d.jsx)("p",{children:I}),(0,d.jsx)("ul",{className:l,children:v.map((function(e,t){return(0,d.jsx)("li",{className:m,children:(0,d.jsx)(h.OL,{to:"/movies/".concat(e.id),state:{from:k},children:e.title})},"".concat(e.id,"_").concat(t))}))}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{children:"...Loading"}),children:(0,d.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=526.ee94db42.chunk.js.map