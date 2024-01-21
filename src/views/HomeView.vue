<template>
  <div class="textlayout">
    <a-carousel autoplay arrows>
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div>
        <img 
          src="../assets/home/home1.jpg"
          alt="alt text"
          height="400px"
          width="100%"
          >
      </div>
      <div>        
        <img 
          src="../assets/home/home2.jpg"
          alt="alt text"
          height="400px"
          width="100%"
          >
      </div>
      <div>
        <img 
          src="../assets/home/home3.png"
          alt="alt text"
          height="400px"
          width="100%"
          >
      </div>
      <div>
        <img 
          src="../assets/home/home4.jpg"
          alt="alt text"
          height="400px"
          width="100%"
          >
      </div>
    </a-carousel>


    <p>
      <a>TVDS Group</a> aims at
      studying time evolution in data science. Our research interests include
      Statistical Signal Processing, Bayesian Learning, Computational Biology
      and Geosciences, Remote Sensing, etc. We are looking for the people with
      the same interest!<br />
    </p>
    <h2>Opportunities</h2>
    <ul>
      <li>
        <p>
          Post-Doctoral Positions in Statistical Learning for Data Science<br />
          Post-Doctoral Position (2 Years) in the Time-varying Data Science
          Group of Prof. Ercan E Kuruoglu, Institute of Information and Data
          Science and Tsinghua-Berkeley Shenzhen Institute of Tsinghua
          University Shenzhen International Graduate School, Shenzhen, China.
          This will start from 1 September 2023 and applications are considered
          until the positions are filled. <br />
        </p>
      </li>
      <li>
        <p>
          Postdoc 1: Topological Data Analysis for Statistical Learning<br />
          Keywords: Topological data analysis, graph machine learning,
          time-varying graph analysis, rare event modelling<br />
          The objective is to develop ground-breaking topological signal
          processing and statistical learning methods for high-dimensional data.
          The focus lies on conducting fundamental research to derive scalable
          methods with robustness and statistical guarantees that form a bridge
          between existing topological data analysis methods and statistical
          learning methods with an eye on applications with time-varying data.
          Various applications including climate data, financial data, genomic
          data will be considered though the main emphasis will be in
          methodology development.<br />
        </p>
      </li>
      <li>
        <p>
          Postdoc 2: Stochastic deep learning <br />
          Keywords: Bayesian machine learning, non-stationary data analysis<br />
          This project aims to develop a deep learning methodology which is
          dynamic and statistical at the same time, that is non-deterministic
          and non-stationary. We will explore various methods from signal
          processing extending them to nonlinear systems and hence applying to
          neural networks.<br />
          <br />

          Applicants should have, e.g., a PhD in electrical or electronics or
          information engineering with a specialization in signal processing or
          statistical learning, or a PhD in mathematics (topology, statistics,
          functional analysis). You should have a track record in your research
          field, as evidenced by publications in top quality journals. To apply
          for this position, please send your CV, a one-page personal statement,
          full contact details of two referees, transcripts and publications to
          kuruoglu@sz.tsinghua.edu.cn
        </p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textlayout {
  margin: 70px 300px 0 300px;
  text-align: left;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
