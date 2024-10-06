var k=Object.create;var E=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var j=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),M=(n,e)=>{for(var t in e)E(n,t,{get:e[t],enumerable:!0})},R=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of V(e))!U.call(n,i)&&i!==t&&E(n,i,{get:()=>e[i],enumerable:!(s=D(e,i))||s.enumerable});return n};var W=(n,e,t)=>(t=n!=null?k(X(n)):{},R(e||!n||!n.__esModule?E(t,"default",{value:n,enumerable:!0}):t,n)),z=n=>R(E({},"__esModule",{value:!0}),n);var l=(n,e,t)=>new Promise((s,i)=>{var r=h=>{try{a(t.next(h))}catch(g){i(g)}},o=h=>{try{a(t.throw(h))}catch(g){i(g)}},a=h=>h.done?s(h.value):Promise.resolve(h.value).then(r,o);a((t=t.apply(n,e)).next())});var O=j((pe,I)=>{function A(n){return Array.isArray(n)?n:[n]}var S="",C=" ",N="\\",H=/^\s+$/,K=/(?:[^\\]|^)\\$/,Y=/^\\!/,q=/^\\#/,J=/\r?\n/g,Q=/^\.*\/|^\.+$/,y="/",b="node-ignore";typeof Symbol!="undefined"&&(b=Symbol.for("node-ignore"));var P=b,Z=(n,e,t)=>Object.defineProperty(n,e,{value:t}),ee=/([0-z])-([0-z])/g,x=()=>!1,te=n=>n.replace(ee,(e,t,s)=>t.charCodeAt(0)<=s.charCodeAt(0)?e:S),ne=n=>{let{length:e}=n;return n.slice(0,e-e%2)},se=[[/^\uFEFF/,()=>S],[/((?:\\\\)*?)(\\?\s+)$/,(n,e,t)=>e+(t.indexOf("\\")===0?C:S)],[/(\\+?)\s/g,(n,e)=>{let{length:t}=e;return e.slice(0,t-t%2)+C}],[/[\\$.|*+(){^]/g,n=>`\\${n}`],[/(?!\\)\?/g,()=>"[^/]"],[/^\//,()=>"^"],[/\//g,()=>"\\/"],[/^\^*\\\*\\\*\\\//,()=>"^(?:.*\\/)?"],[/^(?=[^^])/,function(){return/\/(?!$)/.test(this)?"^":"(?:^|\\/)"}],[/\\\/\\\*\\\*(?=\\\/|$)/g,(n,e,t)=>e+6<t.length?"(?:\\/[^\\/]+)*":"\\/.+"],[/(^|[^\\]+)(\\\*)+(?=.+)/g,(n,e,t)=>{let s=t.replace(/\\\*/g,"[^\\/]*");return e+s}],[/\\\\\\(?=[$.|*+(){^])/g,()=>N],[/\\\\/g,()=>N],[/(\\)?\[([^\]/]*?)(\\*)($|\])/g,(n,e,t,s,i)=>e===N?`\\[${t}${ne(s)}${i}`:i==="]"&&s.length%2===0?`[${te(t)}${s}]`:"[]"],[/(?:[^*])$/,n=>/\/$/.test(n)?`${n}$`:`${n}(?=$|\\/$)`],[/(\^|\\\/)?\\\*$/,(n,e)=>`${e?`${e}[^/]+`:"[^/]*"}(?=$|\\/$)`]],$=Object.create(null),ie=(n,e)=>{let t=$[n];return t||(t=se.reduce((s,[i,r])=>s.replace(i,r.bind(n)),n),$[n]=t),e?new RegExp(t,"i"):new RegExp(t)},v=n=>typeof n=="string",re=n=>n&&v(n)&&!H.test(n)&&!K.test(n)&&n.indexOf("#")!==0,ae=n=>n.split(J),L=class{constructor(e,t,s,i){this.origin=e,this.pattern=t,this.negative=s,this.regex=i}},oe=(n,e)=>{let t=n,s=!1;n.indexOf("!")===0&&(s=!0,n=n.substr(1)),n=n.replace(Y,"!").replace(q,"#");let i=ie(n,e);return new L(t,n,s,i)},le=(n,e)=>{throw new e(n)},c=(n,e,t)=>v(n)?n?c.isNotRelative(n)?t(`path should be a \`path.relative()\`d string, but got "${e}"`,RangeError):!0:t("path must not be empty",TypeError):t(`path must be a string, but got \`${e}\``,TypeError),G=n=>Q.test(n);c.isNotRelative=G;c.convert=n=>n;var T=class{constructor({ignorecase:e=!0,ignoreCase:t=e,allowRelativePaths:s=!1}={}){Z(this,P,!0),this._rules=[],this._ignoreCase=t,this._allowRelativePaths=s,this._initCache()}_initCache(){this._ignoreCache=Object.create(null),this._testCache=Object.create(null)}_addPattern(e){if(e&&e[P]){this._rules=this._rules.concat(e._rules),this._added=!0;return}if(re(e)){let t=oe(e,this._ignoreCase);this._added=!0,this._rules.push(t)}}add(e){return this._added=!1,A(v(e)?ae(e):e).forEach(this._addPattern,this),this._added&&this._initCache(),this}addPattern(e){return this.add(e)}_testOne(e,t){let s=!1,i=!1;return this._rules.forEach(r=>{let{negative:o}=r;if(i===o&&s!==i||o&&!s&&!i&&!t)return;r.regex.test(e)&&(s=!o,i=o)}),{ignored:s,unignored:i}}_test(e,t,s,i){let r=e&&c.convert(e);return c(r,e,this._allowRelativePaths?x:le),this._t(r,t,s,i)}_t(e,t,s,i){if(e in t)return t[e];if(i||(i=e.split(y)),i.pop(),!i.length)return t[e]=this._testOne(e,s);let r=this._t(i.join(y)+y,t,s,i);return t[e]=r.ignored?r:this._testOne(e,s)}ignores(e){return this._test(e,this._ignoreCache,!1).ignored}createFilter(){return e=>!this.ignores(e)}filter(e){return A(e).filter(this.createFilter())}test(e){return this._test(e,this._testCache,!0)}},m=n=>new T(n),he=n=>c(n&&c.convert(n),n,x);m.isPathValid=he;m.default=m;I.exports=m;if(typeof process!="undefined"&&(process.env&&process.env.IGNORE_TEST_WIN32||process.platform==="win32")){let n=t=>/^\\\\\?\\/.test(t)||/["<>|\u0000-\u001F]+/u.test(t)?t:t.replace(/\\/g,"/");c.convert=n;let e=/^[a-z]:\//i;c.isNotRelative=t=>e.test(t)||G(t)}});var ge={};M(ge,{default:()=>w});module.exports=z(ge);var B=W(O()),f=require("obsidian");var p=require("obsidian");var F={ignore:[],timeToRemoveLeaf:500},_=class extends p.PluginSettingTab{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),new p.Setting(e).setName("Ignored Path Pattern").setDesc("Manage notes which do not display the graph banner. This pattern follows .gitignore spec.").addTextArea(t=>t.setPlaceholder(`ignored-path.md
/ignored-dir
!/ignored-dir/not-ignored-path.md`).setValue(this.plugin.settings.ignore.join(`
`)).onChange(s=>l(this,null,function*(){this.plugin.settings.ignore=s.split(`
`),yield this.plugin.saveData(this.plugin.settings)}))),new p.Setting(e).setName("Advanced: Time [ms] to remove the graph leaf for the banner").setDesc(`This plugin temporarily create a local graph leaf to display in the banner of the notes.
If you want to do something when the local graph opened, for example by using the "Sync Graph Settings" plugin, set this time settings.
If set to 0ms, the leaf is immediately erased.
To reflect this setting, please reload the app.`).addText(t=>t.setPlaceholder("500").setValue(String(this.plugin.settings.timeToRemoveLeaf)).onChange(s=>l(this,null,function*(){let i=Number(s);(s===""||Number.isNaN(i)||i<0)&&new p.Notice("Please specify a valid number."),this.plugin.settings.timeToRemoveLeaf=i,yield this.plugin.saveData(this.plugin.settings)})))}};var u=class u extends f.Plugin{constructor(){super(...arguments);this.unloadListeners=[];this.graphLeaf=null;this.graphNode=null}onload(){return l(this,null,function*(){yield this.loadSettings(),this.addSettingTab(new _(this.app,this)),this.app.workspace.trigger("parse-style-settings"),this.registerEvent(this.app.workspace.on("file-open",t=>l(this,null,function*(){var h;if(!t||t.extension!=="md")return;let s=(0,B.default)().add(this.settings.ignore).ignores(t.path);if((h=this.graphNode)==null||h.toggleClass("hidden",s),s)return;let i=yield this.tryUntilNonNull(()=>this.app.workspace.getActiveViewOfType(f.MarkdownView));if(i.file!==t)throw new Error("Failed to get file view");if(this.graphLeaf||(this.graphLeaf=yield this.createNewLeafForGraph()),this.graphLeaf.setViewState({type:"localgraph",state:{file:t.path}}),!this.graphNode){let g=this.graphLeaf.view.containerEl.getElementsByClassName("view-content").item(0);if(!g)throw new Error("Failed to get graph node");g.addClass(u.graphBannerNodeClass),this.graphNode=g}let r=yield this.tryUntilNonNull(()=>this.graphNode);if(i.containerEl.contains(r))return;let o=r.getElementsByClassName("graph-controls").item(0);o==null||o.toggleClass("is-close",!0);let a=i.containerEl.getElementsByClassName("inline-title").item(0);if(!(a!=null&&a.parentElement)||!(a!=null&&a.nextSibling))throw new Error("Failed to get note header");a.parentElement.insertBefore(r,a.nextSibling),this.registerEvent(this.app.workspace.on("layout-change",()=>l(this,null,function*(){let g=this.app.workspace.getActiveViewOfType(f.MarkdownView);if(!g)return;let d=yield this.tryUntilNonNull(()=>g.containerEl.getElementsByClassName("inline-title").item(0));if(!d.parentElement||!d.nextSibling)throw new Error("Failed to get note header");d.parentElement.contains(r)||d.parentElement.insertBefore(r,d.nextSibling)})))})))})}onunload(){return l(this,null,function*(){var t,s;console.log("Unloading GraphBannerPlugin"),(t=this.graphLeaf)==null||t.detach(),this.graphLeaf=null,(s=this.graphNode)==null||s.removeClass(u.graphBannerNodeClass),this.graphNode=null;for(let i of this.unloadListeners)i()})}loadSettings(){return l(this,null,function*(){this.settings=Object.assign({},F,yield this.loadData())})}tryUntilNonNull(t,s=200,i=10){return l(this,null,function*(){for(let r=0;r<i;r++){let o=t();if(o)return o;yield new Promise(a=>setTimeout(a,s))}throw new Error(`Failed to get result: ${t.toString().slice(0,100)}...`)})}createNewLeafForGraph(){return l(this,null,function*(){let t=this.app.workspace.getLeaf("tab");yield t.setViewState({type:"localgraph"});let s=()=>t.parent.removeChild(t);return this.settings.timeToRemoveLeaf>0?setTimeout(s,this.settings.timeToRemoveLeaf):s(),t})}};u.graphBannerNodeClass="graph-banner-content";var w=u;