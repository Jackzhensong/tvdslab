<template>
  <div class="header">

  </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: { 
    // HelloWorld 
  },
  data() {
    return {
      current: ['index'],
    };
  },

  methods: {


  }
}

</script>



<style lang='less' scoped>
#components-layout-demo-fixed .logo {
  width: 400px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0px 0px 0px 0;
  float: left;
}

.lineHeight {
  line-height: 65px;
  display: inline-block;
  box-sizing: border-box;
}

.clos {
  height: 65px;
  line-height: 65px;
}

.header {
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px #f0f1f2;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 999;
}

@media screen and (max-width: 992px) {
  .closLogo {
    text-align: left;
  }
  .logoName {
    padding-left: 28px;
  }
}

.menu {
  text-align: right;
}

.menu .ant-menu-item-selected,
.menu .ant-menu-item-active {
  border-top: 2px solid #1890ff !important;
  border-bottom: none !important;
}

.menu .ant-menu-item {
  border-top: 2px solid #fff;
  border-bottom: none !important;
}
</style>
