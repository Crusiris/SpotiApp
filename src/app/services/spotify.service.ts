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
        "Bearer BQCmjQSByyiYQULs9kbWkatfuV8H3-g_NQsPe7aWaXjwz8cTlImX0gm3_5fhyzUEkEVJm3YdqDxFUVUnlE4"
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
        "Bearer BQCmjQSByyiYQULs9kbWkatfuV8H3-g_NQsPe7aWaXjwz8cTlImX0gm3_5fhyzUEkEVJm3YdqDxFUVUnlE4"
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers
      }
    );
  }
}
