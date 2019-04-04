import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify Servicio Listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCufneljGSLDYUDUaR24YyPIX-j2GvJEQ0IWMF_6E353hP6MMc9Lr3H_yXyEa2YzKhof0TDBxYrxgOxFe4"
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
