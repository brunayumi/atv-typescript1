namespace sistemaHospitalar{
     export class Paciente extends Pessoa{
         private _codPaciente:number;

         public getCodCliente(){
             return this._codPaciente;
         }

         public setCodCliente(codigo:number){
             this._codPaciente = codigo;
         }
     }
  }