<demo>
常见页面布局
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

  <Layout>
    <Aside width="200px">Aside</Aside>
    <Content>Content</Content>
  </Layout>

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
import {Layout, Header, Footer, Content, Aside} from '../../lib/Layout';
export default {
  components: {Layout, Header, Footer, Content, Aside}
};
</script>