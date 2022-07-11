import{k as V,u as A,j as e,a}from"./index.19ea6f7d.js";import{g as w,s as B,a as E,c as F,b as o,u as P}from"./object.a29c9d9a.js";import{u as D}from"./useMutation.8f9a41af.js";import{a as O}from"./index.01a5db20.js";var R=function(s,n,t){if(s&&"reportValidity"in s){var d=w(t,n);s.setCustomValidity(d&&d.message||""),s.reportValidity()}},S=function(s,n){var t=function(u){var i=n.fields[u];i&&i.ref&&"reportValidity"in i.ref?R(i.ref,u,s):i.refs&&i.refs.forEach(function(m){return R(m,u,s)})};for(var d in n.fields)t(d)},U=function(s,n){n.shouldUseNativeValidation&&S(s,n);var t={};for(var d in s){var u=w(n.fields,d);B(t,d,Object.assign(s[d],{ref:u&&u.ref}))}return t},M=function(s,n,t){return n===void 0&&(n={}),t===void 0&&(t={}),function(d,u,i){try{return Promise.resolve(function(m,r){try{var h=(n.context,Promise.resolve(s[t.mode==="sync"?"validateSync":"validate"](d,Object.assign({abortEarly:!1},n,{context:u}))).then(function(c){return i.shouldUseNativeValidation&&S({},i),{values:t.rawValues?d:c,errors:{}}}))}catch(c){return r(c)}return h&&h.then?h.then(void 0,r):h}(0,function(m){if(!m.inner)throw m;return{values:{},errors:U((r=m,h=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(r.inner||[]).reduce(function(c,l){if(c[l.path]||(c[l.path]={message:l.message,type:l.type}),h){var _=c[l.path].types,v=_&&_[l.type];c[l.path]=E(l.path,h,c,l.type,v?[].concat(v,l.message):l.message)}return c},{})),i)};var r,h}))}catch(m){return Promise.reject(m)}}};const Q=async s=>{console.log("DATA ISS",s);try{return(await O.post("https://test.smartdhyana.com/greet",s)).data}catch(n){throw n}};const T=F().shape({name:o().required("Name is Requiired"),units_consumed:o().required("units_consumed is Required"),bill_date:o().required("bill date is Required"),paid_date:o().required("paid date is Required"),amount:o().required("amount is Required"),fixed_charge:o().required("fixed charge is Required"),energy_charge:o().required("energy charge is Required"),fuel_cost_adjustment_charge:o().required("fuel cost adjustment charge is Required"),tax_or_electricity_duty:o().required("tax or electricity duty is Required"),penality:o().required("penality is Required"),other_charges:o().required("Other charges is Required")});function Y(){var _,v,p,y,g,N,b,q,x,j,C;const s=V(),n=A(),{mutateAsync:t,isLoading:d}=D(Q,{onSuccess:f=>{console.log("createdbill",f),s.invalidateQueries("electricitybills")}}),{control:u,register:i,handleSubmit:m,formState:{errors:r},watch:h,reset:c}=P({resolver:M(T)});return e("div",{className:"addBill",children:a("form",{onSubmit:m(async f=>{console.log(f),await t(f),n("/")}),children:[e("div",{className:"addbill_header",children:" Add New Bill "}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"First Name: "})}),a("div",{className:"form_input",children:[e("input",{name:"name",...i("name")}),r.name&&e("div",{children:e("span",{style:{color:"red"},children:(_=r.name)==null?void 0:_.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Units Consumed: "})}),a("div",{className:"form_input",children:[e("input",{name:"units_consumed",...i("units_consumed")}),r.units_consumed&&e("div",{children:e("span",{style:{color:"red"},children:(v=r.units_consumed)==null?void 0:v.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Bill Date: "})}),a("div",{className:"form_input",children:[e("input",{name:"bill_date",type:"date",...i("bill_date")}),r.bill_date&&e("div",{children:e("span",{style:{color:"red"},children:(p=r.bill_date)==null?void 0:p.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Paid Date: "})}),a("div",{className:"form_input",children:[e("input",{name:"paid_date",type:"date",...i("paid_date")}),r.paid_date&&e("div",{children:e("span",{style:{color:"red"},children:(y=r.paid_date)==null?void 0:y.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Amount: "})}),a("div",{className:"form_input",children:[e("input",{name:"amount",...i("amount")}),r.amount&&e("div",{children:e("span",{style:{color:"red"},children:(g=r.amount)==null?void 0:g.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Fixed Charge: "})}),a("div",{className:"form_input",children:[e("input",{name:"fixed_charge",...i("fixed_charge")}),r.fixed_charge&&e("div",{children:e("span",{style:{color:"red"},children:(N=r.fixed_charge)==null?void 0:N.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:" Energy Charge: "})}),a("div",{className:"form_input",children:[e("input",{name:"energy_charge",...i("energy_charge")}),r.energy_charge&&e("div",{children:e("span",{style:{color:"red"},children:(b=r.energy_charge)==null?void 0:b.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:" Fuel Cost Adjustment Charge: "})}),a("div",{className:"form_input",children:[e("input",{name:"fuel_cost_adjustment_charge",...i("fuel_cost_adjustment_charge")}),r.fuel_cost_adjustment_charge&&e("div",{children:e("span",{style:{color:"red"},children:(q=r.fuel_cost_adjustment_charge)==null?void 0:q.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:"Tax or Electricity Duty Charge: "})}),a("div",{className:"form_input",children:[e("input",{name:"tax_or_electricity_duty",...i("tax_or_electricity_duty")}),r.tax_or_electricity_duty&&e("div",{children:e("span",{style:{color:"red"},children:(x=r.tax_or_electricity_duty)==null?void 0:x.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:" penality: "})}),a("div",{className:"form_input",children:[e("input",{name:"penality",...i("penality")}),r.penality&&e("div",{children:e("span",{style:{color:"red"},children:(j=r.penality)==null?void 0:j.message})})]})]}),a("div",{className:"form_div",children:[e("div",{className:"form_name",children:e("label",{children:" Other Charges: "})}),a("div",{className:"form_input",children:[e("input",{name:"other_charges",...i("other_charges")}),r.other_charges&&e("div",{children:e("span",{style:{color:"red"},children:(C=r.other_charges)==null?void 0:C.message})})]})]}),e("div",{className:"addbill_submit",children:e("button",{type:"submit",children:" Submit "})})]})})}export{Y as default};
