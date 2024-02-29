import PostCard from './PostCard'
import styles from './PostGrid.module.css'

const PostGrid = () => {
  const postss = [
    { title: 'Post 1', body: 'Body of post 1' },
    { title: 'Post 3', body: 'Body of post 2' },
    { title: 'Post 4', body: 'Body of post 3 addasd asdas asdasdas asdas das das dasd' },
    { title: 'Post 5', body: 'Body of post 3' },
    { title: 'Post 6', body: 'Body of post 3' },
  ];
  const posts = postss.reverse();

  const isEven = posts.length % 2 === 0;

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionName}>POSTS</h2>
      {isEven ? (
        <div className={styles.twoColumn}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      ) : (
        <>
          <div className={styles.fullWidth}>
            {/* Render the first post in full width */}
            <PostCard post={posts[0]} />
          </div>
          <div className={styles.twoColumn}>
            {/* Render the rest of the posts in two columns */}
            {posts.slice(1).map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostGrid;
