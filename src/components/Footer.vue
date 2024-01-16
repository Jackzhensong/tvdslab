<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-list">

        <div class="Copyright"> 
          <ul class="helpLink">
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>联系我们</li>
          </ul>
          <p>Email: tbsi@tbsi.tsinghua.edu.cn</p>
          <p>地址：中国广东省深圳市南山区深圳大学城清华大学国际研究生院信息大楼11楼</p>
          <p>版权所有 © 清华 - 伯克利深圳学院 粤ICP备18046147号-1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default{
  name: 'Footer',
}
</script>


<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footer-list {
      padding: 0px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footer-item {
        width: 16.666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footer-item-con {
          li {
            line-height: 18px;
          }
        }
      }
    }
    .Copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
              border-left: 1px solid #666;
              width: 1px;
              height: 13px;
              background: #666;
              margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
