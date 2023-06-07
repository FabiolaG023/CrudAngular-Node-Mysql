import { Component, OnInit, NgZone } from '@angular/core';
import { SolicitudService } from 'src/app/SERVICES/solicitud.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html'
})
export class EditProveedorComponent implements OnInit {

  getId : any;
  updateForm: FormGroup;

  filterProveedor = '';

  listProveedor: any = [];

  constructor(private SolicitudService: SolicitudService,
    private router: Router,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
     private activeRoute: ActivatedRoute) { this.getId = this.activeRoute.snapshot.paramMap.get('proveedor_id');

     this.SolicitudService.unProveedor(this.getId).subscribe((res)=>{
       this.updateForm.patchValue({
         proveedor_id: res['proveedor_id'],
         nombre: res['nombre'],
         rnc:res['rnc'],
         direccion:res['direccion'],
         tel:res['tel'],
         correo:res['correo']
       });
     });

     this.updateForm = this.formBuilder.group({
      proveedor_id:[''],
       nombre: [''],
       rnc:[''],
       direccion:[''],
       tel:[''],
       correo:['']
     });

    }


  ngOnInit(): void {  this.SolicitudService.getProveedor().subscribe((res)=>{ console.log(res); this.listProveedor =res; })}

 guardarEditP(): any{
    this.SolicitudService.editProveedor(this.getId, this.updateForm.value).subscribe(
      ()=>{
        Swal.fire('Proveedor modificado!');
        window.location.reload();
        this.ngZone.run(()=>this.router.navigateByUrl('/editP/:proveedor_id'));

      }, (err)=>{console.log(err);}

    );
   }





}

