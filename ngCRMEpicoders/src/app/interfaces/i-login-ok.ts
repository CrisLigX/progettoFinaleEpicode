export interface ILoginOk {
    id?: number,
    username: string,
    email: string,
    roles: [
        string,
        string
    ],
    accessToken: string,
    tokenType: string
}
