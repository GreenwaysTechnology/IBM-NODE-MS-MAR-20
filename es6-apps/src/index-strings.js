//literals,let,const,var

//es 5 declaration
var firstName = "Subramanian";

console.log("First Name : " + firstName);
//var to let keyword : var vs let : will dicuss

let lastName = 'Murugan';

//string concation : + , es 6 backtick with template literal
console.log("Last Name :" + lastName)
console.log('Last Name', lastName);
//es 6 concept : backtick with template literal : `${variable}`
console.log(`Last Name ${lastName}`)

//back tick uses:
//multi line string literal
let title = "IBM Digital";

let htmlDoc = "<html>" +
    "<head>" +
    "<title>" + title +
    "</title>"
"</head>" +
    "<body>" +
    "</body>" +
    "</html>";
console.log(htmlDoc);
//multi line with back tic notation

let body = 'Hello im new to es 6'
let newHtmlDoc = `
<html>
 <head>
     <title>${title}</title>
 </head>
 <body>
      <h1>${body}</h1>
  </body>
 </html>
`;
console.log(newHtmlDoc);



