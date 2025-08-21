import { motion } from "framer-motion";
import type { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import { useTranslation } from "react-i18next";

type NewNotePropos = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNotePropos) {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">{t("NewNote.title")}</h1>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </motion.div>
    </>
  );
}
