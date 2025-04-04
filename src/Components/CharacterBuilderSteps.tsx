import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useCharacterContext } from "../Context/CharacterContext"; // Import the context
import ArchetypeModal from "./Modals/ArchetypeModal";
import { Character, Traits } from "../Models/Character";
import TraitIncreaseModal from "./Modals/TraitIncreaseModal"; // Import the TraitIncreaseModal
import StyleSelectionModal from "./Modals/StyleSelectionModal";
import DisadvantageTraitModal from "./Modals/DisadvantageTraitModal";
import InvocationSelectionModal from "./Modals/InvocationsSelectionModal";

interface CharacterBuilderStepsProps {
  character: Character; // Accepting a character as a prop
}

const FirstStep = () => {
  const [openModal, setOpenModal] = useState(false);
  const { selectedCharacter } = useCharacterContext();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} fullWidth>
        {selectedCharacter?.archetypes?.some(
          (archetype) => archetype.rank === 0
        )
          ? selectedCharacter.archetypes.find(
              (archetype) => archetype.rank === 0
            )?.archetype.name
          : "Choose Archetype"}
      </Button>

      <ArchetypeModal open={openModal} onClose={handleClose} rank={0} />
    </div>
  );
};

const TraitStep = () => {
  const [openTraitModal, setOpenTraitModal] = useState(false);
  const { selectedCharacter } = useCharacterContext();

  const handleOpenTraitModal = () => setOpenTraitModal(true);
  const handleCloseTraitModal = () => setOpenTraitModal(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpenTraitModal}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {selectedCharacter?.bonusTrait
          ? selectedCharacter.bonusTrait
          : "Increase Trait (from Archetype Bonus)"}
      </Button>
      {/* Trait Increase Modal */}
      {selectedCharacter?.archetypes && (
        <TraitIncreaseModal
          open={openTraitModal}
          onClose={handleCloseTraitModal}
          rank={0}
        />
      )}
    </div>
  );
};

// New Step for selecting Style
const StyleStep = () => {
  const { selectedCharacter } = useCharacterContext();
  const [openStyleModal, setOpenStyleModal] = useState(false);

  const handleOpenStyleModal = () => setOpenStyleModal(true);
  const handleCloseStyleModal = () => setOpenStyleModal(false);

  let initialArchetype = selectedCharacter?.archetypes?.find(
    (archetype) => archetype.rank === 0
  );

  // // Check if the archetype type is 'martial'
  // if (initialArchetype?.type !== "martial") {
  //   return null; // Don't render the StyleStep if it's not 'martial'
  // }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpenStyleModal}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Choose Style
      </Button>

      <InvocationSelectionModal
        open={openStyleModal}
        onClose={handleCloseStyleModal}
        rank={0}
      />
    </div>
  );
};

const DisadvantageStep = () => {
  const { selectedCharacter } = useCharacterContext();
  const [openDisadvantageTraitModal, setOpenDisadvantageTraitModal] =
    useState(false);

  const handleOpenDisadvantageTraitModal = () =>
    setOpenDisadvantageTraitModal(true);
  const handleCloseDisadvantageTraitModal = () =>
    setOpenDisadvantageTraitModal(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpenDisadvantageTraitModal}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Choose Trait to Decrease
      </Button>

      <DisadvantageTraitModal
        open={openDisadvantageTraitModal}
        onClose={handleCloseDisadvantageTraitModal}
      />
    </div>
  );
};

const steps = [
  {
    name: "Choose Archetype",
    component: FirstStep,
  },
  {
    name: "Choose Style",
    component: StyleStep, // Add StyleStep here
  },
  {
    name: "Choose Bonus Trait",
    component: TraitStep,
  },
  {
    name: "Choose Trait to Decrease",
    component: DisadvantageStep,
  },
];

const CharacterBuilderSteps: React.FC<CharacterBuilderStepsProps> = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 1 }}>
      <Grid size={12}>
        {/* Scrollable container for the steps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // height: 400, // Adjust the height to suit your design
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#f5f5f5", // Card background color
                padding: 2,
                borderRadius: 2,
                mb: 2, // Adds space between cards
                boxShadow: 2, // Optional shadow to make the card stand out
              }}
            >
              <Typography variant="h6" color="text.primary">
                {step.name}
              </Typography>
              <step.component />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterBuilderSteps;
