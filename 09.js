/* Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)  */

function humanReadable(seconds) {
  if (seconds > 0 && seconds <= 359999) {
    const hours = Math.trunc(seconds / 3600);
    const mins = Math.trunc(seconds / 60 - hours * 60);
    const secs = seconds - hours * 3600 - mins * 60;
    return `${(100 + hours).toString().slice(1)}:${(100 + mins)
      .toString()
      .slice(1)}:${(100 + secs).toString().slice(1)}`;
  } else {
    return "The maximum time shoudn't exceeds 359999";
  }
}

const a = humanReadable(86400);
console.log(a);
