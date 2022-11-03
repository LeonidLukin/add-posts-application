import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Col, Row, Layout } from 'antd';
import { nanoid } from 'nanoid';
import AllPosts from 'components/AllPosts/AllPosts';
import RecentPosts from 'components/RecentPosts/RecentPosts';
import AddPostForm from "../AddPostForm/AddPostForm";
import css from './App.module.css';

const { Content } = Layout;

// mock data
// const mockData = [
//   {
//     id: 1,
//     title: 'Имя пользователя 1',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
//   },
//   {
//     id: 2,
//     title: 'Имя пользователя 2',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
//   },{
//     id: 3,
//     title: 'Имя пользователя 3',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',

//   },{
//     id: 4,
//     title: 'Имя пользователя 4',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',

//   },{
//     id: 5,
//     title: 'Имя пользователя 5',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',

//   },{
//     id: 6,
//     title: 'Имя пользователя 6',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',

//   },
// ];

const App = () => {
  const [posts, setPosts] = useLocalStorageState('posts', {defaultValue: []});
  const [postsAmount, setPostsAmount] = useState(0);
  const recentPosts = posts.slice(0, 5);

  useEffect(() => {
    setPostsAmount(posts.length);
  }, [posts]);

  const addPost = (post) => {
    const newPost = {
      id: nanoid(),
      ...post,
    };
    setPosts([newPost , ...posts]);
  };

  return (
    <Layout className={css.container}>
      <Content>
        <Row>
          <Col span={16}>
            <AddPostForm 
              postsAmount={postsAmount}
              addPost={addPost}
            />
            <AllPosts posts={posts} />
          </Col>
          <Col span={8}>
            <RecentPosts recentPosts={recentPosts} />
          </Col>
      </Row>
      </Content>
    </Layout>
  )
};

export default App;