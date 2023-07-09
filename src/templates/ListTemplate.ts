import FullList from "../models/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("moviesList") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.map((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "listItem";
      if (item.active !== true) {
        li.className = "notActivated";
      }
//add event listener
      li.addEventListener("click", () => {
        item.active = !item.active
        if (item.active === true) {
            li.classList.replace("notActivated", "activated");
          } else {
            li.classList.replace("activated", "notActivated");
          }
        fullList.saveList()
        console.log(li.classList)
    })

    const posterTitleHolder = document.createElement("div")

      const poster = document.createElement("img") as HTMLImageElement;
      poster.setAttribute("src", item.posterURL);
      poster.className = "poster";
      posterTitleHolder.appendChild(poster);

      const title = document.createElement("p") as HTMLParagraphElement;
      title.innerText = item.title;
      posterTitleHolder.appendChild(title);

      const descriptionYearHolder = document.createElement("div")

      const yearOfRelease = document.createElement("p") as HTMLParagraphElement;
      yearOfRelease.innerText = item.yearOfRelease;
      yearOfRelease.className = "yearOfRelease";
      descriptionYearHolder.appendChild(yearOfRelease);

      const description = document.createElement("p") as HTMLHeadElement;
      description.className = "description";
      description.innerText = item.description;
      descriptionYearHolder.appendChild(description);

      li.appendChild(posterTitleHolder)
      li.appendChild(descriptionYearHolder)
      this.ul.appendChild(li);
    });
  }
}
