import { useState } from 'react'

import { Circle } from './components/Circle';
import { Button } from './components/Button';

interface allCirclesProps {
  clientX: number;
  clientY: number
}

function App() {
  const [allCircles, setAllCircles] = useState<allCirclesProps[]>([])
  const [undoCircle, setUndoCircle] = useState<allCirclesProps[]>([])

  const gettingPlaceClick = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event
    setAllCircles([...allCircles, { clientX, clientY }])
  }

  const handleUndoCircle = () => {
    const newClickedPoint = [...allCircles]
    const undoPoint = newClickedPoint.pop()
    setAllCircles(newClickedPoint)
    if (!undoPoint) return
    setUndoCircle([...undoCircle, undoPoint])

  }

  const handleRedo = () => {
    const newUndoCircles = [...undoCircle]
    const redoCircle = newUndoCircles.pop()
    setUndoCircle(newUndoCircles)
    if (!redoCircle) return
    setAllCircles([...allCircles, redoCircle])
  }

  return (
    <main>
      <div className="absolute left-1/2 translate-x-[-50%] mt-4 flex gap-5">
        <Button
          title="Undo"
          handleFunction={handleUndoCircle}
          allCircles={allCircles}
        />
        <Button
          title="Redo"
          handleFunction={handleRedo}
          allCircles={undoCircle}
        />
      </div>

      <div className="w-full h-screen" onClick={gettingPlaceClick}>
        {
          allCircles.map((clickedPoint, index) => (
            <Circle
              key={index}
              positionX={clickedPoint.clientX}
              positionY={clickedPoint.clientY}
            />
          ))
        }
      </div>
    </main>
  )
}

export default App
