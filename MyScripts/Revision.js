// let text = "Mohamed elgamal";

// console.log("the lengh is "+text.length);

// console.log("index of (5) is  " + text.charAt(5));

// console.log("char code at  (5) is  " + text.charCodeAt(5));
// let mystring=text.split(",");

// console.log(`hello MR ${text}`)

// let x =2 ; 
// if (x!=Infinity)

// {
//     x*=x;  
//     console.log(Infinity);}


// const myarray = ["test1", "test2", "test3"];
// console.log(myarray[1])

// //Used to add element at the end 
// myarray.push("test05")
// let length=myarray.length ; 
// let last=length-1; 
// console.log(myarray[length-1])

// //Used to delete the index of 0  
// myarray.shift("Test5")
// console.log(myarray);


// //Used to add the index of 0  
// myarray.unshift("Test655")
// console.log(myarray);

// console.log(typeof(myarray))
// //--used to join array elemnt togther with any char like *--------------------------
// console.log(myarray.toString());
// console.log(myarray.join("/"));


// //Used to remvoe the last index  
// myarray.pop()
// myarray.push("zzz");

// console.log(myarray);

// //Splice is used to added elements to the array 
// console.log(`Splice function `);

// myarray.splice(2, 1, "Lemon", "Kiwi");

// console.log(myarray);
// console.log(myarray.slice(1))

// //------- sort numbers and strings 
// let arraystrings=["Xyz","X7","x12","xs5","x90"]

// console.log(arraystrings); 
// console.log(arraystrings.sort()); 



// // Sorting the numbers need a compare function to sort 

// let arraynumbers = [10, 35, 2, 17, 18];
// console.log(
//   arraynumbers.sort(function (a, b) {
//     return a - b;
//   })
// ); 


// console.log(
//   arraynumbers.sort(function (a, b) {
//     return a - b;
//   }).reverse()
// ); 

// console.log("min Value ")
// console.log(Math.min.apply(null,arraynumbers));

// console.log(Math.max(...arraynumbers));


// //--for each 

// arraynumbers.forEach(myfunction); 
// function myfunction(Value, index, array)
// {
// console.log(`The current index "${index}
// " The value is " ${Value}`
// )}

// //Get Date Method
const mydate = new Date();

document.write("Print the date <BR> <BR>"); 
document.write(mydate+"<br> <br>");
document.write("Print the hours \"\ "+ mydate.getHours()+  "<BR> <BR>");
document.write('Print the min " ' + mydate.getMinutes() + "<BR> <BR>");

document.write("Print the year <BR> <BR>");

 import java.io.*;import java.net.HttpURLConnection;import java.net.URL;public class FileUpload {    public static void main(String[] args) {        String url = "http://example.com/upload"; //replace with your own url        String filePath = "/path/to/file/to/upload"; //replace with your own file path        try {            URL obj = new URL(url);            HttpURLConnection con = (HttpURLConnection) obj.openConnection();            //add request header            con.setRequestMethod("POST");            // Send post request            con.setDoOutput(true);            DataOutputStream wr = new DataOutputStream(con.getOutputStream());            FileInputStream fis = new FileInputStream(new File(filePath));             int len;             byte[] buf = new byte[4096];             while ((len = fis.read(buf)) > 0) {                 wr.write(buf, 0, len);             }             wr.flush();             wr.close();             int responseCode = con.getResponseCode();                    } catch (Exception e) {                    }            }    }