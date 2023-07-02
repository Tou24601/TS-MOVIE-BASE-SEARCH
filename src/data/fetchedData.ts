const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzYxZGU0YzM4NTcxMGFmYjM1NmFiZjhkMDE5ZTZmNSIsInN1YiI6IjY0YTA3ZGFmOGMwYTQ4MDEwMTc2N2M5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QX5f2XFVOeg7um0kUMfuFcq-GIxINGyWCoWz7JQ6juA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));