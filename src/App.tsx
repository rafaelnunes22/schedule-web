import "./App.css";
import "rsuite/dist/rsuite.min.css";
import MoreIcon from "@rsuite/icons/legacy/More";
import PlusIcon from "@rsuite/icons/Plus";
import {
  Table,
  VStack,
  Whisper,
  IconButton,
  Popover,
  Dropdown,
  Panel,
  Content,
  Container,
} from "rsuite";
import { HeaderCell, Cell, Column } from "rsuite-table";

const data = [
  { name: "Rafael de Souza Nunes", time: "09:00", status: "Finalizada" },
  { name: "Mariana Pires Neukamp", time: "10:00", status: "Finalizada" },
  { name: "Wilson Fonseca de Souza", time: "11:00", status: "Finalizada" },
  { name: "Eli Ribeiro de Souza", time: "13:00", status: "Pendente" },
  { name: "Vanderleia de Souza Nunes", time: "14:00", status: "Cancelada" },
  { name: "Luciano Ribas Nunes", time: "15:00", status: "Pendente" },
  { name: "Manuela de Souza Nunes", time: "16:00", status: "Pendente" },
  { name: "Lucas de Vitt Teles", time: "17:00", status: "Pendente" },
  { name: "Corey Taylor", time: "18:00", status: "Pendente" },
  { name: "Akira Toriama", time: "19:00", status: "Pendente" },
  { name: "Kentaro Miura", time: "20:00", status: "Pendente" },
];

const renderMenu = (
  { onClose, left, top, className }: any,
  ref: React.Ref<HTMLDivElement>
) => {
  const handleSelect = (eventKey: string | undefined) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={1}>Finalizar</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Cancelar</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const ActionCell = ({ rowData, dataKey, ...props }: any) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper
        placement="autoVerticalStart"
        trigger="click"
        speaker={renderMenu}
      >
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};

function App() {
  return (
    <Container className="flex flex-col items-center">
      <Content className="mt-10">
        <VStack alignItems="flex-end">
          <IconButton appearance="primary" icon={<PlusIcon />}>
            Adicionar agendamento
          </IconButton>
        </VStack>
        <Panel header="Hoje">
          <Table
            id="table"
            className="self-center"
            width={1280}
            data={data}
            height={600}
          >
            <Column width={300}>
              <HeaderCell>Nome</HeaderCell>
              <Cell align="start" dataKey="name" />
            </Column>
            <Column width={300}>
              <HeaderCell>Horário</HeaderCell>
              <Cell dataKey="time" />
            </Column>
            <Column width={300}>
              <HeaderCell>Status</HeaderCell>
              <Cell dataKey="status" />
            </Column>
            <Column width={120}>
              <HeaderCell>
                <MoreIcon />
              </HeaderCell>
              <ActionCell dataKey="id" />
            </Column>
          </Table>
        </Panel>
      </Content>
    </Container>
  );
}

export default App;
