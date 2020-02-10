(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{2527:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"recipe-lifecycle-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recipe-lifecycle-management"}},[t._v("#")]),t._v(" Recipe lifecycle management")]),t._v(" "),e("p",[t._v("The endpoints listed below are OEM vendor only endpoints for importing a package into a customer account.")]),t._v(" "),e("p",[t._v("The APIs for exporting a package are available "),e("router-link",{attrs:{to:"/workato-api.html#recipe-lifecycle-management"}},[t._v("here")]),t._v(". If you wish to import packages into your own environments (not customer accounts), please use the endpoints listed in the Workato API page as well.")],1),t._v(" "),e("h3",{attrs:{id:"quick-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-reference"}},[t._v("#")]),t._v(" Quick reference")]),t._v(" "),e("table",{staticClass:"api-quick-reference"},[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Resource")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("POST")]),t._v(" "),e("td",[e("a",{attrs:{href:"#import-package-into-a-customer-account"}},[t._v("api/managed_users/:id/imports")])]),t._v(" "),e("td",[t._v("Import package into a folder in a customer account.")])]),t._v(" "),e("tr",[e("td",[t._v("GET")]),t._v(" "),e("td",[e("a",{attrs:{href:"#get-package-status"}},[t._v("api/managed_users/:id/recipes")])]),t._v(" "),e("td",[t._v("Get status of an imported package.")])])])]),t._v(" "),e("h2",{attrs:{id:"import-package-into-a-customer-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-package-into-a-customer-account"}},[t._v("#")]),t._v(" Import package into a customer account")]),t._v(" "),e("p",[t._v("Import a package into a specified folder in a customer account.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /api/managed_users/:id/imports\n")])])]),e("p",[t._v("This is an asynchronous request. Use the "),e("a",{attrs:{href:"#get-package-status"}},[t._v("Get package status")]),t._v(" endpoint to get details of the imported the package.")]),t._v(" "),e("p",[t._v("The input (zip file) is a "),e("code",[t._v("application/octet-stream")]),t._v(" payload containing package content. URL parameter "),e("strong",[t._v("restart_recipes")]),t._v(" should be set to "),e("code",[t._v("true")]),t._v(" if the running recipes need to be restarted upon import.")]),t._v(" "),e("h3",{attrs:{id:"url-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),e("table",{staticClass:"api-input"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("managed_user_id")]),t._v(" "),e("td",[e("strong",[t._v("string")]),e("br"),e("em",[t._v("required")])]),t._v(" "),e("td",[t._v("OEM customer Account ID/External ID. "),e("br"),t._v("External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded.")])]),t._v(" "),e("tr",[e("td",[t._v("folder_id")]),t._v(" "),e("td",[e("strong",[t._v("string")]),e("br"),e("em",[t._v("required")])]),t._v(" "),e("td",[t._v("Folder ID.")])]),t._v(" "),e("tr",[e("td",[t._v("restart_recipes")]),t._v(" "),e("td",[e("strong",[t._v("boolean")]),e("br"),e("em",[t._v("optional")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", it will allow the restarting of running recipes.")])])])]),t._v(" "),e("h4",{attrs:{id:"sample-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-request"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X POST https://www.workato.com/api/managed_users/91928/imports?folder_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1827")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/octet-steam'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/local/file.zip'")]),t._v("\n")])])]),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("251")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"get-package-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-package-status"}},[t._v("#")]),t._v(" Get package status")]),t._v(" "),e("p",[t._v("Get details of a package imported into a customer account.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /managed_users/:id/imports/:package_id\n")])])]),e("h3",{attrs:{id:"url-paramters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-paramters"}},[t._v("#")]),t._v(" URL paramters")]),t._v(" "),e("table",{staticClass:"api-input"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("managed_user_id")]),t._v(" "),e("td",[e("strong",[t._v("string")]),e("br"),e("em",[t._v("required")])]),t._v(" "),e("td",[t._v("OEM customer Account ID/External ID. "),e("br"),t._v("External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded.")])]),t._v(" "),e("tr",[e("td",[t._v("package_id")]),t._v(" "),e("td",[e("strong",[t._v("string")]),e("br"),e("em",[t._v("required")])]),t._v(" "),e("td",[t._v("Package ID.")])])])]),t._v(" "),e("h4",{attrs:{id:"sample-request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-request-2"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/managed_users/91829/imports/198 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("ul",[e("li",[t._v("This shows a successful import.")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("This shows a package that failed to import properly.")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error_message"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);