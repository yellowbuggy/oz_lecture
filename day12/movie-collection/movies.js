// 소프트코딩?
// 영화 생성자
const Movie = function(title, director, year, genre) {
  this.Title = title,
  this.Director = director,
  this.Year = year,
  this.Genre = genre
};

// 생성자로 영화 객체들 만들기
const movie1 = new Movie("The Matrix", "Wachowskis", 1999, "Sci-Fi");
const movie2 = new Movie("Inception", "Nolan", 2010, "Sci-Fi");
const movie3 = new Movie("Parasite", "Bong", undefined, "Drama");

// 영화 객체들로 배열 만들기
let movies = [movie1, movie2, movie3];

// 하드 코딩
// let movies = [
//   {Title: "The Matrix",
//     Director: "Wachowskis",
//     Year: 1999,
//     Genre: "Sci-Fi"
//   },
//   {Title: "Inception",
//     Director: "Nolan",
//     Year: 2010,
//     Genre: "Sci-Fi"
//   },
//   {Title: "Parasite",
//     Year: 2019,
//     Genre: "Drama"
//   }
// ];



// 함수 만들기
// 객체의 빈 속성 채우는 함수(채우는 과정에서 해당 속성이 속성 중 맨 뒤로 가버림 => value를 undefined로 채움)
const fillUndefined = (movie) => {
  let movieKeys = ["Title", "Director", "Year", "Genre"];
  for (const key of movieKeys) {
    if (!movie[`${key}`]) movie[`${key}`] = "UnKown"
  }
  return movie
}

// 영화의 key와 value를 문자열로 변환하는 함수
const movieToString = (movie) => {
  let result = new String();
  for (const key in movie) {
    const value = movie[key];
    result += `${key}: ${value}, `;
  }
  result = result.slice(0, -2); // 마지막 ", " 제거
  return result;
}

// 영화 배열을 넣으면 프린트하는 함수
const printMovies = (movies) => {
  let result;
  var count = movies.length;
  if (count === 0) result = `No movies found for genre: ${genre}.`;
  else {
    result = "Movie Collection:\n";
    for (i = 0; i < count; i++) {
      let movie = movies[i];
      result += `${i+1}. ` + movieToString(movie) + "\n";
    }
    result += `Total Movies: ${count}`;
  }
  console.log(result);
}

// 특정 장르만 남기는 함수(다른 속성도 동일하게 만들면 될 듯함)
const isGenre = (movie, genre) => (movie.Genre === genre);

// 평균 연도 계산 함수
const calculateAverageYear = function(movies) {
  sum = 0;
  n = 0;
  for (const movie of movies) {
    const year = movie.Year;
    if (typeof year === "number") {
      sum += year;
      n += 1;
    }
  }
  return Math.floor(sum / n);
}

// 가장 최신 영화 찾는 함수
const latestMovie = function(movies) {
  var latest = movies.reduce((prev, current) => (prev.Year > current.Year) ? prev : current);
  return latest;
}

// 함수 호출
// 1. 빈 속성 채우기
movies = movies.map((movie) => fillUndefined(movie));

// 2. 프린트하기
printMovies(movies);

// 3. 특정 장르만 남긴 후 출력
var genre = "Sci-Fi";
// var genre = "없는장르"; // 틀리거나 없는 경우
filteredMovies = movies.filter((movie) => isGenre(movie, genre));
printMovies(filteredMovies);

// 4. 통계 계산
var average = calculateAverageYear(movies);
var latest = latestMovie(movies);
console.log(
`statistics:
Average Year: ${average}
Newest Movie: ${latest.Title} (${latest.Year})`);