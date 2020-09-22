const getProviderProfile = () => {
  return {
    ok: true,
    body: {
      data: {
        id: 'abc123',
        currency: {
          code: 'AED',
          symbol: 'د.إ',
        },
        profile: {
          backgroundImage: 'https://i.ibb.co/YkJc3Tp/picture.png',
          displayName: 'Amy Smith Personal Training',
          averageRating: 4.235,
          location: {
            name: 'Yoga House - The Greens',
            placesUrl: 'https://goo.gl/maps/KnE2wHbTmUY4mzT38',
          },
          bookings: 12,
          favourites: 2,
          friends: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun',
        },
        services: [
          {
            id: '1234',
            name: 'Hatha Yoga',
            duration: 60,
            price: 120,
            icon: 'https://img.icons8.com/yoga',
            type: 'Group',
            tags: ['Yoga', 'Hatha Yoga', 'Core'],
          },
          {
            id: '1235',
            name: 'Pilates',
            duration: 30,
            price: 120,
            icon: 'https://img.icons8.com/pilates',
            type: 'Private',
            tags: ['Pilates', 'Core'],
          },
          {
            id: '1236',
            name: 'Strength Training',
            duration: 60,
            price: 100,
            icon: 'https://img.icons8.com/dumbbell',
            type: 'Group',
            tags: ['Strength', 'Fitness'],
          },
        ],
      },
    },
  };
};

const delay = (millis) =>
  new Promise((resolve) => {
    setTimeout(resolve, millis);
  });

const get = async (url) => {
  await delay(2000);
  switch (url) {
    case '/Provider/Profile':
      return getProviderProfile();
    default:
      return {
        ok: false,
        status: 404,
      };
  }
};

const post = async (url, opts = {}) => {
  await delay(3000);
  switch (url) {
    case '/Provider/Message':
      if (opts.body.message === 'Fix me') {
        return {
          ok: false,
          status: 400,
          body: {
            error: 'Your message needs fixing!',
          },
        };
      } else {
        return {
          ok: true,
          status: 200,
          body: {
            success: true,
          },
        };
      }
    default:
      return {
        ok: false,
        status: 404,
      };
  }
};

const mockApi = {
  get,
  post,
};

export default mockApi;
