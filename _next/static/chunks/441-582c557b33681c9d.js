"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{7441:function(e,t,n){function s(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}n.d(t,{TU:function(){return ep}});let r=s(),i=/[&<>"']/,l=RegExp(i.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o=RegExp(a.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>c[e];function p(e,t){if(t){if(i.test(e))return e.replace(l,h)}else if(a.test(e))return e.replace(o,h);return e}let u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,k=/(^|[^\[])\^/g;function g(e,t){let n="string"==typeof e?e:e.source;t=t||"";let s={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(k,"$1"),n=n.replace(e,r),s},getRegex:()=>new RegExp(n,t)};return s}function f(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return null}return e}let d={exec:()=>null};function x(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"}).split(/ \|/),s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("")}for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function b(e,t,n){let s=e.length;if(0===s)return"";let r=0;for(;r<s;){let i=e.charAt(s-r-1);if(i!==t||n){if(i!==t&&n)r++;else break}else r++}return e.slice(0,s-r)}function m(e,t,n,s){let r=t.href,i=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;let e={type:"link",raw:n,href:r,title:i,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,e}return{type:"image",raw:n,href:r,title:i,text:p(l)}}class w{options;rules;lexer;constructor(e){this.options=e||r}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:b(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=function(e,t){let n=e.match(/^(\s+)(?:```)/);if(null===n)return t;let s=n[1];return t.split("\n").map(e=>{let t=e.match(/^\s+/);if(null===t)return e;let[n]=t;return n.length>=s.length?e.slice(s.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=b(e,"#");this.options.pedantic?e=t.trim():(!t||/ $/.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:b(t[0],"\n")}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=b(t[0],"\n").split("\n"),n="",s="",r=[];for(;e.length>0;){let t,i=!1,l=[];for(t=0;t<e.length;t++)if(/^ {0,3}>/.test(e[t]))l.push(e[t]),i=!0;else if(i)break;else l.push(e[t]);e=e.slice(t);let a=l.join("\n"),o=a.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,"\n    $1").replace(/^ {0,3}>[ \t]?/gm,"");n=n?`${n}
${a}`:a,s=s?`${s}
${o}`:o;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(o,r,!0),this.lexer.state.top=c,0===e.length)break;let h=r[r.length-1];if(h?.type==="code")break;if(h?.type==="blockquote"){let t=h.raw+"\n"+e.join("\n"),i=this.blockquote(t);r[r.length-1]=i,n=n.substring(0,n.length-h.raw.length)+i.raw,s=s.substring(0,s.length-h.text.length)+i.text;break}if(h?.type==="list"){let t=h.raw+"\n"+e.join("\n"),i=this.list(t);r[r.length-1]=i,n=n.substring(0,n.length-h.raw.length)+i.raw,s=s.substring(0,s.length-h.raw.length)+i.raw,e=t.substring(r[r.length-1].raw.length).split("\n");continue}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),l=!1;for(;e;){let n,s=!1,a="",o="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),h=e.split("\n",1)[0],p=!c.trim(),u=0;if(this.options.pedantic?(u=2,o=c.trimStart()):p?u=t[1].length+1:(u=(u=t[2].search(/[^ ]/))>4?1:u,o=c.slice(u),u+=t[1].length),p&&/^ *$/.test(h)&&(a+=h+"\n",e=e.substring(h.length+1),s=!0),!s){let t=RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),n=RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),s=RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),r=RegExp(`^ {0,${Math.min(3,u-1)}}#`);for(;e;){let i=e.split("\n",1)[0];if(h=i,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),s.test(h)||r.test(h)||t.test(h)||n.test(e))break;if(h.search(/[^ ]/)>=u||!h.trim())o+="\n"+h.slice(u);else{if(p||c.search(/[^ ]/)>=4||s.test(c)||r.test(c)||n.test(c))break;o+="\n"+h}p||h.trim()||(p=!0),a+=i+"\n",e=e.substring(i.length+1),c=h.slice(u)}}!r.loose&&(l?r.loose=!0:/\n *\n *$/.test(a)&&(l=!0));let k=null;this.options.gfm&&(k=/^\[[ xX]\] /.exec(o))&&(n="[ ] "!==k[0],o=o.replace(/^\[[ xX]\] +/,"")),r.items.push({type:"list_item",raw:a,task:!!k,checked:n,loose:!1,text:o,tokens:[]}),r.raw+=a}r.items[r.items.length-1].raw=r.items[r.items.length-1].raw.trimEnd(),r.items[r.items.length-1].text=r.items[r.items.length-1].text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){let t=r.items[e].tokens.filter(e=>"space"===e.type),n=t.length>0&&t.some(e=>/\n.*\n/.test(e.raw));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:s}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=x(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let e of s)/^ *-+: *$/.test(e)?i.align.push("right"):/^ *:-+: *$/.test(e)?i.align.push("center"):/^ *:-+ *$/.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(let e of r)i.rows.push(x(e,i.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=b(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(t[1]))return -1;let n=0;for(let s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&--n<0)return s;return -1}(t[2],"()");if(e>-1){let n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),m(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:s?s.replace(this.rules.inline.anyPunctuation,"$1"):s},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(/\s+/g," ").toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return m(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...s[0]].length-1,r,i,l=n,a=0,o="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(o.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=o.exec(t));){if(!(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6]))continue;if(i=[...r].length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){a+=i;continue}if((l-=i)>0)continue;i=Math.min(i,i+l+a);let t=[...s[0]][0].length,o=e.slice(0,n+s.index+t+i);if(Math.min(n,i)%2){let e=o.slice(1,-1);return{type:"em",raw:o,text:e,tokens:this.lexer.inlineTokens(e)}}let c=o.slice(2,-2);return{type:"strong",raw:o,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," "),n=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return n&&s&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return n="@"===t[2]?"mailto:"+(e=p(t[1])):e=p(t[1]),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])n="mailto:"+(e=p(t[0]));else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);e=p(t[0]),n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e;return e=this.lexer.state.inRawBlock?t[0]:p(t[0]),{type:"text",raw:t[0],text:e}}}}let y=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$=/(?:[*+-]|\d{1,9}[.)])/,z=g(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,$).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,R=/(?!\s*\])(?:\\.|[^\[\]\\])+/,T=g(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",R).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),A=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$).getRegex(),I="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",S=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,E=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",S).replace("tag",I).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q=g(_).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I).getRegex(),Z={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",q).getRegex(),code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,def:T,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:y,html:E,lheading:z,list:A,newline:/^(?: *(?:\n|$))+/,paragraph:q,table:d,text:/^[^\n]+/},L=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I).getRegex(),C={...Z,table:L,paragraph:g(_).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",L).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I).getRegex()},P={...Z,html:g("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",S).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:d,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(_).replace("hr",y).replace("heading"," *#{1,6} *[^\n]").replace("lheading",z).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Q=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,v=/^( {2,}|\\)\n(?!\s*$)/,B="\\p{P}\\p{S}",O=g(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,B).getRegex(),M=g(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,B).getRegex(),j=g("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,B).getRegex(),D=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,B).getRegex(),H=g(/\\([punct])/,"gu").replace(/punct/g,B).getRegex(),N=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),F=g(S).replace("(?:-->|$)","-->").getRegex(),U=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",F).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),X=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,G=g(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",X).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),J=g(/^!?\[(label)\]\[(ref)\]/).replace("label",X).replace("ref",R).getRegex(),K=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",R).getRegex(),V=g("reflink|nolink(?!\\()","g").replace("reflink",J).replace("nolink",K).getRegex(),W={_backpedal:d,anyPunctuation:H,autolink:N,blockSkip:/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,br:v,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:d,emStrongLDelim:M,emStrongRDelimAst:j,emStrongRDelimUnd:D,escape:Q,link:G,nolink:K,punctuation:O,reflink:J,reflinkSearch:V,tag:U,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:d},Y={...W,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",X).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X).getRegex()},ee={...W,escape:g(Q).replace("])","~|])").getRegex(),url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},et={...ee,br:g(v).replace("{2,}","*").getRegex(),text:g(ee.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},en={normal:Z,gfm:C,pedantic:P},es={normal:W,gfm:ee,breaks:et,pedantic:Y};class er{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:en.normal,inline:es.normal};this.options.pedantic?(t.block=en.pedantic,t.inline=es.pedantic):this.options.gfm&&(t.block=en.gfm,this.options.breaks?t.inline=es.breaks:t.inline=es.gfm),this.tokenizer.rules=t}static get rules(){return{block:en,inline:es}}static lex(e,t){return new er(t).lex(e)}static lexInline(e,t){return new er(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){let s,r,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0)))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),1===s.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+s.raw,r.text+="\n"+s.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(s);continue}if((s=this.tokenizer.fences(e))||(s=this.tokenizer.heading(e))||(s=this.tokenizer.hr(e))||(s=this.tokenizer.blockquote(e))||(s=this.tokenizer.list(e))||(s=this.tokenizer.html(e))){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+s.raw,r.text+="\n"+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if((s=this.tokenizer.table(e))||(s=this.tokenizer.lheading(e))){e=e.substring(s.raw.length),t.push(s);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t,n=1/0,s=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},s))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(i=e.substring(0,n+1))}if(this.state.top&&(s=this.tokenizer.paragraph(i))){r=t[t.length-1],n&&r?.type==="paragraph"?(r.raw+="\n"+s.raw,r.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(s),n=i.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),(r=t[t.length-1])&&"text"===r.type?(r.raw+="\n"+s.raw,r.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(s);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,r,i,l,a;let o=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,i.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(s=>!!(n=s.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),(s=t[t.length-1])&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),(s=t[t.length-1])&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if((n=this.tokenizer.emStrong(e,o,a))||(n=this.tokenizer.codespan(e))||(n=this.tokenizer.br(e))||(n=this.tokenizer.del(e))||(n=this.tokenizer.autolink(e))||!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let t,n=1/0,s=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},s))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(r=e.substring(0,n+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),l=!0,(s=t[t.length-1])&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}}class ei{options;parser;constructor(e){this.options=e||r}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(/^\S*/)?.[0],r=e.replace(/\n$/,"")+"\n";return s?'<pre><code class="language-'+p(s)+'">'+(n?r:p(r,!0))+"</code></pre>\n":"<pre><code>"+(n?r:p(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){let t=this.parser.parse(e);return`<blockquote>
${t}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return"<hr>\n"}list(e){let t=e.ordered,n=e.start,s="";for(let t=0;t<e.items.length;t++){let n=e.items[t];s+=this.listitem(n)}let r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+s+"</"+r+">\n"}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&"paragraph"===e.tokens[0].type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let s="";for(let t=0;t<e.rows.length;t++){let r=e.rows[t];n="";for(let e=0;e<r.length;e++)n+=this.tablecell(r[e]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+s+"</table>\n"}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),r=f(e);if(null===r)return s;let i='<a href="'+(e=r)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>"}image({href:e,title:t,text:n}){let s=f(e);if(null===s)return n;e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class el{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class ea{options;renderer;textRenderer;constructor(e){this.options=e||r,this.options.renderer=this.options.renderer||new ei,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new el}static parse(e,t){return new ea(t).parse(e)}static parseInline(e,t){return new ea(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=e||"";continue}}switch(r.type){case"space":n+=this.renderer.space(r);continue;case"hr":n+=this.renderer.hr(r);continue;case"heading":n+=this.renderer.heading(r);continue;case"code":n+=this.renderer.code(r);continue;case"table":n+=this.renderer.table(r);continue;case"blockquote":n+=this.renderer.blockquote(r);continue;case"list":n+=this.renderer.list(r);continue;case"html":n+=this.renderer.html(r);continue;case"paragraph":n+=this.renderer.paragraph(r);continue;case"text":{let i=r,l=this.renderer.text(i);for(;s+1<e.length&&"text"===e[s+1].type;)i=e[++s],l+="\n"+this.renderer.text(i);t?n+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l}]}):n+=l;continue}default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}switch(r.type){case"escape":case"text":n+=t.text(r);break;case"html":n+=t.html(r);break;case"link":n+=t.link(r);break;case"image":n+=t.image(r);break;case"strong":n+=t.strong(r);break;case"em":n+=t.em(r);break;case"codespan":n+=t.codespan(r);break;case"br":n+=t.br(r);break;case"del":n+=t.del(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}}class eo{options;constructor(e){this.options=e||r}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}class ec{defaults=s();options=this.setOptions;parse=this.#e(er.lex,ea.parse);parseInline=this.#e(er.lexInline,ea.parseInline);Parser=ea;Renderer=ei;TextRenderer=el;Lexer=er;Tokenizer=w;Hooks=eo;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":for(let e of s.header)n=n.concat(this.walkTokens(e.tokens,t));for(let e of s.rows)for(let s of e)n=n.concat(this.walkTokens(s.tokens,t));break;case"list":n=n.concat(this.walkTokens(s.items,t));break;default:{let e=s;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(s=>{let r=e[s].flat(1/0);n=n.concat(this.walkTokens(r,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let s=e.renderer.apply(this,t);return!1===s&&(s=n.apply(this,t)),s}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new ei(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let s=n,r=e.renderer[s],i=t[s];t[s]=(...n)=>{e.useNewRenderer||(r=this.#t(r,s,t));let l=r.apply(t,n);return!1===l&&(l=i.apply(t,n)),l||""}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new w(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let s=e.tokenizer[n],r=t[n];t[n]=(...e)=>{let n=s.apply(t,e);return!1===n&&(n=r.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new eo;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if("options"===n)continue;let s=e.hooks[n],r=t[n];eo.passThroughHooks.has(n)?t[n]=e=>{if(this.defaults.async)return Promise.resolve(s.call(t,e)).then(e=>r.call(t,e));let n=s.call(t,e);return r.call(t,n)}:t[n]=(...e)=>{let n=s.apply(t,e);return!1===n&&(n=r.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,s=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(s.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}#t(e,t,n){switch(t){case"heading":return function(s){return s.type&&s.type===t?e.call(this,n.parser.parseInline(s.tokens),s.depth,n.parser.parseInline(s.tokens,n.parser.textRenderer).replace(u,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")):e.apply(this,arguments)};case"code":return function(n){return n.type&&n.type===t?e.call(this,n.text,n.lang,!!n.escaped):e.apply(this,arguments)};case"table":return function(n){if(!n.type||n.type!==t)return e.apply(this,arguments);let s="",r="";for(let e=0;e<n.header.length;e++)r+=this.tablecell({text:n.header[e].text,tokens:n.header[e].tokens,header:!0,align:n.align[e]});s+=this.tablerow({text:r});let i="";for(let e=0;e<n.rows.length;e++){let t=n.rows[e];r="";for(let e=0;e<t.length;e++)r+=this.tablecell({text:t[e].text,tokens:t[e].tokens,header:!1,align:n.align[e]});i+=this.tablerow({text:r})}return e.call(this,s,i)};case"blockquote":return function(n){if(!n.type||n.type!==t)return e.apply(this,arguments);let s=this.parser.parse(n.tokens);return e.call(this,s)};case"list":return function(n){if(!n.type||n.type!==t)return e.apply(this,arguments);let s=n.ordered,r=n.start,i=n.loose,l="";for(let e=0;e<n.items.length;e++){let t=n.items[e],s=t.checked,r=t.task,a="";if(t.task){let e=this.checkbox({checked:!!s});i?t.tokens.length>0&&"paragraph"===t.tokens[0].type?(t.tokens[0].text=e+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=e+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",text:e+" "}):a+=e+" "}a+=this.parser.parse(t.tokens,i),l+=this.listitem({type:"list_item",raw:a,text:a,task:r,checked:!!s,loose:i,tokens:t.tokens})}return e.call(this,l,s,r)};case"html":return function(n){return n.type&&n.type===t?e.call(this,n.text,n.block):e.apply(this,arguments)};case"paragraph":return function(n){return n.type&&n.type===t?e.call(this,this.parser.parseInline(n.tokens)):e.apply(this,arguments)};case"escape":return function(n){return n.type&&n.type===t?e.call(this,n.text):e.apply(this,arguments)};case"link":return function(n){return n.type&&n.type===t?e.call(this,n.href,n.title,this.parser.parseInline(n.tokens)):e.apply(this,arguments)};case"image":return function(n){return n.type&&n.type===t?e.call(this,n.href,n.title,n.text):e.apply(this,arguments)};case"strong":return function(n){return n.type&&n.type===t?e.call(this,this.parser.parseInline(n.tokens)):e.apply(this,arguments)};case"em":return function(n){return n.type&&n.type===t?e.call(this,this.parser.parseInline(n.tokens)):e.apply(this,arguments)};case"codespan":return function(n){return n.type&&n.type===t?e.call(this,n.text):e.apply(this,arguments)};case"del":return function(n){return n.type&&n.type===t?e.call(this,this.parser.parseInline(n.tokens)):e.apply(this,arguments)};case"text":return function(n){return n.type&&n.type===t?e.call(this,n.text):e.apply(this,arguments)}}return e}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return er.lex(e,t??this.defaults)}parser(e,t){return ea.parse(e,t??this.defaults)}#e(e,t){return(n,s)=>{let r={...s},i={...this.defaults,...r};!0===this.defaults.async&&!1===r.async&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let l=this.#n(!!i.silent,!!i.async);if(null==n)return l(Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return l(Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(t=>e(t,i)).then(e=>i.hooks?i.hooks.processAllTokens(e):e).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>t(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let s=e(n,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let r=t(s,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return l(e)}}}#n(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+p(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}let eh=new ec;function ep(e,t){return eh.parse(e,t)}ep.options=ep.setOptions=function(e){return eh.setOptions(e),ep.defaults=eh.defaults,r=ep.defaults,ep},ep.getDefaults=s,ep.defaults=r,ep.use=function(...e){return eh.use(...e),ep.defaults=eh.defaults,r=ep.defaults,ep},ep.walkTokens=function(e,t){return eh.walkTokens(e,t)},ep.parseInline=eh.parseInline,ep.Parser=ea,ep.parser=ea.parse,ep.Renderer=ei,ep.TextRenderer=el,ep.Lexer=er,ep.lexer=er.lex,ep.Tokenizer=w,ep.Hooks=eo,ep.parse=ep,ep.options,ep.setOptions,ep.use,ep.walkTokens,ep.parseInline,ea.parse,er.lex}}]);