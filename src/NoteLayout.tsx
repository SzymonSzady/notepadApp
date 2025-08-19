import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import type { Note } from "./App";

type NoteLayoutPropos = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutPropos) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
}

export function useNote() {
  return useOutletContext<Note>();
}
