import k from"./ArticlesListItem.f6fogPL2.js";import w from"./ProseA.gNN7DlH4.js";import v from"./ProseCodeInline.K_WvkLg6.js";import{u as g}from"./asyncData.U3kTG48X.js";import{q as A}from"./query.riIG00sX.js";import{d as C,X as I,H as S,L as c,b as a,c as n,e as o,g as i,F as L,Y as B,C as e,w as d,p as N,i as V,Z as b,W as q,k as F}from"./entry.5hrcNfYs.js";import"./preview.UQbNHumq.js";import"./date.3uOv5BcS.js";const P=t=>(N("data-v-5d501d37"),t=t(),V(),t),T={key:0,class:"articles-list"},Y={class:"featured"},D={class:"layout"},E={key:1,class:"tour"},H=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),W=C({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=I(async()=>g("articles",async()=>await A(b(u.path)).sort({date:-1}).find())),s=await s,l(),s),r=S(()=>m.value||[]);return(X,Z)=>{var p;const _=k,f=w,h=v;return(p=c(r))!=null&&p.length?(a(),n("div",T,[o("div",Y,[i(_,{article:c(r)[0],featured:!0},null,8,["article"])]),o("div",D,[(a(!0),n(L,null,B(c(r).slice(1),(y,x)=>(a(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),n("div",E,[H,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),R=F(W,[["__scopeId","data-v-5d501d37"]]);export{R as default};
