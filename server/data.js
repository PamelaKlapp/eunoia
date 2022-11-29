import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Toto Villaseca',
      email: 'totovillaseca@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Pame Klapp',
      email: 'pameklapp@gmail.com',
      password: bcrypt.hashSync('654321'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Agua Micelar Aloe Vera',
      slug: 'agua-micelar-aloe-vera',
      category: 'limpieza',
      image: '/images/aguamicelar.webp',
      price: 20,
      countInStock: 0,
      rating: 5,
      numReviews: 10,
      description:
        'El Agua Micelar Hydra Clean es un shock de hidratación para la piel. El extracto de aloe vera nutre y suaviza, mientras que los carbohidratos de origen vegetal garantizan una hidratación instantánea y profunda en tu piel.',
    },
    {
      // _id: '2',
      name: 'Serum Boerhaavia + B3',
      slug: 'serum-despigmentante-boerhaavia-b3',
      category: 'tratamiento',
      image: '/images/serum1.webp',
      price: 18,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description:
        'Concentrado de activos con función despigmentante que unifican el tono de la piel y reducen manchas producidas por distintos tipos de hiperpigmentación. Contiene activo de Boerhaavia y Vitamina B3 (Niacinamida).',
    },
    {
      // _id: '3',
      name: 'Tónico Hamamelis',
      slug: 'tonico-hamamelism',
      category: 'tonificantes',
      image: '/images/tonico.webp',
      price: 25,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description:
        'El Tónico Balance Mist es una excelente alternativa para pieles mixtas y grasas. El hidrolato hamamelis tiene propiedades astringentes y antioxidantes, mientras que los péptidos de zinc, malva, tomillo y canela matifican, controlan la producción de sebo y reducen los poros abiertos.',
    },
    {
      // _id: '4',
      name: 'TónicoBello Hamamelis',
      slug: 'tonico-hamamelis',
      category: 'tonificantes',
      image: '/images/tonico.webp',
      price: 25,
      countInStock: 10,
      rating: 2.5,
      numReviews: 10,
      description:
        'El Tónico Balance Mist es una excelente alternativa para pieles mixtas y grasas. El hidrolato hamamelis tiene propiedades astringentes y antioxidantes, mientras que los péptidos de zinc, malva, tomillo y canela matifican, controlan la producción de sebo y reducen los poros abiertos.',
    },
    
  ],
};

export default data;
