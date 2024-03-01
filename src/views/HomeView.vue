<template>
  <div class="textlayout">
    <div style="margin-top: 85px;">
    <h2>Lab Introduction</h2>
    <span style="font-size: 16px; margin: 5px 0; display: block;">
      <a>TVDS Group</a> aims at studying time evolution in data science. 
      Our research interests include Statistical Signal Processing, 
      Bayesian Learning, Computational Biology and Geosciences, Remote Sensing, etc. 
      We are looking for the people with the same interest! Our research themes 
      including but not limited to:
    </span>
      <ul>
        <span style="font-size: 16px; margin: 5px 0; display: block;">
        <li>
          Statistical Signal and Image Processing
        </li>
        <li>
          Bayesian Learning and Statistical Machine Learning
        </li>
        <li>
          Data Science for Computational Biology and Geosciences
        </li>
        <li>
          Remote Sensing
        </li>
        <li>
          System and Noise Modelling
        </li>
        <li>
          Graphical Models
        </li>
        <li>
          Information and Coding Theory
        </li>
      </span>
      </ul>
    </div>

    <h2>Ongoing Projects</h2>
    <div> 
      <a-row :gutter="[16,48]" type="flex" align="bottom">
        <a-col :span="12">
          <span class="themeTitle">Stochastic Graphs</span>
          Recently emerged Graph signal processing (GSP) techniques provide efficient solutions to deal with irregularly structured data. 
          GSP techniques have already been applied in modeling brain functional connectivity, 
          spatial temperature data, transportation flows, monitoring 5G signal strength, 
          sensor networks in smart cities, structuring geometric data, and modeling transportation flows. 
          The spectral analysis of GSP is the backbone of the Graph Convolutional Neural network, one of the most well-known graph deep learning architectures.
        </a-col>
        <a-col :span="12">
          <img 
            src="../assets/projects/statistic_graph.png"
            alt="alt text"
            height="100%"
            width="100%"
          > 
        </a-col>
      </a-row>
      <a-divider />
      <a-row :gutter="[16,48]" type="flex" align="bottom">
        <a-col :span="12">
          <span class="themeTitle">Remote Sensing</span>
          Synthetic aperture radar (SAR) is a powerful radar technology commonly adopted for airborne and spaceborne geo-sensing and mapping applications due to its significant advantages in high azimuthal resolution and weather-independent operations. 
          Upon acquisition of SAR images, a histogram representing the distribution of the image pixel values is drafted, 
          and a proper model is required to obtain precise knowledge of the statistical properties of the image data to characterize the surface on which the image is produced.
        </a-col>
        <a-col :span="12">
          <img 
            src="../assets/projects/remote_sensing1.png"
            alt="alt text"
            height="100%"
            width="100%"
          > 
        </a-col>
      </a-row>
      <a-divider />
      <a-row :gutter="[16,48]" type="flex" align="bottom">
        <a-col :span="12">
          <span class="themeTitle">Bayesian Learning</span>
          Recently, Graph Convolutional Networks (GCNs) have been used to address node and graph classification and matrix completion. Brain disease prediction, 
          which requires graph representation, also achieved effective results using the GCN. However, 
          the current implementations have limited capability to incorporate uncertainty in the graph structure. 
          Bayesian-GCN views the observed graph as a realization from a parametric family of random graphs. 
          It targets inference of the joint posterior of the random graph parameters and the node (or graph) labels using Bayes’ theorem.
        </a-col>
        <a-col :span="12">
          <img 
            src="../assets/projects/gcn.png"
            alt="alt text"
            height="100%"
            width="100%"
          > 
        </a-col>
      </a-row>
      <a-divider />
      <a-row :gutter="[16,48]" type="flex" align="top">
        <a-col :span="12">
          <span class="themeTitle">Neural Network Achitectures</span>
          Neural Networks are everywhere nowadays, being able to fit any arbitrary function in order to discern some truth about the underlying data. When designing a Neural Network, 
          the choice of architecture is of utmost importance, since a network too large would result in a network unable to generalize to other data, 
          and a network too small would be unable to accurately reflect the underlying data distribution.
        </a-col>
        <a-col :span="12">
          <img 
            src="../assets/projects/neural1.png"
            alt="alt text"
            height="100%"
            width="100%"
          > 
        </a-col>
      </a-row>
    </div>

    <h2>Completed Projects</h2>
      <ul>
        <span style="font-size: 14px; margin: 5px 0; display: block;">
          <li>
              SARS-CoV-2 Gene Sequence Mutations Modeling:
            <a href="https://github.com/mavericklim91/Modeling-SARS-CoV-2-Nucleotide-Mutations"
              >Stochastic Approach, </a>
            <a href="https://github.com/mavericklim91/Modeling-SARS-CoV-2-viral-escape-mutations"
              >Data-driven Approach</a>
          </li>
          <li>
          <a
            href="https://github.com/poorichc/A-Metaheuristic-Approach-to-the-Multi-period-Reliable-Location-Problem-in-Time-Varying-Risk"
            >Metaheuristic Approach for Multi-period Reliable Location Problem in Time-Varying Risk</a
          >
          </li>
          <li>
            <a href="https://ieeexplore.ieee.org/abstract/document/10214355">Data Science for Geosciences</a>
          </li>
        </span>
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
  opacity: 1;
}

.themeTitle {
  font-size: larger;
  font-weight: 700;
  display: block;
  margin: 10px 0 10px 0;
}

h2 {
  text-align: center;
  margin: 20px 0 10px 0;
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: #061d34;
}

li {
  margin: 10px 0 0 0;
}

/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
