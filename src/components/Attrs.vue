<template>
  <div class="attrs">
    <h2>Attributes</h2>

    <table class="attrs-table">
      <thead>
      <tr>
        <th class="attrs-title">参数</th>
        <th class="attrs-title">说明</th>
        <th class="attrs-title">类型</th>
        <th class="attrs-title">可选值</th>
        <th class="attrs-title">默认值</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="item in data">
        <td class="attrs-title td" v-for="(value,key) in item" :key="key">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Attrs',
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.attrs {
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 20px 0 20px;
  }

  .attrs-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .attrs-title {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
  }

  .td {
    color: #606266;
    font-size: 14px;
  }
}
</style>