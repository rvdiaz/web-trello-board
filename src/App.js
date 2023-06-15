import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BaseBoard } from "./components/container/BaseBoard";
import { List } from "./components/ui/List";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BaseBoard>
        <List/>
      </BaseBoard>
    </DndProvider>
  );
}

export default App;
