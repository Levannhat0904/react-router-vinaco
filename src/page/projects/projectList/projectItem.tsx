import { useParams } from "react-router-dom";
// type Params = Record<string, string | undefined>;
type Params = {
  projectId: string; // Định nghĩa rõ tham số id
};
function ProjectItem() {
  const param = useParams<Params>();
  console.log(">>>>>>>>param: ", param);
  return (
    <div>
      <h2>Page Item - {param.projectId}</h2>
    </div>
  );
}
export default ProjectItem;
