interface IPopularPosition {
    id: number;
    name: string;
    price: string;
    link: string;
    image: string;
    productId: number;
    route?: string;
    old_price?: number
}

const popularPositions: Array<IPopularPosition> = [
    { id: 1, name: "Разгрузочный жилет", price: '2480', link: '/catalog/armors/8', image: 'uploadguard.png', productId: 8, route: 'armors', old_price: 3000},
    { id: 2, name: "Подсумок под аптечки", price: '480', link: '/catalog/medical-kits/2', image: 'medical-subkit.png', productId: 2, route: 'medical-kits', old_price: 600},
    { id: 3, name: "Пуленепробиваемый шлем", price: '10500', link: '/catalog/armors/2', image: 'helmet2.png', productId: 2, route: 'armors', old_price: 13000},
    { id: 4, name: "Тактические перчатки", price: '600', link: '/catalog/clothes/17', image: 'gloves.png', productId: 17, route: 'clothes', old_price: 700},
    { id: 5, name: "Экран", price: '156000', link: '/catalog/shields-and-others/2', image: 'shield2.png', productId: 2, route: 'shields-and-others'},
    { id: 6, name: "Рюкзак", price: '2800', link: '/catalog/backpacks/2', image: 'backpack2.png', productId: 2, route: 'backpacks'},
    { id: 7, name: "Рюкзак", price: '2800', link: '/catalog/backpacks/4', image: 'backpack4.png', productId: 4, route: 'backpacks'},
    { id: 8, name: "Пуленепробиваемая вставная пластина", price: '10440', link: '/catalog/armors/4', image: 'plastine1.png', productId: 4, route: 'armors'},
]

export default popularPositions
