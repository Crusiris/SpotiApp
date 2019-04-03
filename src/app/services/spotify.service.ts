import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify Servicio Listo");
  }
  getNewRelease() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAfTfArV0a4k44nTPosfdlP9H04p2P6HT0IgNfI9F0nuLYze8YdhUgF-7IL7FFSfQFiVdX4GN8rxGpHyi4"
    });

    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers
      }
    );
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAfTfArV0a4k44nTPosfdlP9H04p2P6HT0IgNfI9F0nuLYze8YdhUgF-7IL7FFSfQFiVdX4GN8rxGpHyi4"
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers
      }
    );
  }
}
