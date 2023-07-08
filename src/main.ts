import "./style.css";
import FullList from "./models/FullList";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

let movie: string = "";
let year: number;
let url: string;

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const entryForm = document.getElementById("entryForm") as HTMLFormElement;
  entryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const entryInput = document.getElementById(
      "entryInput"
    ) as HTMLInputElement;
    movie = entryInput.value.trim();

    const yearInput = document.getElementById("yearInput") as HTMLInputElement;
    const newYearEntry = yearInput.value.trim();

    if (!movie.length) {
      alert("Enter your title");
    } else {
      if (!newYearEntry.length) {

        url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US`;

      } else if (newYearEntry.length !== 4) {alert("Enter valid year of release")} else {
        year = Number(newYearEntry)
        url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&primary_release_year=${year}&fbclid=IwAR3ocwlIGvQtZ2hKU5y7bgOz2r5raO3Hj4Z-_uZ7IJkFq465l-NZLxTOFjM`
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
        url,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response.results))
        .catch((err) => console.error(err));
    }
  });
};

document.addEventListener("DOMContentLoaded", initApp);
