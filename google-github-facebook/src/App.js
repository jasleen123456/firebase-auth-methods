import socialMediaAuth from "./service/auth";
import "./App.css";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethods";

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
      <button onClick={() => handleOnClick(facebookProvider)}>FaceBook</button>
      <button onClick={() => handleOnClick(githubProvider)}>Github</button>
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
    </div>
  );
}

export default App;
