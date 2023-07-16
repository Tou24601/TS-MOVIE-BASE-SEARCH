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
      li.classList.add("listItem");
      if (item.active !== true) {
        li.className = "notActivated";
      }
      const posterTitleHolder = document.createElement("div");
      posterTitleHolder.className = "posterTitleHolder";

      const poster = document.createElement("img") as HTMLImageElement;
      poster.setAttribute("src", item.posterURL);
      poster.setAttribute("alt", "MOVIE POSTER NOT AVAILABLE");
      poster.className = "poster";
      posterTitleHolder.appendChild(poster);

      const title = document.createElement("p") as HTMLParagraphElement;
      title.innerText = item.title;
      posterTitleHolder.appendChild(title);

      li.addEventListener("click", () => {

        fullList.list.map((item) => {
          if (item.active === true) {
            item.active = false
            console.log("it is open")
            fullList.saveList();
            console.log(fullList)
          }
        })
        item.active = !item.active;
        if (item.active === true) {
          const activatedLi = document.createElement("div") as HTMLDivElement;
          activatedLi.setAttribute("id", "activatedLi");
          if (Number(item.id) % 4 === 0) {
            activatedLi.classList.add("endOfARow")
            console.log("end of a row")
          }
          console.log(Number(item.id))
          const descriptionYearHolder = document.createElement("div");
          descriptionYearHolder.className = "descriptionYearHolder";

          const yearOfRelease = document.createElement(
            "h5"
          ) as HTMLHeadingElement;
          yearOfRelease.innerText = `${item.title} (${item.yearOfRelease})`;
          yearOfRelease.className = "yearOfRelease";
          descriptionYearHolder.appendChild(yearOfRelease);

          const description = document.createElement(
            "p"
          ) as HTMLParagraphElement;
          description.classList.add("description", "text-start", "ms-2");
          description.innerText = item.description;
          descriptionYearHolder.appendChild(description);

          activatedLi.appendChild(poster);
          activatedLi.appendChild(descriptionYearHolder);

          li.appendChild(activatedLi);
          //li.classList.replace("notActivated", "activated");
        } else {
          //li.classList.replace("activated", "notActivated");
          
        }

        fullList.saveList();
      });

      /*      const posterTitleHolder = document.createElement("div");
      posterTitleHolder.className = "posterTitleHolder";

      const poster = document.createElement("img") as HTMLImageElement;
      poster.setAttribute("src", item.posterURL);
      poster.setAttribute("alt", "MOVIE POSTER NOT AVAILABLE");
      poster.className = "poster";
      posterTitleHolder.appendChild(poster);

      const title = document.createElement("p") as HTMLParagraphElement;
      title.innerText = item.title;
      posterTitleHolder.appendChild(title);*/

      /*  const descriptionYearHolder = document.createElement("div");
      descriptionYearHolder.className = "descriptionYearHolder";

      const yearOfRelease = document.createElement("h5") as HTMLHeadingElement;
      yearOfRelease.innerText = `${item.title} (${item.yearOfRelease})`;
      yearOfRelease.className = "yearOfRelease";
      descriptionYearHolder.appendChild(yearOfRelease);

      const description = document.createElement("p") as HTMLParagraphElement;
      description.classList.add("description", "text-start", "ms-2");
      description.innerText = item.description;
      descriptionYearHolder.appendChild(description);*/

      li.appendChild(posterTitleHolder);
      // li.appendChild(descriptionYearHolder);
      this.ul.appendChild(li);
    });
  }
}
