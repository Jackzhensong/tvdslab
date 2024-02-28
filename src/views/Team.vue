<template>
  <div class="textlayout">
    <div style="margin-top: 100px; margin-bottom: 10px; margin-left: 30px;">
      <a-row >
        <a-col :span="4">
          <img
              src="../assets/photo/bio.png"
              alt="alt text"
              width="100px"
              height="110px"
            />
        </a-col>
        <a-col :span="20">
          <h2>Ercan Engin Kuruoglu</h2>
          Professor, Ph.D. Supervisor<br />
          <a-icon type="mail" />
          E-mail: kuruoglu@sz.tsinghua.edu.cn<br />
          Time-Varying Data Science (TVDS) Group<br />
          <a  
            href="https://www.tbsi.edu.cn/main.htm"
            >Tsinghua-Berkeley Shenzhen Institute</a
          ><br />
          <a href="https://www.tbsi.edu.cn/ercankuruoglu/main.htm" >Biography</a>
        </a-col>
      </a-row>
      </div>
      <a-divider />
      <h2>Postdoctoral Researcher</h2>
      <a-row>
        <a-col :span="6">
          <img
                alt="example"
                src="../assets/photo/Hao Pengcheng.jpg"
                width="120px"
                height="140px"
              />
              <a-card-meta title="Hao Pengcheng">
                <template slot="description">
                  Year: 2023  <br/>
                </template>
              </a-card-meta>
        </a-col>
      </a-row>
      <a-divider />

      <h2>Ph.D. Students</h2>
      <!-- <div style="margin-top: 0px; margin-bottom: 20px;">  -->
        <a-row type="flex" :gutter="[80, 20]">
          <a-col :span="6">
              <img
                alt="example"
                src="../assets/photo/yanyi.jpg"
                width="120px"
                height="130px"
              />
              <a-card-meta title="Yan Yi">
                <template slot="description">
                  Year: 2020  <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
              <img
                alt="example"
                src="../assets/photo/Dayu Qin.jpg"
                width="120px"
                height="130px"
              />
              <a-card-meta title="Qin Dayu">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
              <img
                alt="example"
                src="../assets/photo/Junping.jpg"
                width="120px"
                height="130px"
              />
              <a-card-meta title="Hong Junping">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
              <img
                alt="example"
                src="../assets/photo/Jiang Yutong.jpg"
                width="120px"
                height="130px"
              />
              <a-card-meta title="Jiang Yutong">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
        </a-row>
        <a-divider />

        <h2>Master Students</h2>
        <a-row type="flex" :gutter="[80, 20]">
          <a-col :span="6">
            <img
              src="../assets/photo/Mengen Luo.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Luo Mengen">
                <template slot="description">
                  Year: 2021 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Fengfan Zhao.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Zhao Fengfan">
                <template slot="description">
                  Year: 2021 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/pengchangran.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Peng Changran">
                <template slot="description">
                  Year: 2021 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/PeterMarsh.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Peter Marsh">
                <template slot="description">
                  Year: 2021 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Yuan Xueqiong.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Yuan Xueqiong">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Yuan Chaohao.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Yuan Chaohao">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/dongdong nian.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Nian Dongdong">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Li Jipeng.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Li Jipeng">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Suchanun Piriyasatit.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Suchanun Piriyasatit">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Suchanuch Piriyasatit.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Suchanuch Piriyasatit">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/menghaozhu.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Zhu Menghao">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Chen Yuzhe.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Chen Yuzhe">
                <template slot="description">
                  Year: 2022 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Song Zhenjie.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Song Zhenjie">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Xu Chi.jpeg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Xu Chi">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Tang Chengyu.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Tang Chengyu">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Zhang Yihan.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Zhang Yihan">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
          <a-col :span="6">
            <img
              src="../assets/photo/Gao Yeqi.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
            <a-card-meta title="Gao Yeqi">
                <template slot="description">
                  Year: 2023 <br/>
                </template>
              </a-card-meta>
          </a-col>
        </a-row>
      <!-- </div> -->
      <a-divider />

      <h2>Alumni</h2>
      <a-row type="flex" :gutter="[30, 20]" align="middle">
        <a-col :span="4">
          <img
              src="../assets/photo/LIMutong.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Li Mutong</H3>
          Master, 2023, supervised by Professor Ercan Engin Kuruoglu<br/>
          Thesis: Statistical Modelling for SAR Images Based on Levy 𝛼-Stable Distribution <br/>
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/Radwa Adel.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Radwa Adel</H3>
          Master, 2023, supervised by Professor Ercan Engin Kuruoglu<br/>
          Thesis:  <br/>
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/JunLin Guo.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Guo Junlin</H3>
          Master, 2023, supervised by Professor Ercan Engin Kuruoglu<br/>
          Thesis: Adaptive Social Learning with Edge-Support on Multi-Cluster Graph of Noisy Signals<br/>
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/Zhendong Shi.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Shi Zhendong</H3>
          Master, 2023, supervised by Professor Ercan Engin Kuruoglu<br/>
          Thesis: Thompson Sampling on Asymmetric Alpha–Stable Bandits for Contextual data <br/>
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/MaverickLim.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Maverick Lim</H3>
          Master, 2023, co-advised with Prof. Wai Kin (Victor) Chan <br/>
          Thesis: Modeling SARS-CoV-2 Gene Sequence Mutations with
                  Stochastic and Data-driven Approaches <br/>
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/PoorichC.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Poorich Chatchaipaiboon</H3>
          Master, 2023, co-advised with Prof. Wai Kin (Victor) Chan<br />
          Thesis: A Metaheuristic Approach to the Multi-period Reliable
                  Location Problem in Time Varying Risk<br />
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/JackKuo.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Jack Guo</H3>
          Master, 2022, co-advised with Prof. Wai Kin (Victor) Chan<br />
          Thesis: Neural Network Optimization<br />
          Current affiliation: The founder of Shenzhen Jingwei Intelligent
              Technology Co., Ltd.
        </a-col>
        <a-col :span="4">
          <img
              src="../assets/photo/keren.jpg"
              alt="alt text"
              width="120px"
              height="130px"
            />
        </a-col>
        <a-col :span="20">
          <H3>Keren Artiaga</H3>
          Master, 2022, co-advised with Prof. Wai Kin (Victor) Chan<br />
          Thesis: Cross-Sign Language Transfer Learning using Domain
                  Adaptation with Multi-scale Temporal Alignment<br />
          Current affiliation: Ph.D. study at Ghent University, Belguim<br />
        </a-col>
      </a-row>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.textlayout {
  margin: 70px 300px 0 300px;
  text-align: left;
}
</style>
  