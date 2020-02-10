(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{2535:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"on-prem-agent-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-agent-logs"}},[t._v("#")]),t._v(" On-prem Agent logs")]),t._v(" "),a("p",[t._v("The on-prem agent (OPA) contains code to log various types of events. The log file will contain OPA activity, errors, warnings and traces. The log file is useful for many scenarios; it is most commonly used for troubleshooting.")]),t._v(" "),a("h2",{attrs:{id:"logging-schedule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-schedule"}},[t._v("#")]),t._v(" Logging schedule")]),t._v(" "),a("p",[t._v("The OPA logger will create a new log file at the start of each day (according to the on-premise system time). It will also create a new log file once the file size exceeds 20MB. The multiple log files in a single day will be numbered in sequence to identify them.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Scenario 1")]),t._v(" "),a("th",[t._v("Scenario 2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("01-NOV-2019")]),t._v(" "),a("td",[t._v("02-NOV-2019")])]),t._v(" "),a("tr",[a("td",[t._v("Total file size: 15MB")]),t._v(" "),a("td",[t._v("Total file size: 25MB")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/agent-2019-11-01.0.log")]),a("br"),t._v("A log file is created at the start of the day.")]),t._v(" "),a("td",[a("code",[t._v("/agent-2019-11-02.0.log")]),a("br"),t._v("A log file is created at the start of the day. The first 20MB will be stored in this file."),a("br"),a("br"),a("code",[t._v("/agent-2019-11-02.1.log")]),a("br"),t._v("Another log file will be created and contains the remaining 5MB.")])])])]),t._v(" "),a("p",[t._v("You can access the OPA log files in the agent folder. The OPA will only retain the most recent 60 files, or at most 20GB of files.")]),t._v(" "),a("h3",{attrs:{id:"opa-log-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opa-log-properties"}},[t._v("#")]),t._v(" OPA log properties")]),t._v(" "),a("p",[t._v("OPA logs contain the following properties:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("OPA log property")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("Each log file is dated to improve locating the right file.")])]),t._v(" "),a("tr",[a("td",[t._v("Numbered logs")]),t._v(" "),a("td",[t._v("If there are multiple log files in a single day, they will be numbered in sequence.")])]),t._v(" "),a("tr",[a("td",[t._v("File size limit")]),t._v(" "),a("td",[t._v("The logger enforces a 20MB size limit to make it easier to query the file content.")])]),t._v(" "),a("tr",[a("td",[t._v("Storage limit")]),t._v(" "),a("td",[t._v("The folder limit reduces the storage load on the server.")])])])]),t._v(" "),a("h2",{attrs:{id:"logging-opa-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-opa-activity"}},[t._v("#")]),t._v(" Logging OPA activity")]),t._v(" "),a("p",[t._v("At the top level of your "),a("code",[t._v("config.yml")]),t._v(" file, add the "),a("code",[t._v("logging")]),t._v(" definition to record the various level of activity logs.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logging_level\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workato")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trace\n")])])]),a("p",[t._v("These are the loggers that can be used.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("logger")])]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("workato")]),t._v(" "),a("td",[t._v("This will include logs from all parts of the OPA.")])]),t._v(" "),a("tr",[a("td",[t._v("sql")]),t._v(" "),a("td",[t._v("This will only log database-related parts of the OPA.")])]),t._v(" "),a("tr",[a("td",[t._v("custom")]),t._v(" "),a("td",[t._v("See "),a("a",{attrs:{href:"#using-a-custom-logger"}},[t._v("Using a custom logger")]),t._v(" for more info.")])])])]),t._v(" "),a("p",[t._v("These are the supported logging levels.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("logging_level")])]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("trace")]),t._v(" "),a("td",[t._v("Information useful for identify steps leading up to an error. Typically used for diagnosis by engineering support."),a("br"),t._v("Example: Starting secure tunnel")])]),t._v(" "),a("tr",[a("td",[t._v("debug")]),t._v(" "),a("td",[t._v("Information useful for troubleshooting or diagnosis and understandable by users."),a("br"),t._v("Example: Failure due to an unknown exception.")])]),t._v(" "),a("tr",[a("td",[t._v("info")]),t._v(" "),a("td",[t._v("Information that should be logged under normal conditions."),a("br"),t._v("Example: agent starting/stopping.")])]),t._v(" "),a("tr",[a("td",[t._v("warn")]),t._v(" "),a("td",[t._v("Information about an occurrence that could be a problem, but does not require immediate user attention."),a("br"),t._v("Example: transient network interruption.")])]),t._v(" "),a("tr",[a("td",[t._v("error")]),t._v(" "),a("td",[t._v("Information about an error that needs investigation."),a("br"),t._v("Example: Agent failed to start.")])])])]),t._v(" "),a("h2",{attrs:{id:"logging-for-specific-profiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-for-specific-profiles"}},[t._v("#")]),t._v(" Logging for specific profiles")]),t._v(" "),a("p",[t._v("You can also choose to selectively enable logs for specific profiles. All you need to do is add "),a("code",[t._v("debug: true")]),t._v(" definition to the profile.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" workato\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("h2",{attrs:{id:"using-a-custom-logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-logger"}},[t._v("#")]),t._v(" Using a custom logger")]),t._v(" "),a("p",[t._v("You can also use a custom logger instead of the native ones. To do so, simply replace the logger name with the class name or package name of your custom logger.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"com.workato.agent.file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);