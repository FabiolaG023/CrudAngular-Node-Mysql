import { Component, OnInit, NgZone } from '@angular/core';
import { SolicitudService } from 'src/app/SERVICES/solicitud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html'


})
export class SolicitudComponent implements OnInit {

  pipe = new DatePipe('en-US');
  today =  new Date();
  Hoy= this.pipe.transform(this.today, 'dd/MM/YYYY');






  // ARREGLOS
  ListSolicitud: any = [];
  ListProveedor: any = [];
  ListEstado: any = [];

 solicitudForm: FormGroup;


      constructor(
        private SolicitudService: SolicitudService,
        private router: Router,
        public formBuilder: FormBuilder,
        private ngZone: NgZone

        ){
          this.solicitudForm = this.formBuilder.group({
          solicitud_id:[''],
          id_proveedor:[''],
          fecha:this.Hoy,
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

        ngOnInit(): void{
          this.SolicitudService.getProveedor().subscribe((res: any)=> { this.ListProveedor= res});
          this.SolicitudService.getEstado().subscribe((res: any)=>{ this.ListEstado= res});
          this.SolicitudService.getSolicitud().subscribe((res: any)=>{ this.ListSolicitud =res;});

        }



 guardarS(){
     this.SolicitudService.addSolicitud(this.solicitudForm.value).subscribe(
       ()=>{
         Swal.fire('Solicitus agregada!');
         window.location.reload();
         this.ngZone.run(()=>this.router.navigateByUrl('/add'));
       }, (err: any)=>{console.log(err);});
   }







  }
