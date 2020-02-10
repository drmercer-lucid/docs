(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{2508:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"number-formulas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#number-formulas"}},[t._v("#")]),t._v(" Number formulas")]),t._v(" "),v("p",[t._v("In Ruby, Fixnum refers to integers, e.g. 9, 10, 11, while Float refers to decimals, e.g. 1.75.")]),t._v(" "),v("p",[t._v("Workato supports a variety of number formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always "),v("router-link",{attrs:{to:"/contact-us.html"}},[t._v("reach out to us")]),t._v(" to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged. Take note that most formulas will return an error and stop the job if it tries to operate on nulls (expressed as "),v("code",[t._v("nil")]),t._v(" in Ruby), except for "),v("code",[t._v("present?")]),t._v(", "),v("code",[t._v("presence")]),t._v(" and "),v("code",[t._v("blank?")]),t._v(".")],1),t._v(" "),v("p",[t._v("You can refer to the complete Ruby documentation for Fixnum (integers) "),v("a",{attrs:{href:"http://ruby-doc.org/core-2.3.3/Fixnum.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),v("OutboundLink")],1),t._v(" as well as the Ruby documentation for Float (decimals) "),v("a",{attrs:{href:"http://ruby-doc.org/core-2.3.3/Float.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h1",{attrs:{id:"arithmetic-operations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operations"}},[t._v("#")]),t._v(" Arithmetic operations")]),t._v(" "),v("p",[t._v("In the cases of arithmetic operations, whether the values are of integer types or decimal (float) types are important. Formulas will alway stick to the types given as input, and the returned result will be of the most precise type.")]),t._v(" "),v("p",[t._v("For example:")]),t._v(" "),v("ul",[v("li",[t._v("If integer values are provided, an integer value will be returned.")]),t._v(" "),v("li",[t._v("If float values are provided, a float value will be returned.")]),t._v(" "),v("li",[t._v("If both float and integer values are provided, a float value will be returned, as that is more precise.")])]),t._v(" "),v("h2",{attrs:{id:"the-add-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-add-operator"}},[t._v("#")]),t._v(" The add (+) operator")]),t._v(" "),v("p",[t._v("This operator allows the addition of operands on either side. This section talks about number arithmetics. Date arithmetics is possible as well and can be found "),v("router-link",{attrs:{to:"/formulas/date-formulas.html#date-arithmetics"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h3",{attrs:{id:"example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("4 + 7")])]),t._v(" "),v("td",[t._v("11")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 + 7")])]),t._v(" "),v("td",[t._v("11.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 + 7.0")])]),t._v(" "),v("td",[t._v("11.0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"the-subtract-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-subtract-operator"}},[t._v("#")]),t._v(" The subtract (-) operator")]),t._v(" "),v("p",[t._v("This operator subtracts the right hand operand from the left hand operand. This section talks about number arithmetics. Date arithmetics is possible as well and can be found "),v("router-link",{attrs:{to:"/formulas/date-formulas.html#date-arithmetics"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h3",{attrs:{id:"example-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("4 - 7")])]),t._v(" "),v("td",[t._v("-3")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 - 7")])]),t._v(" "),v("td",[t._v("-3.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 - 7.0")])]),t._v(" "),v("td",[t._v("-3.0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"the-multiply-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-multiply-operator"}},[t._v("#")]),t._v(" The multiply (*) operator")]),t._v(" "),v("p",[t._v("This operator multiplies the operands on either side.")]),t._v(" "),v("h3",{attrs:{id:"example-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("4 * 7")])]),t._v(" "),v("td",[t._v("28")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 * 7")])]),t._v(" "),v("td",[t._v("28.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 * 7.0")])]),t._v(" "),v("td",[t._v("28.0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"the-divide-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-divide-operator"}},[t._v("#")]),t._v(" The divide (/) operator")]),t._v(" "),v("p",[t._v("Divides left hand operand by right hand operand.")]),t._v(" "),v("h3",{attrs:{id:"example-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("4 / 7")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 / 7")])]),t._v(" "),v("td",[t._v("0.571428...")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7 / 4")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7 / 4.0")])]),t._v(" "),v("td",[t._v("1.75")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7.0 / 4")])]),t._v(" "),v("td",[t._v("1.75")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7.0 / 4.0")])]),t._v(" "),v("td",[t._v("1.75")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"the-exponential-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-exponential-operator"}},[t._v("#")]),t._v(" The exponential (**) operator")]),t._v(" "),v("p",[t._v("Left hand operand to the power of the right hand operand.")]),t._v(" "),v("h3",{attrs:{id:"example-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("5**3")])]),t._v(" "),v("td",[t._v("125")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4**1.5")])]),t._v(" "),v("td",[t._v("8.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0**2")])]),t._v(" "),v("td",[t._v("16.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("3**-1")])]),t._v(" "),v("td",[t._v('"1/3"')]),t._v(" "),v("td",[t._v("Rational")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("8**(3**-1)")])]),t._v(" "),v("td",[t._v("2.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7**-1.6")])]),t._v(" "),v("td",[t._v("0.044447...")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"the-modulo-operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-modulo-operator"}},[t._v("#")]),t._v(" The modulo (%) operator")]),t._v(" "),v("p",[t._v("Divides left hand operand by right hand operand and returns the remainder.")]),t._v(" "),v("h3",{attrs:{id:"example-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-6"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("4 % 7")])]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4.0 % 7")])]),t._v(" "),v("td",[t._v("4.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("4 % 7.0")])]),t._v(" "),v("td",[t._v("4.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7 % 4")])]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("7.0 % 4.0")])]),t._v(" "),v("td",[t._v("3.0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h1",{attrs:{id:"other-number-formulas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#other-number-formulas"}},[t._v("#")]),t._v(" Other number formulas")]),t._v(" "),v("h2",{attrs:{id:"abs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#abs"}},[t._v("#")]),t._v(" abs")]),t._v(" "),v("p",[t._v("This function returns the absolute (positive) value of a number.")]),t._v(" "),v("h3",{attrs:{id:"example-7"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-7"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("-45.abs")])]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.abs")])]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.0.abs")])]),t._v(" "),v("td",[t._v("45.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.67.abs")])]),t._v(" "),v("td",[t._v("45.67")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"round"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#round"}},[t._v("#")]),t._v(" round")]),t._v(" "),v("p",[t._v("Rounds off a numerical value to a specified after the formula. Accepts negative values.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("1234.567.round")])]),t._v(" "),v("td",[t._v("1235")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1234.567.round(2)")])]),t._v(" "),v("td",[t._v("1234.57")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1234.567.round(-2)")])]),t._v(" "),v("td",[t._v("1200")]),t._v(" "),v("td",[t._v("Fixnum")])])])]),t._v(" "),v("hr"),t._v(" "),v("h1",{attrs:{id:"conditionals"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#conditionals"}},[t._v("#")]),t._v(" Conditionals")]),t._v(" "),v("h2",{attrs:{id:"blank"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#blank"}},[t._v("#")]),t._v(" blank?")]),t._v(" "),v("p",[t._v("This function checks the input and returns true if it is a null or an empty string.")]),t._v(" "),v("h3",{attrs:{id:"example-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-8"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('" ".blank?')])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("null.blank?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.blank?")])]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.blank?")])]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"even"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#even"}},[t._v("#")]),t._v(" even?")]),t._v(" "),v("p",[t._v("This function checks the input and returns true if it is an even number.")]),t._v(" "),v("h3",{attrs:{id:"example-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-9"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("2.even?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("3.even?")])]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"is-not-true"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#is-not-true"}},[t._v("#")]),t._v(" is_not_true?")]),t._v(" "),v("p",[t._v("Converts a value to boolean and returns true if value is truthy.")]),t._v(" "),v("h3",{attrs:{id:"example-10"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-10"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('"false".is_not_true?')])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.is_not_true?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("nil.is_not_true?")])]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"is-true"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#is-true"}},[t._v("#")]),t._v(" is_true?")]),t._v(" "),v("p",[t._v("Converts a value to boolean and returns true if value is truthy.")]),t._v(" "),v("h3",{attrs:{id:"example-11"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-11"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('"false".is_true?')])]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1.is_true?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("nil.is_true?")])]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"odd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#odd"}},[t._v("#")]),t._v(" odd?")]),t._v(" "),v("p",[t._v("This function checks the input and returns true if it is an odd number.")]),t._v(" "),v("h3",{attrs:{id:"example-12"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-12"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("3.odd?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("2.odd?")])]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"presence"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#presence"}},[t._v("#")]),t._v(" presence")]),t._v(" "),v("p",[t._v("This function will check the input number, returning its value if there is one present, else returning nil.")]),t._v(" "),v("h3",{attrs:{id:"example-13"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-13"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('" ".presence')])]),t._v(" "),v("td",[t._v("nil")]),t._v(" "),v("td",[t._v("nil")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("null.presence")])]),t._v(" "),v("td",[t._v("nil")]),t._v(" "),v("td",[t._v("nil")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.presence")])]),t._v(" "),v("td",[t._v("-45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.presence")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.0.presence")])]),t._v(" "),v("td",[t._v("45.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.0.presence")])]),t._v(" "),v("td",[t._v("-45.0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"present"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#present"}},[t._v("#")]),t._v(" present?")]),t._v(" "),v("p",[t._v("This function will check the input, returning true if there is a value present. If input is null or an empty string, formula returns false.")]),t._v(" "),v("h3",{attrs:{id:"example-14"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-14"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('" ".present?')])]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("null.present?")])]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.present?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.present?")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.0.present?")])]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("h1",{attrs:{id:"conversions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#conversions"}},[t._v("#")]),t._v(" Conversions")]),t._v(" "),v("h2",{attrs:{id:"to-i"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#to-i"}},[t._v("#")]),t._v(" to_i")]),t._v(" "),v("p",[t._v("This function can be used on a number to only take its integer value. Floats will be rounded down. To round to closest integer, use the "),v("code",[t._v("round")]),t._v(" formula instead.")]),t._v(" "),v("h3",{attrs:{id:"example-15"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-15"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("45.67.to_i")])]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.67.to_i")])]),t._v(" "),v("td",[t._v("-45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.to_i")])]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.to_i")])]),t._v(" "),v("td",[t._v("-45")]),t._v(" "),v("td",[t._v("Fixnum")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.to_i")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("Fixnum")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"to-f"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#to-f"}},[t._v("#")]),t._v(" to_f")]),t._v(" "),v("p",[t._v("This function can be used on a number to retain its decimal values. When applied to an integer, it converts the data type from fixnum to float.")]),t._v(" "),v("h3",{attrs:{id:"example-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-16"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("45.67.to_f")])]),t._v(" "),v("td",[t._v("45.67")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.67.to_f")])]),t._v(" "),v("td",[t._v("-45.67")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.to_f")])]),t._v(" "),v("td",[t._v("45.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.to_f")])]),t._v(" "),v("td",[t._v("-45.0")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.to_f")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("Float")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"to-s"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#to-s"}},[t._v("#")]),t._v(" to_s")]),t._v(" "),v("p",[t._v("This function converts a number into a string.")]),t._v(" "),v("h3",{attrs:{id:"example-17"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-17"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("45.67.to_s")])]),t._v(" "),v("td",[t._v('"45.67"')]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.67.to_s")])]),t._v(" "),v("td",[t._v('"-45.67"')]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.to_s")])]),t._v(" "),v("td",[t._v('"45"')]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("-45.to_s")])]),t._v(" "),v("td",[t._v('"-45"')]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0.to_s")])]),t._v(" "),v("td",[t._v('"0"')]),t._v(" "),v("td",[t._v("String")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"to-currency"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#to-currency"}},[t._v("#")]),t._v(" to_currency")]),t._v(" "),v("p",[t._v("This function converts a number into a currency string. The number of decimal places to round to can be defined with an additional parameter.")]),t._v(" "),v("p",[t._v("By adding a parameter with a locale and country code, it will add the appropriate currency symbol.")]),t._v(" "),v("h3",{attrs:{id:"example-18"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-18"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")]),t._v(" "),v("th",[t._v("Type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("45.678.to_currency")])]),t._v(" "),v("td",[t._v("$45.68")]),t._v(" "),v("td",[t._v("Currency")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.6789.to_currency(precision:3)")])]),t._v(" "),v("td",[t._v("$45.678")]),t._v(" "),v("td",[t._v("Currency")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("45.67.to_currency(locale: fr)")])]),t._v(" "),v("td",[t._v("45.67 €")]),t._v(" "),v("td",[t._v("Currency")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"to-phone"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#to-phone"}},[t._v("#")]),t._v(" to_phone")]),t._v(" "),v("p",[t._v("This function converts a number into a formatted phone number. By default, the delimiter is a dash (-), but delimiters can be specified via a parameter.")]),t._v(" "),v("p",[t._v("By adding a parameter with area code: true, the first three numbers will be enclosed in brackets, representing the area.")]),t._v(" "),v("p",[t._v("By adding a parameter with extension: number, the formatted phone number will have the extension appended at the end.")]),t._v(" "),v("p",[t._v("By adding a parameter with country_code: number, the formatted phone number will be prefixed with the country code.")]),t._v(" "),v("h3",{attrs:{id:"example-19"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-19"}},[t._v("#")]),t._v(" Example")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Result")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("1112223333.to_phone")])]),t._v(" "),v("td",[t._v('"111-222-3333"')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('1112223333.to_phone(delimiter: " ")')])]),t._v(" "),v("td",[t._v('"111 222 3333"')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1112223333.to_phone(area_code: true)")])]),t._v(" "),v("td",[t._v('"(111) 222-3333"')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1112223333.to_phone(country_code: 1)")])]),t._v(" "),v("td",[t._v('"+1-111-222-3333"')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1112223333.to_phone(area_code: true, country_code: 1)")])]),t._v(" "),v("td",[t._v('"+1-(111) 222-3333"')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("1112223333.to_phone(extension: 444)")])]),t._v(" "),v("td",[t._v('"111-222-3333 x 444"')])])])]),t._v(" "),v("h2",{attrs:{id:"converting-other-data-types-to-numbers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#converting-other-data-types-to-numbers"}},[t._v("#")]),t._v(" Converting other data types to numbers")]),t._v(" "),v("p",[t._v("To convert a value of other data types, e.g. string, date, into an integer or a float, use the "),v("a",{attrs:{href:"#to-i"}},[t._v("to_i")]),t._v(" and the "),v("a",{attrs:{href:"#to-f"}},[t._v("to_f")]),t._v(" formulas respectively.")])])}),[],!1,null,null,null);e.default=a.exports}}]);