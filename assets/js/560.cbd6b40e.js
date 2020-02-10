(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{2623:function(t,s,o){"use strict";o.r(s);var a=o(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"custom-workbot-vs-legacy-slash-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-workbot-vs-legacy-slash-commands"}},[t._v("#")]),t._v(" Custom Workbot vs Legacy slash commands")]),t._v(" "),o("p",[t._v("Workato supports both "),o("a",{attrs:{href:"https://api.slack.com/slash-commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("slash commands that are part of a custom Workbot"),o("OutboundLink")],1),t._v(" (i.e. a custom Slack app) and legacy slash commands (i.e. "),o("a",{attrs:{href:"https://slack.com/apps/A0F82E8CA-slash-commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom Integrations slash commands"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("We strongly recommend using custom Workbots to configure your slash command, as custom integrations is a legacy feature that will eventually be deprecated (no news as to when just yet). Legacy slash commands also does not support some of the functionalities that custom Workbots have.")]),t._v(" "),o("p",[t._v("Custom Workbot slash commands requires "),o("router-link",{attrs:{to:"/workbot/workbot-custom-bots.html"}},[t._v("creating a new Slack app")]),t._v(", and connecting it to Workato via a custom OAuth profile, while legacy slash commands does not. You can add legacy slash commands to a Slack workspace directly from the Slack app directory.")],1),t._v(" "),o("p",[t._v("Here is a detailed comparison table between the custom Workbot slash commands and the legacy slash commands.")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[t._v("Features")]),t._v(" "),o("th",[t._v("Custom Workbot slash commands")]),t._v(" "),o("th",[t._v("Legacy slash commands")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("\n              Can invoke dialogs?\n            ")]),t._v(" "),o("td",[t._v("\n              Yes\n            ")]),t._v(" "),o("td",[t._v("\n              No\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("\n              Dialog for missing command input fields\n            ")]),o("td",[t._v("\n              Yes\n            ")]),t._v(" "),o("td",[t._v("No")])]),t._v(" "),o("tr",[o("td",[t._v("\n              Requires a custom Slack app\n            ")]),t._v(" "),o("td",[t._v("Yes")]),t._v(" "),o("td",[t._v("No")])]),t._v(" "),o("tr",[o("td",[t._v("\n              Supports ephemeral messages in Post command reply\n            ")]),t._v(" "),o("td",[t._v("\n              Yes\n            ")]),t._v(" "),o("td",[t._v("No")])]),t._v(" "),o("tr",[o("td",[t._v("Connection method")]),t._v(" "),o("td",[o("a",{attrs:{href:"/workbot/configuring-slash-commands.html#workbot-connection"}},[t._v(" Workbot with Custom OAuth profile")])]),t._v(" "),o("td",[o("a",{attrs:{href:"/workbot/legacy-slash-commands.html#configuring-the-workbot-connection"}},[t._v("Slash command verification token")])])]),t._v(" "),o("tr",[o("td",[t._v("Customize app icon")]),t._v(" "),o("td",[t._v("\n              Yes, from Slack app page\n            ")]),t._v(" "),o("td",[t._v("Yes, from the "),o("a",{attrs:{href:"https://slack.com/apps/A0F82E8CA-slash-commands"}},[t._v("slash command page")])])]),t._v(" "),o("tr",[o("td",[t._v("\n              Pass command input field values to subsequent messages/recipes\n            ")]),t._v(" "),o("td",[t._v("Yes")]),t._v(" "),o("td",[t._v("Yes")])]),t._v(" "),o("tr",[o("td",[t._v("Posting in channels")]),t._v(" "),o("td",[t._v("\n              Yes, but only in channels it is invited to.\n            ")]),t._v(" "),o("td",[t._v("Yes, can post in any channel within the Slack workspace it is installed to.")])]),t._v(" "),o("tr",[o("td",[t._v("Multiple slash commands")]),t._v(" "),o("td",[t._v("\n              Yes, each Workbot recipe can have its own unique slash command.\n            ")]),t._v(" "),o("td",[t._v("Yes, each Workbot connection can store the slash command verification tokens of multiple slash commands.")])])])]),t._v(" "),o("h2",{attrs:{id:"notes-for-custom-workbot-slash-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-custom-workbot-slash-commands"}},[t._v("#")]),t._v(" Notes for custom Workbot slash commands")]),t._v(" "),o("ol",[o("li",[t._v("Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.")]),t._v(" "),o("li",[t._v("When you invite Workbot into the channel, "),o("strong",[t._v("anyone")]),t._v(" in that channel can interact with Workbot via commands.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);