(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1599:function(e,t,a){e.exports=a.p+"assets/img/recipe-tags.ed9ae987.png"},1600:function(e,t,a){e.exports=a.p+"assets/img/rerun-running.71c3c3ec.png"},1601:function(e,t,a){e.exports=a.p+"assets/img/import-lookup.26d0b206.png"},177:function(e,t,a){e.exports=a.p+"assets/img/navigate-to-recipelifecycle.c8a08a02.gif"},2552:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"importing-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#importing-deployment"}},[e._v("#")]),e._v(" Importing: Deployment")]),e._v(" "),o("p",[e._v("To import recipes and dependencies into a Workato instance, you will need a package containing "),o("router-link",{attrs:{to:"/recipe-development-lifecycle/export.html"}},[e._v("exported")]),e._v(" assets. Importing a package is the final step in the recipe development lifecycle where finished recipes are deployed in a Workato instance.")],1),e._v(" "),o("p",[e._v("There are multiple ways to deploy a tested package to a new environment.")]),e._v(" "),o("ul",[o("li",[e._v("Package Import UI\nA package zip file can be deployed manually using package import UI.")]),e._v(" "),o("li",[e._v("Deployment APIs\nA package zip file can be deployed using Workato "),o("router-link",{attrs:{to:"/workato-api/recipe-lifecycle-management.html"}},[e._v("platform APIs")]),e._v(".\nE.g: You can initiate the deployment from your CI/CD server using a cURL request.")],1)]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("This section covers how Workato recipes and dependencies are deployed (imported). If you have already imported a package, you may move on to the last section on working with external source control systems:")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/recipe-development-lifecycle/export.html"}},[e._v("Planning for lifecycle management")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/recipe-development-lifecycle/export.html"}},[e._v("Exporting: Packaging recipes and dependencies")])],1),e._v(" "),o("li",[o("strong",[e._v("Importing: Deployment")]),e._v(" "),o("em",[e._v("(current)")])]),e._v(" "),o("li",[o("router-link",{attrs:{to:"/recipe-development-lifecycle/rdlc-guide-source-control.html"}},[e._v("Working with external source control systems")])],1)]),e._v(" "),o("h2",{attrs:{id:"import-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-process"}},[e._v("#")]),e._v(" Import process")]),e._v(" "),o("p",[e._v("When importing, you are able to choose the folder into which you want to import, which must already exist. It will be helpful if it is clear from the naming scheme which folder should be used for import.")]),e._v(" "),o("p",[e._v("Navigate to the main recipe development lifecycle page.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(177),alt:"RLM in tools gif",width:"1232",height:"736"}})],1),e._v(" "),o("p",[e._v("From the recipe development lifecycle page, click on the ‘Import’ tab to begin.")]),e._v(" "),o("p",[e._v("Start the import process by selecting an import target folder. If the folder is not shown in the list of import target folders, click on ‘Import package to new folder’.")]),e._v(" "),o("p",[e._v("Select the .zip file to import from the computer as well as the target folder. The wizard will begin reading the package and loading its contents. It will also compare the corresponding recipes and dependencies in the account and look for changes.")]),e._v(" "),o("h2",{attrs:{id:"import-status-tags"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-status-tags"}},[e._v("#")]),e._v(" Import status tags")]),e._v(" "),o("p",[e._v("On the import preview screen, each item is assigned a tag that will inform the user of its import status.")]),e._v(" "),o("h3",{attrs:{id:"recipes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recipes"}},[e._v("#")]),e._v(" Recipes")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(1599),alt:"RLM in tools gif",width:"1838",height:"512"}}),e._v(" "),o("em",[e._v("All possible status tags for recipes")])],1),e._v(" "),o("ul",[o("li",[e._v('Recipes that do not exist are added to the folder will be tagged "Creates a new recipe".')]),e._v(" "),o("li",[e._v('Recipes that exist and were not changed will be tagged with "No change".')]),e._v(" "),o("li",[e._v('Recipes that already exist that have been edited will be tagged with "Overwrites recipe".')]),e._v(" "),o("li",[e._v('If a running recipe needs to be updated it will be tagged with "Overwrites running recipe". The recipes will be stopped, updated and then automatically restarted.')])]),e._v(" "),o("h4",{attrs:{id:"updating-a-running-recipe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-running-recipe"}},[e._v("#")]),e._v(" Updating a running recipe")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(1600),alt:"RLM in tools gif",width:"1882",height:"1042"}}),e._v(" "),o("em",[e._v("Running recipes will be automatically stopped and then restarted")])],1),e._v(" "),o("p",[e._v("If there are running recipes that need to be updated, a warning will appear after the review process. Acknowledge that the recipes with triggers that are subscribed to webhooks may miss events in the time that it takes for the recipe to be updated and that recipes with pending jobs cannot be stopped.")]),e._v(" "),o("p",[e._v("As a best practice, it is recommended that the recipes to be updated are stopped manually before the import process.")]),e._v(" "),o("p",[e._v("The list of stopped recipes are temporarily stored and will be automatically restarted after the import process is complete. Any errors with restarting the recipes have to be fixed manually. Once the process is completed, the new/updated recipes and dependencies should be successfully imported and restarted.")]),e._v(" "),o("p",[e._v("If errors occur with starting a recipe after the import process, you should click on the link to the recipe, resolve any errors and restart the recipe manually.")]),e._v(" "),o("h3",{attrs:{id:"connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),o("p",[e._v("One of the main advantages of separate accounts for the different lifecycle phases is that each can have its own set of connections, and these can be different: for example, a development account can use an application sandbox account for its recipes, while a production account uses the production application account with live data.")]),e._v(" "),o("p",[e._v("For security reasons, exporting a package does not export any credentials, keys or other private data needed to make a connection to applications. Those are kept private. Only the connection name, application type and other non-sensitive information will be exported. Here, a placeholder connection is created. This placeholder contains only the application and name of the connection. "),o("strong",[e._v("Authentication to this placeholder is required after import")]),e._v(".")]),e._v(" "),o("p",[e._v("When importing a package, Workato will attempt to automatically fill in connection details with existing connections in the importing account. Workato checks that this "),o("strong",[e._v("connection type exists")]),e._v(" and that that there are "),o("strong",[e._v("no multiple connections")]),e._v(" of that type (for example, multiple Gmail accounts). If these conditions are met, the connections required in the imported recipes will be configured automatically. If this is not possible, then you may need to manually re-establish connections needed by the recipes after import.")]),e._v(" "),o("h3",{attrs:{id:"lookup-tables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lookup-tables"}},[e._v("#")]),e._v(" Lookup tables")]),e._v(" "),o("p",[e._v("Lookup tables in the zip file will always contain schema data (name and column names) but may or may not contain data. During import, users can specify if the table data should be or overwritten or ignored.")]),e._v(" "),o("p",[e._v("If the lookup table contains no data, it will be created/updated with only column names. If the lookup table contains data, use the radio buttons to select if the data should be overwritten or ignored.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(1601),alt:"RLM in tools gif",width:"1872",height:"406"}}),e._v(" "),o("em",[e._v("'Import data' or 'Ignore data' on individual lookup tables to be imported")])],1),e._v(" "),o("p",[e._v("‘Overwrite’ will cause all table data to be overwritten and all data in the table to be replaced permanently. ‘Ignore’ will disregard all table data even though the table was exported with data.")]),e._v(" "),o("p",[e._v("Workato recommends you establish rules and procedures for the use of these options. The simplest approach is to use the defaults: “include data” on export and “overwrite data” on import. This assumes, however, that the lookup table in the importing account can be safely overwritten, without affecting recipes that are not part of the package being imported.")]),e._v(" "),o("h3",{attrs:{id:"other-dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-dependencies"}},[e._v("#")]),e._v(" Other dependencies")]),e._v(" "),o("p",[e._v("Other recipe dependencies will have the following tags according to their statuses.")]),e._v(" "),o("ol",[o("li",[e._v("A new recipe/dependency will be added (Creates a new dependency)")]),e._v(" "),o("li",[e._v("If there are no detected changes, the asset will be tagged with a "),o("strong",[e._v("‘No change’")]),e._v(" tag")]),e._v(" "),o("li",[e._v("The current recipe/dependency will be overwritten with the changes in the import (Overwrites dependency)")])]),e._v(" "),o("h2",{attrs:{id:"packages-import-behavior"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#packages-import-behavior"}},[e._v("#")]),e._v(" Packages import behavior")]),e._v(" "),o("p",[e._v("The following table details how an imported package's assets are moved into your Workato account.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Dependency type")]),e._v(" "),o("th",[e._v("What Workato does when package is imported")]),e._v(" "),o("th",[e._v("Location")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Recipes")]),e._v(" "),o("td",[o("strong",[e._v("Overwrites")]),e._v(" recipe if a recipe with the same name exists in the folder. "),o("br"),e._v(" "),o("strong",[e._v("Creates")]),e._v(" new recipe if no recipe with the same name exists in the folder.")]),e._v(" "),o("td",[e._v("Selected folder")])]),e._v(" "),o("tr",[o("td",[e._v("Custom connectors")]),e._v(" "),o("td",[e._v("Overwrites existing custom connector if connector with same name already exists in the Workato account. Creates new connector if no connector with the same name exists in the Workato account.")]),e._v(" "),o("td",[e._v("Connector SDK")])]),e._v(" "),o("tr",[o("td",[e._v("Connections")]),e._v(" "),o("td",[e._v("Creates a connection placeholder. The user should connect the application after importing. Nothing is done if a connection with the same name already exists.")]),e._v(" "),o("td",[e._v("App Connections")])]),e._v(" "),o("tr",[o("td",[e._v("Lookup tables")]),e._v(" "),o("td",[e._v("Creates a lookup table with the header rows. Imports the lookup table data if selected during export and import.")]),e._v(" "),o("td",[e._v("Lookup table")])]),e._v(" "),o("tr",[o("td",[e._v("Properties")]),e._v(" "),o("td",[e._v("Adds properties to existing properties in the Workato account. Does nothing if a property with the same name already exists.")]),e._v(" "),o("td",[e._v("Account Properties")])]),e._v(" "),o("tr",[o("td",[e._v("Common data models")]),e._v(" "),o("td",[e._v("Adds the schema to existing shared schemas in the Workato account or updates it if a schema with the same name already exists.")]),e._v(" "),o("td",[e._v("Common data models")])]),e._v(" "),o("tr",[o("td",[e._v("Message templates")]),e._v(" "),o("td",[e._v("Adds the message template to existing templates in the Workato account or updates it if a template with the same name already exists.")]),e._v(" "),o("td",[e._v("Message templates")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);