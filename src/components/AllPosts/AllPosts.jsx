import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';

const AllPosts = ({posts}) => (
  <List
    itemLayout='horizontal'
    dataSource={posts}
    renderItem={({avatar, id, title, description}) => (
      <List.Item key={id}>
        <List.Item.Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          description={description}
        />
      </List.Item>
    )}
  />
);

AllPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default AllPosts;