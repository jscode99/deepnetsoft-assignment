export const CategoryName = slug => {
  // console.log(slug);
  // debugger;
  switch (slug) {
    case "mobile":
      return "Mobiles, Computers";
    case "all":
      return "All Mobile Phones";
    case "smartphone":
      return "Smart Phones";
    case "basicphone":
      return "Basic Phones";
    case "android":
      return "Android";
    case "accessories":
      return "All Mobile Accessories";
    case "mobacc":
      return "Mobile Accessories";
    case "compacc":
      return "Computer Accessories";
    case "elecacc":
      return "Electronics Accessories";
    case "case":
      return "Cases Covers";
    case "mobcase":
      return "Mobile cases";
    case "flipcase":
      return "Flip Cases";
    case "glasscase":
      return "Glass Cases";
    case "appliances":
      return "TV, Appliances, Electronics";
    case "smarttv":
      return "Smart Tv & Android TV";
    case "household":
      return "Household Electronics";
    case "spare":
      return "Electronic Components";
    case "samsung":
      return "Samsung Smart TV";
    case "mi":
      return "Mi TV";
    case "realme":
      return "Realme TV";
    case "owen":
      return "Microwave Owen";
    case "wm":
      return "Washing Machine";
    case "wh":
      return "Water Heater";
    case "transistor":
      return "Transistors";
    case "capacitors":
      return "Capacitors";
    case "Resistors":
      return "Resistors";
    case "mensfashion":
      return "Mens Fashion";
    case "shirts":
      return "Formals & Casuals Shirts";
    case "sports":
      return "Sports Wear";
    case "watch":
      return "Watched & Wallets";
    case "otto":
      return "OTTO Shirts";
    case "polo":
      return "U.S Polo";
    case "peter":
      return "Peter England";
    case "track":
      return "Track Suits";
    case "ss":
      return "Sports Shoes";
    case "se":
      return "Sports Equipments";
    default:
      return "Categories";
  }
};
