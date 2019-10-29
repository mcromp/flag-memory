export default function nameFilter(val) {
  let name = "";
  switch (val) {
    case "Korea (Democratic People's Republic of)":
      name = "North Korea";
      break;
    case "Virgin Islands (British)":
      name = "British Virgin Islands";
      break;
    case "Macedonia (the former Yugoslav Republic of)":
      name = "North Macedonia";
      break;
    default:
      name = val;
  }
  return name;
}
