<script>
  export default {
    fetch ({ params, redirect }) {
      // Redirect URLs like `/post/654884924769370112/developing-games-on-linux-an-interview-with`
      // from tumbler to the similar path
      return redirect(`/post/${params.uid}`)
    }
  }
</script>
