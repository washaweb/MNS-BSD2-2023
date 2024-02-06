// ici on stocke nos produits
const products = [
  {
    id: 1,
    product: 'Computer',
    image: 'https://picsum.photos/400/200?image=1',
    details: ['80% coton', '20% polyester', 'Genre mixte'],
    inventory: 100,
    variants: [
      {
        variantId: 2234,
        variantColor: 'Vert',
        color: 'green',
        variantImage: 'https://picsum.photos/400/200?image=1'
      },
      {
        variantId: 2235,
        variantColor: 'Bleu',
        color: 'blue',
        variantImage: 'https://picsum.photos/400/200?image=2'
      }
    ]
  },
  {
    id: 2,
    product: 'Potatoes',
    image: 'https://picsum.photos/400/200?image=58',
    details: ['Blanche', 'Fraiche du jour', 'En sachet'],
    inventory: 0,
    variants: [
      {
        variantId: 2240,
        variantColor: 'Vert',
        color: 'green',
        variantImage: 'https://picsum.photos/400/200?image=58'
      },
      {
        variantId: 2241,
        variantColor: 'Vert',
        color: 'green',
        variantImage: 'https://picsum.photos/400/200?image=59'
      }
    ]
  },
  {
    id: 3,
    product: 'Strawberry',
    image: 'https://picsum.photos/400/200?image=103',
    details: ['Fraiche', 'Du jour'],
    inventory: 40,
    variants: [
      {
        variantId: 2237,
        variantColor: 'Rouge',
        color: 'red',
        variantImage: 'https://picsum.photos/400/200?image=103'
      },
      {
        variantId: 2238,
        variantColor: 'Orange',
        color: 'orange',
        variantImage: 'https://picsum.photos/400/200?image=104'
      }
    ]
  }
]
// qu'on exporte pour pouvoir les importer dans un autre fichier
export { products }
