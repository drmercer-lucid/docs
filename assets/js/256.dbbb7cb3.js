(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1285:function(t,n,e){t.exports=e.p+"assets/img/connection_without_secure_tunnel_option.86c3801f.png"},1286:function(t,n,e){t.exports=e.p+"assets/img/connection_with_secure_tunnel_option.16ee2973.png"},2447:function(t,n,e){"use strict";e.r(n);var s=e(0),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"secure-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure-connection"}},[t._v("#")]),t._v(" Secure Connection")]),t._v(" "),s("p",[t._v("HTTP requests made in a custom adapter will be sent from Workato by default. This means that all traffic will come through our "),s("router-link",{attrs:{to:"/security/ip-whitelists.html#traffic-from-workato"}},[t._v("IP addresses")]),t._v(". However, you can also configure it to route all requests through an "),s("router-link",{attrs:{to:"/on-prem.html"}},[t._v("on-prem agent")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"enable-connection-through-on-prem-agent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-connection-through-on-prem-agent"}},[t._v("#")]),t._v(" Enable connection through on-prem agent")]),t._v(" "),s("p",[t._v("By default, a custom adapter does not provide an option to connect through an on-prem agent. As a result, when setting up a connection, there will not be a way to configure it.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:e(1285),alt:"Connection without option to use OPA",width:"766",height:"536"}}),t._v(" "),s("em",[t._v("Connection without option to use OPA")])],1),t._v(" "),s("p",[t._v("To enable the option for connecting through an OPA, all you have to do is add the "),s("code",[t._v("secure_tunnel")]),t._v(" property in your custom adapter code. This should be set to "),s("code",[t._v("true")]),t._v(" and be defined as a top level property.")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mandrill"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is needed for OPA")]),t._v("\n  secure_tunnel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        control_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  triggers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("With this property added, an input field will be visible when setting up a connection to choose an existing on-prem agent in your account.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:e(1286),alt:"Connection with option to use OPA",width:"768",height:"691"}}),t._v(" "),s("em",[t._v("Connection with option to use OPA")])],1),t._v(" "),s("p",[t._v("Learn how to setup an on-prem agent "),s("router-link",{attrs:{to:"/on-prem/agents/setup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"other-authentication-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-authentication-methods"}},[t._v("#")]),t._v(" Other authentication methods")]),t._v(" "),s("p",[t._v("Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/authentication.html"}},[t._v("Go back to our list of authentication methods")]),t._v(" or check our our "),s("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips.")],1),t._v(" "),s("h3",{attrs:{id:"next-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),s("p",[t._v("If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/action.html"}},[t._v("Learn more")])],1)])}),[],!1,null,null,null);n.default=a.exports}}]);