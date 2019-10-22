var app = new Vue({
    el: '#main',
    data: {
      roles: []
    },
    mounted() {
        var self = this
        axios.get('https://pxpwk6ap0j.execute-api.ap-south-1.amazonaws.com/latest/roles').then((res) => {
            self.roles = res.data
        })
    }
  })