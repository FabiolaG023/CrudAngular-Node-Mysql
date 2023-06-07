import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSolicitud'
})
export class FilterSolicitudPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value; // si el argumento es menor a 3 caracteres no buscar, de lo contrario
    const resul =[];
    for(const solicitud of value){
      // buscar por solicitante
      if(solicitud.solicitante.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(solicitud);
      };

      // buscar por fecha

      if(solicitud.fecha.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(solicitud);
      };

      // buscar por asuntos

      if(solicitud.asunto.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(solicitud);
      };
    };
    return resul;





  }


}
