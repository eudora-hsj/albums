import{u,i as _,o as i,a as t,c as o,b as e,F as p,r as m,t as n,d as v,e as h}from"./index.1bb2df16.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const y={class:"container"},x={class:"row"},b=["onClick"],f=["src","alt"],k={class:"card-body"},A={class:"card-title"},B={__name:"Albums",setup(l){const c=u(),a=_("$category");_("$photosList");const d=r=>{c.push({name:"Album",query:{id:r}})};return i(()=>{}),(r,I)=>(t(),o("div",y,[e("div",x,[(t(!0),o(p,null,m(v(a),s=>(t(),o("div",{class:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2",key:s.id},[e("div",{class:"card cursor-pointer",onClick:C=>d(s.id)},[e("img",{class:"card-img-top",src:s.cover,alt:s.description},null,8,f),e("div",k,[e("h5",A,n(s.title)+" ("+n(s.count)+")",1)])],8,b)]))),128))])]))}};var $=g(B,[["__scopeId","data-v-3d3ee280"]]);const j={__name:"Index",setup(l){return(c,a)=>(t(),h($))}};export{j as default};
