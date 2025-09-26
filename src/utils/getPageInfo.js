export default function getPageInfo(route) {
  const countries = ["in", "ae", "uk"];

  //Default values
  let country = "global";
  let folder = "";
  let page = "home";
  let path = route;

  const routeParts = route?.split("/")?.filter((part) => part !== "");

  if (routeParts.length === 1) {
    if (countries.includes(routeParts[0])) {
      country = routeParts[0];
    } else {
      page = routeParts[0];
    }
  } else if (routeParts.length === 2) {
    if (countries.includes(routeParts[0])) {
      country = routeParts[0];
    } else {
      folder = routeParts[0];
    }
    page = routeParts[1];
  } else if (routeParts.length === 3) {
    if (countries.includes(routeParts[0])) {
      country = routeParts[0];
      folder = routeParts[1];
      page = routeParts[2];
    } else {
      folder = routeParts[0];
      page = routeParts[1];
    }
  }
  return {
    country,
    folder,
    page,
    path,
  };
}
