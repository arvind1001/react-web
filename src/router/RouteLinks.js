import Register  from '../views/Register/Register';
import Services  from '../views/Services/Services';
import Products  from '../views/Products/Products';


export const RouteLinks = {
    Register: {
      component: Register, path: '/',
    },
    Services: {
      component: Services, path: '/services',
    },
    Products: {
      component: Products, path: '/products',
    },

}