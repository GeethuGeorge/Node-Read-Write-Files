//Import fs module
const fs=require("fs");

const userList=[
  {name:"debug"},
  {name:"geethu"},
  {name:"emil"}
]

//to create and write 
/* fs.writeFileSync("file1.txt","This is File 2"); */
/* fs.writeFileSync("user.json", JSON.stringify(userList, undefined, 4))  */

/* //to check if exist
const exist=fs.existsSync("file1.txt");
console.log(exist)

//to read file
const data=fs.readFileSync("file1.txt", "utf8")
console.log(data) */

/* const dataUser=fs.readFileSync("user.json", "utf8")
console.log(JSON.parse(dataUser)) */
//to create a file with an object data

//to add data to existing file
/* fs.appendFileSync("file1.txt", "This is  a new text") */


//to delete file
/* fs.unlinkSync('file1.txt') */

//to create folder
/* fs.mkdirSync("api") */

//to delete folder
/* fs.rmdirSync("api") */
/* 
fs.writeFile("file2.txt", "This has async data", (err)=>{
  if(err) throw err;
  console.log("Writing Completed")
})


fs.readFile("file2.txt","utf8", (err, data)=>{
  if(err) throw err;
  console.log(data)
  console.log("Writing Completed")

})


console.log("========End===========")
 */