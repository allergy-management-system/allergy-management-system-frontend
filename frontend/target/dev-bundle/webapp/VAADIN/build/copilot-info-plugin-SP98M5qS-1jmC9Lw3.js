import{O as b,n as h,N as v,a as C,B as I,V as w,A}from"./indexhtml-4HuR3ArC.js";import{o as x}from"./base-panel-Zq4jKPA_-55R649lL.js";var E=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],s=0;s<e.rangeCount;s++)o.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),t&&t.focus()}},S=E,m={"text/plain":"Text","text/html":"Url",default:"Text"},R="Copy to clipboard: #{key}, Enter";function D(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function k(e,t){var o,s,r,d,i,a,p=!1;t||(t={}),o=t.debug||!1;try{r=S(),d=document.createRange(),i=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=m[t.format]||m.default;window.clipboardData.setData(u,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(a),d.selectNodeContents(a),i.addRange(d);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");p=!0}catch(l){o&&console.error("unable to copy using execCommand: ",l),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),s=D("message"in t?t.message:R),window.prompt(s,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(d):i.removeAllRanges()),a&&document.body.removeChild(a),r()}return p}var $=k;const N=w($);var c=(e=>(e.ACTIVE="active",e.INACTIVE="inactive",e.UNAVAILABLE="unavailable",e.ERROR="error",e))(c||{}),T=Object.defineProperty,V=Object.getOwnPropertyDescriptor,g=(e,t,o,s)=>{for(var r=s>1?void 0:s?V(t,o):t,d=e.length-1,i;d>=0;d--)(i=e[d])&&(r=(s?i(t,o,r):i(r))||r);return s&&r&&T(t,o,r),r};const n=window.Vaadin.devTools;let f=class extends x{constructor(){super(),this.handleServerInfoEvent=e=>{this.serverInfo=e.data;const t=Math.max(this.getIndex("Flow"),this.getIndex("Vaadin"),this.getIndex("Hilla"));this.serverInfo.versions.splice(t+1,0,{name:"Copilot",version:b}),h().then(o=>{o&&(this.serverInfo.versions.push({name:"Vaadin Employee",version:"true"}),this.requestUpdate("serverInfo"))})},this.serverInfo={versions:[]}}connectedCallback(){super.connectedCallback(),this.onCommand("serverInfo",this.handleServerInfoEvent)}getIndex(e){return this.serverInfo.versions.findIndex(t=>t.name===e)}render(){return v` <div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        ${this.serverInfo.versions.map(e=>v`
            <dt>${e.name}</dt>
            <dd>${e.version}</dd>
          `)}
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${!n.conf.enable||(n.frontendStatus===c.UNAVAILABLE||n.frontendStatus===c.ERROR)&&(n.javaStatus===c.UNAVAILABLE||n.javaStatus===c.ERROR)}
              ?checked="${n.frontendStatus===c.ACTIVE||n.javaStatus===c.ACTIVE}"
              @change=${e=>n.setActive(e.target.checked)} />
            <span class="slider"></span>
          </label>
        </dt>
        <dd class="live-reload-status" style="--status-color: ${n.getStatusColor(n.javaStatus)}">
          Java ${n.javaStatus} ${n.conf.backend?`(${n.conf.backend})`:""}
        </dd>
        <dd class="live-reload-status" style="--status-color: ${n.getStatusColor(n.frontendStatus)}">
          Front end ${n.frontendStatus}
        </dd>
      </dl>
    </div>`}copyInfoToClipboard(){const e=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),t=Array.from(e).map(o=>(o.localName==="dd"?": ":`
`)+o.textContent.trim()).join("").replace(/^\n/,"");N(t),n.showNotification(C.INFORMATION,"Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}};g([I()],f.prototype,"serverInfo",2);f=g([A("copilot-info-panel")],f);const O={header:"Info",expanded:!0,draggable:!0,panelOrder:0,panel:"right",floating:!1,tag:"copilot-info-panel"},U={init(e){e.addPanel(O)}};window.Vaadin.copilotPlugins.push(U);export{f as CopilotInfoPanel};
