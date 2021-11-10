import { IClienti } from "./iclienti";

export interface Ifatture {
    id?: number,
            data: string,
            numero: number,
            anno: number,
            importo: number,
            stato: {
                id?: number,
                nome: string
            },
            cliente: IClienti,
}
