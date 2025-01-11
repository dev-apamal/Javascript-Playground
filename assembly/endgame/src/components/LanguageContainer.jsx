export default function LanguageContainer(props) {
  return (
    <div className="languagesContainer flex flex-wrap justify-center items-center gap-2">
      {props.languages}
    </div>
  );
}
