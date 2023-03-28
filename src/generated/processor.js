!function(){"use strict";!function(t){function e(){}function n(){}e.prototype.encode=function(t){const e=[],n=t.length;let r=0;for(;r<n;){const n=t.codePointAt(r);let s=0,o=0;for(n<=127?(s=0,o=0):n<=2047?(s=6,o=192):n<=65535?(s=12,o=224):n<=2097151&&(s=18,o=240),e.push(o|n>>s),s-=6;s>=0;)e.push(128|n>>s&63),s-=6;r+=n>=65536?2:1}return e},globalThis.TextEncoder=e,t.TextEncoder||(t.TextEncoder=e),n.prototype.decode=function(t){if(!t)return"";let e="",n=0;for(;n<t.length;){let r=t[n],s=0,o=0;if(r<=127?(s=0,o=255&r):r<=223?(s=1,o=31&r):r<=239?(s=2,o=15&r):r<=244&&(s=3,o=7&r),t.length-n-s>0){let e=0;for(;e<s;)r=t[n+e+1],o=o<<6|63&r,e+=1}else o=65533,s=t.length-n;e+=String.fromCodePoint(o),n+=s+1}return e},globalThis.TextDecoder=n,t.TextDecoder||(t.TextDecoder=n)}("undefined"==typeof globalThis?"undefined"==typeof global?"undefined"==typeof self?void 0:self:global:globalThis);let t;const e=new Array(32).fill(void 0);function n(t){return e[t]}e.push(void 0,null,!0,!1);let r=e.length;function s(t){const s=n(t);return function(t){t<36||(e[t]=r,r=t)}(t),s}function o(t){r===e.length&&e.push(e.length+1);const n=r;return r=e[n],e[n]=t,n}const i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let c=new Uint8Array;function a(){return 0===c.byteLength&&(c=new Uint8Array(t.memory.buffer)),c}function f(t,e){return i.decode(a().subarray(t,t+e))}function u(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return`${t}`;if("string"==e)return`"${t}"`;if("symbol"==e){const e=t.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=t.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(t)){const e=t.length;let n="[";e>0&&(n+=u(t[0]));for(let r=1;r<e;r++)n+=", "+u(t[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(!(n.length>1))return toString.call(t);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:r}let l=0;const _=new TextEncoder("utf-8"),h="function"==typeof _.encodeInto?function(t,e){return _.encodeInto(t,e)}:function(t,e){const n=_.encode(t);return e.set(n),{read:t.length,written:n.length}};function g(t,e,n){if(void 0===n){const n=_.encode(t),r=e(n.length);return a().subarray(r,r+n.length).set(n),l=n.length,r}let r=t.length,s=e(r);const o=a();let i=0;for(;i<r;i++){const e=t.charCodeAt(i);if(e>127)break;o[s+i]=e}if(i!==r){0!==i&&(t=t.slice(i)),s=n(s,r,r=i+3*t.length);const e=a().subarray(s+i,s+r);i+=h(t,e).written}return l=i,s}let b=new Int32Array;function d(){return 0===b.byteLength&&(b=new Int32Array(t.memory.buffer)),b}function w(t){return null==t}class y{static __wrap(t){const e=Object.create(y.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const e=this.__destroy_into_raw();t.__wbg_wasmsoundfontsynth_free(e)}static new(e,n){const r=function(t,e){const n=e(1*t.length);return a().set(t,n/1),l=t.length,n}(e,t.__wbindgen_export_0),s=l,o=t.wasmsoundfontsynth_new(r,s,n);return y.__wrap(o)}get_preset_headers(){return s(t.wasmsoundfontsynth_get_preset_headers(this.ptr))}program_select(e,n,r){t.wasmsoundfontsynth_program_select(this.ptr,e,n,r)}note_on(e,n,r,s){t.wasmsoundfontsynth_note_on(this.ptr,e,n,r,!w(s),w(s)?0:s)}note_off(e,n,r){t.wasmsoundfontsynth_note_off(this.ptr,e,n,!w(r),w(r)?0:r)}read_next_block(e){return s(t.wasmsoundfontsynth_read_next_block(this.ptr,e))}}function p(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(t){s(t)},e.wbg.__wbindgen_object_clone_ref=function(t){return o(n(t))},e.wbg.__wbindgen_number_new=function(t){return o(t)},e.wbg.__wbindgen_string_new=function(t,e){return o(f(t,e))},e.wbg.__wbg_set_20cbc34131e76824=function(t,e,r){n(t)[s(e)]=s(r)},e.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return o(new Array)},e.wbg.__wbg_new_0b9bfdd97583284e=function(){return o(new Object)},e.wbg.__wbg_set_a68214f35c417fa9=function(t,e,r){n(t)[e>>>0]=s(r)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return o(new Error)},e.wbg.__wbg_stack_658279fe44541cf6=function(e,r){const s=g(n(r).stack,t.__wbindgen_export_0,t.__wbindgen_export_1),o=l;d()[e/4+1]=o,d()[e/4+0]=s},e.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(f(e,n))}finally{t.__wbindgen_export_2(e,n)}},e.wbg.__wbindgen_debug_string=function(e,r){const s=g(u(n(r)),t.__wbindgen_export_0,t.__wbindgen_export_1),o=l;d()[e/4+1]=o,d()[e/4+0]=s},e.wbg.__wbindgen_throw=function(t,e){throw new Error(f(t,e))},e}async function m(e){void 0===e&&(e=new URL("sf2_synth_audio_worklet_wasm_bg.wasm",document.currentScript&&document.currentScript.src||new URL("processor.js",document.baseURI).href));const n=p();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:s}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}(await e,n);return function(e,n){return t=e.exports,m.__wbindgen_wasm_module=n,b=new Int32Array,c=new Uint8Array,t}(r,s)}class A extends AudioWorkletProcessor{synth;sf2Bytes;constructor(){super(),this.port.onmessage=t=>{this.onmessage(t)},this.synth=void 0,this.sf2Bytes=void 0}onmessage(t){const e=t.data;switch(e.type){case"send-wasm-module":m(WebAssembly.compile(e.wasmBytes)).then((()=>{this.port.postMessage({type:"wasm-module-loaded"})})).catch((()=>{console.error("An error occurred during wasm initialization")})),this.sf2Bytes=e.sf2Bytes;break;case"init-synth":if(null==this.sf2Bytes)throw new Error("sf2Bytes is undefined");this.synth=y.new(new Uint8Array(this.sf2Bytes),e.sampleRate);break;case"note-on":this.noteOn(e.channel,e.key,e.vel,e.delayTime);break;case"note-off":this.noteOff(e.channel,e.key,e.delayTime);break;case"get-preset-headers":this.getPresetHeaders();break;case"set-program":this.setProgram(e.channel,e.bank,e.preset)}}noteOn(t,e,n,r){null!=this.synth&&this.synth.note_on(t,e,n,r)}noteOff(t,e,n){null!=this.synth&&this.synth.note_off(t,e,n)}getPresetHeaders(){if(null==this.synth)return;const t={type:"got-preset-headers",presetHeaders:this.synth.get_preset_headers()};this.port.postMessage(t)}setProgram(t,e,n){null!=this.synth&&this.synth.program_select(t,e,n)}process(t,e){if(null==this.synth)return!0;const n=e[0],r=n[0].length,s=this.synth.read_next_block(r);return n[0].set(s[0]),n.length>1&&n[1].set(s[1]),!0}}registerProcessor("sf2-synth-processor",A)}();
//# sourceMappingURL=processor.js.map
