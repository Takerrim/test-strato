<template>
  <div class="panel">
    <div class="input-block">
      <input 
      type="text" 
      placeholder="Name" 
      class="name" 
      v-model="name"
      >
      <input 
      type="number" 
      placeholder="Quantity" 
      class="quantity" 
      v-model="quantity"
      >
      <input 
      type="number" 
      placeholder="Price" 
      class="price" 
      v-model="price"
      >
      <button 
      class="addItem" 
      @click="createItem"
      >ADD ITEM
      </button>
    </div>
    <div class="result-block">
      <div class="container">
        <div class="heading-block">
          <h5>Name</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
        </div>
      </div>
      <div 
      v-for="(item,index) in items"
      :key="index"
      >
        <Item
        v-if="visible" 
        :name="item.name"
        :quantity="item.quantity"
        :price="item.price"
        :index="index"
        :itemsList="items"
        />
      </div>
    </div>
    <div class="summary">
      <h2>Summary: $</h2>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
   components: {
    Item
  },
  name: 'Panel',
  data () {
    return {
      name: '',
      quantity: Number,
      price: Number,
      visible: false,
      items: []
    }
  },
  methods: {
    createItem () {
      if(this.name != '' && this.quantity != null && this.price != null) {
        this.items.push({
          name: this.name,
          quantity: this.quantity,
          price: this.price
        })
      }
      localStorage.setItem('name', this.name);
      localStorage.setItem('quantity', this.quantity);
      localStorage.setItem('price', this.price);
      this.visible = true;
      this.name = '';
      this.quantity = null;
      this.price = null;
    }
  }
}
</script>

<style scoped>
.panel {
  width: 800px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.3);
  padding: 15px;
}

.input-block {
  display: flex;
  flex-direction: column;
}

input {
  border: none;
  border-bottom: 1px solid grey;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 15px;
}

.addItem {
  background-color: rgb(11, 177, 163);
  color: #ffffff;
  width: 17%;
  padding: 10px 0px;
  font-size: 13px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  cursor: pointer;
}

.container {
  border-bottom: 1px solid rgba(0,0,0,0.3);
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
