"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[4],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),N=o,k=m["".concat(l,".").concat(N)]||m[N]||d[N]||s;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function N(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9733:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return N},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),r=["components"],i={title:"Configuration"},l=void 0,p={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"ts-node supports a variety of options which can be specified via tsconfig.json, as CLI flags, as environment variables, or programmatically.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/ts-node/docs/configuration",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration"},sidebar:"primarySidebar",previous:{title:"Usage",permalink:"/ts-node/docs/usage"},next:{title:"Options",permalink:"/ts-node/docs/options"}},c={},d=[{value:"CLI flags",id:"cli-flags",level:2},{value:"Via tsconfig.json (recommended)",id:"via-tsconfigjson-recommended",level:2},{value:"@tsconfig/bases",id:"tsconfigbases",level:3},{value:"Default config",id:"default-config",level:3},{value:"<code>node</code> flags",id:"node-flags",level:2}],m={toc:d};function N(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ts-node supports a variety of options which can be specified via ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", as CLI flags, as environment variables, or programmatically."),(0,s.kt)("p",null,"For a complete list, see ",(0,s.kt)("a",{parentName:"p",href:"/ts-node/docs/options"},"Options"),"."),(0,s.kt)("h2",{id:"cli-flags"},"CLI flags"),(0,s.kt)("p",null,"ts-node CLI flags must come ",(0,s.kt)("em",{parentName:"p"},"before")," the entrypoint script. For example:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"$ ts-node --project tsconfig-dev.json say-hello.ts Ronald")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"Hello, Ronald"),(0,s.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"!"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"$ ts-node --project tsconfig-dev.json say-hello.ts Ronald")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"Hello, Ronald"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"!")))))),(0,s.kt)("h2",{id:"via-tsconfigjson-recommended"},"Via tsconfig.json (recommended)"),(0,s.kt)("p",null,"ts-node automatically finds and loads ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".  Most ts-node options can be specified in a ",(0,s.kt)("inlineCode",{parentName:"p"},'"ts-node"')," object using their programmatic, camelCase names. We recommend this because it works even when you cannot pass CLI flags, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"node --require ts-node/register")," and when using shebangs."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"--skipProject")," to skip loading the ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".  Use ",(0,s.kt)("inlineCode",{parentName:"p"},"--project")," to explicitly specify the path to a ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,s.kt)("p",null,"When searching, it is resolved using ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"the same search behavior as ",(0,s.kt)("inlineCode",{parentName:"a"},"tsc")),". By default, this search is performed relative to the entrypoint script. In ",(0,s.kt)("inlineCode",{parentName:"p"},"--cwdMode")," or if no entrypoint is specified -- for example when using the REPL -- the search is performed relative to ",(0,s.kt)("inlineCode",{parentName:"p"},"--cwd")," / ",(0,s.kt)("inlineCode",{parentName:"p"},"process.cwd()"),"."),(0,s.kt)("p",null,"You can use this sample configuration as a starting point:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// This is an alias to @tsconfig/node12: https://github.com/tsconfig/bases")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"extends"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node/node12/tsconfig.json"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// Most ts-node options can be specified here using their programmatic names.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"ts-node"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// It is faster to skip typechecking.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// Remove if you want ts-node to do typechecking.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"transpileOnly"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"true"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"files"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"true"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"compilerOptions"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// compilerOptions specified here will override those declared below,")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// but *only* in ts-node.  Useful if you want ts-node and tsc to use")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// different options with a single tsconfig.json.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"compilerOptions"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// typescript options here")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// This is an alias to @tsconfig/node12: https://github.com/tsconfig/bases")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"extends"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node/node12/tsconfig.json"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Most ts-node options can be specified here using their programmatic names.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ts-node"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// It is faster to skip typechecking.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Remove if you want ts-node to do typechecking.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"transpileOnly"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"true"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"files"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"true"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"compilerOptions"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// compilerOptions specified here will override those declared below,")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// but *only* in ts-node.  Useful if you want ts-node and tsc to use")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// different options with a single tsconfig.json.")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"compilerOptions"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// typescript options here")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("p",null,"Our bundled ",(0,s.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/ts-node@latest/tsconfig.schema.json"},"JSON schema")," lists all compatible options."),(0,s.kt)("h3",{id:"tsconfigbases"},"@tsconfig/bases"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/tsconfig/bases"},"@tsconfig/bases")," maintains recommended configurations for several node versions.\nAs a convenience, these are bundled with ts-node."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"extends"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node/node16/tsconfig.json"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// Or install directly with `npm i -D @tsconfig/node16`")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"extends"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@tsconfig/node16/tsconfig.json"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"extends"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node/node16/tsconfig.json"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Or install directly with `npm i -D @tsconfig/node16`")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"extends"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@tsconfig/node16/tsconfig.json"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("h3",{id:"default-config"},"Default config"),(0,s.kt)("p",null,"If no ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," is loaded from disk, ts-node will use the newest recommended defaults from\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tsconfig/bases/"},"@tsconfig/bases")," compatible with your ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript")," versions.\nWith the latest ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript"),", this is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tsconfig/bases/blob/master/bases/node16.json"},(0,s.kt)("inlineCode",{parentName:"a"},"@tsconfig/node16")),"."),(0,s.kt)("p",null,"Older versions of ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript")," are incompatible with ",(0,s.kt)("inlineCode",{parentName:"p"},"@tsconfig/node16"),".  In those cases we will use an older default configuration."),(0,s.kt)("p",null,"When in doubt, ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node --showConfig")," will log the configuration being used, and ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node -vv")," will log ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript")," versions."),(0,s.kt)("h2",{id:"node-flags"},(0,s.kt)("inlineCode",{parentName:"h2"},"node")," flags"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html"},(0,s.kt)("inlineCode",{parentName:"a"},"node")," flags")," must be passed directly to ",(0,s.kt)("inlineCode",{parentName:"p"},"node"),"; they cannot be passed to the ts-node binary nor can they be specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json")),(0,s.kt)("p",null,"We recommend using the ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},(0,s.kt)("inlineCode",{parentName:"a"},"NODE_OPTIONS"))," environment variable to pass options to ",(0,s.kt)("inlineCode",{parentName:"p"},"node"),"."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"NODE_OPTIONS="),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'--trace-deprecation --abort-on-uncaught-exception'"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ts-node ./index.ts"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"NODE_OPTIONS="),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"--trace-deprecation --abort-on-uncaught-exception"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ts-node ./index.ts")))))),(0,s.kt)("p",null,"Alternatively, you can invoke ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," directly and install ts-node via ",(0,s.kt)("inlineCode",{parentName:"p"},"--require"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"-r")),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"node --trace-deprecation --abort-on-uncaught-exception -r ts-node/register ./index.ts"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"node --trace-deprecation --abort-on-uncaught-exception -r ts-node/register ./index.ts")))))))}N.isMDXComponent=!0}}]);