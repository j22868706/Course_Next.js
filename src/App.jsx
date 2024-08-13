import PostList from "./components/PostsList";
import MainHeader from './components/MainHeader'
import { useState } from "react";

function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);

  function showModalHandler (){
    setModalIsVisable(true);
}
  function hideModalHandler (){
    setModalIsVisable(false);
}

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisable} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>

  );
}

export default App;
