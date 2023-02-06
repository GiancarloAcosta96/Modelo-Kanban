import {} from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';



function App() {
  return (
    <main>
      <Heading
      textAlign={"center"}
      >
        Mi tablero Kanban
      </Heading>
      
      <DndProvider backend={HTML5Backend}>
            <Column column={ColumnType.PENDIENTE} />
            <Column column={ColumnType.EN_EJECUCION} />
            <Column column={ColumnType.COMPLETADO} />
      </DndProvider>
    </main>
  );
}

export default App;
