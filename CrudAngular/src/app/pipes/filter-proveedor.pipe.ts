import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProveedor'
})
export class FilterProveedorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value; // si el argumento es menor a 3 caracteres no buscar, de lo contrario
    const resul =[];
    for(const proveedor of value){
      // buscar por nombre
      if(proveedor.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(proveedor);
      };

      // buscar por direccion

      if(proveedor.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(proveedor);
      };

      // buscar por rnc

      if(proveedor.rnc.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resul.push(proveedor);
      };
    };
    return resul;





  }

}
