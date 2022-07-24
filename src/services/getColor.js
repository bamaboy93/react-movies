export default function getColor(vote) {
  const num = vote.toFixed();
  if (num >= 8) {
    return "#7dd87d";
  } else if (num < 8 && num >= 5) {
    return "#eec60a";
  } else {
    return "#eb2632";
  }
}
