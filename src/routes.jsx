import { Switch, Route } from 'react-router-dom';

import Okr  from './pages/Okr'
import Initiatives  from './pages/Initiatives'
import Home from './pages/Home'

const Routes = ()=>{
  return (
    <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/page/Okr" exact component={Okr} />
      <Route path="/page/Initiatives" component={Initiatives} />
    </Switch>
  );
};

export default Routes;