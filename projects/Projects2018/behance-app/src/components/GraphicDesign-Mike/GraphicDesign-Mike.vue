<template>
  <div class="gd-main">
    <div class="header">
      <router-link v-bind:to="Home"><div class="gd-logo">
        <img src="../../images/logoWhite.png">
      </div></router-link>
      <div class="gd-head">
        <h1>Graphic Design</h1>
        <h2>This is a showcase of our amazing designers.<br>Click on a profile to view their work!</h2>
      </div>
      <div class="gd-bg">
        <img src="../../images/mike/gd-example4.png">
      </div>
    </div>
  
  <div class="profiles-container">
    <div class="owner-container">
      <div class="project-cover" v-for="designer in designers" v-bind:value="designer.user">
        <router-link v-bind:to="'graphic-designer/' + designer.username">
        <div class="user-box">
        <img class="owner-image" v-bind:src="designer.images[276]">
        <h3 class="owner-name">{{ designer.first_name }} {{ designer.last_name }}</h3>
        <h3 class="owner-username">{{ designer.username }}</h3>
        <p class="owner-occupation">{{ designer.occupation }}</p>
        <p class="owner-stats"><i class="fas fa-thumbs-up"></i> Likes {{ designer.stats.appreciations }}</p>
        <p class="owner-stats"><i class="fas fa-star"></i> Followers {{ designer.stats.followers }}</p>
        <p class="owner-stats"><i class="fas fa-eye"></i> Views {{ designer.stats.views }}</p>
        </div>
        </router-link>
      </div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'graphicDesign',
  data() {
    return {
      Admin: "/admin",
      Home: "/",
      profilePage: "/profilePage",
      designers: [],
      designer: ''

    }
  },

  methods: {
    userProfile: function() {
     this.$http.jsonp('https://api.behance.net/v2/users/thinkingroominc?api_key=QBnDGTduo620bRGYwfvTC4ErNLmUjIMM')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

     this.$http.jsonp('https://api.behance.net/v2/users/akatre?api_key=QBnDGTduo620bRGYwfvTC4ErNLmUjIMM')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/alexandrepietra?api_key=QBnDGTduo620bRGYwfvTC4ErNLmUjIMM')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/craniodsgn?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/oberhaeuser?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/soderhavet?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

  },
  
},

created: function() {

    this.userProfile();
  },

}


</script>

<style scoped>

/*CUSTOM CSS FROM HERE*/

.gd-main {
  background-color: #252525;
  height: auto;
}

.header .gd-logo {
  position: absolute;
  left: 0;
}

.gd-logo img {
  width: 20vw;
  margin: 60px 0 0 30px;
}

.gd-title {
  font-family: 'Orbitron', sans-serif;
}

.gd-bg {
  width: 100vw;
  height: 400px;
}

.header {
  width: 100vw;
  height: 400px;
  background-size: 100%;
  margin-bottom: 50px;
}

.header .contact {
  position: absolute;
  right: 0;
  margin: -290px 80px 0 0;
  font-size: 1.2vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.gd-head h1 {
  position: absolute;
  margin-left: 37%;
  margin-top: 140px;
  font-family: 'Orbitron', sans-serif;
  font-size: 3vw;
  text-align: center;
  color: #fff;
}

.gd-head h2 {
  position: absolute;
  margin-left: 31%;
  margin-top: 250px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.5vw;
  text-align: center;
  color: #fff;
}

.contact a {
  color: #FFF;
}

a:hover {
  text-decoration: none;
}

.profiles-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.project-cover {
    border-radius: 6px 6px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    float: left;
    margin: 0px 20px 20px 60px;
    min-height: 400px;
    position: relative;
    text-align: left;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.user-box {
  border-radius: 6px 6px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    float: left;
    min-height: 400px;
    position: relative;
    text-align: left;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
}
.owner-image {
    width: 100%;
    height: 250px;
}
.owner-name {
    font-family: 'Patua One', cursive;
    font-size: 1.2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    text-align: center;
}

.owner-username {
    font-family: 'Patua One', cursive;
    font-size: 0.8vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    text-align: center;
}

.owner-occupation {
    font-family: 'Anonymous Pro', monospace;
    font-size: 0.7vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-left: 10px;
    text-align: center;
}

.owner-stats {
    font-family: 'Patua One', cursive;
    font-size: 0.8vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-left: 20px;
}
</style>
