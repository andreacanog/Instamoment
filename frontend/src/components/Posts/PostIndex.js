import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostIndexItem from './PostIndexItem';
import { fetchPosts, getPosts } from '../../store/post';
import { Redirect } from 'react-router-dom';
import { getUsers } from '../../store/user';


const PostIndex = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!posts) return null;

  return user ? (

    <div className="post-index">

      {posts.map(post => (
        <PostIndexItem key={post.id} post={post} user={user} />
      )).reverse()}
      
    </div>

  ) : (<Redirect to="/login" ></Redirect>);
}

export default PostIndex;