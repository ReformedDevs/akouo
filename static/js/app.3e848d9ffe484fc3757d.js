webpackJsonp([1,0],[function(e,s,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=t(14),o=n(a),i=t(8),r=n(i);new o.default({el:"#app",template:"<App/>",components:{App:r.default}})},,function(e,s,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.parsePassage=void 0;var a=t(1),o=n(a),i={Genesis:["Gen","Ge","Gn"],Exodus:["Exo","Ex","Exod"],Leviticus:["Lev","Le","Lv"],Numbers:["Num","Nu","Nm","Nb"],Deuteronomy:["Deut","Dt"],Joshua:["Josh","Jos","Jsh"],Judges:["Judg","Jdg","Jg","Jdgs"],Ruth:["Rth","Ru"],"1 Samuel":["1 Sam","1 Sa","1Samuel","1S","I Sa","1 Sm","1Sa","I Sam","1Sam","I Samuel","1st Samuel","First Samuel"],"2 Samuel":["2 Sam","2 Sa","2S","II Sa","2 Sm","2Sa","II Sam","2Sam","II Samuel","2Samuel","2nd Samuel","Second Samuel"],"1 Kings":["1 Kgs","1 Ki","1K","I Kgs","1Kgs","I Ki","1Ki","I Kings","1Kings","1st Kgs","1st Kings","First Kings","First Kgs","1Kin"],"2 Kings":["2 Kgs","2 Ki","2K","II Kgs","2Kgs","II Ki","2Ki","II Kings","2Kings","2nd Kgs","2nd Kings","Second Kings","Second Kgs","2Kin"],"1 Chronicles":["1 Chron","1 Ch","I Ch","1Ch","1 Chr","I Chr","1Chr","I Chron","1Chron","I Chronicles","1Chronicles","1st Chronicles","First Chronicles"],"2 Chronicles":["2 Chron","2 Ch","II Ch","2Ch","II Chr","2Chr","II Chron","2Chron","II Chronicles","2Chronicles","2nd Chronicles","Second Chronicles"],Ezra:["Ezra","Ezr"],Nehemiah:["Neh","Ne"],Esther:["Esth","Es"],Job:["Jb"],Psalm:["Pslm","Ps","Psalms","Psa","Psm","Pss"],Proverbs:["Prov","Pr","Prv"],Ecclesiastes:["Eccles","Ec","Ecc"],"Song of Solomon":["Song","So","Song of Songs","SOS"],Isaiah:["Isa","Is"],Jeremiah:["Jer","Je","Jr"],Lamentations:["Lam","La"],Ezekiel:["Ezek","Eze","Ezk"],Daniel:["Dan","Da","Dn"],Hosea:["Hos","Ho"],Joel:["Joe","Jl"],Amos:["Amos","Am"],Obadiah:["Obad","Ob"],Jonah:["Jnh","Jon"],Micah:["Mic"],Nahum:["Nah","Na"],Habakkuk:["Hab"],Zephaniah:["Zeph","Zep","Zp"],Haggai:["Hag","Hg"],Zechariah:["Zech","Zec","Zc"],Malachi:["Mal","Ml"],Matthew:["Matt","Mt"],Mark:["Mrk","Mk","Mr"],Luke:["Luk","Lk"],John:["Jn","Jhn"],Acts:["Acts","Ac"],Romans:["Rom","Ro","Rm"],"1 Corinthians":["1 Cor","1 Co","I Co","1Co","I Cor","1Cor","I Corinthians","1Corinthians","1st Corinthians","First Corinthians"],"2 Corinthians":["2 Cor","2 Co","II Co","2Co","II Cor","2Cor","II Corinthians","2Corinthians","2nd Corinthians","Second Corinthians"],Galatians:["Gal","Ga"],Ephesians:["Ephes","Eph"],Philippians:["Phil","Php"],Colossians:["Col"],"1 Thessalonians":["1 Thess","1 Th","I Th","1Th","I Thes","1Thes","I Thess","1Thess","I Thessalonians","1Thessalonians","1st Thessalonians","First Thessalonians"],"2 Thessalonians":["2 Thess","2 Th","II Th","2Th","II Thes","2Thes","II Thess","2Thess","II Thessalonians","2Thessalonians","2nd Thessalonians","Second Thessalonians"],"1 Timothy":["1 Tim","1 Ti","I Ti","1Ti","I Tim","1Tim","I Timothy","1Timothy","1st Timothy","First Timothy"],"2 Timothy":["2 Tim","2 Ti","II Ti","2Ti","II Tim","2Tim","II Timothy","2Timothy","2nd Timothy","Second Timothy"],Titus:["Titus","Tit"],Philemon:["Philem","Phm"],Hebrews:["Heb"],James:["Jas","Jm"],"1 Peter":["1 Pet","1 Pe","I Pe","1Pe","I Pet","1Pet","I Pt","1 Pt","1Pt","I Peter","1Peter","1st Peter","First Peter"],"2 Peter":["2 Pet","2 Pe","II Pe","2Pe","II Pet","2Pet","II Pt","2 Pt","2Pt","II Peter","2Peter","2nd Peter","Second Peter"],"1 John":["1 John","1 Jn","I Jn","1Jn","I Jo","1Jo","I Joh","1Joh","I Jhn","1 Jhn","1Jhn","I John","1John","1st John","First John"],"2 John":["2 John","2 Jn","II Jn","2Jn","II Jo","2Jo","II Joh","2Joh","II Jhn","2 Jhn","2Jhn","II John","2John","2nd John","Second John"],"3 John":["3 John","3 Jn","III Jn","3Jn","III Jo","3Jo","III Joh","3Joh","III Jhn","3 Jhn","3Jhn","III John","3John","3rd John","Third John"],Jude:["Jud"],Revelation:["Rev","Re","The Revelation"]};s.parsePassage=function(e){var s=void 0;return o.default.each(i,function(t,n){var a=s||e,o=n.join("|"),i=new RegExp("\\b("+[t,o].join("|")+")","ig");s=a.replace(i,t)}),s}},function(e,s,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var a=t(1),o=n(a),i=t(2),r=t(10),h=n(r),u=t(9),d=n(u);s.default={data:function(){return{passage:"",parsedPassage:"",audioSrc:null,loading:!0,passageHtml:""}},components:{passageText:h.default,passageAudio:d.default},methods:{getPassage:function(){var e=this;this.loadingText=!0,this.parsedPassage=(0,i.parsePassage)(this.passage),console.log(this.parsedPassage);var s=this.passage?"http://audio.esvbible.org/hw/hq/"+this.parsedPassage+".mp3":null,t="http://still-shelf-63211.herokuapp.com/http://www.esvapi.org/v2/rest/passageQuery?key=IP&passage="+this.parsedPassage;o.default.ajax({url:t,success:function(t){e.parsedPassage="",e.passageHtml=t,e.audioSrc=s,e.loading=!1,(0,o.default)("input").blur()}})}}}},function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{player:null}},props:["src"],updated:function(){var e=document.getElementById("audio");e.load()},created:function(){window.onkeydown=function(e){return!(32===e.keyCode&&"INPUT"!==e.target.tagName)},window.onkeyup=function(e){return 32===e.keyCode&&"INPUT"!==e.target.tagName&&(this.audio.paused?this.audio.play():this.audio.pause()),!0}}}},function(e,s,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var a=t(1),o=n(a);o.default.strRemove=function(e,s){return(0,o.default)("<div/>").append((0,o.default)(e,s).remove().end()).html()},s.default={props:["passageHtml"],computed:{formattedPassage:function(){var e=this.passageHtml;return e=o.default.strRemove("object",e),e=o.default.strRemove("div.footnotes",e),e=o.default.strRemove("span.footnote",e),e=o.default.strRemove("span.verse-num",e)}}}},function(e,s){},function(e,s){},function(e,s,t){var n,a;t(6),n=t(3);var o=t(11);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,s,t){var n,a;t(7),n=t(4);var o=t(12);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,s,t){var n,a;n=t(5);var o=t(13);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,s){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("form",{staticClass:"passage-form",on:{submit:function(s){s.preventDefault(),e.getPassage(s)}}},[e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.passage,expression:"passage"}],attrs:{type:"text",name:"passage",placeholder:"Enter Your Reading For The Day"},domProps:{value:e._s(e.passage)},on:{input:function(s){s.target.composing||(e.passage=s.target.value)}}})])," ",e.loading?e._e():e._h("div",[e._h("passage-audio",{attrs:{src:e.audioSrc}})," ",e._h("passage-text",{attrs:{passageHtml:e.passageHtml}})])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"audio-container"},[e._h("audio",{attrs:{id:"audio",controls:"controls"}},[e._h("source",{attrs:{src:e.src,type:"audio/mp3"}})])])},staticRenderFns:[]}},function(e,s){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"passage"}},[e.passageHtml?e._h("div",{domProps:{innerHTML:e._s(e.formattedPassage)}}):e._e()])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.3e848d9ffe484fc3757d.js.map