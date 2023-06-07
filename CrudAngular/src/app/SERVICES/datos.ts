export class Solicitud {
  solicitud_id!: Number;
  id_proveedor!: Number;
  fecha!: string;
  solicitante!: string;
  cedula!: string;
  dire!: string;
  tel!: string;
  asunto!: string;
  montoS!: string;
  montoA!: string;
  id_estado!: Number;

}

export class Proveedor {
  proveedor_id!: Number;
  nombre!: string;
  rnc!: string;
  direccion!: string;
  tel!: string;
  correo!: string;
}

export class Estado {
  estado_id!: Number;
  status!: string;

}

export class login {
  user!: string;
  pass!: string;
}
