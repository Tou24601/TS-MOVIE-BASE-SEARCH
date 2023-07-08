import "./style.css";
import FullList from "./models/FullList";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

let movie: string = "";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const entryForm = document.getElementById("entryForm") as HTMLFormElement;
  entryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const entryInput = document.getElementById(
      "entryInput"
    ) as HTMLInputElement;
    const newEntry = entryInput.value.trim();
    console.log(newEntry.length);

    const select = document.getElementById(
      "selectTypeOfSearch"
    ) as HTMLSelectElement;

    if (!newEntry.length) {
      alert("Enter a title or year of release");
    }

    if (select.value === "1") {
      movie = newEntry;
    } else {
      alert("Wybierz typ wyszukiwania");
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzYxZGU0YzM4NTcxMGFmYjM1NmFiZjhkMDE5ZTZmNSIsInN1YiI6IjY0YTA3ZGFmOGMwYTQ4MDEwMTc2N2M5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QX5f2XFVOeg7um0kUMfuFcq-GIxINGyWCoWz7JQ6juA",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response.results))
      .catch((err) => console.error(err));
  });
};

document.addEventListener("DOMContentLoaded", initApp);
