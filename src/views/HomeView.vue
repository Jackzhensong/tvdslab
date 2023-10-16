<template>
  <!-- <div class="home"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloWorld /> -->
  <!-- </div> -->
  <div class="header">
      <a-row>
        <a-col class="clos closLogo" :xs="16" :sm="16" :md="16" :lg="5" :xl="5" :xll="4">
          <span class="logoName" @click="home">{{ "Time-Varying Data Science Labratory" }}</span>
        </a-col>
        <a-col class="clos" :xs="8" :sm="8" :md="8" :lg="19" :xl="19" :xll="20">
          <a-row>
            <!-- 展开menu -->
            <a-col class="menu" :xs="0" :sm="0" :md="0" :lg="12" :xl="12">
              <a-menu v-model="current" mode="horizontal" class="lineHeight" @click="pushmenu">
                <a-menu-item key="index">
                  <a-icon type="home"/>Home
                </a-menu-item>
                <a-menu-item key="doc">
                  <a-icon type="edit"/>Doc
                </a-menu-item>
                <a-menu-item key="category">
                  <a-icon type="folder"/>Tags
                </a-menu-item>
                <a-menu-item key="about">
                  <a-icon type="user"/>Links
                </a-menu-item>
              </a-menu>
            </a-col>
            </a-row>
        </a-col>
      </a-row>
      <!-- <div>
        <HelloWorld />
      </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


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
    pushmenu(item, flag) {
      if (flag) {
        this.$router.push({
          path: "/" + item
        });
        // this.showFlag = false;
      } else {
        this.$router.push({
          path: "/" + item.key
        });
      }
    },
    home() {
      // this.showFlag = false;
      this.$router.push({
        path: "/index"
      });
    },
  }
}

</script>



<style scoped>
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
