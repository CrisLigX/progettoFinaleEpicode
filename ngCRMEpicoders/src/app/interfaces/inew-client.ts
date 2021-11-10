export interface InewClient {
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: {
        via: string,
        civico: string,
        cap: string,
        localita: string,
        comune: {
            nome: string,
            provincia: {
                nome: string,
                sigla: string
            }
        }
    },
    indirizzoSedeLegale: {
        via: string,
        civico: string,
        cap: string,
        localita: string,
        comune: {
            nome: string,
            provincia: {
                nome: string,
                sigla: string
            }
        }
    },
    dataInserimento: string,
    dataUltimoContatto: string
}