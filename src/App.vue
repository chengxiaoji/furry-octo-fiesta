<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less" >

*{
  margin: 0 ;
  padding: 0 ;
}
#app{
  width: 100%;
  height: auto;
}
.svg-icon {
display: inline-block;
width: 16px;
height: 16px;
color: inherit;
vertical-align: middle;
fill: none;
stroke: currentColor;
}
 
.svg-fill {
fill: currentColor;
stroke: none;
}
 
.svg-up {
/* 默认 */
transform: rotate(0deg);
}
 
.svg-right {
transform: rotate(90deg);
}
 
.svg-down {
transform: rotate(180deg);
}
 
.svg-left {
transform: rotate(-90deg);
}

</style>
