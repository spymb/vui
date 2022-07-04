<demo>
有侧边栏的左右布局
</demo>

<template>
  <Layout>
    <Aside width="200px">Aside</Aside>
    <Content>Content</Content>
  </Layout>

  <Layout>
    <Aside width="200px">Aside</Aside>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
    </Layout>
  </Layout>

  <Layout>
    <Aside width="100px">Aside</Aside>
    <Layout>
      <Header height="70px">Header</Header>
      <Content>Content</Content>
      <Footer height="50px">Footer</Footer>
    </Layout>
  </Layout>
</template>

<script>
import {Layout, Header, Footer, Content, Aside} from '../../../lib/layout';

export default {
  components: {Layout, Header, Footer, Content, Aside}
};
</script>