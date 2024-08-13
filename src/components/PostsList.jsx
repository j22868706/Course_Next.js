import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css'

function PostList () {
    const [modalIsVisable, setModalIsVisable] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler (){
        setModalIsVisable(false);
    }

    function bodyChangeHandler (event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler (event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
        {modalIsVisable ? (
            <Modal onClose={hideModalHandler}>
                <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler}/>
            </Modal> 
        ) : false}

        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Manu" body="Check out the course!" />
        </ul>
        </>

    );
}

export default PostList