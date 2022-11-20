function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile picture"
      className={`h-10 rounded-full ${className}`}
    />
  );
}

export default Avatar;
