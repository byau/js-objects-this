'use strict'
// exercise from lessons
let user = {
  name: "Person McFace",
  email: "wdi@personmcface.com",
  runs : [
    {
      date: "2015-05-25 15:00",
      distance: "1200",
      timeTaken: "600",
    }
  ],
  totalDistance : function(){
    let totalDist = 0;
    for (let i = 0; i < this.runs.length; ++i) {
       totalDist += this.runs[i].distance;
     }
    return totalDist;
    },
  longestRun : function() {
    let longest = this.runs[0].distance;
    for (let i = 0; i < this.runs.length; ++i) {
      if (this.runRecords[i].distance > longest) {
        longest = this.runs[i].distance;
      }
    }
    return longest;
  },
  averageSpeed : function() {
    let totalTime = 0;
    for (let i = 0; i < this.runs.length; ++i) {
      totalTime += this.runs[i].timeTaken;
    }
    if (totalTime !== 0) {
      let totalDistance = this.totalDistance();
      return totalDistance / totalTime;
    } else {
      return 0;
    }
  }
}

module.exports = user;
