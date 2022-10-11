"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38639],{81741:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-65cd5858",path:"/devices/SLS301ZB_3.html",title:"Feibit SLS301ZB_3 control via MQTT",lang:"en-US",frontmatter:{title:"Feibit SLS301ZB_3 control via MQTT",description:"Integrate your Feibit SLS301ZB_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Switch (center endpoint)",slug:"switch-center-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLS301ZB_3.md",git:{updatedTime:1653419793e3}}},64683:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});const i=(0,o(66252).uE)('<h1 id="feibit-sls301zb-3" tabindex="-1"><a class="header-anchor" href="#feibit-sls301zb-3" aria-hidden="true">#</a> Feibit SLS301ZB_3</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLS301ZB_3</td></tr><tr><td>Vendor</td><td>Feibit</td></tr><tr><td>Description</td><td>Smart light switch - 3 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLS301ZB_3.jpg" alt="Feibit SLS301ZB_3"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),d={},c=(0,o(83744).Z)(d,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);