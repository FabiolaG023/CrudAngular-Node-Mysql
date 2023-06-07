import { Component, OnInit, NgZone } from '@angular/core';
import { SolicitudService} from '../../../SERVICES/solicitud.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html'

})

export class ProveedorComponent implements OnInit {

  proForm: FormGroup;

  filterProveedor = '';
  listProveedor: any = [];

  constructor(private SolicitudService: SolicitudService,private router: Router,
    public formBuilder: FormBuilder,
    private ngZone: NgZone) {
      this.proForm = this.formBuilder.group({
        proveedor_id:[''],
        nombre:[''],
        rnc:[''],
        direccion:[''],
        correo:[''],
        tel:[''],
        });
     }

  ngOnInit(): void { this.SolicitudService.getProveedor().subscribe((res)=>{ console.log(res); this.listProveedor =res; })}

  guardarP(){
    // Swal.fire('Datos agregados correctamente')
     this.SolicitudService.addProveedor(this.proForm.value).subscribe(
       ()=>{
         Swal.fire('Proveedor agregado!');
         console.log('Datos proveedor agregados!');
         window.location.reload();
         this.ngZone.run(()=>this.router.navigateByUrl('/addP'));
       }, (err)=>{console.log(err);});
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
          this.listProveedor.splice(i,1);
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
