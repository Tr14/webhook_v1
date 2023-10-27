import AuthLogo from './extensions/my-logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: AuthLogo,
  },
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Add a new locale, other than 'en'
  locales: ['vi'],
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: MenuLogo,
  },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },

    // overwrite dark theme properties
    dark: {
      // ...
    }
  },
  translations: {
    vi: {
      'Auth.form.email.label': 'test',
      Users: 'Utilisateurs',
      City: 'CITY (VIETNAM)',
      // Customize the label of the Content Manager table.
      Id: 'ID vietnam',
      "content-type-builder.plugin.name": "Xây dựng bảng dữ liệu"
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
