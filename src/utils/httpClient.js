const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch ( API + path, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBhMzQ3MGE4MDMwZDNjZTJiNWM0YTBkMWZlYzM3MiIsInN1YiI6IjYwYWZhOTQwZWNiZGU5MDA2ZDc2NzU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41PC-iv_gYU7BIKEqNdhLNpKOqv78wTBUG43TShG4Dg",
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((result) => result.json())
}