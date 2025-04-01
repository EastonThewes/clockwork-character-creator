import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useCharacterContext } from "../Context/CharacterContext"; // Import the context
import ArchetypeModal from "./Modals/ArchetypeModal";
import { Character, Traits } from "../Models/Character";
import { Archetype } from "../Models/ArchetypeModel";
import TraitIncreaseModal from "./Modals/TraitIncreaseModal"; // Import the TraitIncreaseModal

interface CharacterBuilderStepsProps {
  character: Character; // Accepting a character as a prop
}

const FirstStep = ({
  onArchetypeChosen,
}: {
  onArchetypeChosen: () => void;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { selectedCharacter } = useCharacterContext();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} fullWidth>
        {selectedCharacter?.archetypes[0]?.name || "Choose Archetype"}
      </Button>

      <ArchetypeModal open={openModal} onClose={handleClose} rank={0} />
    </div>
  );
};

const TraitStep = ({ onTraitChosen }: { onTraitChosen: () => void }) => {
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
        {/* Find the key with value 1 and display the key (trait name) */}
        {selectedCharacter?.archetypeTraitModifiers?.[0] &&
        Object.entries(selectedCharacter.archetypeTraitModifiers[0]).find(
          ([_, value]) => value === 1
        )
          ? Object.entries(selectedCharacter.archetypeTraitModifiers[0]).find(
              ([_, value]) => value === 1
            )?.[0] // Display the key (trait name)
          : "Increase Trait (from Archetype Bonus)"}
      </Button>
      {/* Trait Increase Modal */}
      {selectedCharacter?.archetypes && (
        <TraitIncreaseModal
          open={openTraitModal}
          onClose={handleCloseTraitModal}
          archetype={selectedCharacter.archetypes[0]} // Assuming we are using the first archetype
          rank={0}
        />
      )}
    </div>
  );
};

// New Step for selecting Style
const StyleStep = ({ onStyleChosen }: { onStyleChosen: () => void }) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [openStyleModal, setOpenStyleModal] = useState(false);

  const handleOpenStyleModal = () => setOpenStyleModal(true);
  const handleCloseStyleModal = () => setOpenStyleModal(false);

  const handleStyleSelect = (style: any) => {
    // Update the selected style in the character
    const updatedCharacter = { ...selectedCharacter };
    updatedCharacter. = style; // Assuming you have this property
    updateCharacter(updatedCharacter);
    onStyleChosen(); // Move to the next step (optional)
  };

  if (selectedCharacter?.archetypes[0].type !== "martial") {
    return null; // If not a martial type or no styles, return null (skip this step)
  }

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

      <StyleSelectionModal
        open={openStyleModal}
        onClose={handleCloseStyleModal}
        styles={selectedCharacter.archetypes[0].styles}
        onStyleSelect={handleStyleSelect}
      />
    </div>
  );
};

const steps = [
  {
    name: "Step 1: Choose Archetype",
    component: FirstStep,
  },
  {
    name: "Step 2: Choose Traits",
    component: TraitStep,
  },
  {
    name: "Step 3: Choose Style",
    component: StyleStep, // Add StyleStep here
  },
];

const CharacterBuilderSteps: React.FC<CharacterBuilderStepsProps> = ({
  character,
}) => {
  return (
    <Grid container spacing={2} sx={{ padding: 1 }}>
      <Grid size={12}>
        {/* Scrollable container for the steps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 400, // Adjust the height to suit your design
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
              <step.component
                onArchetypeChosen={() => {}}
                onTraitChosen={() => {}}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterBuilderSteps;
