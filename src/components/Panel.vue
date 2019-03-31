<template>
  <div class="panel">
    <div class="input-block">
      <input type="text" placeholder="Name" class="name" v-model="name">
      <input type="number" placeholder="Quantity" class="quantity" v-model="quantity">
      <input type="number" placeholder="Price" class="price" v-model="price">
      <button class="addItem" @click="handler">ADD ITEM</button>
    </div>
    <div class="result-block">
      <div class="container">
        <div class="heading-block">
          <h5>Name</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
        </div>
      </div>
      <div>
        <todo-item v-for="(item,index) in this.$store.getters.getItems" :key="index" :item="item" :index="index"></todo-item>
      </div>
    </div>
    <div class="summary">
      <h2>Summary: ${{this.$store.getters.getSummary}}</h2>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Panel",
  components: {
    TodoItem
  },
  data() {
    return {
      localName: null,
      localQuantity: null,
      localPrice: null,
      counter: 0,
      name: "",
      quantity: null,
      price: null,
      visible: false,
    };
  },
  created() {
    eventBus.$on("removedItem", (item, index) => {
      return this.secondHandler(item, index);
    });
    eventBus.$on("saveChanges", (data) => this.thirdHandler(data));
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', {
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        id: this.counter,
        editing: false
      })
      this.counter++;
      this.visible = true;
      this.name = "";
      this.quantity = null;
      this.price = null;
    },
    cancelEdit () {
      let initialValue = 0;
      this.$store.getters.getPriceSummary = this.$store.getters.getItems.reduce((accum,currentValue) => {
        return +accum + +currentValue.price;
      },initialValue); // add initialValue to reduce property of object
      this.$store.getters.getQuantitySummary = this.$store.getters.getItems.reduce((accum,currentValue) => {
        return +accum + +currentValue.quantity; 
      },initialValue);
      this.$store.getters.getSummary = this.$store.getters.getPriceSummary * this.$store.getters.getQuantitySummary; 
    },
    doneEdit(data) {
      this.$store.getters.getItems.splice(data.index, 1, data.item);
    },
    getSummary() {
      this.$store.commit('addSummary')
    },
    handler() {
      if (this.name === "" || this.quantity === null || this.price === null)
        return;
      this.addItem();
      this.getSummary();
    },
    thirdHandler(data) {
      this.doneEdit(data);
      this.getSummary();
    }
  }
};
</script>

<style scoped>
.panel {
  width: 800px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
}

.input-block {
  display: flex;
  flex-direction: column;
}

.input-block input {
  border: none;
  border-bottom: 1px solid grey;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 15px;
}

.result-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.addItem {
  background-color: rgb(11, 177, 163);
  color: #ffffff;
  width: 17%;
  padding: 10px 0px;
  font-size: 13px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.container {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: -1px;
}
.container .heading-block {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.heading-block h5 {
  margin: 10px;
}

.summary {
  display: flex;
  padding: 15px 9px;
}
.summary h2 {
  font-weight: lighter;
  margin: 0;
}
</style>
