import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService { // servicio que conecta nodeJs a angular

  REST_API: string ='/api';

 // comunicarse con un servidor remoto a través de HTTP.
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }


  //(desplegar todas las solicitudes, proveedores y estados)
  getSolicitud()
  {
    return this.http.get(`${this.REST_API}`);
  }

  getProveedor()
  {
      return this.http.get(`${this.REST_API}/proveedor`);
  }

  getEstado()
  {
      return this.http.get(`${this.REST_API}/estado`);
  }



  //agregar solicitudes, proveedores
  addSolicitud(solicitud: any)
  {
    let API_URL = `${this.REST_API}/add-solicitud`;
    return this.http.post(API_URL, solicitud, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  addProveedor(proveedor: any)
  {
      let API_URL = `${this.REST_API}/add-proveedor`;
      return this.http.post(API_URL, proveedor, {headers: this.httpHeaders})
      .pipe(catchError(this.handleError));
  }


   //get Solicitud (selecionar una solicitud por id)
  UnSolicitud(solicitud_id:any): Observable<any>
  {
    let API_URL = `${this.REST_API}/read-solicitud/${solicitud_id}`;
    return this.http.get(API_URL,{headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {};
    }),catchError(this.handleError));
  }

  unProveedor(proveedor_id:any): Observable<any>
  {
    let API_URL = `${this.REST_API}/read-proveedor/${proveedor_id}`;
    return this.http.get(API_URL,{headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {};
    }),catchError(this.handleError));
  }


   //borrar solicitudes y proveedores

  deleteSolicitud(solicitud_id:Number): Observable<any>
  {
    let API_URL = `${this.REST_API}/delete-solicitud/${solicitud_id}`;
    return this.http.delete(API_URL, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteProveedor(proveedor_id:Number): Observable<any>
  {
    let API_URL = `${this.REST_API}/delete-proveedor/${proveedor_id}`;
    return this.http.delete(API_URL, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }


  // editar solicitudes y proveedores
  editSolicitud(solicitud_id:Number, solicitud: any ): Observable<any>
  {
    let API_URL = `${this.REST_API}/update-solicitud/${solicitud_id}`;
    return this.http.put(API_URL, solicitud, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  editProveedor(proveedor_id:Number, proveedor: any ): Observable<any>
  {
      let API_URL = `${this.REST_API}/update-proveedor/${proveedor_id}`;
      return this.http.put(API_URL, proveedor, {headers: this.httpHeaders})
      .pipe(catchError(this.handleError));
    }






   // Error
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }

}



