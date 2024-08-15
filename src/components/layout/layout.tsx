import { Outlet } from "react-router-dom";
import { Container, Content, Sidebar } from "rsuite";
import { Sidebar as LocalSidebar } from "../sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      {/* <Header>Header</Header> */}
      <Container className="h-screen">
        <Sidebar>
          <LocalSidebar />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Container>
      {/* <Footer>Footer</Footer> */}
    </>
  );
}
