import "./App.css";

import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import ToTop from './Components/ToTop/ToTop'
import TbModal from './Components/Modal/Modal'
import Home from "./Views/Home/Home";
import Loading from "./Components/Loading/Loading";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Views/NotFound/NotFound";

import JsonData from "./data/en.json";
import { ModalFormProvider } from "./Context/ModalContext";
import { useUserLogin } from "./Context/UserLogin";
import SearchPage from "./Views/SearchPage/SearchPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [texts, setTexts] = useState({});

  useEffect(() => {
    setTexts(JsonData);
    setIsLoading(false);
  }, []);

  const { state } = useUserLogin();

  return (
    <div>
      {isLoading === true ? (
        <Loading />
      ) : (
        <Router>
          <>
            <ModalFormProvider>
              <Header texts={texts.Header}/>

              <Switch>
                <Route exact path="/">
                  <Home texts={texts.Home} />
                </Route>

                <Route path="/search">
                  <SearchPage />
                </Route>

                <Route path="*">
                  <NotMatch texts={texts.NotFound} />
                </Route>
              </Switch>

              {!state.logged && (
                <>
                  {" "}
                  <TbModal texts={texts} />
                </>
              )}

              <ToTop />

              <Footer />
            </ModalFormProvider>
          </>
        </Router>
      )}
    </div>
  );
}

const NotMatch = (props) => {
  let location = useLocation();

  return <NotFound texts={props.texts} page={location.pathname} />;
};

export default App;
