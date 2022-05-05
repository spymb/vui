<demo>
顶部-侧边-通栏布局
</demo>

<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside width="200px">Aside</Aside>
      <Content>Content</Content>
    </Layout>
  </Layout>

  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside width="200px">Aside</Aside>
      <Layout>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>
<script>
import {Layout, Header, Footer, Content, Aside} from '../../../lib/layout';
export default {
  components: {Layout, Header, Footer, Content, Aside}
};
</script>