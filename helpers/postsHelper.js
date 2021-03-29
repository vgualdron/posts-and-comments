const postHelper = {
  parseData (posts) {
    let parsePosts = [];
    if (posts) {
      const keysPost = Object.keys(posts);
      if (keysPost) {
        keysPost.forEach((post) => {
          const { date, description, user, comments, reactions } = {
            ...posts[post]
          };

          const commentsArray = [];
          const keysComments = Object.keys(comments);
          if (keysComments) {
            keysComments.forEach((comment) => {
              if (comment !== '0') {
                commentsArray.push(
                  {
                    id: comment,
                    ...comments[comment]
                  }
                );
              }
            });
          }

          const reactionsArray = [];
          const keysReactions = Object.keys(reactions);
          if (keysReactions) {
            keysReactions.forEach((reaction) => {
              if (reaction !== '0') {
                reactionsArray.push(
                  {
                    id: reaction,
                    ...reactions[reaction]
                  }
                );
              }
            });
          }

          parsePosts.push(
            {
              id: post,
              comments: commentsArray,
              date,
              description,
              user,
              reactions: reactionsArray
            }
          );
        });
        const arrayTemp = parsePosts.sort((a, b) => b.date - a.date);
        parsePosts = [...arrayTemp];
      }
    }
    return parsePosts;
  }
};

export default postHelper;
