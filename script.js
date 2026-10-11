const students = {
    ST101: {
        name: "Rahul",
        department: "CSE",
        cgpa: 8.4,
        backlogs: 0,
        skills: ["JavaScript", "Python", "SQL"],
        placement: {
            status: "Not Placed",
            company: null,
            package: 0
        }
    },

    ST102: {
        name: "Anita",
        department: "ISE",
        cgpa: 9.1,
        backlogs: 0,
        skills: ["Java", "SQL", "React"],
        placement: {
            status: "Placed",
            company: "Infosys",
            package: 6.5
        }
    },

    ST103: {
        name: "Kiran",
        department: "CSE",
        cgpa: 7.2,
        backlogs: 1,
        skills: ["Python", "SQL"],
        placement: {
            status: "Not Placed",
            company: null,
            package: 0
        }
    },

    ST104: {
        name: "Priya",
        department: "ECE",
        cgpa: 8.8,
        backlogs: 0,
        skills: ["Python", "Embedded C", "SQL"],
        placement: {
            status: "Placed",
            company: "TCS",
            package: 7.2
        }
    },

    ST105: {
        name: "Arjun",
        department: "CSE",
        cgpa: 8.0,
        backlogs: 0,
        skills: ["JavaScript", "React", "Node.js"],
        placement: {
            status: "Not Placed",
            company: null,
            package: 0
        }
    },

    ST106: {
        name: "Sneha",
        department: "ISE",
        cgpa: 7.8,
        backlogs: 0,
        skills: ["Python", "JavaScript", "SQL"],
        placement: {
            status: "Not Placed",
            company: null,
            package: 0
        }
    }
};




const companies = {
    Infosys: {
        minimumCGPA: 7.5,
        maximumBacklogs: 0,
        requiredSkill: "SQL",
        package: 6.5
    },

    TCS: {
        minimumCGPA: 8.0,
        maximumBacklogs: 0,
        requiredSkill: "Python",
        package: 7.2
    },

    TechNova: {
        minimumCGPA: 8.0,
        maximumBacklogs: 0,
        requiredSkill: "JavaScript",
        package: 10
    },

    DataWorks: {
        minimumCGPA: 8.5,
        maximumBacklogs: 0,
        requiredSkill: "Python",
        package: 12
    }
};


function displayallstudent(){
    for(let i in students){
        console.log(i);
        if(typeof students[i] === "object"){
            for(let j in students[i]){
                if(j==="name")
                
                console.log("name: " + students[i][j])
                if(j==="department")
                console.log("department: " + students[i][j])
                if(j==="cgpa")
                console.log("cgpa: " + students[i][j])
                if(j==="backlogs")
                console.log("backlogs: " + students[i][j])  
                if(typeof students[i][j] === "object" ){
                    for(let k in students[i][j]){
                        if(k==="status")
                        console.log("placement status: " + students[i][j][k])
                        if(students[i][j][k]==="Placed"){
                        
                        console.log("placement company: " + students[i][j]["company"])  
                        
                        console.log("placement package: " + students[i][j]["package"])  
                        }  
                    }
            }
        }
        }
    }
}


function searchstudent(studentid){

if(studentid in students){
    console.log("Student found")
    for(let i in students[studentid]){
        if(i==="name")
        console.log("Name: " + students[studentid][i])

        if(i==="department")
        console.log("Department: " + students[studentid][i])    
        if(i==="cgpa")
        console.log("CGPA: " + students[studentid][i])  
    if(i==="backlogs")
        console.log("Backlogs: " + students[studentid][i])  
    if (typeof students[studentid][i] === "object") {
        for(let j in students[studentid][i]){
            if(j==="status")
            console.log("Placement Status: " + students[studentid][i][j])
        }
    }
  }
}else{
    console.log("Student not found")
    }
}


function CheckCompanyEligibility(studentid,companyname){
console.log("Student ID: " + studentid)
if(studentid in students){
    if(companyname in companies){
        for(let i in students[studentid]){
            if(i==="cgpa"){
                console.log("CGPA: " + students[studentid][i])}
            
            if(i==="backlogs"){
                console.log("Backlogs: " + students[studentid][i])}
            if(i==="skills"){
                console.log("Skills: " + students[studentid][i])
            }
        }
    } console.log("Company Name: " + companyname)
        for(let j in companies[companyname]){
            if(j==="minimumCGPA")
                console.log("Minimum CGPA:"+ companies[companyname][j])
            if(j==="maximumBacklogs")
                console.log("Maximum Backlogs:"+ companies[companyname][j])
            if(j==="requiredSkill")
                console.log("Required Skill:"+ companies[companyname][j])

        }
            let cgpaPassed = false;
            let backlogPassed = false;
            let skillPassed = false;

            if (students[studentid].cgpa >= companies[companyname].minimumCGPA) {
                cgpaPassed = true;
            }

            if (students[studentid].backlogs <= companies[companyname].maximumBacklogs) {
                backlogPassed = true;
            }

            for (let skill of students[studentid].skills) {

                if (skill == companies[companyname].requiredSkill) {
                    skillPassed = true;
                    break;
                }
            }

            console.log("CGPA required: " + (cgpaPassed ? "passed" : "failed"));
            console.log("Backlogs required: " + (backlogPassed ? "passed" : "failed"));
            console.log("Skills required: " + (skillPassed ? "passed" : "failed"));

            if (cgpaPassed && backlogPassed && skillPassed) {
                console.log("Result: ELIGIBLE");
            }
            else {
                console.log("Result: NOT ELIGIBLE");
            }

        
    
}
}





function placedstudents(){
let name=""
let company=""
let package=""
    for (let i in students) {
        

        if (typeof students[i] === "object") {
            for (let j in students[i]) { 
               
                 
                if(typeof students[i][j] === "object" ){
                    for(let k in students[i][j]){
                        if(k==="status")
                if(students[i][j][k]==="Placed"){
                
                 name=students[i]["name"]   
                 company=students[i][j]["company"] 
                 package=students[i][j]["package"]+
                 console.log(name)
                 console.log("Company:",company)
                 console.log("Package:",package)

                
                
                }
            }
        }
    }
}
}  


}




function unplacedstudents(){
let unplacedStudents =""
    for (let i in students) {
        if (typeof students[i] === "object") {
            for (let j in students[i]) {        
                if(typeof students[i][j] === "object" ){
                    for(let k in students[i][j]){
                        if(k==="status")
                        if(students[i][j][k] === "Not Placed"){
                           
                           unplacedStudents+=students[i]["name"] + "\n"
                        }
                    }
                }
            }
        }
    }
console.log(unplacedStudents)   
}  


 function departmentstatistics(department){
let count = 0
let total=0
let unplaced=0
for (let i in students) {
   
    if( students[i]["department"] === department){
        
        count+=1
    }
    for(let j in students[i]){
        if(typeof students[i][j] === "object" ){
            for(let k in students[i][j]){
                if(k==="status")
                if(students[i][j][k] === "Placed"){
                    total+=1
                } 
                if(students[i][j][k] === " Not Placed"){
                    unplaced+=1
                }
            }
        }
    }
}

console.log(department)
console.log("Total students " + ":" + count)
console.log("Placed  " +  ": " + total)
console.log("Unplaced " + ": " + unplaced)
 
 }

 function placementstatistics(){

let totalStudents = 0
let placedStudents = 0
let unplacedStudents = 0
let placementrate = 0
let averagecgpa = 0
let averapackage = 0
let highestpackage = 0


 for(let i in students){
       totalStudents+=1
        if(typeof students[i] === "object"){

            for(let j in students[i]){
                if(j==="cgpa"){
                    averagecgpa+=students[i][j]
                }
            
                 
                if(typeof students[i][j] === "object" ){
                    for(let k in students[i][j]){
                        if(k==="status")
                        
                        if(students[i][j][k]==="Placed"){
                            
                            placedStudents+=1
                            averapackage+=students[i][j]["package"]
                            if(students[i][j]["package"]>highestpackage){
                                highestpackage=students[i][j]["package"]
                            }
                        
                       
                        } 
                        else{
                            if(students[i][j][k]==="Not Placed"){
                                unplacedStudents+=1
                            }   
                        } 
                    }
            }
        }
    }
    }
    console.log("Total Students: " + totalStudents)
    console.log("Placed Students: " + placedStudents)
    console.log("Unplaced Students: " + unplacedStudents)
    placementrate = (placedStudents / totalStudents) * 100
    console.log("Placement Rate: " + placementrate.toFixed(2) + "%")
    averagecgpa =( averagecgpa / totalStudents) 
    console.log("Average CGPA: " + averagecgpa.toFixed(2))
    averapackage = averapackage / placedStudents
    console.log("Average Package: " + averapackage.toFixed(2) + " LPA")
    console.log("Highest Package: " + highestpackage + " LPA")
}

function skiledstudentlist(skill){
let count=0
let studentname=""
for(let i in students){
    if(typeof students[i] === "object"){
        for(let j in students[i]){
            if(j==="skills"){
                if(students[i][j].includes(skill)){
                    count++
                    studentname+=students[i]["name"] + "\n"
                }
            }
        }
    }
}
console.log(studentname)
console.log("total:",count)
}




function updateplacement(studentid,companyname,package){
    let place=""
    let company=""
    let package1=""
for (let i in students) {
    if(typeof students[i] === "object"){
        for(let j in students[i]){
            if(i === studentid && j === "placement"){
               place=  students[i][j]["status"] = "Placed"
                company= students[i][j]["company"] = companyname
                package1= students[i][j]["package"] = package
                 console.log("Student placement Status:",place)
                 console.log("Student placed in:",company)
                 console.log("Student placed at package of:",package1)
                console.log("placement updated successfully for student ID: " + studentid)
            }
        }
    }
}
}


 function getEligibleStudents(companyName) {


    const company = companies[companyName];

    if (!company) {
        console.log("Company not found.");
        return;
    }

    console.log("\n========== " + companyName.toUpperCase() + " ELIGIBILITY ==========");

    console.log("Minimum CGPA     :", company.minimumCGPA);
    console.log("Maximum Backlogs :", company.maximumBacklogs);
    console.log("Required Skill   :", company.requiredSkill);
    console.log("Package          :", company.package + " LPA");

    console.log("\nEligible Students:");

    let count = 0;

    for (const id in students) {

        const student = students[id];

        let skillFound = false;

        for (const skill of student.skills) {

            if (skill === company.requiredSkill) {
                skillFound = true;
                break;
            }
        }

        const cgpaPassed =
            student.cgpa >= company.minimumCGPA;

        const backlogPassed =
            student.backlogs <= company.maximumBacklogs;

        if (cgpaPassed && backlogPassed && skillFound) {

            count++;

            console.log(count + ". " + student.name);
        }
    }

    console.log("\nTotal Eligible Students:", count);
}


while (true) {
    let choice = prompt("Enter your choice:\n1. Display all students\n2. Search for Students\n3. Check company eligibility\n4. Display Placed Students\n5. Display Unplaced Students\n6. Department Statistics\n7. Placement Statistics\n8. Update Placement\n9. Company-wise Eligible Students\n10. Skiled student list\n11.exit");

    if (choice =="1") {
        displayallstudent();
    } else if (choice === "2") {
        let studentid = prompt("enter a StudentId:");
        searchstudent(studentid);
    } else if (choice === "3") {
        let studentid = prompt("enter a studentid:");
        let companyname = prompt("enter a companyname:");
        CheckCompanyEligibility(studentid,companyname);
    } else if (choice === "4") {
        
        placedstudents();
    } else if (choice === "5") {
        unplacedstudents();



    } else if (choice === "6") {
        let department = prompt("enter a departmentname:");
        departmentstatistics(department);




    } else if (choice === "7") {
        placementstatistics();
    } else if (choice === "8") {
        let studentid=prompt("enter a studentid:")
        let companyname=prompt("enter a companyname:")
        let package=prompt("enter a package:")
       updateplacement(studentid,companyname,package)
    } else if (choice === "9") {
        let companyname = prompt("enter a companyname:");
        getEligibleStudents(companyname);
    } else if (choice === "10") {
        let skill=prompt("enter a skill")
        skiledstudentlist(skill);
        
        
    } else {
        alert("Invalid choice. Please try again.");
    }
}
