export interface Category {
    title: string,
    icon: string,
    color: string,
    subcategories: Subcategory[]
}

export type Subcategory = Pick<Category, 'title' | 'icon'>

export const categories: Category[] = [
    {
        title: 'Wydatki różne',
        icon: '',
        color: '#d2d2d2',
        subcategories: [
            {
                title: 'Koszty banku',
                icon: 'bank'
            },
            {
                title: 'Opieka zdrowotna',
                icon: 'heart'
            },
            {
                title: 'Pożyczka studencka',
                icon: 'school'
            },
            {
                title: 'Ubrania',
                icon: 'tshirt-crew'
            },
            {
                title: 'Wydatki rożne',
                icon: 'archive'
            },
        ]
    },
    {
        title: 'Rozrywki',
        icon: '',
        color: '#f790ca',
        subcategories: [
            {
                title: 'Elektronika',
                icon: 'lightning-bolt'
            },
            {
                title: 'Hobby',
                icon: 'archive'
            },
            {
                title: 'Kino',
                icon: 'theater'
            },
            {
                title: 'Klub',
                icon: 'glass-mug-variant'
            },
            {
                title: 'Koncert',
                icon: 'microphone-variant'
            },
            {
                title: 'Kręgle',
                icon: 'bowling'
            },
            {
                title: 'Rozrywki',
                icon: 'emoticon-happy'
            },
            {
                title: 'Siłownia',
                icon: 'dumbbell'
            },
            {
                title: 'Sport',
                icon: 'basketball'
            },
            {
                title: 'Subskrybcja',
                icon: 'youtube-subscription'
            },
            {
                title: 'Wakacje',
                icon: 'glass-cocktail'
            },
        ]
    },
    {
        title: 'Jedzenie',
        icon: '',
        color: '#74aff0',
        subcategories: [
            {
                title: 'Jedzenie',
                icon: 'noodles'
            },
            {
                title: 'Kawa',
                icon: 'coffee'
            },
            {
                title: 'Napoje',
                icon: 'cup-water'
            },
            {
                title: 'Restauracja',
                icon: 'table-chair'
            },
            {
                title: 'Słodycze',
                icon: 'candy'
            },
            {
                title: 'Zakupy spożywcze',
                icon: 'cart'
            },
        ]
    },
    {
        title: 'Domowe',
        icon: '',
        color: '#feac36',
        subcategories: [
            {
                title: 'Artykuły domowe',
                icon: 'spray-bottle'
            },
            {
                title: 'Bank',
                icon: 'bank'
            },
            {
                title: 'Czynsz',
                icon: 'cash-100'
            },
            {
                title: 'Domowe',
                icon: 'home-city'
            },
            {
                title: 'Internet',
                icon: 'web'
            },
            {
                title: 'Konserwacja',
                icon: 'hammer'
            },
            {
                title: 'Podatki',
                icon: 'percent'
            },
            {
                title: 'Pożyczka',
                icon: 'cash-fast'
            },
            {
                title: 'Prąd',
                icon: 'lightning-bolt'
            },
            {
                title: 'Telefon',
                icon: 'cellphone'
            },
            {
                title: 'Telewizja',
                icon: 'television-classic'
            },
            {
                title: 'Ubezpeczenie',
                icon: 'shield-home'
            },
            {
                title: 'Woda',
                icon: 'water'
            },
        ]
    },
    {
        title: 'Przychody',
        icon: '',
        color: '#b3d142',
        subcategories: [
            {
                title: 'Inwestycje',
                icon: 'cash'
            },
            {
                title: 'Odsetki',
                icon: 'cash-refund'
            },
            {
                title: 'Pensja',
                icon: 'cash-multiple'
            },
            {
                title: 'Przychód',
                icon: 'cash-plus'
            },
            {
                title: 'Zasiłek na dziecko',
                icon: 'baby'
            }
        ]
    },
    {
        title: 'Styl życia',
        icon: '',
        color: '#ff7177',
        subcategories: [
            {
                title: 'Apteka',
                icon: 'pill'
            },
            {
                title: 'Darowizny',
                icon: 'heart'
            },
            {
                title: 'Dentysta',
                icon: 'tooth'
            },
            {
                title: 'Edukacja',
                icon: 'school'
            },
            {
                title: 'Hotel',
                icon: 'bed'
            },
            {
                title: 'Lekarz',
                icon: 'doctor'
            },
            {
                title: 'Opieka nad dzieckiem',
                icon: 'human-baby-changing-table'
            },
            {
                title: 'Podróże',
                icon: 'airplane'
            },
            {
                title: 'Prezent',
                icon: 'gift'
            },
            {
                title: 'Styl życia',
                icon: 'star'
            },
            {
                title: 'Wydatki biurowe',
                icon: 'archive'
            },
            {
                title: 'Zakupy',
                icon: 'cart'
            },
            {
                title: 'Zwierzęta',
                icon: 'paw'
            }
        ]
    },
    {
        title: 'Oszczędności',
        icon: '',
        color: '#3cccde',
        subcategories: [
            {
                title: 'Poduszka bezpieczeństwa',
                icon: 'cash-lock'
            },
            {
                title: 'Oszczędności na samochód',
                icon: 'car-clock'
            },
            {
                title: 'Oszczędności na mieszkanie',
                icon: 'home'
            },
            {
                title: 'Oszczędności',
                icon: 'piggy-bank'
            },
        ]
    },
    {
        title: 'Transport',
        icon: '',
        color: '#9b40ef',
        subcategories: [
            {
                title: 'Paliwo',
                icon: 'gas-station'
            },
            {
                title: 'Lot',
                icon: 'airplane'
            },
            {
                title: 'Naprawa',
                icon: 'car-wrench'
            },
            {
                title: 'Parking',
                icon: 'parking'
            },
            {
                title: 'Pożyczka samochodowa',
                icon: 'cash-fast'
            },
            {
                title: 'Taxi',
                icon: 'taxi'
            },
            {
                title: 'Transport',
                icon: 'train-car'
            },
            {
                title: 'Transport publiczny',
                icon: 'train-variant'
            },
            {
                title: 'Ubezpieczenie samochodu',
                icon: 'shield-car'
            },
        ]
    }
]