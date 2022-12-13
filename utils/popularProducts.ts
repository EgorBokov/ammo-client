interface IPopularPosition {
    id: number;
    name: string;
    price: string;
    link: string;
    image: string;
    productId: number;
    route?: string;
}

const popularPositions: Array<IPopularPosition> = [
    { id: 1, name: "Разгрузочный жилет", price: '3000', link: '/catalog/armors/8', image: '/uploadguard.png', productId: 8, route: 'armors'},
    { id: 2, name: "Подсумок под аптечки", price: '600', link: '/catalog/medical-kits/2', image: '/medical-subkit.png', productId: 2, route: 'medical-kits'},
    { id: 3, name: "Пуленепробиваемый шлем", price: '13000', link: '/catalog/armors/2', image: '/helmet2.png', productId: 2, route: 'armors'},
    { id: 4, name: "Тактические перчатки", price: '700', link: '/catalog/clothes/17', image: '/gloves.png', productId: 17, route: 'clothes'},
    { id: 5, name: "Экран", price: '156000', link: '/catalog/shields-and-others/2', image: '/shield2.png', productId: 2, route: 'shields-and-others'},
    { id: 6, name: "Рюкзак", price: '2500-4000', link: '/catalog/backpacks/2', image: '/backpack2.png', productId: 2, route: 'backpacks'},
    { id: 7, name: "Рюкзак", price: '2500-4000', link: '/catalog/backpacks/4', image: '/backpack4.png', productId: 4, route: 'backpacks'},
    { id: 8, name: "Пуленепробиваемая вставная пластина", price: '10440', link: '/catalog/armors/4', image: '/plastine1.png', productId: 4, route: 'armors'},
]

export default popularPositions
