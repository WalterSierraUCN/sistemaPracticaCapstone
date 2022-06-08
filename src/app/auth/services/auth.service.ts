import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/authResponse.interface';
import { UsuarioLog } from '../interfaces/usuarioLog.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: UsuarioLog;

  get usuario(){
    return {... this._usuario};
  }

  constructor(private http: HttpClient) { }


  login(correo: string, password: string)
  {
    
    const url = `${this.baseUrl}auth`;
    const body = { correo, password}

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if(resp.ok){

            localStorage.setItem('token', resp.token! )
            this._usuario = {
              nombre: resp.nombre!,
              id: resp.id!,
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg) )
      )
  }

  logout(){
    localStorage.clear();
  }

  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url,{ headers })
      .pipe(
        map( resp => {

          localStorage.setItem('token', resp.token! );
          this._usuario = {
            nombre: resp.nombre!,
            id: resp.id!,
           }

          return resp.ok;
        }),
        catchError(err => of(false))
      );

  }


}
