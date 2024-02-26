<template>
  <div class="header">
    <a-row class="clos">
      <a-col  :xs="16" :sm="16" :md="16" :lg="5" :xl="6" :xll="4">
        <span @click="home" class="logoName">{{ "Time-Varying Data Science Lab" }}</span>
      </a-col>
      <a-col class="menu" :xs="8" :sm="8" :md="8" :lg="19" :xl="18" :xll="20">
        <a-menu
          v-model="current"
          mode="horizontal"
          class="lineHeight"
          @click="pushmenu"
        >
          <a-menu-item key="index"> <a-icon type="home" />Home </a-menu-item>
          <a-menu-item key="publications">
            <a-icon type="profile" />Publications
          </a-menu-item>
          <a-menu-item key="team"> <a-icon type="team" />Team </a-menu-item>
          <a-menu-item key="research">
            <a-icon type="search" />Vacancies
          </a-menu-item>
          <a-menu-item key="activities">
            <a-icon type="schedule" />Activities
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
  </div>
</template>
  
<script>
export default {
  components: {},
  data() {
    return {
      current: ["index"],
    };
  },
  // created() {
  //   if (this.$route.path.substring(1)) {
  //     var arr = [];
  //     arr.push(this.$route.path.substring(1));
  //     this.current = arr;
  //   }
  // },
  watch: {
    $route(to, from) {
      if (this.$route.path.substring(1)) {
        var arr = [];
        arr.push(this.$route.path.substring(1));
        this.current = arr;
      }
    }
  },
  methods: {
    pushmenu(item) {
      this.$router.push({
        path: "/" + item.key,
      });
    },
    home() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
  
<style lang="less" scoped>
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
.narlog {
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 20px;
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
    padding-left: 0px;
  }
}
.logoName {
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #061d34;
  //cursor: pointer;
}
.menu {
  left: -100px;
  float: right;
}
.menu .ant-menu-item-selected,
.menu .ant-menu-item-active {
  border-top: none !important;
  border-bottom: 2px solid #1890ff !important;
}
.menu .ant-menu-item {
  border-top: none !important;
  border-bottom: 2px solid #fff;
  font-size: 16px;
}
.setting {
  margin-left: 20px;
  font-size: 18px;
  vertical-align: middle;
  cursor: pointer;
}
// .avatar {
//   margin-left: 20px;
//   vertical-align: middle;
//   cursor: pointer;
// }
</style>
  