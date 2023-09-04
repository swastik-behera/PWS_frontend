function calculateRemainingDays(eventDate) {
  const currentDate = new Date();
  const startDate = new Date(eventDate);

  const timeDifference = startDate - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const eventDate = "2023-08-31";

console.log(calculateRemainingDays(eventDate));



/*====================
Output:
  10
====================*/