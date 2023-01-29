import{d as f,c as v,o as a,a as i,b as e,t as n,u as o,F as g,r as A,p as w,e as I,g as N,f as $,w as L,n as D,L as V,h as k,_ as y,i as C,s as j,j as B,k as z,l as O,m as T,q as R}from"./index-9c814aea.js";import"./en-593db5d5.js";const H={ETH:{logo:"eth.svg"},DAI:{logo:"dai.svg"},WXDAI:{logo:"wxdai.svg"},USDC:{logo:"usdc.svg"},WETH:{logo:"weth.svg"},AOE:{logo:"aoe.svg"},MATIC:{logo:"matic.svg"}},W=s=>{const d=(s||"").toUpperCase(),m=H[d];return m?m.logo:"eth.svg"};function U(s){return{name:"project",params:{id:s}}}const F=s=>(w("data-v-d1f13490"),s=s(),I(),s),q={class:"info"},K=F(()=>e("div",{class:"icon","aria-label":"info icon"},"ℹ",-1)),M={class:"message"},P={class:"content"},X={class:"card desktop"},G=F(()=>e("div",{class:"rank"},"#",-1)),J={class:"project"},Q={class:"votes"},Y={class:"donation heading"},Z={class:"desktop symbol"},x=["src","alt"],ee={class:"funding heading"},oe={class:"desktop symbol"},se=["src","alt"],te={class:"rank"},ne={class:"project"},ae={class:"votes"},de={class:"mobile"},ie={class:"donation"},ce={class:"mobile"},le={class:"mobile symbol"},re=["src","alt"],_e={class:"funding"},ue={class:"mobile"},ve={class:"amount"},me={class:"mobile symbol"},he=["src","alt"],pe=f({__name:"LeaderboardDetailView",props:{projects:null,round:null},setup(s){const d=s;function m(t){return k(t.toString(),0,null,0)}function h(t){return k(t??"0",d.round.nativeTokenDecimals,null,0)}function p(t){const{voiceCreditFactor:_}=d.round,c=t.mul(_);return h(c)}const u=v(()=>{const t=W(d.round.nativeTokenSymbol);return N(t)}),r=v(()=>d.round.nativeTokenSymbol);return(t,_)=>(a(),i("div",null,[e("div",q,[K,e("div",M,n(t.$t("leaderboard.message")),1)]),e("div",P,[e("div",X,[G,e("div",J,n(t.$t("leaderboard.heading.project")),1),e("div",Q,n(t.$t("leaderboard.heading.votes")),1),e("div",Y,[e("div",null,n(t.$t("leaderboard.heading.donation")),1),e("div",Z,[e("img",{src:o(u),alt:o(r)},null,8,x)])]),e("div",ee,[e("div",null,n(t.$t("leaderboard.heading.total")),1),e("div",oe,[e("img",{src:o(u),alt:o(r)},null,8,se)])])]),(a(!0),i(g,null,A(s.projects,(c,l)=>(a(),i("div",{key:c.id},[$(V,{to:o(U)(c.id)},{default:L(()=>[e("div",{class:D(["card",{first:l===0,second:l===1,third:l===2}])},[e("div",te,n(l+1),1),e("div",ne,n(c.name),1),e("div",ae,[e("span",de,n(t.$t("leaderboard.heading.votes"))+": ",1),e("span",null,n(m(c.votes)),1)]),e("div",ie,[e("span",ce,n(t.$t("leaderboard.heading.donation"))+": ",1),e("span",null,"~"+n(p(c.donation)),1),e("div",le,[e("img",{src:o(u),alt:o(r)},null,8,re)])]),e("div",_e,[e("span",ue,n(t.$t("leaderboard.heading.total"))+": ",1),e("span",ve," ~"+n(h(c.allocatedAmount)),1),e("div",me,[e("img",{src:o(u),alt:o(r)},null,8,he)])])],2)]),_:2},1032,["to"])]))),128))])]))}});const be=y(pe,[["__scopeId","data-v-d1f13490"]]),ge="/ethcolombia/assets/medal-1-f430e5d9.svg",ke="/ethcolombia/assets/medal-2-25eb62ff.svg",fe="/ethcolombia/assets/medal-3-e60a81c2.svg",$e={class:"content"},ye={class:"container"},Se={class:"rank"},je={key:0},Te={key:0,src:ge},Ae={key:1,src:ke},we={key:2,src:fe},Ie={class:"desktop project-image"},Le=["src","alt"],De={class:"project-name"},Ve={class:"funding"},Ce={class:"amount"},Ue={class:"symbol"},Fe=f({__name:"LeaderboardSimpleView",props:{project:null,round:null,rank:null},setup(s){const d=s,m=v(()=>d.round.nativeTokenSymbol||""),h=v(()=>d.rank===1),p=v(()=>d.rank===2),u=v(()=>d.rank===3),r=v(()=>h.value||p.value||u.value);function t(c){const l=d.round.nativeTokenDecimals;return c?k(c,l,null,0):"0"}const _=v(()=>d.project.bannerImageUrl!==void 0?d.project.bannerImageUrl:d.project.imageUrl!==void 0?d.project.imageUrl:"");return(c,l)=>(a(),i("div",$e,[$(V,{to:o(U)(s.project.id)},{default:L(()=>[e("div",ye,[e("div",Se,[o(r)?(a(),i("div",je,[o(h)?(a(),i("img",Te)):o(p)?(a(),i("img",Ae)):(a(),i("img",we))])):C("",!0),e("div",{class:D(["number",{first:o(h),second:o(p),third:o(u)}])},n(s.rank),3)]),e("div",Ie,[e("img",{src:o(_),alt:s.project.name},null,8,Le)]),e("div",De,n(s.project.name),1),e("div",Ve,[e("div",Ce,"~"+n(t(s.project.allocatedAmount)),1),e("div",Ue,n(c.$t("leaderboardSimpleView.funded",{tokenSymbol:o(m)})),1)])])]),_:1},8,["to"])]))}});const Ee=y(Fe,[["__scopeId","data-v-15f4cb0a"]]),Ne=s=>(w("data-v-b607bab2"),s=s(),I(),s),Be={key:1},ze={key:0},Oe={key:0,class:"info"},Re={class:"header"},He={key:0},We={key:1},qe=Ne(()=>e("div",{class:"hr"},null,-1)),Ke={key:0},Me={key:1},Pe=f({__name:"Leaderboard",setup(s){const{ready:d}=j(B()),{nativeTokenAddress:m,nativeTokenSymbol:h,nativeTokenDecimals:p,voiceCreditFactor:u,leaderboardProjects:r}=j(z()),t=v(()=>({nativeTokenAddress:m.value,nativeTokenSymbol:h.value,nativeTokenDecimals:p.value,voiceCreditFactor:u.value})),_=O(!0);function c(){_.value=!_.value}return(l,S)=>(a(),i("div",null,[o(d)?(a(),i("div",Be,[o(r)?(a(),i("div",ze,[o(r).length===0?(a(),i("div",Oe," 😢 "+n(l.$t("leaderboard.no_project")),1)):(a(),i(g,{key:1},[e("div",Re,[e("div",null,[e("h2",null,n(l.$t("leaderboard.header")),1)]),e("button",{class:"btn-secondary",onClick:S[0]||(S[0]=b=>c())},[_.value?(a(),i("div",He,n(l.$t("leaderboard.more")),1)):(a(),i("div",We,n(l.$t("leaderboard.less")),1))])]),qe,e("div",null,[_.value?(a(),i("div",Ke,[(a(!0),i(g,null,A(o(r),(b,E)=>(a(),T(Ee,{project:b,key:b.id,rank:E+1,round:o(t)},null,8,["project","rank","round"]))),128))])):(a(),i("div",Me,[$(be,{projects:o(r),round:o(t)},null,8,["projects","round"])]))])],64))])):C("",!0)])):(a(),T(R,{key:0}))]))}});const Je=y(Pe,[["__scopeId","data-v-b607bab2"]]);export{Je as default};