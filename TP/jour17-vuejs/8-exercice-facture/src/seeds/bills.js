const bills = [
  {
    id: 1,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 2,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 3,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 4,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 5,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 6,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 7,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 8,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '08/03/2023',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  }
]

export { bills }
