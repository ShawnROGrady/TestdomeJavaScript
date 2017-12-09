//  Created by Shawn O'Grady on 12/8/17.
//  Copyright © 2017 Shawn O'Grady. All rights reserved.
//
/*
 This code is a practice JavaScript interview question from testdome.com
https://www.testdome.com/questions/javascript/date/8521?visibility=1&skillId=2

 Problem statement: Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD)
    -The parameter "userDate" and the return value are strings.
    -For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

 + Passes 4/4 tests
 */
function formatDate(userDate) {
  var friendlyDate; //Date in format require by API
  var splitDate=userDate.split('/');
  if(splitDate[0].length==1){
    //one digit month
    splitDate[0]='0'+splitDate[0];
  }
  if(splitDate[1].length==1){
    //one digit date
    splitDate[1]='0'+splitDate[1];
  }
  friendlyDate=splitDate[2]+splitDate[0]+splitDate[1];
  return friendlyDate;
}

console.log(formatDate("12/31/2014"));  //20141231
console.log(formatDate("1/31/2014"));  //20140131
console.log(formatDate("12/3/2014"));  //20141203
console.log(formatDate("11/3/2014"));  //20140103
