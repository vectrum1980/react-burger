import styles from './modal-overlay.module.css';

const ModalOverlay: React.FunctionComponent<{ onClick: () => void; }> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />
}

export default ModalOverlay;
