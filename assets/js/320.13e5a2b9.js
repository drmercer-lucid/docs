(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{2250:function(t,e,s){"use strict";s.r(e);var a=s(0),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"postgresql-run-custom-sql-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-run-custom-sql-action"}},[t._v("#")]),t._v(" PostgreSQL - Run custom SQL action")]),t._v(" "),a("h2",{attrs:{id:"run-custom-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-custom-sql"}},[t._v("#")]),t._v(" Run custom SQL")]),t._v(" "),a("p",[t._v("This action lets you send a SQL string to the PostgreSQL instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like "),a("code",[t._v("INSERT")]),t._v(", "),a("code",[t._v("UPDATE")]),t._v(", "),a("code",[t._v("SELECT")]),t._v(" and "),a("code",[t._v("DELETE")]),t._v(", as well as Data Definition Language (DDL) commands, like "),a("code",[t._v("CREATE")]),t._v(", "),a("code",[t._v("ALTER")]),t._v(" and "),a("code",[t._v("DROP")]),t._v(".")]),t._v(" "),a("p",[t._v("Unlike "),a("router-link",{attrs:{to:"/connectors/postgresql/select.html#select-rows-using-custom-sql"}},[t._v("Select rows using custom SQL")]),t._v(", this action is not optimized for easy configuration. For "),a("code",[t._v("SELECT")]),t._v(" statements with large number of columns, use that action instead.")],1),t._v(" "),a("p",[a("strong",[t._v("This action requires a connection using OPA version 2.4.3 or newer.")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(790),alt:"Run custom SQL action",width:"2202",height:"2177"}}),t._v(" "),a("em",[t._v("Run custom SQL action")])],1),t._v(" "),a("h3",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SQL")]),t._v(" "),a("td",[a("p",[a("b",[t._v("This field is required")]),t._v(". Provide a valid SQL string to be executed. This SQL string will be executed in your PostgreSQL instance.")]),t._v(" "),a("p",[t._v("If multiple SQL statements are provided, all of them will be executed. However, only results from the last statement will be returned. Make sure each statement is separated by a "),a("code",[t._v(";")]),t._v(" character.")]),t._v(" "),a("p",[t._v("You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),a("code",[t._v("''")]),t._v(").")])])]),t._v(" "),a("tr",[a("td",[t._v("Output fields")]),t._v(" "),a("td",[a("p",[t._v("Use this input to describe the columns that you are expecting from your SQL statement.")]),t._v(" "),a("p",[t._v("If you do not expect any return values or do not need any, you may ignore this input field.")])])])])]),t._v(" "),a("h3",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Rows")]),t._v(" "),a("td",[a("p",[t._v("List of rows returned from the SQL execution. The fields in this list are defined by the "),a("b",[t._v("Output fields")]),t._v(" input field.")]),t._v(" "),a("p",[t._v("If left blank, this row will be available in the datatree as an array datapill.")])])]),t._v(" "),a("tr",[a("td",[t._v("Rows affected")]),t._v(" "),a("td",[a("p",[t._v("This is an integer value indicating the number of rows inserted/updated/deleted from the SQL string.")]),t._v(" "),a("p",[t._v("When executing "),a("code",[t._v("SELECT")]),t._v(" statements, this will return "),a("code",[t._v("nil")]),t._v(".")]),t._v(" "),a("p",[t._v("When executing a DDL (for example, creating a table), the value "),a("code",[t._v("0")]),t._v(" will be returned.")])])])])]),t._v(" "),a("h3",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),a("p",[t._v("There is a size limit of "),a("code",[t._v("1000")]),t._v(" rows when your custom SQL statement returns data.")])])}),[],!1,null,null,null);e.default=i.exports},790:function(t,e,s){t.exports=s.p+"assets/img/run_sql.d60ee8d4.png"}}]);