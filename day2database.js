const studentList = [
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":{"$date":"2020-10-01"},
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-06-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathi",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-12-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-12-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-12-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-12-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-12-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"Dhamotharan",
      "codekata":120,
      "attendance":"95%",
      "topic":"MERN",
      "task":"MongoDB",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-10-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Karthikeyan",
      "codekata":125,
      "attendance":"96%",
      "topic":"MERN",
      "task":"NodeJS",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":true,
      "company_drives_date":ISODate("2020-09-28"),
      "mentors":"Sanjay"
  },
  {
      "name":"Kathir",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Python",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Sanjay"
  },
  {
      "name":"Raj",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  },
  {
      "name":"WillSmith",
      "codekata":105,
      "attendance":"85%",
      "topic":"Data Science",
      "task":"Java",
      "taskCompletionDate":ISODate("2020-10-28"),
      "company_drives":false,
      "company_drives_date":"",
      "mentors":"Raja"
  }
];



//1. Find all the topics and tasks which are thought in the month of October
db.studentList.find({taskCompletionDate:{$gte:new Date("2020-10-01"),$lte:new Date("2020-10-31")}})

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.studentList.find({company_drives_date:{$gte:new Date("2020-10-15"),$lte:new Date("2020-10-31")}})

//3. Find all the company drives and students who are appeared for the placement.
db.userList.find({company_drives:{$gte:true}})


//4. Find the number of problems solved by the user in codekata
db.studentList.find().pretty(); 

//5. Find all the mentors with who has the mentee's count more than 15
db.studentList.aggregate([
  {
    $group: {
      _id: "$mentor_id",
      mentee_count: { $sum: 1 }
    }
  },
  {
    $match: {
      mentee_count: { $gt: 15 }
    }
  }
]);

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.studentList.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-10-15"),
        $lt: ISODate("2020-10-31")
      }
    }
  },
  {
    $project: {
      _id: 0,
      date: 1,
      no_of_absent: { $size: "$absent" }
    }
  }
]);