"use strict";(self.webpackChunkbricks_docs=self.webpackChunkbricks_docs||[]).push([[4281],{4281:(n,p,t)=>{t.r(p),t.d(p,{bds_stepper:()=>i});var e=t(4403),b=t(5762);const i=class{constructor(s){(0,e.r)(this,s),this.direction="horizontal",this.theme=(0,b.g)(localStorage.getItem("bricks-theme"))||"pacasmayo",this.inversed=!1,this.current=0,this.steps=void 0,this.stepsPanel=void 0}updateSelected(s){this.steps.forEach(d=>{d.setAttribute("current",s.toString())}),this.stepsPanel.forEach(d=>{d.setAttribute("current",s.toString())})}componentWillRender(){this.steps=this.host.querySelectorAll("bds-step"),this.stepsPanel=this.host.querySelectorAll("bds-step-panel"),this.steps.forEach(s=>{s.setAttribute("current",this.current.toString())}),this.stepsPanel.forEach(s=>{s.setAttribute("current",this.current.toString())})}render(){return(0,e.h)(e.H,{key:"6b48fd8f9735a23dafe1e88dfb5fff858a658812",class:`${"bds-"+this.direction} ${(0,b.a)(this.theme)} ${this.inversed?"bds-inversed":""}`},(0,e.h)("slot",{key:"3c3e6b71cb7e3bf478245a67f8e4081aa0d432e6"}))}get host(){return(0,e.g)(this)}static get watchers(){return{current:["updateSelected"]}}};i.style='i{font-family:"Material Icons";font-style:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga";user-select:none}bds-stepper{display:flex;flex-direction:column}bds-stepper.bds-vertical{flex-direction:row;height:100%}bds-stepper.bds-vertical>bds-step-list{width:fit-content;flex-direction:column}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container{flex-direction:column}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item{flex-direction:row;height:fit-content}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item>div{flex-direction:column;align-items:center;width:auto;height:100%}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item>div .bds-wing{width:2px}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item>div .bds-wing.bds-transparent{width:0}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text{padding:0}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{text-align:start}bds-stepper.bds-vertical>bds-step-list>bds-step.bds-container>.bds-line-container>.bds-line{height:100%;width:2px;top:0;left:19px}bds-stepper.bds-vertical>bds-step-panel.bds-active{flex-grow:1}bds-stepper>bds-step-list{display:flex;flex-direction:row}bds-stepper>bds-step-list>bds-step{display:flex}bds-stepper>bds-step-list>bds-step.bds-flexible{flex:1}bds-stepper>bds-step-list>bds-step>.bds-stepper-item{display:flex;flex-direction:column;align-items:center}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div{display:flex;align-items:center;width:100%}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div>.bds-step,bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div>div.bds-indeterminated{display:grid;place-items:center;box-sizing:border-box;width:40px;height:40px}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div>div.bds-indeterminated{padding:6px;background-color:transparent}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div>.bds-wing{flex:1;height:2px}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>div>.bds-wing.bds-transparent{height:0}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>.bds-text{max-width:144px;display:flex;justify-content:center;padding:0 4px;box-sizing:border-box}bds-stepper>bds-step-list>bds-step>.bds-stepper-item>.bds-text>label{max-width:100%;text-align:center;overflow:hidden;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}bds-stepper>bds-step-list>bds-step>.bds-line-container{display:flex;flex:1;height:100%;position:relative}bds-stepper>bds-step-list>bds-step>.bds-line-container>.bds-line{position:absolute;width:100%;top:19px;height:2px}bds-stepper>bds-step-panel{display:none}bds-stepper>bds-step-panel.bds-active{display:block;box-sizing:border-box}bds-stepper.pacas.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Montserrat;font-weight:600;font-size:16px;line-height:120%}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#e9f0fa;color:#164790}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#1f64cb;color:#ffffff}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#a30409;color:#ffffff}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#164790}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#e9f0fa}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #1f64cb}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#1f64cb;border-radius:500%}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Montserrat;font-size:16px;line-height:150%;color:#5c5c5c;width:75px}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.pacas>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.pacas>bds-step-list>bds-step.bds-container .bds-line-container .bds-line{background-color:#e9f0fa}bds-stepper.pacas.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.pacas.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.cantera.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Montserrat;font-weight:600;font-size:16px;line-height:120%}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#e9f0fa;color:#174b98}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#1f64cb;color:#ffffff}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#ea373d;color:#ffffff}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#174b98}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#e9f0fa}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #1f64cb}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#1f64cb;border-radius:500%}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Montserrat;font-size:16px;line-height:150%;color:#333333}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.cantera>bds-step-list>bds-step.bds-container>.bds-line-container>.bds-line{background-color:#e9f0fa}bds-stepper.cantera.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.cantera.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.ayu.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Barlow;font-weight:600;font-size:16px;line-height:120%}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#c4f2eb;color:#056254}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#14ccb1;color:#ffffff}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#bd1467;color:#ffffff}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#056254}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#c4f2eb}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #14ccb1}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#14ccb1;border-radius:500%}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Barlow;font-size:16px;line-height:150%;color:#333333}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.ayu>bds-step-list>bds-step.bds-container>.bds-line-container>.bds-line{background-color:#c4f2eb}bds-stepper.ayu.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.ayu.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.isicom.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Poppins;font-weight:600;font-size:16px;line-height:120%}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#eef5ec;color:#356233}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#468344;color:#ffffff}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#ac040a;color:#ffffff}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#356233}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#eef5ec}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #468344}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#468344;border-radius:500%}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Poppins;font-size:16px;line-height:150%;color:#3b404a}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.isicom>bds-step-list>bds-step.bds-container>.bds-line-container>.bds-line{background-color:#eef5ec}bds-stepper.isicom.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.isicom.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.digou.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Open Sans;font-weight:600;font-size:16px;line-height:120%}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#daf5f0;color:#009e80}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#00d3aa;color:#ffffff}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#9b2127;color:#ffffff}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#009e80}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#daf5f0}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #00d3aa}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#00d3aa;border-radius:500%}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Open Sans;font-size:16px;line-height:150%;color:#586782;width:75px}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.digou>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.digou>bds-step-list>bds-step.bds-container .bds-line-container .bds-line{background-color:#daf5f0}bds-stepper.digou.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.digou.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.pentagono.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Inter;font-weight:600;font-size:16px;line-height:120%}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#e6ebf4;color:#002863}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#00388c;color:#ffffff}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#ac040a;color:#ffffff}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#002863}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#e6ebf4}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #00388c}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#00388c;border-radius:500%}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Inter;font-size:16px;line-height:150%;color:#3b3c3d;width:75px}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.pentagono>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.pentagono>bds-step-list>bds-step.bds-container .bds-line-container .bds-line{background-color:#e6ebf4}bds-stepper.pentagono.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.pentagono.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.spgestiona.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#FFFFFF !important}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Montserrat;font-weight:600;font-size:16px;line-height:120%}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#EAEEF7;color:#002863}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#00388C;color:#FFFFFF}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#AC040A;color:#FFFFFF}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#002863}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#FFFFFF}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#EAEEF7}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #00388C}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#00388C;border-radius:500%}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Montserrat;font-size:16px;line-height:150%;color:#4B4C4F;width:75px}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.spgestiona>bds-step-list>bds-step.bds-container .bds-line-container .bds-line{background-color:#EAEEF7}bds-stepper.spgestiona.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.spgestiona.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.generic.bds-inversed>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{color:#ffffff !important}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item{gap:8px}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step{padding:8px;border-radius:120px;font-family:Montserrat;font-weight:600;font-size:16px;line-height:120%}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-default{background-color:#e6ebf4;color:#002863}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-active{background-color:#00388c;color:#ffffff}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-error{background-color:#ac040a;color:#ffffff}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed{background-color:#002863}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-step.bds-completed i{font-size:24px !important;color:#ffffff}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>.bds-wing{background-color:#e6ebf4}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated{border-radius:500%;border:4px solid #00388c}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>div>div.bds-indeterminated>div{height:20px;width:20px;background-color:#00388c;border-radius:500%}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label{font-family:Montserrat;font-size:16px;line-height:150%;color:#3b3c3d;width:75px}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-default,bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-indeterminated{font-weight:500}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-active{font-weight:700}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-error{font-weight:700}bds-stepper.generic>bds-step-list>bds-step.bds-container>.bds-stepper-item>.bds-text>label.bds-completed{font-weight:500}bds-stepper.generic>bds-step-list>bds-step.bds-container .bds-line-container .bds-line{background-color:#e6ebf4}bds-stepper.generic.bds-horizontal>bds-step-panel{padding-top:24px;padding-left:16px;padding-right:16px;padding-bottom:16px}bds-stepper.generic.bds-vertical>bds-step-panel{padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px}'}}]);