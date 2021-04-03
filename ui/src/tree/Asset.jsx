const Asset = ({title, mimetype}) => {
  return (
    <div>
      {`${title}.${mimetype}`}
    </div>
  );
}

export default Asset;