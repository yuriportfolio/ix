import{r,h as e,H as d,g as t}from"./p-47ea9884.js";const a=class{constructor(e){r(this,e),this.individual=!0,this.corners="rounded"}cardClasses(){return{card:!0,individual:this.individual,left:"left"===this.corners,right:"right"===this.corners}}render(){return e(d,null,e("div",{class:this.cardClasses()},e("div",{class:"header"},e("slot",{name:"header"})),e("div",{class:"separator"}),e("div",{class:"content"},e("slot",null))))}get hostElement(){return t(this)}};a.style=".card.sc-ix-date-time-card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset}.card.individual.sc-ix-date-time-card{box-shadow:0 0 2px 0 var(--theme-input--border-color-bottom--disabled), 0 4px 8px 0 var(--theme-input--border-color-bottom--disabled), 0 12px 18px 0px var(--theme-input--border-color-bottom--disabled);border:1px solid var(--theme-menu--border-color);border-radius:4px}.card.left.sc-ix-date-time-card{border-radius:4px 0 0 4px}.card.right.sc-ix-date-time-card{border-radius:0 4px 4px 0}.card.sc-ix-date-time-card .header.sc-ix-date-time-card{padding:1rem}.card.sc-ix-date-time-card .separator.sc-ix-date-time-card{border:1px solid var(--theme-datepicker-separator--background);width:100%}.card.sc-ix-date-time-card .content.sc-ix-date-time-card{height:100%;padding:0px 1rem 1rem 1rem}";export{a as ix_date_time_card}