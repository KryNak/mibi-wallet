interface CategoriesType {
    categories: Category[]
}

interface Category {
    title: string,
    icon: string,
    color: string,
    subcategories: Subcategory[]
}

type Subcategory = Pick<Category, 'title' | 'icon'>

const categories = [
    {
        title: 'Wydatki różne',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Koszty banku',
                icon: ''
            },
            {
                title: 'Nieznany',
                icon: ''
            },
            {
                title: 'Opieka zdrowotna',
                icon: ''
            },
            {
                title: 'Pożyczka studencka',
                icon: ''
            },
            {
                title: 'Ubrania',
                icon: ''
            },
            {
                title: 'Wydatki rożne',
                icon: ''
            },
        ]
    },
    {
        title: 'Rozrywki',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Elektronika',
                icon: ''
            },
            {
                title: 'Hobby',
                icon: ''
            },
            {
                title: 'Kino',
                icon: ''
            },
            {
                title: 'Klub',
                icon: ''
            },
            {
                title: 'Koncert',
                icon: ''
            },
            {
                title: 'Kręgle',
                icon: ''
            },
            {
                title: 'Rozrywki',
                icon: ''
            },
            {
                title: 'Siłownia',
                icon: ''
            },
            {
                title: 'Sport',
                icon: ''
            },
            {
                title: 'Subskrybcja',
                icon: ''
            },
            {
                title: 'Wakacje',
                icon: ''
            },
        ]
    },
    {
        title: 'Jedzenie',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Jedzenie',
                icon: ''
            },
            {
                title: 'Kawa',
                icon: ''
            },
            {
                title: 'Napoje',
                icon: ''
            },
            {
                title: 'Restauracja',
                icon: ''
            },
            {
                title: 'Słodycze',
                icon: ''
            },
            {
                title: 'Zakupy spożywcze',
                icon: ''
            },
        ]
    },
    {
        title: 'Domowe',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Artykuły domowe',
                icon: ''
            },
            {
                title: 'Bank',
                icon: ''
            },
            {
                title: 'Czynsz',
                icon: ''
            },
            {
                title: 'Domowe',
                icon: ''
            },
            {
                title: 'Internet',
                icon: ''
            },
            {
                title: 'Konserwacja',
                icon: ''
            },
            {
                title: 'Podatki',
                icon: ''
            },
            {
                title: 'Pożyczka',
                icon: ''
            },
            {
                title: 'Prąd',
                icon: ''
            },
            {
                title: 'Telefon',
                icon: ''
            },
            {
                title: 'Telewizja',
                icon: ''
            },
            {
                title: 'Ubezpeczenie',
                icon: ''
            },
            {
                title: 'Woda',
                icon: ''
            },
        ]
    },
    {
        title: 'Przychody',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Inwestycje',
                icon: ''
            },
            {
                title: 'Odsetki',
                icon: ''
            },
            {
                title: 'Pensja',
                icon: ''
            },
            {
                title: 'Przychody',
                icon: ''
            },
            {
                title: 'Zasiłek na dziecko',
                icon: ''
            }
        ]
    },
    {
        title: 'Styl życia',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Apteka',
                icon: ''
            },
            {
                title: 'Darowizny',
                icon: ''
            },
            {
                title: 'Dentysta',
                icon: ''
            },
            {
                title: 'Edukacja',
                icon: ''
            },
            {
                title: 'Hotel',
                icon: ''
            },
            {
                title: 'Lekarz',
                icon: ''
            },
            {
                title: 'Opieka nad dzieckiem',
                icon: ''
            },
            {
                title: 'Podróże',
                icon: ''
            },
            {
                title: 'Prezent',
                icon: ''
            },
            {
                title: 'Styl życia',
                icon: ''
            },
            {
                title: 'Wydatki biurowe',
                icon: ''
            },
            {
                title: 'Zakupy',
                icon: ''
            },
            {
                title: 'Zwierzęta',
                icon: ''
            }
        ]
    },
    {
        title: 'Oszczędności',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Poduszka bezpieczeństwa',
                icon: ''
            },
            {
                title: 'Oszczędności na samochód',
                icon: ''
            },
            {
                title: 'Oszczędności na mieszkanie',
                icon: ''
            },
            {
                title: 'Oszczędności',
                icon: ''
            },
        ]
    },
    {
        title: 'Transport',
        icon: '',
        color: '',
        subcategories: [
            {
                title: 'Gaz',
                icon: ''
            },
            {
                title: 'Lot',
                icon: ''
            },
            {
                title: 'Naprawa',
                icon: ''
            },
            {
                title: 'Parking',
                icon: ''
            },
            {
                title: 'Pożyczka samochodowa',
                icon: ''
            },
            {
                title: 'Taxi',
                icon: ''
            },
            {
                title: 'Transport',
                icon: ''
            },
            {
                title: 'Transport publiczny',
                icon: ''
            },
            {
                title: 'Unezpieczenie samochodu',
                icon: ''
            },
        ]
    }
]