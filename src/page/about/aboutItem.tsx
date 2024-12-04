import { useParams } from "react-router-dom";
// type Params = Record<string, string | undefined>;
type Params = {
  id: string; // Định nghĩa rõ tham số id
};
function AboutItem() {
  const param = useParams<Params>();
  console.log(">>>>>>>>param: ", param);
  return (
    <div>
      <h2>Page Item - {param.id}</h2>
    </div>
  );
}
export default AboutItem;
