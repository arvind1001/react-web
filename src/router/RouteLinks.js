import Home  from '../views/Home/Home';
import Services  from '../views/Services/Services';
import Products  from '../views/Products/Products';


export const RouteLinks = {
    Home: {
      component: Home, path: '/',
    },
    Services: {
      component: Services, path: '/services',
    },
    Products: {
      component: Products, path: '/products',
    },

}