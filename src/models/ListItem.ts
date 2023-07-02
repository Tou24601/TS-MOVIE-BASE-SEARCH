export interface Item {
    id: number;
    title: string;
    yearOfRelease: string;
    posterURL: string;
    description: string
}

export default class ListItem implements Item {
    constructor(
        private _id: number,
        private _title: string = "",
        private _yearOfRelease: string = "",
        private _posterURL: string = "",
        private _description: string = "",
    ) {}

    get id(): number {
        return this._id;
      }
    
      set id(id: number) {
        this._id = id;
      }

      get title(): string {
        return this._title;
      }
    
      set title(title: string) {
        this._title = title;
      }

      get yearOfRelease(): string {
        return this._yearOfRelease;
      }
    
      set yearOfRelease(yearOfRelease: string) {
        this._yearOfRelease = yearOfRelease;
      }

      get posterURL(): string {
        return this._posterURL;
      }
    
      set posterURL(posterURL: string) {
        this._posterURL = posterURL;
      }

      get description(): string {
        return this._description;
      }
    
      set description(description: string) {
        this._description = description;
      }
      


}