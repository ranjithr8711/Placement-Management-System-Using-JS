Mini Project: Campus Placement Management System
Scenario
You are building a small Campus Placement Management System for a college.
The system should allow the placement coordinator to:
View all students
Search for a student
Display eligible students for a company
Calculate average marks
Track placement status
Display department-wise statistics
Display students who satisfy a company's eligibility criteria
Update placement status
Generate a placement summary
This is complex enough to make students actually think about data structures + control flow + functions.

1. Given Data
Give them this starting dataset:
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

2. Companies Data
Give them another nested object:
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
Now students have to work with two different nested object structures.



3. Main Menu
The application should continuously display:
========================================
       CAMPUS PLACEMENT SYSTEM
========================================

1. Display All Students
2. Search Student
3. "Check Company Eligibility"
4. Display Placed Students
5. Display Unplaced Students
6. Department Statistics
7. Placement Statistics
8. Update Placement
9. Company-wise Eligible Students
10. Exit

Enter your choice:
Use:
while (true)
or:
do {
    // menu
} while (...)
Students must decide which loop is appropriate.

4. Feature 1 — Display All Students
Create:
function displayStudents() {
    // ...
}
Expected output:
ST101
Name       : Rahul
Department : CSE
CGPA       : 8.4
Backlogs   : 0
Status     : Not Placed

ST102
Name       : Anita
Department : ISE
CGPA       : 9.1
Backlogs   : 0
Status     : Placed
Company    : Infosys
Package    : 6.5 LPA
Required concepts
Students must use:
for...in
because students is an object whose keys are student IDs.
Then they need to access:
students[id]

5. Feature 2 — Search Student
Ask:
Enter Student ID:
Example:
ST103
Output:
Student Found

Name       : Kiran
Department : CSE
CGPA       : 7.2
Backlogs   : 1
Status     : Not Placed
If invalid:
Student not found.
Function
function searchStudent(studentId) {
    // ...
}
This teaches:
function parameters
return
conditions
object property access

6. Feature 3 — Check Company Eligibility
This is where the project becomes interesting.
Ask:
Enter Student ID:
Enter Company Name:
For example:
Student ID: ST101
Company: TechNova
Student:
CGPA       = 8.4
Backlogs   = 0
Skills     = JavaScript, Python, SQL
Company:
Minimum CGPA    = 8.0
Maximum Backlogs = 0
Required Skill  = JavaScript
Output:
========== ELIGIBILITY RESULT ==========

Student : Rahul
Company : TechNova

CGPA Requirement : PASSED
Backlog Requirement : PASSED
Skill Requirement : PASSED

Result: ELIGIBLE
But:
Student : Kiran
Company : TechNova

CGPA Requirement : FAILED
Backlog Requirement : FAILED
Skill Requirement : FAILED

Result: NOT ELIGIBLE

7. Important Challenge — Checking Skills
Students have:
skills: ["JavaScript", "Python", "SQL"]
They need to check whether the required skill exists.
They should use:
for (const skill of student.skills) {
    // compare skill
}
This gives a very natural reason to use for...of.

8. Feature 4 — Display Placed Students
Output:
========== PLACED STUDENTS ==========

Anita
Company : Infosys
Package : 6.5 LPA

Priya
Company : TCS
Package : 7.2 LPA
Students should iterate through the student collection and use:
if (student.placement.status === "Placed")

9. Feature 5 — Display Unplaced Students
Output:
========== UNPLACED STUDENTS ==========

Rahul
Kiran
Arjun
Sneha
Again, use the object and conditions.

10. Feature 6 — Department Statistics
This is where you increase the difficulty.
Expected:
========== DEPARTMENT STATISTICS ==========

CSE
Total Students : 3
Placed         : 0
Unplaced       : 3

ISE
Total Students : 2
Placed         : 1
Unplaced       : 1

ECE
Total Students : 1
Placed         : 1
Unplaced       : 0
Students need to figure out how to dynamically create department statistics.
They should not write:
let cse = 0;
let ise = 0;
let ece = 0;
Instead, they should dynamically build an object.
For example:
const departments = {};
Then dynamically create:
departments["CSE"]
departments["ISE"]
departments["ECE"]
This is excellent practice for objects + for...in.

11. Feature 7 — Overall Placement Statistics
Display:
========== PLACEMENT STATISTICS ==========

Total Students     : 6
Placed Students    : 2
Unplaced Students  : 4
Placement Rate     : 33.33%

Average CGPA       : 8.22
Average Package    : 6.85 LPA
Highest Package    : 7.2 LPA
Students must calculate:
total students
placed students
unplaced students
total CGPA
average CGPA
total package
average package
highest package
This heavily exercises:
counters
accumulators
arithmetic operators
conditions
loops

12. Feature 8 — Update Placement
Ask:
Enter Student ID:
Enter Company:
Enter Package:
Example:
Enter Student ID: ST101
Enter Company: TechNova
Enter Package: 10
Update:
student.placement.status = "Placed";
student.placement.company = "TechNova";
student.placement.package = 10;
Then:
Placement updated successfully.

Rahul is now placed at TechNova with a package of 10 LPA.
This introduces modifying nested object properties.

13. Feature 9 — Company-wise Eligible Students
This should be the hardest part.
Ask:
Enter Company Name:
Example:
TechNova
The system should automatically check every student against:
Minimum CGPA
Maximum Backlogs
Required Skill
Expected:
========== TECHNOVA ELIGIBILITY ==========

Minimum CGPA     : 8.0
Maximum Backlogs : 0
Required Skill   : JavaScript
Package          : 10 LPA

Eligible Students:

1. Rahul
2. Arjun

Total Eligible Students: 2
Students need:
company
   ↓
company requirements
   ↓
every student
   ↓
student CGPA
student backlogs
student skills
   ↓
check all conditions
   ↓
display eligible students
This is a genuinely useful nested-loop problem.

14. Feature 10 — Highest Package
Add one more analytical feature:
========== HIGHEST PACKAGE ==========

Student  : Priya
Company  : TCS
Package  : 7.2 LPA
After Rahul gets placed at TechNova:
Student  : Rahul
Company  : TechNova
Package  : 10 LPA
The result should automatically change.
Do not hardcode the answer.

15. Feature 11 — Search by Skill
Ask:
Enter skill:
Example:
JavaScript
Output:
========== STUDENTS WITH JAVASCRIPT ==========

Rahul
Arjun
Sneha

Total: 3
This specifically tests:
for...in
combined with:
for...of
Conceptually:
for...in
   ↓
students

for...of
   ↓
student.skills
That's a very valuable distinction for them.

16. Feature 12 — Students Above a CGPA
Ask:
Enter minimum CGPA: 8
Output:
Students with CGPA >= 8

Rahul  - 8.4
Anita  - 9.1
Priya  - 8.8
Arjun  - 8.0

Total: 4
Again, they must dynamically calculate the result.

17. Required Functions
Don't put everything inside one giant block.
Require at least these functions:
function displayStudents() {}

function searchStudent(studentId) {}

function checkEligibility(studentId, companyName) {}

function displayPlacedStudents() {}

function displayUnplacedStudents() {}

function departmentStatistics() {}

function placementStatistics() {}

function updatePlacement(studentId, companyName, package) {}

function getEligibleStudents(companyName) {}

function findHighestPackage() {}

function searchBySkill(skill) {}

function studentsAboveCGPA(cgpa) {}

18. The Most Important Challenge
Do not create separate variables for individual students.
Bad:
let rahul = ...
let anita = ...
let kiran = ...
They must work with:
const students = {...};
and dynamically iterate.

19. Restrictions
For this project, impose these restrictions:
Allowed
let
const
if / else
switch
for
while
do...while
for...of
for...in
functions
arrays
objects
nested objects
break
continue
logical operators
comparison operators
ternary operator
Not allowed yet
map()
filter()
reduce()
find()
some()
every()
classes
DOM
localStorage
async/await
fetch()
modules
external libraries

20. What Each Concept Is Doing in the Project
This is the part I'd explicitly explain to students.
Concept
Where they use it
Variables
Counters, totals, temporary values
Data types
Names, CGPA, package, status
Operators
Salary/CGPA calculations
if/else
Eligibility and placement
Logical operators
CGPA + backlog + skill
for
Number-based/repeated processing
while
Continuous menu
do...while
Menu that executes at least once
for...in
Students and nested objects
for...of
Skills array
Functions
Every major operation
Parameters
Student ID, company, CGPA, skill
return
Search/eligibility/calculation results
Arrays
Student skills
Objects
Student/company records
Nested objects
placement, dept, company requirements
Nested loops
Students → skills
break
Stop searching once found
continue
Skip already-placed students
Boolean logic
Eligibility
Ternary
Small display decisions


21. The Architecture Students Should Eventually Reach
The final program should conceptually look like:
               CAMPUS PLACEMENT SYSTEM
                         │
                         ▼
                    Main Menu
                         │
       ┌─────────────────┼──────────────────┐
       ▼                 ▼                  ▼
   Students          Companies          Statistics
       │                 │                  │
       ▼                 ▼                  ▼
 Search/View       Eligibility        Placement Rate
 Update Placement  Requirements       Avg CGPA
                   Required Skills     Avg Package
                                      Highest Package
And internally:
students
   │
   ├── ST101
   │     ├── name
   │     ├── department
   │     ├── cgpa
   │     ├── backlogs
   │     ├── skills[]
   │     └── placement{}
   │
   ├── ST102
   │
   └── ...

22. Final Project Challenge
Once they finish all features, give them this bonus requirement:
Placement Report
Generate:
==================================================
             COLLEGE PLACEMENT REPORT
==================================================

Total Students       : 6
Placed Students      : 2
Unplaced Students    : 4
Placement Percentage : 33.33%

--------------------------------------------------
DEPARTMENT-WISE
--------------------------------------------------

CSE
Total   : 3
Placed  : 0
Unplaced: 3

ISE
Total   : 2
Placed  : 1
Unplaced: 1

ECE
Total   : 1
Placed  : 1
Unplaced: 0

--------------------------------------------------
PACKAGE INFORMATION
--------------------------------------------------

Highest Package : 7.2 LPA
Average Package : 6.85 LPA

--------------------------------------------------
SKILL ANALYSIS
--------------------------------------------------

JavaScript : 3 students
Python     : 4 students
SQL        : 5 students
React      : 2 students
Java       : 1 student

==================================================
The skill analysis is particularly good because they'll have to iterate:
students
   ↓
student
   ↓
skills[]
   ↓
skill
   ↓
count
using nested for...in / for...of appropriately.
