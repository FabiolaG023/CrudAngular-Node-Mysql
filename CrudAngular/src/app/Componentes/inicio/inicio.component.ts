import { Component, OnInit} from '@angular/core';
import { SolicitudService} from '../../SERVICES/solicitud.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'

})
export class InicioComponent implements OnInit {

  ListSolicitud: any = [];
  ListProveedor: any = [];

  filterProveedor = '';
  filterSolicitud = '';

  constructor(private SolicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.SolicitudService.getSolicitud().subscribe((res)=>{ console.log(res); this.ListSolicitud =res; })
    this.SolicitudService.getProveedor().subscribe((res)=>{ console.log(res); this. ListProveedor=res; })
  }

    // alerta
    confirmS(id:any, i : any){
      Swal.fire({
        title: 'eliminar?',
        text: 'esta seguro que desea eliminar esta solicitud?',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          // si la respuesta es si, elimina la orden
          this.SolicitudService.deleteSolicitud(id).subscribe((res)=>{
            this.ListSolicitud.splice(i,1);
          })// de lo contrario
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Se ha cancelado eliminar esta solicitud',
            'error'
          )
        }
      });
  }



   // alerta
   confirmP(id:any, i : any){
    Swal.fire({
      title: 'eliminar?',
      text: 'esta seguro que desea eliminar este Proveedor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        // si la respuesta es si, elimina
        this.SolicitudService.deleteProveedor(id).subscribe((res)=>{
          this. ListProveedor.splice(i,1);
        })// de lo contrario
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Se ha cancelado eliminar este provvedor',
          'error'
        )
      }
    });
}
}




