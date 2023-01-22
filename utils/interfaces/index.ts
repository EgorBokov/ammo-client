export interface BasketItem {
    amount: number
    articul: string
    image: string
    link: string
    name: string
    price: number
    description?: Array<string[]>
    size?: string
}

export type IModalWindow = {
    name: string
    isOpened: boolean
}

export type INotificationBar = {
    color: string
    title: string
    isOpened: boolean
}

export type ILinks = {
    id: number
    name: string
    href: string
}

export interface ICommonModal {
    title: string,
    isOpened: boolean
}
