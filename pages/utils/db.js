import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nyasha',
      email: 'nyasha@outlook.com',
      password: bcrypt.hashSync('0123456'),
      isAdmin: true,
    },
    {
      name: 'Daniels',
      email: 'daniels@outlook.com',
      password: bcrypt.hashSync('0123456'),
      isAdmin: true,
    },
    {
      name: 'Musanhu',
      email: 'musanhu@outlook.com',
      password: bcrypt.hashSync('0123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'HP Beast',
      id: 1,
      title: 'Who We Are',
      slug: 'computer-hp',
      category: 'HP computers',
      image: '/images/complete_doll1.png',
      price: 12560,
      brand: 'HP',
      rating: 4.2,
      numReviews: 458,
      countInStock: 10,
      description: 'A great machine',
    },
    {
      name: 'Dell Valentine',
      id:2,
      title: 'Why?',

      slug: 'computer-dell',
      category: 'HP computers',
      image: '/images/complete_doll8.png',
      price: 12000,
      brand: 'DELL',
      rating: 4.35,
      numReviews: 209,
      countInStock: 19,
      description: 'Great Hardware',
    },
    {
      name: 'Macbook Sand',
      id:3,
      title: 'What',
      slug: 'computer-apple',
      category: 'Mac machine',
      image: '/images/complete_doll8 ',
      price: 13930,
      brand: 'Mac',
      rating: 4.5,
      numReviews: 892,
      countInStock: 12,
      description: 'Flawless Computer',
    },
    {
      name: 'Acer Legend',
      id:4,
      title: 'Where',
      slug: 'computer-acer',
      category: 'Acer Computer',
      image: '/images/WELD2.png',
      price: 8900,
      brand: 'Acer',
      rating: 3.9,
      numReviews: 567,
      countInStock: 17,
      description: 'Cheap Yet Trendy',
    },

  ],
};

export default data;
