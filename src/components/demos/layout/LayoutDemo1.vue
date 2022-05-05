<demo>
无侧边栏的上下布局
</demo>

<template>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
  </Layout>

  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</template>
<script>
import {Layout, Header, Footer, Content, Aside} from '../../../lib/layout';
export default {
  components: {Layout, Header, Footer, Content, Aside}
};
</script>