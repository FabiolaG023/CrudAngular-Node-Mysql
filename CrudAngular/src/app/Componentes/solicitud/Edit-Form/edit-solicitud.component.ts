import { Component, OnInit, NgZone } from '@angular/core';
import { SolicitudService } from 'src/app/SERVICES/solicitud.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html'

})
export class EditSolicitudComponent implements OnInit {

  getId : any;
  updateForm: FormGroup;

  listSolicitud: any = [];
  filterSolicitud = '';

  constructor(
    private SolicitudService: SolicitudService,
    private router: Router,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private activeRoute: ActivatedRoute) {

      this.getId = this.activeRoute.snapshot.paramMap.get('solicitud_id');

        this.SolicitudService.UnSolicitud(this.getId).subscribe((res)=>{
          this.updateForm.patchValue({
            solicitud_id: res['solicitante_id'],
            id_proveedor: res['id_proveedor'],
            fecha:res['fecha'],
            solicitante:res['solicitante'],
            cedula:res['cedula'],
            dire:res['dire'],
            tel:res['tel'],
            asunto:res['asunto'],
            montoS:res['montoS'],
            montoA:res['montoA'],
            id_estado:res['estado']
          });
        });

        this.updateForm = this.formBuilder.group({
          solicitud_id:[''],
          id_proveedor:[''],
          fecha:[''],
          solicitante:[''],
          cedula:[''],
          dire:[''],
          tel:[''],
          asunto:[''],
          montoS:[''],
          montoA:[''],
          id_estado:['']
        });

    }

  ngOnInit(): void {  this.SolicitudService.getSolicitud().subscribe((res)=>{ console.log(res); this.listSolicitud =res; })}


  guardarEditS(): any {
    this.SolicitudService.editSolicitud(this.getId, this.updateForm.value).subscribe(
      ()=>{
        Swal.fire('Solicitud modificada!');
        window.location.reload();
         this.ngZone.run(()=>this.router.navigateByUrl('/edit/:solicitud_id'));
      },(err)=>{console.log(err);}

    );
  }

}
