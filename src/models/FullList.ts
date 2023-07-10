import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  saveList(): void;
  clearList(): void;
  addItem(item: ListItem): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");

    if (typeof storedList !== "string") return;

    const parsedList: {
      _id: string;
      _title: string;
      _yearOfRelease: string;
      _posterURL: string;
      _description: string;
      _active: boolean;
    }[] = JSON.parse(storedList);

    parsedList.forEach((item) => {
      const newListItem = new ListItem(
        item._id,
        item._title,
        item._yearOfRelease,
        item._posterURL,
        item._description,
        item._active
      );
      FullList.instance.addItem(newListItem);
    });
  }

  saveList(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.saveList();
  }

  addItem(item: ListItem): void {
    this._list.push(item);
    this.saveList();
  }
}
