// Function to add date suffix (st, nd, rd, th)
const addDateSuffix = (date) => {
  // get last char of date string
  const lastChar = date.toString().charAt(date.toString().length - 1);

  // add suffix based on the last digit
  return (
    date +
    (date % 10 === 1 && date !== 11
      ? "st"
      : date % 10 === 2 && date !== 12
      ? "nd"
      : date % 10 === 3 && date !== 13
      ? "rd"
      : "th")
  );
};

// Main timestamp formatting function
module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  // Array of month names based on the monthLength option
  const months =
    monthLength === "short"
      ? [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

  // Create a Date object from the timestamp
  const dateObj = new Date(timestamp);

  // Get the formatted month name
  const formattedMonth = months[dateObj.getMonth()];

  // Get the day of the month with or without suffix
  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  // Get the year, adjust the hour to 12-hour format, and determine AM/PM
  const year = dateObj.getFullYear();
  const hour = (dateObj.getHours() % 12 || 12).toString(); // Use modulo to handle 12 AM/PM
  const minutes = dateObj.getMinutes().toString().padStart(2, "0"); // Ensure minutes are two digits
  const periodOfDay = dateObj.getHours() >= 12 ? "pm" : "am";

  // Construct and return the formatted timestamp
  return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
};
