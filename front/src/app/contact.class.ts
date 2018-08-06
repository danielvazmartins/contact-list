export class ContatType {
    value: string
    name: string
}

export class Contact {
    id: number
    name: string
    company: string
    relationship: string
    contacts: [{
        id: number,
        type: string,
        contact: string 
    }]
}