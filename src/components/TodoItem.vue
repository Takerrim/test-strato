<template>
    <div class="item-block">
        <div>
          <span class="item-name">{{name}}</span>
        </div>
        <div class="item-wrapper">
          <span 
          class="item-quantity" 
          v-if="!editing"
          >
          {{quantity}}
          </span>
          <input 
          class="editInput"
          type="number" 
          v-model="quantity" 
          v-else 
          >
        </div>
          <div class="item-wrapper">
            <span 
          class="item-price" 
          v-if="!editing"
          >
          ${{price}}
          </span>
          <input
          class="editInput" 
          type="number" 
          v-model="price" 
          v-else 
          >
          </div>
        <div>
          <div class="garbage">
            <div v-if="!editing">
              <font-awesome-icon
              icon="trash" 
              class="trash-icon"
              @click="itemHandler(index)"
              />
            </div>
            <div v-if="!editing">
              <font-awesome-icon
              icon="pencil-ruler" 
              @click="editedItem"
              />
            </div>
            <div v-if="editing"> 
              <font-awesome-icon
              icon="save" 
              @click="saveChanges"
              />
            </div>
            <div v-if="editing">
              <font-awesome-icon
              icon="window-close" 
              @click="cancelEditItem"
              />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        name: this.item.name,
        quantity: this.item.quantity,
        price: this.item.price,
        id: this.item.id,
        editing: this.item.editing,
        beforeEditingPrice: 0,
        beforeEditingQuantity: 0
      }
    },
    methods: {
      itemHandler(index) {
        eventBus.$emit('removedItem', index)
      },
      editedItem() {
        this.beforeEditingPrice = this.price
        this.beforeEditingQuantity = this.quantity
        this.editing = true
      },
      saveChanges() {
        if(this.quantity === '' || this.price === '') return
        this.editing = false
          eventBus.$emit('saveChanges', {
          index: this.index,
          item: {
            name: this.name,
            quantity: this.quantity,
            price: this.price,
            id: this.id,
            editing: this.editing
          }
      })
      },
      cancelEditItem () {
        this.editing = false
        this.price = this.beforeEditingPrice
        this.quantity = this.beforeEditingQuantity
      }
    }
  }
</script>

<style scoped>
  .item-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 9px;
  text-align: left;
}

.item-block .item-wrapper {
  width: 7%;
}

.item-block .item-wrapper span {
  font-size: 1em;
}

.item-block .item-wrapper .editInput {
  margin: 0;
  padding: 0;
  width: 100%;
}

.item-block .garbage {
  display: flex;
  cursor: pointer;
}

.item-block .garbage div {
  margin-right: 45px;
}
</style>