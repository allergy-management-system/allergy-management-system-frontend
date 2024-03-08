import{Q as s,Y as g,X as f,N as b,b as o,D as w,E as h,F as p,Z as I,k as x,c as u,j as y,_ as k,d as C,C as D,R as A,i as E,B as $,f as P,A as T}from"./indexhtml-wbxNgqLu.js";import{o as K}from"./base-panel-Zq4jKPA_-pbIi4HQD.js";const O="copilot-outline-panel{padding:0;position:relative;height:var(--default-content-height, 100%);overflow:auto}copilot-outline-panel vaadin-grid{background-color:transparent;--vaadin-grid-cell-background: transparent;--vaadin-grid-cell-padding: var(--space-100) var(--space-150);font:inherit;color:inherit}copilot-outline-panel vaadin-grid::part(cell){cursor:default;min-height:auto}copilot-outline-panel vaadin-grid::part(row):hover{outline:1px solid var(--selection-color);outline-offset:-1px}copilot-outline-panel vaadin-grid::part(selected-row){background:var(--blue-100);color:var(--color-high-contrast)}copilot-outline-panel vaadin-grid::part(selected-row):hover{outline:0}copilot-outline-panel vaadin-grid::part(cell):focus-visible,copilot-outline-panel vaadin-grid::part(row):focus-visible{outline:2px solid var(--blue-300);outline-offset:-2px}copilot-outline-panel vaadin-grid-tree-toggle::part(toggle){color:var(--border-color-high-contrast);opacity:0}copilot-outline-panel:hover vaadin-grid-tree-toggle::part(toggle){opacity:1}";var F=Object.defineProperty,S=Object.getOwnPropertyDescriptor,c=(e,t,i,r)=>{for(var a=r>1?void 0:r?S(t,i):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(a=(r?n(t,i,a):n(a))||a);return r&&a&&F(t,i,a),a};function m(e){if(e.currentTarget)return e.currentTarget.getEventContext(e).item}let d=class extends K{constructor(){super(...arguments),this.expandedItems=[],this.initialExpandDone=!1,this.filter=e=>s(e)?!0:!!g(e),this.getFilteredChildren=e=>{const t=f(e);if(t.length===0)return[];const i=t.filter(this.filter);return i.length===t.length?t:t.flatMap(r=>i.includes(r)?r:this.getFilteredChildren(r))},this.dataProvider=(e,t)=>{if(!this.reactApp)t([],0);else if(!e.parentItem)t([this.reactApp],1);else{const i=this.getFilteredChildren(e.parentItem);t(i,i.length)}}}connectedCallback(){super.connectedCallback(),this.componentTreeUpdated(),this.onEventBus("component-tree-updated",()=>this.componentTreeUpdated())}render(){return b`
      <style>
        ${O}
      </style>
      <vaadin-grid
        all-rows-visible
        .dataProvider=${this.dataProvider}
        drop-mode="on-top-or-between"
        .selectedItems=${o.getSelections.map(e=>w(e.element))}
        @keydown=${this.gridKeyDown}
        @grid-drop="${e=>{const{detail:t}=e,{dropTargetItem:i,dropLocation:r}=t,a=e.originalEvent;this.handleDropEvent(i,r,a.dataTransfer)}}"
        @grid-dragstart="${e=>{this.draggedItem=e.detail.draggedItems[0]}}"
        .dropFilter="${e=>e.item!==this.draggedItem}"
        @mousemove=${this.gridItemMouseMove}
        @click=${this.gridItemClick}
        theme="no-border no-row-borders">
        <vaadin-grid-tree-column
          auto-width
          .__getToggleContent=${this.renderToggleColumn}
          .__isLeafItem=${this.isLeafItem.bind(this)}></vaadin-grid-tree-column>
      </vaadin-grid>
    `}handleDropEvent(e,t,i){const r=h.dragSource;h.endDrag();let a;switch(t){case"below":a="after";break;case"above":a="before";break;case"on-top":a="append";break;default:throw new Error("Unknown drop location")}if(r)p.emit("drop-outline",{draggedElement:r,dropLocation:a,fiberNode:e});else{const l=i.getData("text/plain"),n=i.getData("application/imports"),v=n?JSON.parse(n):{};p.emit("drop-outline",{templateProperties:{template:l,imports:v},dropLocation:a,fiberNode:e})}}renderToggleColumn(e,t){let i="";return g(t)?i="♦ ":I(t)&&(i="</> "),`${i}${x(t)}`}isLeafItem(e){return this.getFilteredChildren(e).length===0}gridKeyDown(e){e.altKey||e.metaKey||e.ctrlKey||e.shiftKey||(e.code==="Space"?(e.preventDefault(),e.stopPropagation()):(e.key==="Backspace"||e.key==="Delete")&&(p.emit("delete-selected",{}),e.preventDefault(),e.stopPropagation()))}gridItemMouseMove(e){let t;const i=m(e);i&&s(i)&&(t=u(i)),t?o.setHighlighted({element:t}):o.setHighlighted(void 0)}gridItemClick(e){const t=m(e);if(!t||!s(t))return;!e.metaKey&&!e.ctrlKey&&o.clearSelection();const i=u(t);i?o.isSelected(i)?o.deselect(i):o.select(i):y("Unable to find element for selection",t),k("use-outline")}updated(e){super.updated(e),this.initialExpandDone||this.expandAll()}expandAll(){this.reactApp&&this.grid&&(this.grid.expandedItems=[this.reactApp,...C(this.reactApp)],this.initialExpandDone=!0)}componentTreeUpdated(){if(this.reactApp=D(),this.grid){if(this.reactApp){const e=this.grid.expandedItems.map(t=>A(t));e.length>0&&!e.includes(this.reactApp)?this.expandAll():this.grid.expandedItems=e}this.grid.clearCache()}this.requestUpdate()}};c([E("vaadin-grid")],d.prototype,"grid",2);c([$()],d.prototype,"draggedItem",2);d=c([T("copilot-outline-panel")],d);const U={header:"Outline",expanded:!0,draggable:!0,panelOrder:0,panel:"left",floating:!1,tag:"copilot-outline-panel",showOn:[P.HillaReact]},L={init(e){e.addPanel(U)}};window.Vaadin.copilotPlugins.push(L);export{d as CopilotOutlinePanel};
