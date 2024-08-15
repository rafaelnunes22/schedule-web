import { Nav, Sidenav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";

export function Sidebar() {
  return (
    <Sidenav className="h-full py-10">
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<DashboardIcon />} href="/management">
            Início
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<MagicIcon />}>
            Agendamentos
          </Nav.Item>
          <Nav.Item eventKey="3" icon={<GroupIcon />}>
            Clientes
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
}
