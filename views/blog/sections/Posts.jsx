import styles from "./Posts.module.scss";

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const posts = [
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-1.jpg",
  },
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-2.avif",
  },
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-1.jpg",
  },
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-2.avif",
  },
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-1.jpg",
  },
  {
    title: "The future of construction staffing: trends for 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/blog/post-2.avif",
  },
];

export default function Posts() {
  return (
    <>
      <section className={styles.blog}>
        <div className={styles.categories}>
          <button className={`${styles.category} ${styles.active}`}>All</button>
          <button className={styles.category}>Construction</button>
          <button className={styles.category}>Remote work</button>
          <button className={styles.category}>Architecture</button>
          <button className={styles.category}>News</button>
        </div>
      </section>

      <section className={styles.posts}>
        {posts.map((post, index) => (
          <div className={styles.post} key={index}>
            <img src={post.image} alt={`Post ${index}`} />

            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>

              <p className={styles.postDescription}>{post.description}</p>

              <div className={styles.postLinkRead}>
                <a href="#" className={styles.postLink}>
                  Read more
                </a>

                <ChevronRight />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
