"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37223],{25452:(t,e,i)=>{i.r(e),i.d(e,{data:()=>d});const d={key:"v-1cbb8409",path:"/devices/ZG9101SAC-HP-Switch.html",title:"Sunricher ZG9101SAC-HP-Switch control via MQTT",lang:"en-US",frontmatter:{title:"Sunricher ZG9101SAC-HP-Switch control via MQTT",description:"Integrate your Sunricher ZG9101SAC-HP-Switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-12-15T17:27:48.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZG9101SAC-HP-Switch.md",git:{updatedTime:1653419793e3}}},1547:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});const d=(0,i(66252).uE)('<h1 id="sunricher-zg9101sac-hp-switch" tabindex="-1"><a class="header-anchor" href="#sunricher-zg9101sac-hp-switch" aria-hidden="true">#</a> Sunricher ZG9101SAC-HP-Switch</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZG9101SAC-HP-Switch</td></tr><tr><td>Vendor</td><td>Sunricher</td></tr><tr><td>Description</td><td>Zigbee AC in wall switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZG9101SAC-HP-Switch.jpg" alt="Sunricher ZG9101SAC-HP-Switch"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),a={},r=(0,i(83744).Z)(a,[["render",function(t,e){return d}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,d]of e)t[i]=d;return t}}}]);