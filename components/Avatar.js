function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile picture"
      className="h-10 rounded-full"
    />
  );
}

export default Avatar;
