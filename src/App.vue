<template>
  <div id="app">
    <router-view/>
    <!-- <footer class="footer">
      <div class="container">
        <span class="text-muted">
          Klik 
          <a 
            href="http://otojuara-prototype.com/aptest/public/step-by-step" 
            target="_blank">
            di sini 
          </a>
          untuk melihat langkah demi langkah pembuatan association rule.
        </span>
      </div>
    </footer> -->
  </div>
</template>


<style>
  .card {
    margin-top: 30px;
  }
  .scrollbar-one {
    position: relative;
    height: 500px;
  }
  .scrollbar-two {
    position: relative;
    height: 431px;
  }
  .bottom {
    bottom: 0px; 
  }
  .description {
    font-size: 10px;
    color: rgb(138, 138, 138);
  }
  
  /* Sticky footer styles
  -------------------------------------------------- */
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 60px; /* Margin bottom by footer height */
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
  }

</style>