const DateUtil = {
  //ex. 2018-07-13T01:48:39.693238Z
  formatDate(date) {
    // return June 13, 2018
    return this.getMonth(date) + ' ' + this.getDay(date) + ', ' + this.getYear(date);
  },

  getYear(date) {
    var year = date.slice(0,4);
    return year;
  },

  getMonth(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var month = date.slice(5,7);
    return monthNames[month - 1];
  },

  getDay(date) {
    var day = date.slice(8,10);
    return day;
  }
}

export default DateUtil;
