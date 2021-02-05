import { React } from 'react';
import styles from './FellowCard.module.css';
import FeatherIcon from 'feather-icons-react';
// import { MDBIcon } from "mdbreact";

const FellowCard = ({ fellow }) => {
  const { name, bio, headshot } = fellow;
  // const [hover, setHover] = useState(false)

  return (
    <div className={styles.parentCard}>
      <div className={styles.card}>
        <div className={styles.backdrop}>
          <div lg='3' md='6' className='mb-lg-0 mb-5'>
            <img src={headshot} className={styles.avatars}></img>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.tag}>
              Team Member <FeatherIcon icon='shield' size='16' fill='black' />
            </p>
            <p className={styles.bio}>{bio}</p>
          </div>
        </div>
      </div>
      <div className={styles.linksParent}>
        <div className={styles.links}>
          <FeatherIcon icon='github' size='32' />
          <FeatherIcon icon='linkedin' size='32' />
          <FeatherIcon icon='link' size='32' />
        </div>
      </div>
    </div>
  );
};

export default FellowCard;
