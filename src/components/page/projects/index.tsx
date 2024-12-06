import { Link, Outlet} from "react-router-dom";
function Project() {
  return (
    <>
      <div>
        <button>
          <Link to="projects-list">danh sach</Link>
        </button>
        <button>
          <Link to="add">them</Link>
        </button>
      </div>
      <Outlet/>
      {/* <Routes>
        <Route path="projects-list" element={<ProjectList />} />
        <Route path=":projectId" element={<ProjectItem />} />
        <Route path="add" element={<ProjectAdd />} />
      </Routes> */}
    </>
  );
}
export default Project;
