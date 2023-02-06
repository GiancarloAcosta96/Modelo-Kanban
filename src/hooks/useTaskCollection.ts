import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Pendiente: [
      {
        id: uuidv4(),
        column: ColumnType.PENDIENTE,
        title: 'Tarea 1',
        color: 'blue.300',
      },
    ],
    'En Ejecucion': [
      {
        id: uuidv4(),
        column: ColumnType.EN_EJECUCION,
        title: 'Tarea 2',
        color: 'yellow.300',
      },
    ],
    Completado: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETADO,
        title: 'Tarea 3',
        color: 'red.300',
      },
    ],
  });
}

export default useTaskCollection;
