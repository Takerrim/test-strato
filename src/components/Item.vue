<template>
  <div>
    <div class="item-block">
      <span class="item-name">{{name}}</span>
      <span class="item-quantity">{{quantity}}</span>
      <span class="item-price">{{price}}</span>
      <span class="garbage"
      @click="removeItem(index)"
      >
      <font-awesome-icon icon="trash"/>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      name: String,
      quantity: Number,
      price: Number,
      index: Number,
      itemsList: Array
    },
    data () {
      return {
        hidden: false
      }
    },
    methods: {
      removeItem(index) {
        itemsList.splice(index,1);
      }
    }
  }
</script>

<style scoped>
.item-block {
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 15px 9px;
}

.item-block span {
  font-size: 0.83em;;
}

.item-block .garbage {
  cursor: pointer;
}
</style>