import Register  from '../views/Register/Register';
import Home  from '../views/Home/Home';
import AdvanceExercises  from '../views/AdvanceExercises/AdvanceExercises';
import BookingPlan  from '../views/BookingPlan/BookingPlan';
import FusionExerciseAir  from '../views/FusionExerciseAir/FusionExerciseAir';
import FusionExerciseAirDetail  from '../views/FusionExerciseAirDetail/FusionExerciseAirDetail';



export const RouteLinks = {
    Register: {
      component: Register, path: '/',
    },
    Home: {
      component: Home, path: '/home',
    },
    AdvanceExercises: {
      component: AdvanceExercises, path: '/advance-Exercises',
    },
    BookingPlan: {
      component: BookingPlan, path: '/booking-plans',
    },
    FusionExerciseAir: {
      component: FusionExerciseAir, path: '/exercise-air',
    },
    FusionExerciseAirDetail: {
      component: FusionExerciseAirDetail, path: '/exercise-air-detail',
    },

}