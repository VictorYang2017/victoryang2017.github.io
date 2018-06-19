<template>
  <div class="admin">
    <div>
      <h3>Admin</h3>
    </div>
    <router-link v-bind:to="'/admin'">Graphic Design</router-link>
    <router-link v-bind:to="'/admin/profiles'">Profiles</router-link>
    <router-link v-bind:to="'/admin/projects'">Project</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'admin',
  data() {
    return {
     
    }
  }
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
  margin: -300px 80px 0 0;
  font-size: 1.2vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.gd-head h1 {
  position: absolute;
  margin-left: 37%;
  margin-top: 170px;
  font-family: 'Orbitron', sans-serif;
  font-size: 3vw;
  color: #fff;
}

.contact a {
  color: #FFF;
}

a:hover {
  text-decoration: none;
}

.owner-container {
   /*flex: 1 */
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

.user-image {
    width: 100%;
    height: 250px;
}
.user-name {
    font-family: 'Patua One', cursive;
    font-size: 1.2vw;
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

.user-occupation {
    font-family: 'Anonymous Pro', monospace;
    font-size: 0.7vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
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

.user-stats {
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
    /*text-align: center;*/
}

.user-behance {
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.user-website {
  cursor: pointer;
}

.profilePage {
  width: 100vw;
  height: auto;
  background-color: #252525;
}

/*.projects-container {
  width: 20vw;
  height: auto;
  border-left-style: solid;
  border-width: 1px;
  border-color: #000;
}*/

.projects-masonry {
 
}

.profiles-container {
  width: 1600px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.user-info {
  width: 350px;
  height: auto;
  border-left-style: solid;
  border-width: 1px;
  border-color: #000;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.project-covers {
  /*padding: 0 4px;
  flex-wrap: wrap;*/
  /*max-width: 100%;*/
}

.images-container {
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>

