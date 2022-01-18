<template>
  <div class="hello">
    <div>
      <table border="1">
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        <tr v-for="data of posts" :key="data.uid">
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.body }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",

  props: {
    msg: String,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const Api_url = `https://jsonplaceholder.typicode.com/posts`;

    // async axios with try catch
    try {
      let response = await axios.get(Api_url);

      this.posts = await response.data;
      console.log(response);
    } catch {
      (error) => {
        console.log(error);
      };
    }

    //fetch method
    // fetch(Api_url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.posts = data;
    //     console.log(data);
    //   });

    // axios async without try catch
    // const response = await axios.get(Api_url);

    // this.posts = response.data;

    // axios.get(Api_url).then((response) => {
    //   this.posts = response.data;
    //   console.log(this.posts);
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
