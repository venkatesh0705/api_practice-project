export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
      console.log("mixin method executed");
    },
  },
};
