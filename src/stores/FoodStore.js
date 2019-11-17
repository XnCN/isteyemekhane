import { observable, action } from 'mobx';

class FoodStore {
    @observable foodList = [];
    @observable loading = true;
    @action setFoodList = (foods) => {
        this.foodList = foods;
    }
    @action setLoading = (state) => {
        this.loading = state;
    }
}

export default new FoodStore();