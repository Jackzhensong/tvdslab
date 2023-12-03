<template>
  <div class="header">
    <a-row :gutter="24" class="clos">
      <a-col :span="6" style="left: 0px">
        <span @click="home">{{ "Time-Varying Data Science Labratory" }}</span>
      </a-col>
      <a-col :span="12" class="menu">
        <a-menu
          v-model="current"
          mode="horizontal"
          class="lineHeight"
          @click="pushmenu"
        >
          <a-menu-item key="index"> <a-icon type="home" />Home </a-menu-item>
          <a-menu-item key="research">
            <a-icon type="search" />Research
          </a-menu-item>
          <a-menu-item key="team"> <a-icon type="team" />Team </a-menu-item>
          <a-menu-item key="publications">
            <a-icon type="profile" />Publications
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
    padding-left: 0px;
  }
}
.menu {
  text-align: center;
}
.menu .ant-menu-item-selected,
.menu .ant-menu-item-active {
  border-top: none !important;
  border-bottom: 2px solid #1890ff !important;
}
.menu .ant-menu-item {
  border-top: none !important;
  border-bottom: 2px solid #fff;
}

.setting {
  margin-left: 20px;
  font-size: 18px;
  vertical-align: middle;
  cursor: pointer;
}

.avatar {
  margin-left: 20px;
  vertical-align: middle;
  cursor: pointer;
}
</style>
  