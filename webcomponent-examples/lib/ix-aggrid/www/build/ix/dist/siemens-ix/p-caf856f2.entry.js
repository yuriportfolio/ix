import{r as t,h as e,H as i,g as s,c as n}from"./p-47ea9884.js";import{c as r}from"./p-fbe40498.js";import{a as o}from"./p-0bf04780.js";const l=class{constructor(e){t(this,e),this.mutationObserver=r(this.onMutation.bind(this)),this.itemHeight="S",this.compact=!1,this.animated=!0}componentDidLoad(){if(this.animated&&this.triggerFadeIn(),"number"==typeof this.itemHeight){const t=o(this.itemHeight);this.el.querySelectorAll(".ix-event-list-item").forEach((e=>{e.classList.add("d-flex"),this.setCustomHeight(e,t)}))}this.mutationObserver.observe(this.el,{childList:!0,subtree:!0})}onMutation(t){this.triggerFadeOut().then((()=>{if("number"==typeof this.itemHeight){const e=o(this.itemHeight);t.filter((t=>"childList"===t.type)).forEach((t=>t.addedNodes.forEach((t=>{var i;const s=t;(null===(i=s.classList)||void 0===i?void 0:i.contains("ix-event-list-item"))&&(s.classList.add("d-flex"),this.setCustomHeight(s,e))}))))}this.triggerFadeIn()}))}setCustomHeight(t,e){t.style.height=e,t.style.maxHeight=e}triggerFadeOut(){return this.animated?this.el.querySelector("ul").animate([{opacity:1,easing:"ease-in"},{opacity:0}],{duration:l.fadeOutDuration}).finished:Promise.resolve()}triggerFadeIn(){this.animated&&this.el.querySelectorAll(".ix-event-list-item").forEach(((t,e)=>{const i=80*e;t.animate([{opacity:0},{opacity:0,easing:"ease-out",offset:i/(i+l.fadeInDuration)},{opacity:1}],{duration:l.fadeInDuration+i,iterations:1})}))}render(){return e(i,{class:{"item-size-s":"S"===this.itemHeight,"item-size-l":"L"===this.itemHeight,compact:this.compact,chevron:this.chevron}},e("ul",null,e("slot",null)))}get el(){return s(this)}};l.fadeOutDuration=50,l.fadeInDuration=150,l.style=".sc-ix-event-list-h{display:block;position:relative}ul.sc-ix-event-list{list-style:none;padding:0;margin-bottom:0}.sc-ix-event-list-s>.sc-ix-event-list-h:not(.item-size-s) .ix-event-list-item,.sc-ix-event-list-h:not(.item-size-l) .ix-event-list-item.sc-ix-event-list{display:none}.sc-ix-event-list-h.chevron .sc-ix-event-list-s .ix-event-list-item .chevron-icon{display:initial}.item-size-l .sc-ix-event-list-s .ix-event-list-item{height:6.5rem;max-height:6.5rem}.item-size-l .sc-ix-event-list-s .ix-event-list-item .event-content{height:6.5rem;max-height:6.5rem;white-space:normal}.compact .sc-ix-event-list-s .ix-event-list-item{margin-bottom:0px;border-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .indicator{border-top-left-radius:0px;border-bottom-left-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .cui-event-list-item-content-container{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.compact .sc-ix-event-list-s .ix-event-list-item i.glyph{display:none}.compact.sc-ix-event-list .compact.sc-ix-event-list:not(:last-child) .cui-event-list-item-content-container.sc-ix-event-list{border-bottom:none}";const a=class{constructor(e){t(this,e),this.itemClick=n(this,"itemClick",7),this.opacity=1}handleItemClick(){this.itemClick.emit()}render(){return e("div",{class:{"ix-event-list-item":!0,selected:this.selected,disabled:this.disabled}},e("div",{class:"indicator "+(this.color?"":"indicator-empty"),style:{"background-color":this.color?`var(--theme-${this.color})`:"inherit",opacity:`${this.disabled?.4:this.opacity}`}}),e("div",{class:"cui-event-list-item-content-container"},e("div",{class:"event-content"},e("slot",null)),e("i",{class:"glyph glyph-16 glyph-chevron-right chevron-icon"})))}get el(){return s(this)}};a.style=".ix-event-list-item{display:flex;align-items:center;position:relative;height:2.5rem;max-height:2.5rem;border-radius:0.25rem;background-color:var(--theme-event-list-item-bg);overflow:hidden;cursor:pointer;margin-bottom:0.5rem}.ix-event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.ix-event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}.ix-event-list-item .cui-event-list-item-content-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-list-item-border);border-top-left-radius:0;border-top-right-radius:0.25rem;border-bottom-left-radius:0;border-bottom-right-radius:0.25rem;border-left:none;padding-left:1rem}.ix-event-list-item .chevron-icon{display:none;margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}.ix-event-list-item .event-content{display:flex;align-items:center;width:100%;height:100%;overflow:hidden}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):hover{background-color:var(--theme-event-list-item-hover)}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):active{background-color:var(--theme-event-list-item-pressed)}.ix-event-list-item.selected{background-color:var(--theme-event-item--background--selected)}.ix-event-list-item[disabled],.ix-event-list-item.disabled{pointer-events:none}";export{l as ix_event_list,a as ix_event_list_item}