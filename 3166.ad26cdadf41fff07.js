"use strict";(self.webpackChunkbricks_docs=self.webpackChunkbricks_docs||[]).push([[3166],{3166:(a,o,t)=>{t.r(o),t.d(o,{bds_switch:()=>i});var e=t(4403),l=t(5762);const i=class{constructor(c){(0,e.r)(this,c),this.isInversed=this.inversed,this.handleToggleChange=n=>{this.isChecked=n.target.checked},this.theme=(0,l.g)(localStorage.getItem("bricks-theme"))||"pacasmayo",this.textRight="",this.textLeft="",this.disabled=!1,this.checked=!1,this.icon=!1,this.inversed=!1,this.isChecked=!1}componentDidLoad(){this.checked&&(this.isChecked=!0)}render(){return(0,e.h)(e.H,{key:"7f69329a5457452455fe92363f2077eb6735c4e3"},(0,e.h)("div",{key:"f5de81c762fed7d6650469a95e9fa4be2729cbeb",class:`${(0,l.a)(this.theme)} ${this.isInversed?"inversed":""}`},(0,e.h)("div",{key:"aaf0713b72b5367bca85f6a1cb18ced3e7a5be23",class:"toggle-container"},""!==this.textRight&&(0,e.h)("span",{key:"70b5d5295d95ed45ab06b5ead87a92d68ac1f4ab",class:"label-text"},this.textRight),(0,e.h)("div",{key:"0efc484be51c63e887ba717ae76ba056de40d2df",class:"toggle-switch"},(0,e.h)("input",{key:"b260a92fcad4f135dcadc8643b6216130124c377",type:"checkbox",id:"toggle",class:"toggle-input",checked:this.isChecked,onChange:this.handleToggleChange,disabled:this.disabled}),(0,e.h)("label",{key:"fc825a457422d09249219702eb3fce43e9d35879",htmlFor:"toggle",class:"toggle-label"},(0,e.h)("span",{key:"3ca481af3fb23ed273c3b39c2ce432d447487367",class:"toggle-inner"}),this.icon&&(0,e.h)("span",{key:"5cabb2f78214cecf5c5641a3210775a22c7aef16",class:"toggle-icon "+(this.isChecked?"check":"cross")},this.isChecked?(0,e.h)("span",{class:"material-icons off"},"check"):(0,e.h)("span",{class:"material-icons on"},"close")))),""!==this.textLeft&&(0,e.h)("span",{key:"8c4aaaf1a40aae22fccb01879b26716efd3a616f",class:"label-text"},this.textLeft))))}};i.style='@charset "UTF-8";.material-icons{font-family:"Material Icons";font-style:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.material-icons{font-size:16px !important}.pacas.inversed .toggle-container .label-text{color:#ffffff !important}.pacas.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.pacas.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.pacas .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.pacas .toggle-container .label-text{font-size:16px;color:#5c5c5c;display:flex;align-items:center;font-family:Montserrat;font-weight:500}.pacas .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.pacas .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.pacas .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.pacas .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.pacas .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.pacas .toggle-switch .toggle-label .toggle-icon.check{left:6px}.pacas .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.pacas .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #0d2a55;outline-offset:2px}.pacas .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #151515;outline-offset:2px}.pacas .toggle-switch input:checked+.toggle-label{background-color:#1f64cb}.pacas .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.pacas .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.pacas .toggle-switch input:not(:checked)+.toggle-label{background-color:#b5b5b5}.pacas .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.pacas .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#164790 !important;transition:background-color 0.1s ease;}.pacas .toggle-switch input:disabled+.toggle-label{background-color:#f4f5f7;border:1px solid #b5b5b5}.pacas .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#b5b5b5}.pacas .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#f4f5f7}.pacas .toggle-switch input:disabled+.toggle-label .material-icons{color:#b5b5b5}.ayu.inversed .toggle-container .label-text{color:#ffffff !important}.ayu.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.ayu.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.ayu .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.ayu .toggle-container .label-text{font-size:16px;color:#333333;display:flex;align-items:center;font-family:Barlow;font-weight:500}.ayu .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.ayu .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.ayu .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.ayu .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.ayu .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.ayu .toggle-switch .toggle-label .toggle-icon.check{left:6px}.ayu .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.ayu .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #6e5014;outline-offset:2px}.ayu .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #000000;outline-offset:2px}.ayu .toggle-switch input:checked+.toggle-label{background-color:#ebb037}.ayu .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.ayu .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.ayu .toggle-switch input:not(:checked)+.toggle-label{background-color:#cbcbcb}.ayu .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.ayu .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#89651c !important;transition:background-color 0.1s ease;}.ayu .toggle-switch input:disabled+.toggle-label{background-color:#faf9fb;border:1px solid #cbcbcb}.ayu .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#cbcbcb}.ayu .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#faf9fb}.ayu .toggle-switch input:disabled+.toggle-label .material-icons{color:#cbcbcb}.cantera.inversed .toggle-container .label-text{color:#ffffff !important}.cantera.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.cantera.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.cantera .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.cantera .toggle-container .label-text{font-size:16px;color:#333333;display:flex;align-items:center;font-family:Montserrat;font-weight:500}.cantera .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.cantera .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.cantera .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.cantera .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.cantera .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.cantera .toggle-switch .toggle-label .toggle-icon.check{left:6px}.cantera .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.cantera .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #103266;outline-offset:2px}.cantera .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #000000;outline-offset:2px}.cantera .toggle-switch input:checked+.toggle-label{background-color:#1f64cb}.cantera .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.cantera .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.cantera .toggle-switch input:not(:checked)+.toggle-label{background-color:#e6e6e6}.cantera .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.cantera .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#174b98 !important;transition:background-color 0.1s ease;}.cantera .toggle-switch input:disabled+.toggle-label{background-color:#faf9fb;border:1px solid #e6e6e6}.cantera .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#e6e6e6}.cantera .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#faf9fb}.cantera .toggle-switch input:disabled+.toggle-label .material-icons{color:#e6e6e6}.isicom.inversed .toggle-container .label-text{color:#ffffff !important}.isicom.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.isicom.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.isicom .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.isicom .toggle-container .label-text{font-size:16px;color:#3b404a;display:flex;align-items:center;font-family:Poppins;font-weight:500}.isicom .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.isicom .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.isicom .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.isicom .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.isicom .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.isicom .toggle-switch .toggle-label .toggle-icon.check{left:6px}.isicom .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.isicom .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #234222;outline-offset:2px}.isicom .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #303439;outline-offset:2px}.isicom .toggle-switch input:checked+.toggle-label{background-color:#468344}.isicom .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.isicom .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.isicom .toggle-switch input:not(:checked)+.toggle-label{background-color:#cbcbcb}.isicom .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.isicom .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#356233 !important;transition:background-color 0.1s ease;}.isicom .toggle-switch input:disabled+.toggle-label{background-color:#faf9fb;border:1px solid #cbcbcb}.isicom .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#cbcbcb}.isicom .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#faf9fb}.isicom .toggle-switch input:disabled+.toggle-label .material-icons{color:#cbcbcb}.digou.inversed .toggle-container .label-text{color:#ffffff !important}.digou.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.digou.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.digou .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.digou .toggle-container .label-text{font-size:16px;color:#586782;display:flex;align-items:center;font-family:Open Sans;font-weight:500}.digou .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.digou .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.digou .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.digou .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.digou .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.digou .toggle-switch .toggle-label .toggle-icon.check{left:6px}.digou .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.digou .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #006a55;outline-offset:2px}.digou .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #3e3e3e;outline-offset:2px}.digou .toggle-switch input:checked+.toggle-label{background-color:#00d3aa}.digou .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.digou .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.digou .toggle-switch input:not(:checked)+.toggle-label{background-color:#a4afbf}.digou .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.digou .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#009e80 !important;transition:background-color 0.1s ease;}.digou .toggle-switch input:disabled+.toggle-label{background-color:#e5e9ed;border:1px solid #a4afbf}.digou .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#a4afbf}.digou .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#e5e9ed}.digou .toggle-switch input:disabled+.toggle-label .material-icons{color:#a4afbf}.pentagono.inversed .toggle-container .label-text{color:#ffffff !important}.pentagono.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.pentagono.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.pentagono .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.pentagono .toggle-container .label-text{font-size:16px;color:#3b3c3d;display:flex;align-items:center;font-family:Inter;font-weight:500}.pentagono .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.pentagono .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.pentagono .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.pentagono .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.pentagono .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.pentagono .toggle-switch .toggle-label .toggle-icon.check{left:6px}.pentagono .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.pentagono .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #00183b;outline-offset:2px}.pentagono .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #232324;outline-offset:2px}.pentagono .toggle-switch input:checked+.toggle-label{background-color:#00388c}.pentagono .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.pentagono .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.pentagono .toggle-switch input:not(:checked)+.toggle-label{background-color:#cfcfd0}.pentagono .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.pentagono .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#002863 !important;transition:background-color 0.1s ease;}.pentagono .toggle-switch input:disabled+.toggle-label{background-color:#eff0f0;border:1px solid #cfcfd0}.pentagono .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#cfcfd0}.pentagono .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#eff0f0}.pentagono .toggle-switch input:disabled+.toggle-label .material-icons{color:#cfcfd0}.spgestiona.inversed .toggle-container .label-text{color:#FFFFFF !important}.spgestiona.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #FFFFFF !important;outline-offset:2px}.spgestiona.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #FFFFFF !important;outline-offset:2px}.spgestiona .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.spgestiona .toggle-container .label-text{font-size:16px;color:#4B4C4F;display:flex;align-items:center;font-family:Montserrat;font-weight:500}.spgestiona .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.spgestiona .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.spgestiona .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.spgestiona .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#FFFFFF;transition:transform 0.4s ease}.spgestiona .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#FFFFFF;pointer-events:none}.spgestiona .toggle-switch .toggle-label .toggle-icon.check{left:6px}.spgestiona .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.spgestiona .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #00183B;outline-offset:2px}.spgestiona .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #1B1D21;outline-offset:2px}.spgestiona .toggle-switch input:checked+.toggle-label{background-color:#00388C}.spgestiona .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.spgestiona .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#FFFFFF}.spgestiona .toggle-switch input:not(:checked)+.toggle-label{background-color:#E4E4E4}.spgestiona .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#FFFFFF}.spgestiona .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#002863 !important;transition:background-color 0.1s ease;}.spgestiona .toggle-switch input:disabled+.toggle-label{background-color:#F6F6F6;border:1px solid #E4E4E4}.spgestiona .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#E4E4E4}.spgestiona .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#F6F6F6}.spgestiona .toggle-switch input:disabled+.toggle-label .material-icons{color:#E4E4E4}.generic.inversed .toggle-container .label-text{color:#ffffff !important}.generic.inversed .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.generic.inversed .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #ffffff !important;outline-offset:2px}.generic .toggle-container{display:flex;align-items:center;justify-content:center;gap:16px}.generic .toggle-container .label-text{font-size:16px;color:#3b3c3d;display:flex;align-items:center;font-family:Montserrat;font-weight:500}.generic .toggle-switch{position:relative;display:inline-block;width:48px;height:24px}.generic .toggle-switch .toggle-input{opacity:0;position:absolute;width:0;height:0}.generic .toggle-switch .toggle-label{position:relative;cursor:pointer;display:block;border-radius:24px;transition:background-color 0.4s;height:100%;width:100%}.generic .toggle-switch .toggle-label .toggle-inner{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background-color:#ffffff;transition:transform 0.4s ease}.generic .toggle-switch .toggle-label .toggle-icon{position:absolute;top:57%;transform:translateY(-50%);color:#ffffff;pointer-events:none}.generic .toggle-switch .toggle-label .toggle-icon.check{left:6px}.generic .toggle-switch .toggle-label .toggle-icon.cross{right:6px}.generic .toggle-switch input:checked:focus-visible+.toggle-label{outline:2px solid #00183b;outline-offset:2px}.generic .toggle-switch input:not(:checked):focus-visible+.toggle-label{outline:2px solid #232324;outline-offset:2px}.generic .toggle-switch input:checked+.toggle-label{background-color:#00388c}.generic .toggle-switch input:checked+.toggle-label .toggle-inner{transform:translateX(24px)}.generic .toggle-switch input:checked+.toggle-label .toggle-icon.check{color:#ffffff}.generic .toggle-switch input:not(:checked)+.toggle-label{background-color:#cfcfd0}.generic .toggle-switch input:not(:checked)+.toggle-label .toggle-icon.cross{color:#ffffff}.generic .toggle-switch input:not(:disabled)+.toggle-label:active{background-color:#002863 !important;transition:background-color 0.1s ease;}.generic .toggle-switch input:disabled+.toggle-label{background-color:#eff0f0;border:1px solid #cfcfd0}.generic .toggle-switch input:disabled+.toggle-label .toggle-inner{background-color:#cfcfd0}.generic .toggle-switch input:disabled+.toggle-label .toggle-icon{color:#eff0f0}.generic .toggle-switch input:disabled+.toggle-label .material-icons{color:#cfcfd0}'}}]);