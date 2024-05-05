import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <div className={css.contactItem}>
            <FaUser />
            <p>{name}</p>
          </div>

          <div className={css.contactItem}>
            <FcPhoneAndroid />
            <p>{number}</p>
          </div>
        </div>
        <button
          className={css.formBtn}
          type="submit"
          onClick={() => handleDeleteContact(id)}
          id={id}
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default Contact;
