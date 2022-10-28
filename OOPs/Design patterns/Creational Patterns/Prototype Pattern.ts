/**
 * Prototype is a creational design pattern that allows cloning objects,
 * even complex ones, without coupling to their specific classes.
 */

class MyFilePrototype {
  private constructor() {}

  public static clone(file: MyFile) {
    let clonedFile = new MyFile(file.name, file.size, file.content);
    clonedFile.ownerName = file.ownerName;
    return clonedFile;
  }
}

class MyFile {
  private _name: string;
  private _size: number; // in kb
  private _content: string;
  private _ownerName: string;

  constructor(_name: string, _size: number, _content: string) {
    this._name = _name;
    this._size = _size;
    this._content = _content;
    this._ownerName = "";
  }

  public get name(): string {
    return this._name;
  }

  public get size(): number {
    return this._size;
  }

  public get content(): string {
    return this._content;
  }

  public get ownerName(): string {
    return this._ownerName;
  }

  public set ownerName(value: string) {
    this._ownerName = value;
  }
}

(function () {
  const file_1 = new MyFile("TS tutorial", 200, "TS stands for TypeScript");
  file_1.ownerName = "Suraj";
  const file_2: MyFile = MyFilePrototype.clone(file_1);

  if (file_1 !== file_2) {
    console.log(" it is a cloned object, only value is equal not the address/ref.");
    console.log(file_1);
    console.log(file_2);
  }
})();
