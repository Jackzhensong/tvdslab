<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-list">
        <div class="Copyright"> 
          <ul class="helpLink">
            <li>About us
              <span class="space"></span>
            </li>
            <li>Contact us</li>
          </ul>
          <p>Secretary: Shengnan Li, lishengnan@sz.tsinghua.edu.cn</p>
          <p>Address: Information Building, Room 1106, Tsinghua Shenzhen International Graduate School, Shenzhen, Guangdong, China (518055)</p>
          <p>Copyright © TBSI All Rights Reserved 粤ICP备18046147号-1</p>
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
    width: 100%;
    margin: 0 300px 0 300px;
    padding: 0 0px;

    .footer-list {
      padding: 0px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 0px;

      .footer-item {
        width: 16.666667%;
        float: left;

        // h4 {
        //   font-size: 14px;
        // }

        // .footer-item-con {
        //   li {
        //     line-height: 18px;
        //   }
        // }
      }
    }
    .Copyright {
      padding: 10px 0 10px 0;

      .helpLink {
        padding: 0 0 0 0;
        text-align: left;

        li {
          display: inline;
          font-size: 16px;
          font-weight: bold;

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
        margin: 10px 0px;
        text-align: left;
      }
    }
  }
}
</style>
