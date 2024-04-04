import { useState } from "react";
import { useSelector } from "react-redux";

function SectionComment() {
  const [searchQuery, setSearchQuery] = useState("");
  const currentProfile = useSelector(state => state.profile.user);

  return (
    <div>
      <div className="d-flex align-items-center pb-2">
        <img
          className="me-2 rounded-circle object-fit-cover cp"
          src={
            currentProfile !== null
              ? currentProfile.image
              : "https://openclipart.org/download/247319/abstract-user-flat-3.svg"
          }
          alt="Nome Utente"
          width={40}
          height={40}
        />
        <div className="d-flex justify-content-between align-items-center add-comm-search-input w-100">
          <input
            type="text"
            placeholder="Aggiungi un commento..."
            className="textarea-focus w-75"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <div>
            <img src="/smile.svg" alt="" className="me-3" />
            <img src="/multimedia.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionComment;
