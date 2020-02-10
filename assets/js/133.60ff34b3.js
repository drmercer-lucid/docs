(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1022:function(t,e,s){t.exports=s.p+"assets/img/create-slack-app.5c3673bf.gif"},1023:function(t,e,s){t.exports=s.p+"assets/img/target-url.8c2bf65c.png"},1024:function(t,e,s){t.exports=s.p+"assets/img/event-name.24e88094.gif"},2311:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slack-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slack-triggers"}},[t._v("#")]),t._v(" Slack triggers")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("Before using Slack triggers, you'll first need to create a Slack app. The app also needs to be installed to your workspace. This should be your first step before building Slack recipes.")]),t._v(" "),a("p",[t._v("Fortunately, Slack has made it really easy to create an app. Head over to "),a("a",{attrs:{href:"https://api.slack.com/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.slack.com/apps"),a("OutboundLink")],1),t._v(" and click on "),a("strong",[t._v("Create New App")]),t._v(". Choose a name for your Slack app and as well as your workspace, to create your app.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1022),alt:"Creating a Slack app",width:"1042",height:"616"}}),t._v(" "),a("em",[t._v("Creating a Slack app")])],1),t._v(" "),a("p",[t._v("Before you can install it to your workspace, you'll need to define at least 1 permission scope — but we'll go through that later.")]),t._v(" "),a("h3",{attrs:{id:"enabling-event-subscriptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-event-subscriptions"}},[t._v("#")]),t._v(" Enabling event subscriptions")]),t._v(" "),a("p",[t._v("For the trigger to pick up events, your Slack app needs to know where to send these events to. That's why the "),a("strong",[t._v("New event trigger")]),t._v(" comes with a target URL, generated once you've entered an "),a("strong",[t._v("Event name")]),t._v(". Once your app is sending events to your recipe's target URL, the recipe can take over and execute your recipe's actions.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1023),alt:"Target URL",width:"424",height:"397"}}),t._v(" "),a("em",[t._v("Target URL for your app to send events to")])],1),t._v(" "),a("p",[t._v("Event names don't have to be unique in your Workato workspace — this means that you can use same event name in multiple Slack recipes. This allows you to trigger those recipes using a single event, if it suits your use case.")]),t._v(" "),a("p",[t._v("To enable event subscriptions, go to your Slack app's page (it should look something like '"),a("a",{attrs:{href:"https://api.slack.com/apps/%7Byour_app_id%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.slack.com/apps/{your_app_id}"),a("OutboundLink")],1),t._v("' — your app ID is unique to your app). Under Event Subscriptions, turn on 'Enable Events', then paste the URL from your New event trigger into the Request URL field and click Save.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(59),alt:"Event subscriptions",width:"974",height:"626"}}),t._v(" "),a("em",[t._v("Enabling event subscriptions")])],1),t._v(" "),a("h3",{attrs:{id:"subscribing-to-workspace-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-workspace-events"}},[t._v("#")]),t._v(" Subscribing to workspace events")]),t._v(" "),a("p",[t._v("Slack provides an entire list of workspace events that you can subscribe to — any of these events can kick-start your recipe.")]),t._v(" "),a("p",[t._v("In this example, customer success users are given the option to create a private channel between themselves & their customers whenever messages containing the word 'resolve' are posted in certain channels and direct messages (DMs). Hence, the events "),a("code",[t._v("message.channels")]),t._v(", "),a("code",[t._v("message.groups")]),t._v(" and "),a("code",[t._v("message.im")]),t._v(" were chosen as triggers.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(60),alt:"Event subscription example",width:"704",height:"359"}}),t._v(" "),a("em",[t._v("Whenever a message is posted to a channel, a private channel, or a DM, an event is sent to the recipe")])],1),t._v(" "),a("p",[t._v("Event subscriptions require permission scopes to be defined for your Slack app, but fret not — once event(s) are subscribed, Slack automatically adds the required scopes.")]),t._v(" "),a("h3",{attrs:{id:"installing-your-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-your-app"}},[t._v("#")]),t._v(" Installing your app")]),t._v(" "),a("p",[t._v("Once you've subscribed to at least 1 workspace event, a permission scope is automatically added, allowing you to install the app to your workspace.")]),t._v(" "),a("h1",{attrs:{id:"new-event-trigger-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-event-trigger-real-time"}},[t._v("#")]),t._v(" New event trigger (real-time)")]),t._v(" "),a("p",[t._v("The New event trigger picks up all workspace events in your connected Slack instance. Each new event trigger comes with a target URL, generated once you've entered an "),a("strong",[t._v("Event name")]),t._v(". As explained "),a("router-link",{attrs:{to:"/connectors/slack/triggers.html#enabling-event-subscriptions"}},[t._v("above")]),t._v(", this target URL is used to enable event subscriptions.")],1),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("h3",{attrs:{id:"event-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-name"}},[t._v("#")]),t._v(" Event name")]),t._v(" "),a("p",[t._v("Key in an "),a("strong",[t._v("Event name")]),t._v(" to generate a unique target URL for subscribing to workspace events. This should be descriptive of the event(s) you're subscribing to.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1024),alt:"Event name",width:"926",height:"630"}}),t._v(" "),a("em",[t._v("Keying in the event name generates the target URL used for subscribing to workspace events")])],1),t._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Input fields")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Team ID")]),t._v(" "),a("td",[t._v("ID of Slack workspace.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("API app ID")]),t._v(" "),a("td",[t._v("ID of your Slack app that's subscribed to the workspace event.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Event ID")]),t._v(" "),a("td",[t._v("ID of event.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Event time")]),t._v(" "),a("td",[t._v("Timestamp of event.")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"6"}},[t._v("Event")]),t._v(" "),a("td",[t._v("Type")]),t._v(" "),a("td",[t._v("Type of event.")])]),t._v(" "),a("tr",[a("td",[t._v("User")]),t._v(" "),a("td",[t._v("User ID of user who triggered the event.")])]),t._v(" "),a("tr",[a("td",[t._v("Text")]),t._v(" "),a("td",[t._v("Message content of text.")])]),t._v(" "),a("tr",[a("td",[t._v("Ts")]),t._v(" "),a("td",[t._v("Timestamp of event.")])]),t._v(" "),a("tr",[a("td",[t._v("Channel")]),t._v(" "),a("td",[t._v("Channel ID where event occurred.")])]),t._v(" "),a("tr",[a("td",[t._v("Event ts")]),t._v(" "),a("td",[t._v("Timestamp of event.")])])])]),t._v(" "),a("h2",{attrs:{id:"button-click-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-click-real-time"}},[t._v("#")]),t._v(" Button click (real-time)")]),t._v(" "),a("p",[t._v("The button click trigger handles button clicks. These button clicks come from another recipe that posts a message with buttons to the user. Learn more about using buttons in our "),a("router-link",{attrs:{to:"/connectors/slack.html#using-slack-message-buttons"}},[t._v("Using Slack message buttons")]),t._v(" document.")],1),t._v(" "),a("h3",{attrs:{id:"input-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("p",[t._v("There are no input fields.")]),t._v(" "),a("h3",{attrs:{id:"output-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Output fields")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Action name")]),t._v(" "),a("td",[t._v("Button label visible to Slack user interacting with the buttons.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Action ID")]),t._v(" "),a("td",[t._v("\n              Internal value of the button.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Channel")]),t._v(" "),a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("ID of channel where button was clicked.")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("\n              Name of channel.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("User")]),t._v(" "),a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("\n              User ID of user who clicked the button.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("\n              Name of user who clicked the button.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Team")]),t._v(" "),a("td",[t._v("ID")]),t._v(" "),a("td",[t._v("ID of Slack workspace.")])]),t._v(" "),a("tr",[a("td",[t._v("Domain")]),t._v(" "),a("td",[t._v("Domain of Slack workspace.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Action timestamp")]),t._v(" "),a("td",[t._v("Timestamp when button was clicked. ")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Message ID")]),t._v(" "),a("td",[t._v("ID of message that contained the button that was clicked.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Attachment ID")]),t._v(" "),a("td",[t._v("ID of the button that was clicked. Buttons are a form of message attachments in the context of Slack.")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Response URL")]),t._v(" "),a("td",[t._v("URL for responding to button clicks, used in the "),a("b",[t._v("Respond to button click")]),t._v(" action.")])])])])])}),[],!1,null,null,null);e.default=n.exports},59:function(t,e,s){t.exports=s.p+"assets/img/event-subscriptions.1dff32f7.gif"},60:function(t,e,s){t.exports=s.p+"assets/img/event-subscription-example.e7817b39.png"}}]);