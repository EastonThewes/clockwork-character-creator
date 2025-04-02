import { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "../Models/Character";

interface CharacterContextType {
  characters: Character[];
  selectedCharacter: Character | null; // Add selectedCharacter to the context
  addCharacter: (char: Character) => void;
  loadCharacters: (chars: Character[]) => void;
  updateCharacter: (updatedCharacter: Character) => void;
  setSelectedCharacter: (character: Character | null) => void; // Function to set the selected character
}

// Create the context with an initial state that includes the selectedCharacter
const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>(() => {
    const savedCharacters = localStorage.getItem("characters");
    return savedCharacters ? JSON.parse(savedCharacters) : [];
  });

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  ); // State for the selected character

  // Add new character
  const addCharacter = (char: Character) => {
    // Generate a unique ID if not already provided
    const characterWithId = {
      ...char,
      id: char.id || crypto.randomUUID(), // If no id is provided, generate one
    };

    setSelectedCharacter(characterWithId);
    // Check if the character already exists by id
    const existingCharacterIndex = characters.findIndex(
      (existingChar) => existingChar.id === characterWithId.id
    );

    // If the character doesn't exist, add it
    if (existingCharacterIndex === -1) {
      const updatedCharacters = [...characters, characterWithId];
      setCharacters(updatedCharacters);
      localStorage.setItem("characters", JSON.stringify(updatedCharacters));
    } else {
      console.log("Character with this ID already exists.");
    }
  };

  // Load characters from an array
  const loadCharacters = (chars: Character[]) => {
    setCharacters(chars);
    localStorage.setItem("characters", JSON.stringify(chars));
  };

  // Update an existing character
  const updateCharacter = (updatedCharacter: Character) => {
    // Find the character by ID
    const characterToUpdate = characters.find(
      (char) => char.id === updatedCharacter.id
    );

    if (characterToUpdate) {
      // If character is found, update it
      const updatedCharacters = characters.map((char) =>
        char.id === updatedCharacter.id ? updatedCharacter : char
      );

      setCharacters(updatedCharacters);
      localStorage.setItem("characters", JSON.stringify(updatedCharacters));
    } else {
      console.log("Character not found");
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectedCharacter, // Expose the selectedCharacter
        addCharacter,
        loadCharacters,
        updateCharacter,
        setSelectedCharacter, // Expose the setSelectedCharacter function
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

// Custom hook to use the context
export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider"
    );
  }
  return context;
};
