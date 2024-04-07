"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[37],{803105:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(624631),a=r(876767),o=r(648623),d=r(346417);const i=(0,a.D)();const l=function(t){let{value:e,setValue:r,options:a,title:l,propr:s}=t;return(0,d.jsx)(o.Z,{value:e,onChange:(t,e)=>{"string"===typeof e?r({title:e}):e&&e.inputValue?r({title:e.inputValue}):r(e)},filterOptions:(t,e)=>i(t,e),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:a,getOptionLabel:t=>"string"===typeof t?t:t.inputValue?t.inputValue:t[""+s],renderOption:(t,e)=>(0,d.jsx)("li",{...t,children:e[""+s]}),sx:{width:"100%"},freeSolo:!0,renderInput:t=>(0,d.jsx)(n.Z,{...t,label:l||"Titre"})})}},433037:(t,e,r)=>{r.r(e),r.d(e,{default:()=>V});var n=r(747313),a=r(574438),o=r(209478),d=r(334811),i=r(185554),l=r(803105),s=r(323870),c=r(99885),u=r(809019),p=r(80827),C=r(835662),g=r(661395);const h=(0,p.hg)("contrat/ReadContrat",(async(t,e)=>{let{rejectWithValue:r}=e;try{return(await C.Z.get(g.ie+"/contrat",g.vc)).data}catch(n){return r(n.response.data)}})),x=(0,p.hg)("contrat/AjouterContrat",(async(t,e)=>{let{rejectWithValue:r}=e;try{return(await C.Z.post(g.ie+"/contrat",t,g.vc)).data}catch(n){return r(n.response.data)}})),j=(0,p.hg)("contrat/UpdateContrat",(async(t,e)=>{let{rejectWithValue:r}=e;try{return(await C.Z.put(g.ie+"/contrat",t,g.vc)).data}catch(n){return r(n.response.data)}}));(0,p.oM)({name:"contrat",initialState:{contrat:[],addContrat:"",addContratError:"",readContrat:"",readContratError:"",updateContrat:"",updateContratError:""},reducers:{},extraReducers:{[h.pending]:(t,e)=>({...t,addContrat:"",addContratError:"",readContrat:"",readContratError:"",updateContrat:"",updateContratError:""}),[h.fulfilled]:(t,e)=>({contrat:e.payload,addContrat:"",addContratError:"",readContrat:"success",readContratError:"",updateContrat:"",updateContratError:""}),[h.rejected]:(t,e)=>({...t,addContrat:"",addContratError:"",readContrat:"rejected",readContratError:e.payload,updateContrat:"",updateContratError:""}),[x.pending]:(t,e)=>({...t,addContrat:"pending",addContratError:"",readContrat:"",readContratError:"",updateContrat:"",updateContratError:""}),[x.fulfilled]:(t,e)=>({contrat:[e.payload,...t.contrat],addContrat:"success",addContratError:"",readContrat:"",readContratError:"",updateContrat:"",updateContratError:""}),[x.rejected]:(t,e)=>({...t,addContrat:"rejected",addContratError:e.payload,readContrat:"",readContratError:"",updateContrat:"",updateContratError:""}),[j.pending]:(t,e)=>({...t,addContrat:"",addContratError:"",readContrat:"",readContratError:"",updateContrat:"pending",updateContratError:""}),[j.fulfilled]:(t,e)=>({agent:t.contrat.map((t=>t._id===e.payload._id?e.payload:t)),addContrat:"",addContratError:"",readContrat:"",readContratError:"",updateContrat:"success",updateContratError:""}),[j.rejected]:(t,e)=>({...t,addAgent:"",addContrat:"",addContratError:"",readContrat:"",readContratError:"",updateContrat:"rejected",updateContratError:e.payload})}}).reducer;var f=r(346417);const m=function(){const t=(0,i.v9)((t=>t.agentAdmin)),[e,r]=n.useState({debut:"",fin:"",soldeConge:""}),{debut:a,fin:o,soldeConge:d}=e,p=(0,i.I0)(),[C,g]=n.useState(""),[h,j]=n.useState([]);return(0,f.jsxs)("div",{style:{width:"25rem"},children:[(0,f.jsx)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:(null===t||void 0===t?void 0:t.agentAdmin.length)<1?(0,f.jsx)("p",{children:"Loading agent..."}):(0,f.jsx)(l.Z,{value:C,setValue:g,options:null===t||void 0===t?void 0:t.agentAdmin,title:"Recherche agent *",propr:"nom"})}),(0,f.jsx)("div",{children:(0,f.jsx)(s.default,{placeholder:"D\xe9but contrat",onChange:t=>r({...e,debut:t.target.value}),type:"date"})}),(0,f.jsx)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:(0,f.jsx)(s.default,{placeholder:"Fin contrat",onChange:t=>r({...e,fin:t.target.value}),type:"date"})}),(0,f.jsx)("div",{children:(0,f.jsx)(s.default,{placeholder:"Solde cong\xe9 *",onChange:t=>r({...e,soldeConge:t.target.value}),type:"number"})}),(0,f.jsx)(u.ZP,{sx:{marginTop:"12px"},children:(0,f.jsx)(c.ZP,{type:"primary",loading:h[0],onClick:()=>(async t=>{if(j((e=>{const r=[...e];return r[t]=!0,r})),""!==C&&""!==d){let t={codeAgent:C.codeAgent,debut:a,fin:o,soldeConge:d};p(x(t)),r({debut:"",fin:"",soldeConge:""}),g("")}j((e=>{const r=[...e];return r[t]=!1,r}))})(0),children:"Enregistrer"})})]})};var y=r(502040),v=r(542420),E=r(873428),Z=r(193405),b=r(261113);const k=function(t){let{data:e}=t;return(0,f.jsx)(E.Z,{sx:{minWidth:275,marginBottom:"3px"},children:(0,f.jsxs)(Z.Z,{sx:{display:"flex",alignItem:"center"},children:[(0,f.jsx)("img",{src:"/profile.png",alt:"prifiles",width:40,height:40}),(0,f.jsxs)(u.ZP,{sx:{marginLeft:"10px"},children:[(0,f.jsx)(b.Z,{variant:"h6",component:"div",sx:{fontWeight:"bolder"},children:e.agent.nom}),(0,f.jsx)(b.Z,{color:"text.secondary",children:e.conge.length<1?"L'agent n'a jamais pris le cong\xe9 ":"\n        L'agent a deja pris le cong\xe9 ".concat(e.conge.length," fois il lui reste ").concat((t=>{let e=t.conge,r=0;for(let o=0;o<e.length;o++)r+=(n=e[o].debut,a=e[o].fin,(new Date(a).getTime()-new Date(n).getTime())/864e5);var n,a;return r})(e)," jours\n        ")})]})]})})};const w=function(){const[t,e]=n.useState(!1),r=(0,i.v9)((t=>t.contrat));return(0,f.jsxs)("div",{children:[(0,f.jsx)(v.Z,{sx:{marginBottom:"15px"},size:"small",color:"primary",onClick:()=>e(!0),children:(0,f.jsx)(y.Z,{fontSize:"small"})}),r&&(null===r||void 0===r?void 0:r.contrat.length)<1?(0,f.jsx)("p",{children:"Loading..."}):r.contrat.map((t=>(0,f.jsx)("div",{children:(0,f.jsx)(k,{data:t})},t._id))),(0,f.jsx)(d.Z,{open:t,setOpen:e,title:"Parametre contrat",children:(0,f.jsx)(m,{})})]})};const T=function(){return(0,f.jsx)("div",{children:"Departement"})};const V=function(){const t=[{key:"1",label:"Contrat",children:(0,f.jsx)(w,{})},{key:"2",label:"Departement",children:(0,f.jsx)(T,{})},{key:"3",label:"Type cong\xe9",children:"Content of Tab Pane 3"},{key:"4",label:"Validation",children:"Content of Tab Pane 3"},{key:"5",label:"Agents",children:"Content of Tab Pane 3"}];return(0,f.jsx)(o.Z,{children:(0,f.jsx)(a.Z,{defaultActiveKey:"1",items:t,onChange:t=>{console.log(t)}})})}},334811:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(747313),a=r(966149),o=r(896467),d=r(233604),i=r(850301),l=r(508586),s=r(261113),c=r(346417);const u=n.forwardRef((function(t,e){return(0,c.jsx)(i.Z,{direction:"up",ref:e,...t})}));const p=function(t){let{open:e,children:r,setOpen:n,title:i}=t;return(0,c.jsx)("div",{children:(0,c.jsxs)(a.Z,{open:e,TransitionComponent:u,keepMounted:!0,onClose:()=>{n(!1)},"aria-describedby":"alert-dialog-slide-description",children:[(0,c.jsxs)(d.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,c.jsx)(s.Z,{children:i}),(0,c.jsx)(l.Z,{fontSize:"small",color:"secondary",style:{cursor:"pointer"},onClick:()=>n(!1)})]}),(0,c.jsx)(o.Z,{children:r})]})})}}}]);