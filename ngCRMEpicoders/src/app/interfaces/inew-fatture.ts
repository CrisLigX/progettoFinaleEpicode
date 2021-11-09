export interface InewFatture {
    data: string,
    numero: number,
    anno: number,
    importo:number,
    stato:{
        id?: number,
        nome: string
    },
    cliente:{
        id?: number
    }
}
