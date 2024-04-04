function Comment(props) {
  return (
    <div className="d-flex mt-2 px-2">
      <div className="pt-2">
        <img
          src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
          alt=""
          width={30}
          height={30}
          className="cp me-2"
        />
      </div>
      <div className=" w-100">
        <div className="d-flex cp p-2 bg-comment">
          <div>
            <p className="small fw-bold line-heigh-name cp">Name</p>
            <p className="opacity-75 line-heigh">Professione</p>
            <p className="mt-2 small">Commento</p>
          </div>
        </div>
        <div className="opacity-75 cp mt-2 line-heigh fw-bold">Consiglia | Rispondi</div>
      </div>
    </div>
  );
}
export default Comment;
