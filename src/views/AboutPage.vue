<template>
  <div class="static-content px-4 mx-auto">
    <div class="text-center mb-3">
      <h1>About Me</h1>
      <img class="img-fluid rounded" src="/static/img/avatar.jpg" alt="Vladimir Barkasov"/>
    </div>
    <p>
      <strong>Hello!</strong><br/>
      I’m a professional Front-End developer<br/>
      You can see a source code of my projects on <a href="https://github.com/vbarkasov" target="_blank">Github</a>
    </p>
    <h2><strong>My services:</strong></h2>
    <p>
      – Development front-end apps,<br>
      – HTML layout (Figma to web-components),<br>
      – Building browser extensions,<br>
      – Creating personal websites and ecommerce,<br>
      – Creating jQuery plugins,<br>
      – Web design (creating logos, websites, cutaways).
    </p>
    <h2><strong>My base skills:</strong></h2>
    <ul>
      <li>JavaScript</li>
      <li>JavaScript-frameworks (Vue, React, Angular)</li>
      <li>UI Frameworks: Quasar, Vuetify, Element UI, Bootstrap</li>
      <li>HTML/CSS + preprocessors</li>
      <li>PHP (+ Yii2, Laravel)</li>
      <li>Python (+ Django)</li>
    </ul>
    <h2><strong>My work experience:</strong></h2>
    <ul>
      <li><strong>2016 – now – Freelance</strong> –&nbsp;Front-end Developer
        <ul>
          <li>Creating JS-applications</li>
          <li>Convert Figma design to component layout</li>
          <li>Development Browser Extensions</li>
          <li>Creating eCommerce modules</li>
          <li>Modifying existing sites</li>
          <li>Creating personal sites</li>
        </ul>
      </li>
      <li><strong>2014 – 2015 – SIPLABS Communications</strong> (10+ employees) – Cloud telephony solutions for service
        providers –&nbsp;Javascript Programmer
        <ul>
          <li>Creating WebRTC application</li>
          <li>Developing SIP-applications</li>
        </ul>
      </li>
      <li><strong>2012-2014 – Softomate Company</strong> (Besttoolbars, 15+ employees) – Cross Browser Software – &nbsp;Javascript
        Programmer
        <ul>
          <li>Developing browser extensions</li>
          <li>Creating API servers for browser extensions</li>
        </ul>
      </li>
      <li><strong>2010 – 2012 – Center of Financial Technologies</strong> (CFT, 1500+ employees) –&nbsp;Engineer-Programmer
        <ul>
          <li>HTML Layout</li>
          <li>Creating Front-End Applications</li>
          <li>Modifying existing scripts</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { useMeta } from '@/composables/meta'

export default {
  title: 'About me',
  setup () {
    const {
      setTitle
    } = useMeta()

    setTitle('About me')
  }
}
</script>

<style scoped>
ul {
  padding-bottom: 20px;
}

ul li ul {
  margin-top: 5px;
}

.static-content {
  max-width: 406px;
}
</style>
