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
      li.classList.add("col-12");
      li.classList.add("col-lg-4");
      li.classList.add("col-xl-3");
      li.setAttribute("id", item.id);
      if (item.active !== true) {
        li.classList.add ("notActivated");
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
        fullList.list.map((element) => {
          if (item.id !== element.id && element.active === true) {
            element.active = false;
            const otherLI = document.getElementById(
              element.id
            ) as HTMLLIElement;
            otherLI.classList.replace("activated", "notActivated");
            fullList.saveList();
          }
        });

        item.active = !item.active;
        if (item.active === true) {
          li.classList.replace("notActivated", "activated");
          const activatedLi = document.createElement("div") as HTMLDivElement;
          activatedLi.setAttribute("id", "activatedLi");
          if (screen.width > 992 && screen.width < 1200 && Number(item.id) % 3 === 0) {
            activatedLi.classList.add("endOfARow");
          } else if (Number(item.id) % 4 === 0) {
            activatedLi.classList.add("endOfARow");
          }

          const activatedPoster = poster.cloneNode(true);

          const descriptionYearHolder = document.createElement("div");
          descriptionYearHolder.classList.add("descriptionYearHolder");

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

          activatedLi.appendChild(activatedPoster);
          activatedLi.appendChild(descriptionYearHolder);

          li.appendChild(activatedLi);
        } else {
          li.classList.replace("activated", "notActivated");
        }

        fullList.saveList();
      });

      li.appendChild(posterTitleHolder);

      this.ul.appendChild(li);
    });
  }
}
