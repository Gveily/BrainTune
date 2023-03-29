import { FC } from "react";
import { CommonContainer } from "../App.styled";

const Home: FC = () => {
  const HomeScreen = () => {
    return <CommonContainer>
      <h1>
        Keep your mind young and sharp through music
      </h1>
      <button>Start training</button>
      <h5>no music instrument or training needed</h5>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CommonContainer>
  }

  return <>
    <HomeScreen/>
  </>
}

export default Home;