/**
 * The Single Responsibility Principle states that a class should do one thing and therefore
 * it should have only a single reason to change.
 */

class Book {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }
}

class Invoice_without_SRP {
  private _book: Book;
  private _qty: number;
  private _total: number;

  constructor(book: Book, qty: number) {
    this._book = book;
    this._qty = qty;
    this._total = this.calculateInvoice();
  }

  private calculateInvoice(): number {
    let total = 0;

    total = this._book.price * this._qty;

    return total;
  }

  /**
   * whenever we have to change logic for printing invoice we have to touch Invoice class.
   * due to printInvoice method our class has now 2 responsiblity and 2 reason for change, so it violate the SRP
   */
  public printInvoice(): void {
    console.log("__Without SRP__");
    console.log("Book name is " + this._book.name);
    console.log("Book price is " + this._book.price);
    console.log("Book quantity is " + this._qty);
    console.log("Invoice total is " + this._total);
  }
}

// below Invoice & InvoicePrinter class follow Single Responsibility pattern
class Invoice_with_SRP {
  private _book: Book;
  private _qty: number;
  private _total: number;

  constructor(book: Book, qty: number) {
    this._book = book;
    this._qty = qty;
    this._total = this.calculateInvoice();
  }

  private calculateInvoice(): number {
    let total = 0;

    total = this._book.price * this._qty;

    return total;
  }

  public get total(): number {
    return this._total;
  }

  public get book(): Book {
    return this._book;
  }

  public get qty(): number {
    return this._qty;
  }
}

class InvoicePrinter {
  private invoice: Invoice_with_SRP;

  constructor(invoice: Invoice_with_SRP) {
    this.invoice = invoice;
  }

  public print(): void {
    console.log("__With SRP__");

    console.log("Book name is " + this.invoice.book.name);
    console.log("Book price is " + this.invoice.book.price);
    console.log("Book quantity is " + this.invoice.qty);
    console.log("Invoice total is " + this.invoice.total);
  }
}

(function () {
  console.clear();
  const book = new Book("Cracking the coding interview", 500);

  // Without SRP
  const invoice = new Invoice_without_SRP(book, 2);
  invoice.printInvoice();

  // With SRP
  const invoice2 = new Invoice_with_SRP(book, 4);
  const printer = new InvoicePrinter(invoice2);
  printer.print();
})();
