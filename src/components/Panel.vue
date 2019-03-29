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
      @click="handler"
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
      <div>
      <todo-item v-for="(item,index) in items"
      :key="index"
      :item="item"
      :index="index"
      @removedItem="secondHandler(item,index)"
      @editingItem="editItem(item)"
      @saveChanges="thirdHandler"
      @cancelEditing="cancelEdit(item)"
      >
      </todo-item>
      </div>
    </div>
    <div class="summary">
      <h2>Summary: ${{summary}}</h2>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'Panel',
  components: {
    TodoItem
  },
  data () {
    return {
      priceSummary: 0,
      quantitySummary: 0,
      summary: 0,
      localName: null,
      localQuantity: null,
      localPrice: null,
      counter: 0,
      name: '',
      quantity: null,
      price: null,
      visible: false,
      items: [],
      localItems: []
    }
  },
  methods: {
    createItem () {      
      this.items.push({
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        id: this.counter,
        editing: false,
      })
      localStorage.setItem('items', JSON.stringify(this.items));
      let localStor = JSON.parse(localStorage['items']);
      this.localItems = localStor;
      this.counter++;
      this.visible = true;
      this.name = '';
      this.quantity = null;
      this.price = null;
    },
    removeItem (item,index) {
      this.items.splice(index,1);
      this.localItems.splice(index,1);
      this.counter--;
      localStorage.setItem('items', JSON.stringify(this.localItems));
    },
    editItem (item) {
      item.editing = true
    },
    doneEdit (data) {
      this.items.splice(data.index, 1, data.item)
      let editedItems = [...this.items]
      localStorage.setItem('items', JSON.stringify(editedItems))
    },
    cancelEdit (item) {
      let prevArr = JSON.parse(localStorage['items']);
      let prevItem = prevArr.find(i => {
        return i.id === item.id;
      });
      item.quantity = prevItem.quantity;
      item.price = prevItem.price;
      item.editing = false;
    },
    getSummary () {
        let initialValue = 0;
        this.priceSummary = this.items.reduce((accum,currentValue) => {
          return +accum + +currentValue.price;
        },initialValue); // add initialValue to reduce property of object
        this.quantitySummary = this.items.reduce((accum,currentValue) => {
          return +accum + +currentValue.quantity; 
        },initialValue);
        this.summary = this.priceSummary * this.quantitySummary;
        
    },
    decreaseSummary (item) {
      this.priceSummary = this.priceSummary - item.price;
      this.quantitySummary = this.quantitySummary - item.quantity;
      let genenalSum = this.priceSummary * this.quantitySummary;
      this.summary = genenalSum;
      if(this.items.length === 0) {
        this.summary = 0;
      }
    },
    handler () {
      if(this.name === '' || this.quantity === null || this.price === null) return;
      this.createItem();
      this.getSummary();
    },
    secondHandler (item,index) {
      this.removeItem(item,index);
      this.decreaseSummary(item);
    },
    thirdHandler (data) {
      this.doneEdit(data);
      this.getSummary();
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

.input-block  input{
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
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  cursor: pointer;
}

.container {
  border-bottom: 1px solid rgba(0,0,0,0.3);
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
