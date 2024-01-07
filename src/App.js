import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './about/about';
import Contact from './contact/contact';
import Education from './education/education';
import SkillsCarousel from './skills/skills';
import Projects from './projects/projects';
import Blogs from './blog/blog';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={SkillsCarousel} />
        <Route path="/projects" component={Projects} />
        <Route path="/blogs" component={Blogs} />
      </Switch>
    </Router>
  );
};

export default App;
