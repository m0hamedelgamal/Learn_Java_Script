
let job = "IT";
let salary = 1000;

//(Manager,Support,IT,Developer,Designer )

if (job === "Manager") 
{
    salary = 8000;
        console.log("salary is 8000")


} else if (job === "IT" || job === "Support") 
{
    salary = 6000;
        console.log("salary is 6000")

} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
        console.log("salary is 7000")

} else {
    salary = 4000
    
}



switch (job)
{
case "Manager": 
    salary = 8000;
    console.log("salary is 8000")
break; 
case "IT": 
case "Support": 

    salary = 6000;
    console.log("salary is 6000")
break; 

case "Developer": 
case "Designer": 
    salary = 7000;
    console.log("salary is 7000")
break; 
default: 
salary=4000
}






let aray1=["abdo","abdo","abdo","abdo","abdo"]
let aray2=["test","test","test","test","test"]


console.log(aray1);
console.log(aray2);
console.log(aray2.concat(aray1));
