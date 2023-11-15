<template>
  <div id="app">
    <el-container>
      <el-main class="main">
        <pane-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import PaneView from "@/pages/PaneView";
export default {
  name: "app",
  components: {
    PaneView
  },
  methods: {}
};

// // 如果开发者工具打开，则关闭网页
// import { addListener, launch } from 'devtools-detector';
// addListener(
//   isOpen =>
//     {if (isOpen) {
//         window.close(); 
//       }
//     }
// );
// launch();


</script>

<style lang="css" scoped>
.main {
  
}
</style>
