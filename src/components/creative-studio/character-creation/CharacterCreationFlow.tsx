import React, { useState } from "react";
import CreateCharacterIntro from "./CreateCharacterIntro";
import CreateCharacterForm from "./CreateCharacterForm";
import CharacterPrivacyModal from "./CharacterPrivacyModal";
import CharacterRevealCard from "./CharacterRevealCard";
import type { CharacterFormData } from "./CreateCharacterForm";

type Step = "intro" | "form" | "privacy" | "reveal";

interface Props {
  onBack: () => void;
  onComplete: (data: CharacterFormData) => void;
}

const CharacterCreationFlow: React.FC<Props> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState<Step>("intro");
  const [charName, setCharName] = useState("");
  const [formData, setFormData] = useState<CharacterFormData | null>(null);

  const handleBack = () => {
    if (step === "form") setStep("intro");
    else onBack();
  };

  if (step === "intro") {
    return (
      <CreateCharacterIntro
        onBack={onBack}
        onLetsGo={(name) => { setCharName(name); setStep("form"); }}
      />
    );
  }

  if (step === "form" || step === "privacy") {
    return (
      <div style={{ position: "relative" }}>
        <CreateCharacterForm
          characterName={charName}
          onBack={handleBack}
          onSubmit={(data) => { setFormData(data); setStep("privacy"); }}
        />
        {step === "privacy" && (
          <CharacterPrivacyModal
            onGoBack={() => setStep("form")}
            onSave={() => setStep("reveal")}
          />
        )}
      </div>
    );
  }

  if (step === "reveal" && formData) {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ opacity: 0.25, pointerEvents: "none", userSelect: "none" }}>
          <CreateCharacterForm
            characterName={charName}
            onBack={() => {}}
            onSubmit={() => {}}
          />
        </div>
        <CharacterRevealCard
          characterName={formData.name || charName}
          tagline={formData.tagline}
          origin={formData.origin}
          coverImage={formData.coverImage}
          onClose={() => onComplete(formData)}
        />
      </div>
    );
  }

  return null;
};

export default CharacterCreationFlow;