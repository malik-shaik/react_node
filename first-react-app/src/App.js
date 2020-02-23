import React from "react";
import "./App.css";
import ProfilePage from "./components/profile_page/ProfilePage";
import BusPage from "./components/BusPage/BusPage";
import ButtonWithProps from "./components/button/ButtonWithProps";
import Anotherpage from "./components/anotherpage";
import ButtonWithChildren from "./components/button/ButtonWithChildren";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: undefined
    };
  }
  onNavButtonClicked = navpage => {
    if (navpage === "bus page") {
      this.setState({ pageToRender: <BusPage /> });
    } else if (navpage === "profile page") {
      this.setState({ pageToRender: <ProfilePage /> });
    } else {
      this.setState({ pageToRender: <Anotherpage /> });
    }
    // switch (navpage) {
    //   case "bus page":
    //     console.log("bus page");
    //     this.setState({ pageToRender: <BusPage /> });
    //     break;
    //   case "profile page":
    //     this.setState({ pageToRender: <ProfilePage /> });
    //     break;
    //   case "another page":
    //     this.setState({ pageToRender: <Anotherpage /> });
    //   default:
    //     break;
    // }
  };

  // displayContent = navpage => {
  //   switch (navpage) {
  //     case "bus page":
  //       return <BusPage />;

  //     case "profile page":
  //       return <ProfilePage />;

  //     case "another page":
  //       return <Anotherpage />;

  //     default:
  //       break;
  //   }
  // };

  handleButtonClicked = text => {
    console.log(text);
  };

  render() {
    const { pageToRender } = this.state;
    return (
      <div className="App">
        <ButtonWithProps
          buttonText={"Another page"}
          customStyle={{ backgroundColor: "blue" }}
          buttonClicked={() => this.onNavButtonClicked("anothe page")}
        />
        <ButtonWithProps
          buttonText={"Bus page"}
          customStyle={{ backgroundColor: "green" }}
          buttonClicked={() => this.onNavButtonClicked("bus page")}
        />
        <ButtonWithProps
          buttonText={"Profile page"}
          customStyle={{ backgroundColor: "orange" }}
          buttonClicked={() => this.onNavButtonClicked("profile page")}
        />

        <ButtonWithChildren> custonm button text </ButtonWithChildren>

        {pageToRender}
      </div>
    );
  }
}

export default App;
