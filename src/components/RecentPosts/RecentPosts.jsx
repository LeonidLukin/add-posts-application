import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';

const RecentPosts = ({recentPosts}) => (
    <List
      itemLayout='horizontal'
      dataSource={recentPosts}
      renderItem={({avatar, description}) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={avatar} />}
            description={description}
          />
        </List.Item>
      )}
      />
);

RecentPosts.propTypes = {
  recentPosts: PropTypes.array.isRequired,
};

export default RecentPosts;