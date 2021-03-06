import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import RestaurantPage from './pages/restaurants/restaurant.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import HotelPageKochi from './pages/hotelpagekochi/hotelpagekochi.components';
import HotelPageHyderabad from './pages/hotelpagehyderabad/hotelpagehyderabad.components';
import HotelPageBangalore from './pages/hotelpagebangalore/hotelpagebangalore.components';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/signin' component={SignInSignUpPage} />
      <Route exact path='/kochi' component={HotelPageKochi}/>
      <Route exact path='/hyderabad' component={HotelPageHyderabad}/>
      <Route exact path='/bangalore' component={HotelPageBangalore}/>
       <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);