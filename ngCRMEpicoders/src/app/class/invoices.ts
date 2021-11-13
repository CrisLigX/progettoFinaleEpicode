export class Invoices {
    id?: number;
    data: string;
    numero: number;
    anno: number;
    importo:number;
    stato:{
        id?: number,
        nome: string
    };
    cliente:{
        id?: number
    }

    constructor() {
        this.data = '';
        this.numero = 0;
        this.anno = 2021;
        this.importo = 0;
        this.stato = {
            nome: '',
        },
        this.cliente = {}
    }
  }
