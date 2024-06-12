function ticketStation(arrOfData, sortCriteria) {


  const ticketList = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }

    get price() {
      return this._price;
    }

    set price(price) {
      if (typeof (price) !== "number") {
        throw new Error("Invalid price format!!!");
      }
      this._price = price;
    }

    static sort(arr, sortCriteria) {
      return arr.sort((a, b) => {
        return sortCriteria === "price"
          ? a[sortCriteria] - b[sortCriteria]
          : a[sortCriteria].localeCompare(b[sortCriteria]);
      });
    }
  }

  for (let el of arrOfData) {
    const [destination, price, status] = el.split("|");

    const currentTicket = new Ticket(destination, Number(price), status);
    ticketList.push(currentTicket);
  }
  return Ticket.sort(ticketList, sortCriteria);
}


const result = ticketStation
([  "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],"destination");

console.log(result);
