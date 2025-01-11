export default function Language(props) {
  const styles = `text-white py-1 px-2 rounded ${props.color}`;
  return <div className={styles}>{props.value}</div>;
}
