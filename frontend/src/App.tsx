
import { Board } from "../components/boardCircadians/Board"

import { LayoutPhase } from "../components/boardCircadians/phaseStage/LayoutPhase"
import { PlayerStage } from "../components/boardCircadians/phaseStage/PlayerStage"
import { PhaseStage } from "../components/boardCircadians/phaseStage/PhaseStage"
import { EndStage } from "../components/boardCircadians/phaseStage/EndStage"

import { Map } from "../components/boardCircadians/map/Map"





function App() {




  return (
    <Board>
      <LayoutPhase>
        <PlayerStage />
        <PhaseStage />
        <PhaseStage />
        <PhaseStage />
        <PhaseStage />
        <EndStage />
        <EndStage />
        <EndStage />
      </LayoutPhase>
      <Map />
    </Board>
  )
}

export default App
