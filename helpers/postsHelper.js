const postHelper = {
  parseData (posts) {
    let parsePosts = [];
    if (posts) {
      const keysPost = Object.keys(posts);
      if (keysPost) {
        keysPost.forEach((post) => {
          const { date, description, user, comments, likes } = {
            ...posts[post]
          };

          const commentsArray = [];
          const keysComments = Object.keys(comments);
          if (keysComments) {
            keysComments.forEach((comment) => {
              commentsArray.push(
                {
                  id: comment,
                  ...comments[comment]
                }
              );
            });
          }

          const likesArray = [];
          const keysLikes = Object.keys(likes);
          if (keysLikes) {
            keysLikes.forEach((like) => {
              likesArray.push(
                {
                  id: like,
                  ...likes[like]
                }
              );
            });
          }

          parsePosts.push(
            {
              id: post,
              comments: commentsArray,
              date,
              description,
              user
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
