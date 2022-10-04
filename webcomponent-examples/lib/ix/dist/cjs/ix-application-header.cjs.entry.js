'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header-logo--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem}:host .logo{display:inline-block;position:relative;height:32px;overflow:hidden}";

const ApplicationHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "logo" }, index.h("slot", { name: "logo" })), index.h("span", { class: "name" }, this.name), index.h("slot", null)));
  }
};
ApplicationHeader.style = applicationHeaderCss;

exports.ix_application_header = ApplicationHeader;
