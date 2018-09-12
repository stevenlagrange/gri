const dateFormatter = {
  // ex. 2018-07-13T01:48:39.693238Z
  formatDate(date) {
    // return June 13, 2018
    // return this.getMonth(date) + ' ' + this.getDay(date) + ', ' + this.getYear(date);
    return `${this.getMonth(date)} ${this.getDay(date)}, ${this.getYear(date)}`;
  },

  getYear(date) {
    return date.slice(0, 4);
  },

  getMonth(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const month = date.slice(5, 7);
    return monthNames[month - 1];
  },

  getDay(date) {
    return date.slice(8, 10);
  },
};

export default dateFormatter;
