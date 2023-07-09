export interface Item {
    id: string;
    title: string;
    yearOfRelease: string;
    posterURL: string;
    description: string;
    active: boolean;
}

export default class ListItem implements Item {
    constructor(
        private _id: string,
        private _title: string = "",
        private _yearOfRelease: string = "",
        private _posterURL: string = "",
        private _description: string = "",
        private _active: boolean = false,
    ) {}

    get id(): string {
        return this._id;
      }
    
      set id(id: string) {
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

      get active(): boolean {
        return this._active;
      }
    
      set active(active: boolean) {
        this._active = active;
      }
      


}